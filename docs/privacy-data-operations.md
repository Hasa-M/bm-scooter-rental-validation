# Privacy and market-research data operations

This document defines operational requirements for the PostgreSQL persistence layer. It is not legal advice, a certification or a substitute for legal review.

## Provider gate

The provider is intentionally not hardcoded. Its name, privacy role, processing region, transfer safeguards and optional privacy-policy URL come from the `DATA_PROVIDER_*` environment variables. `DATABASE_URL` contains the server-side PostgreSQL connection string.

The API must return HTTP `503` and persist nothing unless both the database URL and the minimum provider configuration are present. User-facing errors must remain generic and must not disclose environment-variable names, infrastructure details or stack traces.

Before production:

1. choose the provider;
2. verify and document the actual storage and processing location;
3. establish whether it acts as a processor, independent controller or in another verified role;
4. sign any required data-processing agreement;
5. assess any transfers outside the EEA and document the safeguards that actually apply;
6. update both privacy notices with real provider details;
7. implement an effective erasure, irreversible anonymisation or documented necessity-renewal process.

## Data contract

The API builds one payload with two explicitly separate sections and persists them in separate tables:

- `researchResponse`: requested dates, scooter quantity, age band, 50cc/125cc interest, stay location, origin macro-region, licence-over-five-years answer, optional notes (maximum 500 characters), language, submission time, purpose, privacy-notice acknowledgement and review deadline;
- optional `contactRequest`: normalised email, consent timestamp, contact purpose and its own review deadline.

Email and consent must never be placed in `research_responses`. The optional `contact_requests` row is linked to its research response only through the internal `research_response_id` foreign key, which must not be exposed to the browser. Do not add an IP address, user agent, fingerprint or advertising identifier. Do not enrich the research response with a name, exact age, address, documents, payment data or sensitive information.

The absence of an email does not make a response certainly anonymous: dates, locations, timestamps and free-text notes may still make it personal data. Notes are optional, limited to 500 characters on client and server, and users are told not to enter documents, health data or sensitive information.

## Contact request

`contactRequest` is created only when the user actively requests contact, supplies a syntactically valid email and grants the separate contact consent. The email is trimmed and lowercased. Contact data must not be repurposed for newsletters, promotions or marketing without another specific legal basis and, where required, separate consent.

## Review and retention

`reviewAfter` is a mandatory operational review deadline set 24 months after submission. It does not delete data, does not prove that deletion is automated and does not authorise indefinite retention.

At each review, the definitive storage system must execute and document one outcome:

1. erase the raw record because it is no longer necessary;
2. irreversibly anonymise and aggregate it for longer-term market analysis;
3. retain it for a further documented period because continued necessity and proportionality have been reassessed.

Only genuinely anonymous aggregate statistics may be retained without a fixed end date. Pseudonymised or otherwise linkable records remain personal data. A contact email must also be erased when consent is withdrawn or the contact purpose is complete.

## Security and operations

- restrict provider access according to least privilege;
- keep an audit trail of reviews, erasures, anonymisation decisions and consent withdrawals without logging full submissions or email addresses;
- handle database and provider failures with generic errors;
- never log complete payloads or email addresses;
- do not collect IP addresses, user agents or tracking identifiers in the application payload;
- keep secrets in deployment environment variables and keep `.env*` ignored except for `.env.example`;
- do not add analytics, non-essential cookies or a cookie banner unless the tracking design and notice are reviewed first;
- maintain a working rights-request and consent-withdrawal process through `info@bosainscooter.it`.
