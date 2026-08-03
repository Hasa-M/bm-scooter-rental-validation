import type { AgeBand, OriginArea, ScooterInterest, ServiceLocation } from "./options";
import { createDatabaseConnection, type DatabaseConnection } from "@/lib/db/client";
import { contactRequests, researchResponses } from "@/lib/db/schema";

export type ResearchResponse = {
  startDate: string;
  endDate: string;
  scooters: number;
  vehicleType: ScooterInterest;
  ageBand: AgeBand;
  licensedOverFiveYears: boolean;
  stayLocation: ServiceLocation;
  originArea: OriginArea;
  notes?: string;
  language: "it" | "en";
  submittedAt: string;
  researchPurpose: "market-validation";
  /** Operational review deadline; this field does not trigger automatic deletion. */
  reviewAfter: string;
  privacyNoticeAcknowledgedAt: string;
};

export type ContactRequest = {
  email: string;
  consentGrantedAt: string;
  purpose: "service-availability-contact";
  reviewAfter: string;
};

export type SubmissionPayload = {
  researchResponse: ResearchResponse;
  contactRequest?: ContactRequest;
};

export type SaveResult = {
  researchResponseId: string;
  contactRequestId?: string;
};

export interface LeadRepository {
  save(payload: SubmissionPayload): Promise<SaveResult>;
}

export function mapResearchResponse(response: ResearchResponse): typeof researchResponses.$inferInsert {
  return {
    startDate: response.startDate,
    endDate: response.endDate,
    scooters: response.scooters,
    vehicleType: response.vehicleType,
    ageBand: response.ageBand,
    licensedOverFiveYears: response.licensedOverFiveYears,
    stayLocation: response.stayLocation,
    originArea: response.originArea,
    notes: response.notes,
    language: response.language,
    submittedAt: response.submittedAt,
    researchPurpose: response.researchPurpose,
    reviewAfter: response.reviewAfter,
    privacyNoticeAcknowledgedAt: response.privacyNoticeAcknowledgedAt,
  };
}

export function mapContactRequest(
  request: ContactRequest,
  researchResponseId: string,
): typeof contactRequests.$inferInsert {
  return {
    researchResponseId,
    email: request.email,
    consentGrantedAt: request.consentGrantedAt,
    purpose: request.purpose,
    reviewAfter: request.reviewAfter,
  };
}

type DatabaseConnectionFactory = () => DatabaseConnection;

export class PostgresLeadRepository implements LeadRepository {
  constructor(
    private readonly createConnection: DatabaseConnectionFactory = createDatabaseConnection,
  ) {}

  async save(payload: SubmissionPayload): Promise<SaveResult> {
    const connection = this.createConnection();

    try {
      return await connection.client.transaction(async (transaction) => {
        const [savedResearchResponse] = await transaction
          .insert(researchResponses)
          .values(mapResearchResponse(payload.researchResponse))
          .returning({ id: researchResponses.id });

        if (!savedResearchResponse) {
          throw new Error("Research response insert did not return an id");
        }

        if (!payload.contactRequest) {
          return { researchResponseId: savedResearchResponse.id };
        }

        const [savedContactRequest] = await transaction
          .insert(contactRequests)
          .values(mapContactRequest(payload.contactRequest, savedResearchResponse.id))
          .returning({ id: contactRequests.id });

        if (!savedContactRequest) {
          throw new Error("Contact request insert did not return an id");
        }

        return {
          researchResponseId: savedResearchResponse.id,
          contactRequestId: savedContactRequest.id,
        };
      });
    } finally {
      await connection.close();
    }
  }
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

export function getLeadRepository(): LeadRepository {
  if (!isDatabaseConfigured()) {
    throw new Error("Lead repository is not configured");
  }
  return new PostgresLeadRepository();
}
