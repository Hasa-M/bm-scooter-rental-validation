import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");
const readMigrations = async () => {
  const directory = new URL("../drizzle/", import.meta.url);
  const files = (await readdir(directory)).filter((file) => file.endsWith(".sql")).sort();
  return Promise.all(files.map((file) => readFile(new URL(file, directory), "utf8")))
    .then((migrations) => migrations.join("\n"));
};

test("migrations keep application contact data separate and add isolated admin auth tables", async () => {
  const migration = await readMigrations();
  const researchTable = migration.match(/CREATE TABLE "research_responses" \(([\s\S]*?)\n\);/)?.[1] ?? "";
  const contactTable = migration.match(/CREATE TABLE "contact_requests" \(([\s\S]*?)\n\);/)?.[1] ?? "";

  assert.equal((migration.match(/CREATE TABLE/g) ?? []).length, 6);
  assert.ok(researchTable);
  assert.ok(contactTable);
  assert.doesNotMatch(researchTable, /"email"|"name"|"phone"|"ip"|"user_agent"|"fingerprint"/);
  assert.match(contactTable, /"research_response_id" uuid NOT NULL/);
  assert.match(contactTable, /"email" varchar\(160\) NOT NULL/);
  assert.match(contactTable, /UNIQUE\("research_response_id"\)/);
  for (const table of ["admin_user", "admin_session", "admin_account", "admin_verification"]) {
    assert.match(migration, new RegExp('CREATE TABLE "' + table + '"'));
  }
  assert.match(migration, /admin_account_provider_account_unique.*UNIQUE\("provider_id","account_id"\)/);
  assert.match(migration, /admin_session_token_unique.*UNIQUE\("token"\)/);
});

test("migration enforces the foreign key, cascade, limits, checks and submitted index", async () => {
  const migration = await readMigrations();

  assert.match(migration, /FOREIGN KEY \("research_response_id"\).*REFERENCES "public"\."research_responses"\("id"\) ON DELETE cascade/);
  assert.match(migration, /"notes" varchar\(500\)/);
  assert.match(migration, /end_date" >= "research_responses"\."start_date/);
  assert.match(migration, /scooters" between 1 and 3/);
  assert.match(migration, /vehicle_type" in \('50cc', '125cc'\)/);
  assert.match(migration, /language" in \('it', 'en'\)/);
  assert.match(migration, /research_purpose" = 'market-validation'/);
  assert.match(migration, /purpose" = 'service-availability-contact'/);
  assert.match(migration, /CREATE INDEX "research_responses_submitted_at_idx".*"submitted_at"/);
});

test("repository maps research and contact fields separately", async () => {
  const repository = await read("lib/leads/repository.ts");
  const researchMapper = repository.match(/export function mapResearchResponse[\s\S]*?^}/m)?.[0] ?? "";
  const contactMapper = repository.match(/export function mapContactRequest[\s\S]*?^}/m)?.[0] ?? "";

  for (const field of [
    "startDate",
    "endDate",
    "scooters",
    "vehicleType",
    "ageBand",
    "licensedOverFiveYears",
    "stayLocation",
    "originArea",
    "notes",
    "language",
    "submittedAt",
    "researchPurpose",
    "reviewAfter",
    "privacyNoticeAcknowledgedAt",
  ]) assert.match(researchMapper, new RegExp(field + ": response\\." + field));

  assert.doesNotMatch(researchMapper, /email|consentGrantedAt/);
  assert.match(contactMapper, /researchResponseId/);
  assert.match(contactMapper, /email: request\.email/);
});

test("repository performs dependent inserts in one transaction", async () => {
  const repository = await read("lib/leads/repository.ts");
  const transactionStart = repository.indexOf("connection.client.transaction");
  const researchInsert = repository.indexOf(".insert(researchResponses)", transactionStart);
  const noContactReturn = repository.indexOf("if (!payload.contactRequest)", researchInsert);
  const contactInsert = repository.indexOf(".insert(contactRequests)", noContactReturn);
  const linkedId = repository.indexOf("mapContactRequest(payload.contactRequest, savedResearchResponse.id)", contactInsert);
  const transactionEnd = repository.indexOf("});", linkedId);

  assert.ok(transactionStart >= 0);
  assert.ok(researchInsert > transactionStart);
  assert.ok(noContactReturn > researchInsert);
  assert.ok(contactInsert > noContactReturn);
  assert.ok(linkedId > contactInsert);
  assert.ok(transactionEnd > linkedId);
  assert.match(repository, /returning\(\{ id: researchResponses\.id \}\)/);
  assert.match(repository, /returning\(\{ id: contactRequests\.id \}\)/);
  assert.match(repository, /finally \{\s+await connection\.close\(\)/);
});

test("database client is lazy and the API keeps persistence failures private", async () => {
  const client = await read("lib/db/client.ts");
  const api = await read("app/api/availability/route.ts");

  assert.match(client, /export function createDatabaseConnection/);
  assert.match(client, /DATABASE_URL/);
  assert.match(client, /new Pool\(\{ connectionString \}\)/);
  assert.doesNotMatch(client.split("export function createDatabaseConnection")[0], /new Pool/);
  assert.match(api, /export const runtime = "nodejs"/);
  assert.match(api, /!isDatabaseConfigured\(\) \|\| !isDataProviderConfigured\(\)/);
  assert.match(api, /\{ status: 503 \}/);
  assert.doesNotMatch(api, /LEAD_WEBHOOK_URL|WebhookLeadRepository|isLeadWebhookConfigured/);
  assert.doesNotMatch(api, /researchResponseId|contactRequestId/);
});
