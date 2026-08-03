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

test("shared validation form separates research without direct identifiers from optional contact", async () => {
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
    /it: "Bassa stagione \(maggio, giugno, ottobre\)"/,
    /it: "Alta stagione \(luglio, agosto, settembre\)"/,
    /fullDay: 66/,
    /sevenDays: 399/,
    /fullDay: 74/,
    /sevenDays: 449/,
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
test("service locations sort mapped places alphabetically and end with the fallback", async () => {
  const source = await read("lib/leads/options.ts");
  const block = source.match(/export const serviceLocations = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
  const locations = [...block.matchAll(/"([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(locations, [
    "Alghero",
    "Bosa",
    "Bosa Marina",
    "Flussio",
    "Macomer",
    "Magomadas",
    "Modolo",
    "Montresta",
    "Porto Alabe",
    "Sabba Drucche",
    "Sagama",
    "Santa Maria del Mare",
    "Sindia",
    "Suni",
    "Tinnura",
    "Tresnuraghes",
    "Turas",
    "Altre località (non elencate)",
  ]);
});

test("market research API separates payload sections and applies a 24-month review", async () => {
  const api = await read("app/api/availability/route.ts");
  const repository = await read("lib/leads/repository.ts");
  const validation = await read("lib/leads/validation.mjs");
  const researchType = repository.match(/export type ResearchResponse = \{([\s\S]*?)\n\};/)?.[1] ?? "";
  const contactType = repository.match(/export type ContactRequest = \{([\s\S]*?)\n\};/)?.[1] ?? "";

  assert.match(api, /ageBands/);
  assert.match(api, /originAreas/);
  assert.match(api + repository, /researchPurpose/);
  assert.match(api + repository, /reviewAfter/);
  assert.match(api, /getUTCFullYear\(\) \+ 2/);
  assert.match(api, /researchResponse:/);
  assert.match(api, /contactRequest:/);
  assert.match(repository, /type SubmissionPayload/);
  assert.match(contactType, /email: string/);
  assert.doesNotMatch(researchType, /email|consentGrantedAt/);
  assert.match(api + repository, /notes\?: string/);
  assert.match(api, /notes\.length > 500/);
  assert.match(validation, /\^\[\^\\s@\]\+@\[\^\\s@\]\+\\\.\[\^\\s@\]\+\$/);
  assert.match(validation, /\^\\d\{4\}-\\d\{2\}-\\d\{2\}\$/);
  assert.doesNotMatch(api + repository, /name: string|age: number|deleteAfter/);
  assert.doesNotMatch(api + repository, /people|phone|accommodation|marketingConsent|userAgent|fingerprint/);
  assert.doesNotMatch(api + repository, /console\.(log|info|debug)/);
});

test("privacy configuration and pages disclose controller and provider gate", async () => {
  const it = await read("content/it/index.ts");
  const en = await read("content/en/index.ts");
  const page = await read("app/[locale]/[[...slug]]/page.tsx");
  const config = await read("lib/config/privacy.ts");
  const api = await read("app/api/availability/route.ts");
  const combined = it + en + page + config;

  assert.match(it, /slug: "privacy"/);
  assert.match(en, /slug: "privacy"/);
  assert.match(config, /controllerName: "Salvatore Fadda"/);
  assert.match(config, /DATA_PROVIDER_NAME/);
  assert.match(config, /DATA_PROVIDER_ROLE/);
  assert.match(config, /DATA_PROVIDER_REGION/);
  assert.match(config, /DATA_PROVIDER_TRANSFER_SAFEGUARDS/);
  assert.match(config, /isDataProviderConfigured/);
  assert.match(page, /mailto:/);
  assert.match(page, /has not yet been selected/);
  assert.match(page, /non è ancora stato selezionato/);
  assert.match(api, /!isLeadWebhookConfigured\(\) \|\| !isDataProviderConfigured\(\)/);
  assert.match(combined, /24 mesi|24 months/);
  assert.match(combined, /Garante|Italian Data Protection Authority/);
  assert.doesNotMatch(it + en, /\[RAGIONE SOCIALE\]|streetAddress|Vercel|Neon|PostHog/);
});
