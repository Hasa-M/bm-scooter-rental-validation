import type { AgeBand, OriginArea, ScooterInterest, ServiceLocation } from "./options";

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

export interface LeadRepository {
  save(payload: SubmissionPayload): Promise<void>;
}

class WebhookLeadRepository implements LeadRepository {
  constructor(private readonly endpoint: string) {}

  async save(payload: SubmissionPayload) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Lead provider rejected the request");
  }
}

export function isLeadWebhookConfigured(): boolean {
  return Boolean(process.env.LEAD_WEBHOOK_URL?.trim());
}

export function getLeadRepository(): LeadRepository {
  const endpoint = process.env.LEAD_WEBHOOK_URL?.trim();
  if (!endpoint) throw new Error("Lead repository is not configured");
  return new WebhookLeadRepository(endpoint);
}
