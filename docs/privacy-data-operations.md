# Privacy and market-research data operations

This document is an implementation requirement for the system receiving LEAD_WEBHOOK_URL. It is not a substitute for legal review.

## Data contract

The validation response must remain limited to:

- requested dates;
- scooter quantity;
- age range;
- 50cc/125cc preference;
- stay location;
- origin macro-region;
- whether the licence has been held for more than five years;
- optional notes limited to 500 characters;
- language and operational timestamps.

Do not enrich research records with names, exact age, notes longer than 500 characters, document data, payment data, advertising identifiers, IP addresses or user-agent fingerprints.

Email is allowed only when contactRequested is true and contactConsentGrantedAt is present. Contact data must not be repurposed for newsletters, promotions or marketing.

## Retention decision

reviewAfter is a mandatory review deadline, set 24 months after submission. It is not permission to retain a personal record forever and it is not an automatic deletion claim.

At each review, record one outcome:

1. delete the raw record because it is no longer necessary;
2. irreversibly anonymise and aggregate it for long-term market analysis;
3. retain it for a further documented period because continued necessity and proportionality can be demonstrated.

Only genuinely anonymous aggregate statistics may be retained without a fixed end date. Pseudonymised or linkable records remain personal data.

Contact email must be erased when consent is withdrawn, when the contact purpose is complete, or when continued necessity cannot be demonstrated at review. If the service is still unavailable after 24 months, obtain renewed consent or delete the email.

## Provider checklist

Before production:

- identify the legal entity operating the webhook;
- document controller/processor roles and sign any required data-processing agreement;
- choose and document the actual storage region;
- assess transfers outside the EEA and applicable adequacy decisions or Standard Contractual Clauses;
- restrict access and keep an audit trail of retention reviews and consent withdrawals;
- update the privacy notice before enabling Neon, PostHog or another provider;
- provide a working privacy contact and a process for rights requests and consent withdrawal.

The current repository does not contain active Neon or PostHog integrations. Local analytics events do not transmit data unless an external listener is added.