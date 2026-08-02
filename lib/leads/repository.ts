import type { ScooterInterest, ServiceLocation } from "./options";

export type Lead = {
  startDate: string;
  endDate: string;
  scooters: number;
  name: string;
  email: string;
  vehicleType: ScooterInterest;
  age: number;
  licensedOverFiveYears: boolean;
  stayLocation: ServiceLocation;
  origin?: string;
  language: "it" | "en";
  notes?: string;
};

export interface LeadRepository {
  save(lead: Lead): Promise<void>;
}

class WebhookLeadRepository implements LeadRepository {
  constructor(private readonly endpoint: string) {}

  async save(lead: Lead) {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Lead provider rejected the request");
  }
}

export function getLeadRepository(): LeadRepository {
  const endpoint = process.env.LEAD_WEBHOOK_URL;
  if (!endpoint) throw new Error("LEAD_WEBHOOK_URL is not configured");
  return new WebhookLeadRepository(endpoint);
}
