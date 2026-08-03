CREATE TABLE "contact_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"research_response_id" uuid NOT NULL,
	"email" varchar(160) NOT NULL,
	"consent_granted_at" timestamp with time zone NOT NULL,
	"purpose" varchar(64) NOT NULL,
	"review_after" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "contact_requests_research_response_id_unique" UNIQUE("research_response_id"),
	CONSTRAINT "contact_requests_purpose_check" CHECK ("contact_requests"."purpose" = 'service-availability-contact')
);
--> statement-breakpoint
CREATE TABLE "research_responses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"scooters" smallint NOT NULL,
	"vehicle_type" varchar(5) NOT NULL,
	"age_band" varchar(5) NOT NULL,
	"licensed_over_five_years" boolean NOT NULL,
	"stay_location" varchar(80) NOT NULL,
	"origin_area" varchar(32) NOT NULL,
	"notes" varchar(500),
	"language" varchar(2) NOT NULL,
	"submitted_at" timestamp with time zone NOT NULL,
	"research_purpose" varchar(64) NOT NULL,
	"review_after" timestamp with time zone NOT NULL,
	"privacy_notice_acknowledged_at" timestamp with time zone NOT NULL,
	CONSTRAINT "research_responses_date_range_check" CHECK ("research_responses"."end_date" >= "research_responses"."start_date"),
	CONSTRAINT "research_responses_scooters_check" CHECK ("research_responses"."scooters" between 1 and 3),
	CONSTRAINT "research_responses_vehicle_type_check" CHECK ("research_responses"."vehicle_type" in ('50cc', '125cc')),
	CONSTRAINT "research_responses_age_band_check" CHECK ("research_responses"."age_band" in ('18-24', '25-34', '35-44', '45-54', '55-64', '65+')),
	CONSTRAINT "research_responses_stay_location_check" CHECK ("research_responses"."stay_location" in ('Alghero', 'Bosa', 'Bosa Marina', 'Flussio', 'Macomer', 'Magomadas', 'Modolo', 'Montresta', 'Porto Alabe', 'Sabba Drucche', 'Sagama', 'Santa Maria del Mare', 'Sindia', 'Suni', 'Tinnura', 'Tresnuraghes', 'Turas', 'Altre località (non elencate)')),
	CONSTRAINT "research_responses_origin_area_check" CHECK ("research_responses"."origin_area" in ('sardinia', 'italy', 'eu', 'europe-non-eu', 'north-america', 'other')),
	CONSTRAINT "research_responses_language_check" CHECK ("research_responses"."language" in ('it', 'en')),
	CONSTRAINT "research_responses_purpose_check" CHECK ("research_responses"."research_purpose" = 'market-validation')
);
--> statement-breakpoint
ALTER TABLE "contact_requests" ADD CONSTRAINT "contact_requests_research_response_id_research_responses_id_fk" FOREIGN KEY ("research_response_id") REFERENCES "public"."research_responses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "research_responses_submitted_at_idx" ON "research_responses" USING btree ("submitted_at");