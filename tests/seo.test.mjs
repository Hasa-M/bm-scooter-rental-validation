import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("content entries use unique primary keywords per locale", async () => {
  for (const locale of ["it", "en"]) {
    const source = await read(`content/${locale}/index.ts`);
    const keywords = [...source.matchAll(/primaryKeyword:\s*"([^"]+)"/g)].map((match) => match[1].toLowerCase());
    assert.ok(keywords.length >= 12, `${locale} has at least 12 mapped pages`);
    assert.equal(new Set(keywords).size, keywords.length, `${locale} primary keywords are unique`);
  }
});

test("metadata creates canonical, hreflang, descriptions and indexable robots", async () => {
  const metadata = await read("lib/seo/metadata.ts");
  const hreflang = await read("lib/seo/hreflang.ts");
  assert.match(metadata, /description:\s*page\.description/);
  assert.match(metadata, /index:\s*true/);
  assert.match(hreflang, /"it-IT"/);
  assert.match(hreflang, /"en"/);
  assert.match(hreflang, /"x-default"/);
  assert.match(hreflang, /canonical/);
});

test("sitemap contains localized pages and excludes API routes", async () => {
  const source = await read("app/sitemap.ts");
  assert.match(source, /pagesByLocale/);
  assert.doesNotMatch(source, /api\/availability/);
});

test("JSON-LD is serialized safely and uses visible FAQ content", async () => {
  const source = await read("lib/seo/json-ld.tsx");
  assert.match(source, /JSON\.stringify\(data\)/);
  assert.match(source, /page\.faq/);
  assert.match(source, /FAQPage/);
});

test("availability form has labels, required privacy and no localStorage", async () => {
  const source = await read("components/availability-form.tsx");
  assert.match(source, /htmlFor="email"/);
  assert.match(source, /privacyConsent/);
  assert.match(source, /type="checkbox" value="yes" required/);
  assert.doesNotMatch(source, /localStorage/);
});
