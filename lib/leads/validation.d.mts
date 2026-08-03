export const emailPattern: RegExp;
export const datePattern: RegExp;

export type ContactRequestData = {
  wantsContact?: unknown;
  email?: unknown;
  contactConsent?: unknown;
};

export type ContactRequest = {
  email: string;
  consentGrantedAt: string;
  purpose: "service-availability-contact";
  reviewAfter: string;
};

export type ContactValidationResult =
  | { ok: true; contactRequest: ContactRequest | undefined }
  | { ok: false; contactRequest: undefined };

export function isValidIsoDate(value: unknown): boolean;
export function normalizeEmail(value: unknown): string;
export function validateContactRequest(
  data: ContactRequestData,
  consentGrantedAt: string,
  reviewAfter: string,
): ContactValidationResult;
