export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export function isValidIsoDate(value) {
  if (typeof value !== "string" || !datePattern.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function normalizeEmail(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function validateContactRequest(data, consentGrantedAt, reviewAfter) {
  if (data.wantsContact !== "yes") {
    return { ok: true, contactRequest: undefined };
  }

  const email = normalizeEmail(data.email);
  if (!emailPattern.test(email) || email.length > 160 || data.contactConsent !== "yes") {
    return { ok: false, contactRequest: undefined };
  }

  return {
    ok: true,
    contactRequest: {
      email: email.slice(0, 160),
      consentGrantedAt,
      purpose: "service-availability-contact",
      reviewAfter,
    },
  };
}
