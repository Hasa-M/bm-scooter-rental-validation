import assert from "node:assert/strict";
import test from "node:test";
import {
  datePattern,
  emailPattern,
  isValidIsoDate,
  normalizeEmail,
  validateContactRequest,
} from "../lib/leads/validation.mjs";

const consentGrantedAt = "2026-08-03T10:00:00.000Z";
const reviewAfter = "2028-08-03T10:00:00.000Z";

test("accepts a real ISO calendar date", () => {
  assert.match("2026-08-03", datePattern);
  assert.equal(isValidIsoDate("2026-08-03"), true);
  assert.equal(isValidIsoDate("2028-02-29"), true);
});

test("rejects malformed and impossible dates", () => {
  assert.doesNotMatch("03-08-2026", datePattern);
  assert.equal(isValidIsoDate("2026-02-29"), false);
  assert.equal(isValidIsoDate("2026-13-01"), false);
});

test("accepts and normalises a valid email when contact is requested", () => {
  assert.match("person@example.com", emailPattern);
  assert.equal(normalizeEmail(" Person@Example.COM "), "person@example.com");

  const result = validateContactRequest(
    { wantsContact: "yes", email: " Person@Example.COM ", contactConsent: "yes" },
    consentGrantedAt,
    reviewAfter,
  );

  assert.equal(result.ok, true);
  assert.deepEqual(result.contactRequest, {
    email: "person@example.com",
    consentGrantedAt,
    purpose: "service-availability-contact",
    reviewAfter,
  });
});

test("rejects an invalid email when contact is requested", () => {
  assert.doesNotMatch("person@example", emailPattern);
  const result = validateContactRequest(
    { wantsContact: "yes", email: "person@example", contactConsent: "yes" },
    consentGrantedAt,
    reviewAfter,
  );
  assert.equal(result.ok, false);
  assert.equal(result.contactRequest, undefined);
});

test("does not include email or contact consent when contact is not requested", () => {
  const result = validateContactRequest(
    { wantsContact: undefined, email: "should-not-be-used@example.com", contactConsent: undefined },
    consentGrantedAt,
    reviewAfter,
  );
  assert.equal(result.ok, true);
  assert.equal(result.contactRequest, undefined);
  assert.equal("email" in result, false);
});

test("contact consent is required only when contact is requested", () => {
  const requestedWithoutConsent = validateContactRequest(
    { wantsContact: "yes", email: "person@example.com", contactConsent: undefined },
    consentGrantedAt,
    reviewAfter,
  );
  const notRequestedWithoutConsent = validateContactRequest(
    { wantsContact: "no", email: undefined, contactConsent: undefined },
    consentGrantedAt,
    reviewAfter,
  );

  assert.equal(requestedWithoutConsent.ok, false);
  assert.equal(notRequestedWithoutConsent.ok, true);
  assert.equal(notRequestedWithoutConsent.contactRequest, undefined);
});
