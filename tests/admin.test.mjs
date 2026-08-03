import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import {
  evaluateAdminAccess,
  isDashboardEnabled,
  MAX_PAGE_SIZE,
  normalizePagination,
} from "../lib/admin/policy.mjs";
import {
  chooseTimeGranularity,
  fillTimeSeries,
} from "../lib/admin/series.mjs";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

async function routeFiles(directory) {
  const entries = await readdir(new URL(directory, root), { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = directory + entry.name;
    return entry.isDirectory() ? routeFiles(path + "/") : [path];
  }));
  return nested.flat();
}

test("feature gate is fail-closed and only exact true enables it", () => {
  assert.equal(isDashboardEnabled(undefined), false);
  assert.equal(isDashboardEnabled("false"), false);
  assert.equal(isDashboardEnabled("TRUE"), false);
  assert.equal(isDashboardEnabled("true"), true);
});

test("admin access redirects anonymous users, denies other accounts and allows configured GitHub id", () => {
  const base = { enabled: true, adminGithubUserId: "123" };
  assert.equal(evaluateAdminAccess({ ...base, sessionUserId: null, account: null }), "unauthenticated");
  assert.equal(evaluateAdminAccess({
    ...base,
    sessionUserId: "user-1",
    account: { providerId: "github", accountId: "999" },
  }), "denied");
  assert.equal(evaluateAdminAccess({
    ...base,
    sessionUserId: "user-1",
    account: { providerId: "google", accountId: "123" },
  }), "denied");
  assert.equal(evaluateAdminAccess({
    ...base,
    sessionUserId: "user-1",
    account: { providerId: "github", accountId: "123" },
  }), "allowed");
  assert.equal(evaluateAdminAccess({
    ...base,
    sessionUserId: "user-1",
    account: { providerId: "github", accountId: "123" },
    enabled: false,
  }), "disabled");
});

test("pagination defaults invalid values and enforces the maximum page size", () => {
  assert.deepEqual(normalizePagination(undefined, undefined), { page: 1, pageSize: 25 });
  assert.deepEqual(normalizePagination("-2", "0"), { page: 1, pageSize: 25 });
  assert.deepEqual(normalizePagination("3", "10"), { page: 3, pageSize: 10 });
  assert.deepEqual(normalizePagination("2", "999"), { page: 2, pageSize: MAX_PAGE_SIZE });
});

test("time series covers the complete available range and fills empty buckets", () => {
  assert.equal(chooseTimeGranularity("2026-01-01", "2026-05-01"), "week");
  assert.equal(chooseTimeGranularity("2025-01-01", "2026-05-01"), "month");
  const points = fillTimeSeries("2026-01-03", "2026-01-20", "week", [
    { bucket: "2025-12-29", vehicleType: "50cc", count: 2 },
    { bucket: "2026-01-12", vehicleType: "125cc", count: 1 },
  ]);
  assert.equal(points.length, 4);
  assert.deepEqual(points[1], { bucket: "2026-01-05", count50cc: 0, count125cc: 0 });
  assert.deepEqual(points.at(-1), { bucket: "2026-01-19", count50cc: 0, count125cc: 0 });
});

test("Better Auth validates a database session and the persisted GitHub account", async () => {
  const auth = await read("lib/admin/auth.ts");
  const access = await read("lib/admin/access.ts");
  const proxy = await read("proxy.ts");

  assert.match(auth, /betterAuth/);
  assert.match(auth, /disableImplicitSignUp: true/);
  assert.match(auth, /String\(profile\.id\).*adminGithubUserId/s);
  assert.match(auth, /account\.providerId !== "github"/);
  assert.match(auth, /encryptOAuthTokens: true/);
  assert.match(auth, /accountLinking:\s*\{\s*enabled: false/);
  assert.match(auth, /httpOnly: true/);
  assert.match(auth, /secure: process\.env\.NODE_ENV === "production"/);
  assert.match(auth, /sameSite: "lax"/);
  assert.match(access, /api\.getSession/);
  assert.match(access, /adminAccount\.accountId/);
  assert.match(access, /redirect\("\/admin\/login"\)/);
  assert.match(proxy, /status: 403/);
  assert.match(proxy, /status: 404/);
});

test("response query and page never expose contact email while contacts do", async () => {
  const responses = await Promise.all([
    read("lib/admin/responses-repository.ts"),
    read("app/admin/(protected)/responses/page.tsx"),
  ]).then((sources) => sources.join("\n"));
  const contacts = await Promise.all([
    read("lib/admin/contacts-repository.ts"),
    read("app/admin/(protected)/contacts/page.tsx"),
  ]).then((sources) => sources.join("\n"));

  assert.doesNotMatch(responses, /email/i);
  assert.match(responses, /hasNotes/);
  assert.match(responses, /hasContact/);
  assert.match(contacts, /contactRequests\.email/);
  assert.match(contacts, /mailto:/);
  assert.doesNotMatch(contacts, /notes/i);
});

test("aggregate queries cover totals, distributions, rolling KPIs and all-history buckets", async () => {
  const repository = await read("lib/admin/dashboard-repository.ts");
  assert.match(repository, /count\(\*\)::int/);
  assert.match(repository, /interval '7 days'/);
  assert.match(repository, /interval '30 days'/);
  assert.match(repository, /groupBy\(researchResponses\.vehicleType\)/);
  assert.match(repository, /groupBy\(researchResponses\.ageBand\)/);
  assert.match(repository, /groupBy\(researchResponses\.originArea\)/);
  assert.match(repository, /groupBy\(researchResponses\.stayLocation\)/);
  assert.match(repository, /min\(.*submittedAt.*\)/);
  assert.match(repository, /max\(.*submittedAt.*\)/);
  assert.match(repository, /date_trunc\('week'/);
  assert.match(repository, /date_trunc\('month'/);
});

test("admin is dynamic, noindex, uncached, absent from sitemap and analytics-free", async () => {
  const layout = await read("app/admin/layout.tsx");
  const proxy = await read("proxy.ts");
  const sitemap = await read("app/sitemap.ts");
  const robots = await read("app/robots.ts");
  const adminFiles = (await routeFiles("app/admin/")).filter((path) => /\.(tsx|ts)$/.test(path));
  const adminSource = (await Promise.all(adminFiles.map(read))).join("\n");

  assert.match(layout, /dynamic = "force-dynamic"/);
  assert.match(layout, /index: false/);
  assert.match(layout, /follow: false/);
  assert.match(proxy, /private, no-store/);
  assert.doesNotMatch(sitemap, /admin/);
  assert.match(robots, /"\/admin\/"/);
  assert.doesNotMatch(adminSource, /analytics|\btrack\(/);
});

test("no public API exposes administrative data", async () => {
  const files = (await routeFiles("app/api/")).filter((path) => path.endsWith("route.ts")).sort();
  assert.deepEqual(files, [
    "app/api/auth/[...all]/route.ts",
    "app/api/availability/route.ts",
  ]);
  const sources = (await Promise.all(files.map(read))).join("\n");
  assert.doesNotMatch(sources, /dashboard-repository|responses-repository|contacts-repository/);
});

test("admin data repositories are read-only and every entry point requires authorization", async () => {
  const repositories = await Promise.all([
    read("lib/admin/dashboard-repository.ts"),
    read("lib/admin/responses-repository.ts"),
    read("lib/admin/contacts-repository.ts"),
  ]);
  for (const source of repositories) {
    assert.match(source, /await requireAdminQuery\(\)/);
    assert.doesNotMatch(source, /\.insert\(|\.update\(|\.delete\(/);
  }
});
