import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("content entries use unique primary keywords per locale", async () => {
  for (const locale of ["it", "en"]) {
    const source = await read("content/" + locale + "/index.ts");
    const keywords = [...source.matchAll(/primaryKeyword:\s*"([^"]+)"/g)].map((match) => match[1].toLowerCase());
    assert.ok(keywords.length >= 12, locale + " has at least 12 mapped pages");
    assert.equal(new Set(keywords).size, keywords.length, locale + " primary keywords are unique");
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

test("shared validation form separates anonymous research from optional contact", async () => {
  const source = await read("components/interest-form.tsx");
  assert.match(source, /name="ageBand"/);
  assert.match(source, /name="originArea"/);
  assert.match(source, /name="vehicleType"/);
  assert.match(source, /name="stayLocation"/);
  assert.match(source, /name="licensedOverFiveYears"/);
  assert.match(source, /name="wantsContact"/);
  assert.match(source, /wantsContact &&/);
  assert.match(source, /name="contactConsent"/);
  assert.match(source, /name="privacyNoticeAcknowledged"/);
  assert.match(source, /name="notes" maxLength=\{500\}/);
  assert.ok(source.includes('href={"/" + locale + "/privacy"}'));
  assert.doesNotMatch(source, /name="name"|name="age"|privacyConsent|defaultChecked/);
  assert.doesNotMatch(source, /localStorage/);
});
test("brand and active fleet are consistent across customer surfaces", async () => {
  const paths = [
    "content/it/index.ts",
    "content/en/index.ts",
    "lib/config/business.ts",
    "app/manifest.ts",
    "app/opengraph-image.tsx",
    "app/[locale]/layout.tsx",
    "app/[locale]/[[...slug]]/page.tsx",
    "components/site-footer.tsx",
  ];
  const sources = await Promise.all(paths.map(read));
  const combined = sources.join("\n");

  assert.match(combined, /Bosa in Scooter/);
  assert.match(combined, /50cc/);
  assert.match(combined, /125cc/);
  assert.doesNotMatch(combined, /Service being prepared|Servizio in fase di attivazione|Scooter Bosa/);
});

test("provisional pricing, mileage and delivery terms are centralized and rendered", async () => {
  const config = await read("lib/config/business.ts");
  const page = await read("app/[locale]/[[...slug]]/page.tsx");

  for (const rate of [
    /fullDay: 59, sevenDays: 349/,
    /fullDay: 66, sevenDays: 399/,
    /fullDay: 74, sevenDays: 449/,
    /fullDay: 49, sevenDays: 289/,
  ]) assert.match(config, rate);

  assert.match(config, /fullDay: 150, sevenDays: 900, extraPerKm: 0\.25/);
  assert.doesNotMatch(config, /halfDay|halfDaySlots/);
  assert.match(config, /securityDeposit: 500/);
  assert.match(config, /oneWay: \{ min: 20, max: 25 \}/);
  assert.match(config, /roundTrip: \{ min: 35, max: 45 \}/);
  assert.match(page, /offer\.seasonalRates\.map/);
  assert.match(page, /Prices per scooter/);
  assert.match(page, /Consegna e ritiro/);
});

test("localized content states provisional commercial and rental requirements", async () => {
  const it = await read("content/it/index.ts");
  const en = await read("content/en/index.ts");

  assert.match(it, /provvisor/i);
  assert.match(en, /provisional/i);
  assert.match(it, /0,25 €\/km/);
  assert.match(en, /€0\.25\/km/);
  assert.match(it, /carta d’identità o passaporto/);
  assert.match(en, /passport or identity card/);
  assert.match(it, /pieno-pieno/);
  assert.match(en, /full-to-full/);
  assert.match(it, /due caschi/);
  assert.match(en, /two helmets/i);
});

test("availability API returns language-aware customer messages", async () => {
  const source = await read("app/api\/availability/route.ts");
  assert.match(source, /data\.language !== "en"/);
  assert.match(source, /Completa tutti i campi obbligatori/);
  assert.match(source, /Please complete all required fields/);
});

test("UI refinements and centralized image registry are present", async () => {
  const css = await read("app/globals.css");
  const page = await read("app/[locale]/[[...slug]]/page.tsx");
  const images = await read("lib/config/images.ts");
  const it = await read("content/it/index.ts");
  const en = await read("content/en/index.ts");

  assert.match(css, /text-align:left !important/);
  assert.match(css, /checkbox input\[type="checkbox"\]/);
  assert.match(css, /--brand-gradient: linear-gradient\(135deg, #7c3aed.*#f97316/);
  assert.match(css, /background:#f4edff/);
  assert.match(page, /getPageImage/);
  assert.match(images, /siteImagePaths/);
  assert.match(images, /homeHero/);
  assert.match(images, /bosaAlgheroRoute/);
  assert.doesNotMatch(page + it + en, /updatedAt|Aggiornato il|Updated/);
});

test("minimum rental is 24 hours with no half-day option", async () => {
  const sources = await Promise.all([
    read("lib/config/business.ts"),
    read("app/[locale]/[[...slug]]/page.tsx"),
    read("content/it/index.ts"),
    read("content/en/index.ts"),
  ]);
  const combined = sources.join("\n");

  assert.doesNotMatch(combined, /halfDay|half day|semigiornata/i);
  assert.match(combined, /150 km/);
  assert.match(combined, /quattro ore/);
  assert.match(combined, /four hours/);
});
test("service location list contains every supported area", async () => {
  const source = await read("lib/leads/options.ts");
  for (const location of [
    "Bosa",
    "Bosa Marina",
    "Suni",
    "Magomadas",
    "Tresnuraghes",
    "Porto Alabe",
    "Turas",
    "Santa Maria del Mare",
    "Sagama",
    "Tinnura",
    "Flussio",
    "Montresta",
    "Modolo",
    "Sabba Drucche",
  ]) assert.match(source, new RegExp('"' + location + '"'));
});

test("market research API minimises fields and applies a 24-month review", async () => {
  const api = await read("app/api/availability/route.ts");
  const repository = await read("lib/leads/repository.ts");

  assert.match(api, /ageBands/);
  assert.match(api, /originAreas/);
  assert.match(api, /contactRequested/);
  assert.match(api + repository, /researchPurpose/);
  assert.match(api + repository, /reviewAfter/);
  assert.match(api, /getUTCFullYear\(\) \+ 2/);
  assert.match(api + repository, /notes\?: string/);
  assert.match(api, /notes\.length > 500/);
  assert.doesNotMatch(api + repository, /name: string|age: number|deleteAfter/);
  assert.doesNotMatch(api + repository, /people|phone|accommodation|marketingConsent/);
});

test("privacy pages disclose providers, rights and research retention", async () => {
  const it = await read("content/it/index.ts");
  const en = await read("content/en/index.ts");
  const combined = it + en;

  assert.match(it, /slug: "privacy"/);
  assert.match(en, /slug: "privacy"/);
  assert.match(combined, /Vercel/);
  assert.match(combined, /Neon/);
  assert.match(combined, /PostHog/);
  assert.match(combined, /24 mesi|24 months/);
  assert.match(combined, /aggregate|aggregate data/);
  assert.match(combined, /Garante|Italian Data Protection Authority/);
});