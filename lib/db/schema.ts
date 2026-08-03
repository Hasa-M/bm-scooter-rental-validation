import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  date,
  index,
  pgTable,
  smallint,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const researchResponses = pgTable(
  "research_responses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    startDate: date("start_date", { mode: "string" }).notNull(),
    endDate: date("end_date", { mode: "string" }).notNull(),
    scooters: smallint("scooters").notNull(),
    vehicleType: varchar("vehicle_type", { length: 5 }).notNull(),
    ageBand: varchar("age_band", { length: 5 }).notNull(),
    licensedOverFiveYears: boolean("licensed_over_five_years").notNull(),
    stayLocation: varchar("stay_location", { length: 80 }).notNull(),
    originArea: varchar("origin_area", { length: 32 }).notNull(),
    notes: varchar("notes", { length: 500 }),
    language: varchar("language", { length: 2 }).notNull(),
    submittedAt: timestamp("submitted_at", { withTimezone: true, mode: "string" }).notNull(),
    researchPurpose: varchar("research_purpose", { length: 64 }).notNull(),
    reviewAfter: timestamp("review_after", { withTimezone: true, mode: "string" }).notNull(),
    privacyNoticeAcknowledgedAt: timestamp("privacy_notice_acknowledged_at", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
  },
  (table) => [
    index("research_responses_submitted_at_idx").on(table.submittedAt),
    check("research_responses_date_range_check", sql`${table.endDate} >= ${table.startDate}`),
    check("research_responses_scooters_check", sql`${table.scooters} between 1 and 3`),
    check("research_responses_vehicle_type_check", sql`${table.vehicleType} in ('50cc', '125cc')`),
    check(
      "research_responses_age_band_check",
      sql`${table.ageBand} in ('18-24', '25-34', '35-44', '45-54', '55-64', '65+')`,
    ),
    check(
      "research_responses_stay_location_check",
      sql`${table.stayLocation} in ('Alghero', 'Bosa', 'Bosa Marina', 'Flussio', 'Macomer', 'Magomadas', 'Modolo', 'Montresta', 'Porto Alabe', 'Sabba Drucche', 'Sagama', 'Santa Maria del Mare', 'Sindia', 'Suni', 'Tinnura', 'Tresnuraghes', 'Turas', 'Altre località (non elencate)')`,
    ),
    check(
      "research_responses_origin_area_check",
      sql`${table.originArea} in ('sardinia', 'italy', 'eu', 'europe-non-eu', 'north-america', 'other')`,
    ),
    check("research_responses_language_check", sql`${table.language} in ('it', 'en')`),
    check(
      "research_responses_purpose_check",
      sql`${table.researchPurpose} = 'market-validation'`,
    ),
  ],
);

export const contactRequests = pgTable(
  "contact_requests",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    researchResponseId: uuid("research_response_id")
      .notNull()
      .references(() => researchResponses.id, { onDelete: "cascade" }),
    email: varchar("email", { length: 160 }).notNull(),
    consentGrantedAt: timestamp("consent_granted_at", { withTimezone: true, mode: "string" }).notNull(),
    purpose: varchar("purpose", { length: 64 }).notNull(),
    reviewAfter: timestamp("review_after", { withTimezone: true, mode: "string" }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  },
  (table) => [
    unique("contact_requests_research_response_id_unique").on(table.researchResponseId),
    check(
      "contact_requests_purpose_check",
      sql`${table.purpose} = 'service-availability-contact'`,
    ),
  ],
);
