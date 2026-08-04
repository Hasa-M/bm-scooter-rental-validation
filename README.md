# Bosa in Scooter

A bilingual market-validation platform for a potential 50cc and 125cc scooter rental service in Bosa, Sardinia.

The project was built as an end-to-end software engineering case study: it combines a content-driven public website, a privacy-conscious research funnel, transactional persistence, and a protected analytics dashboard. It is intentionally **not** a booking system and does not represent an operational rental business. Prices, availability, vehicles, and service conditions are hypotheses to be validated.

## Project goals

The application is designed to answer a concrete business question: is there enough demand to justify launching a local scooter rental service?

It supports that goal by:

- presenting the service hypothesis in Italian and English;
- publishing locally focused commercial and informational content;
- collecting structured demand signals such as dates, vehicle type, party size, and visitor origin;
- keeping optional contact details separate from research answers;
- providing a private dashboard for reviewing aggregate demand and consent-based contact requests;
- establishing an SEO measurement baseline before introducing behavioural analytics.

## Engineering highlights

- **Privacy by design:** the main questionnaire does not request direct identifiers. Email collection is optional, requires explicit consent, and is stored in a separate table.
- **Transactional consistency:** research and contact records are written in a single database transaction, with foreign keys, uniqueness rules, length limits, and domain checks enforced by PostgreSQL.
- **Fail-closed configuration:** submissions return a generic `503` response and persist nothing when the database or required privacy-provider metadata is incomplete.
- **Defence-in-depth admin access:** the dashboard is feature-gated and restricted to one configured GitHub account. Better Auth sessions are database-backed, OAuth tokens are encrypted, and protected data repositories repeat the authorization check.
- **Server-first architecture:** public content is statically generated where possible, while form submission, authentication, and administrative queries remain server-side.
- **International SEO:** canonical URLs, `hreflang`, metadata, JSON-LD, sitemap, robots directives, breadcrumbs, and social previews are generated centrally for both locales.
- **Operationally explicit data lifecycle:** records include a 24-month review date. This is an operational review deadline, not an automatic deletion claim.

## Architecture

```text
Public visitor
    |
    +-- Next.js App Router -- statically generated IT/EN pages
    |
    +-- POST /api/availability
            |
            +-- server-side validation and configuration checks
            +-- atomic Drizzle transaction
                    |
                    +-- research_responses (no email)
                    +-- contact_requests (optional email + consent)

Administrator
    |
    +-- GitHub OAuth -- Better Auth -- allowlisted GitHub user ID
            |
            +-- read-only dashboard repositories -- PostgreSQL / Neon
```

## Technology choices

| Technology | Role | Rationale |
| --- | --- | --- |
| Next.js 16 App Router | Full-stack web framework | Supports static content, server components, route handlers, metadata APIs, and deployment as one cohesive application. |
| React 19 + TypeScript 5 | UI and application language | Provides typed component contracts and compile-time safety across content, forms, configuration, and persistence. |
| Tailwind CSS 4 | Styling toolchain | Keeps the visual system close to the components while producing an optimized production stylesheet. |
| PostgreSQL on Neon | Relational persistence | Transactions and database constraints fit consent-sensitive, related records better than an eventually consistent document model. |
| Drizzle ORM + Drizzle Kit | Typed data access and migrations | Keeps the relational schema explicit, versioned, and aligned with TypeScript. Migrations are generated and applied deliberately. |
| Better Auth + GitHub OAuth | Administrative authentication | Avoids a custom password flow and restricts access using the stable numeric ID of a single configured GitHub account. |
| Node.js test runner + ESLint | Verification | Provides fast tests for validation, schema invariants, access policy, privacy boundaries, and SEO output with minimal tooling overhead. |
| Vercel | Hosting | Fits the Next.js runtime and allows server functions to be pinned to Frankfurt (`fra1`), close to the selected EU database region. |

## Data and privacy model

The public flow separates two purposes:

1. `research_responses` stores the market-research answer without email, name, phone number, IP address, user agent, or browser fingerprint.
2. `contact_requests` is created only when a visitor asks to be contacted, provides a valid email address, and grants specific consent. It references the related research response through an internal UUID that is never returned to the browser.

The two writes are committed atomically. The admin interface also keeps research-response views separate from contact views: response queries never expose email addresses, and contact views never expose free-text notes.

This implementation demonstrates privacy-aware engineering decisions, but it is not legal advice or a claim of complete GDPR compliance. The actual providers, agreements, retention operations, deployment settings, and privacy notices must be verified before production use.

## Getting started

### Prerequisites

- Node.js 22.13 or newer;
- npm;
- a PostgreSQL database (Neon is the intended provider);
- a GitHub OAuth App if the admin dashboard is enabled.

### Installation

```bash
git clone <repository-url>
cd bm-scooter-rental-validation
npm install
```

Copy `.env.example` to `.env.local`, configure the required values, and apply the migrations:

```bash
npm run db:migrate
npm run dev
```

Open `http://localhost:3000`. The root URL permanently redirects to `/it`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public origin. |
| `DATABASE_URL` | Server-only PostgreSQL connection string. |
| `BETTER_AUTH_SECRET` | High-entropy authentication secret of at least 32 characters. |
| `BETTER_AUTH_URL` | Exact public application origin, without a trailing slash. |
| `GITHUB_CLIENT_ID` | Client ID of the dedicated GitHub OAuth App. |
| `GITHUB_CLIENT_SECRET` | Client secret of the dedicated GitHub OAuth App. |
| `ADMIN_GITHUB_USER_ID` | Numeric ID of the only GitHub account allowed into the dashboard. |
| `ADMIN_DASHBOARD_ENABLED` | Feature gate; only the exact value `true` enables the admin area. |
| `DATA_PROVIDER_NAME` | Verified name of the provider storing research data. |
| `DATA_PROVIDER_ROLE` | Verified privacy role of that provider. |
| `DATA_PROVIDER_REGION` | Actual processing or storage region. |
| `DATA_PROVIDER_TRANSFER_SAFEGUARDS` | Applicable safeguards for international transfers. |
| `DATA_PROVIDER_PRIVACY_POLICY_URL` | Public privacy notice for the data provider. |

Never commit real secrets. `DATABASE_URL` and all `DATA_PROVIDER_*` values are checked server-side; missing values disable persistence.

## Database workflow

Schema changes are managed through versioned Drizzle migrations:

```bash
npm run db:generate
npm run db:migrate
npm run db:studio
```

Migrations are intentionally not executed by `dev`, `build`, `start`, or `check`. Preview and Production should use separate Neon databases or branches and separate credentials.

## Admin dashboard

To enable the dashboard:

1. Create a dedicated GitHub OAuth App.
2. Set its homepage to the deployed origin and its callback to `<origin>/api/auth/callback/github`.
3. Configure the GitHub client credentials, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, and the administrator's numeric GitHub user ID.
4. Apply all database migrations.
5. Set `ADMIN_DASHBOARD_ENABLED=true` only after verifying the complete configuration.

The integration requests GitHub's `read:user` and `user:email` scopes. Sessions expire after eight hours. Expired session and verification records are pruned on subsequent admin or OAuth access.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

Run the complete local verification pipeline with:

```bash
npm run check
```

The test suite covers input validation, database constraints and transactional behaviour, admin authorization, data separation, SEO metadata, localized content invariants, and failure behaviour.

## Project structure

```text
app/          Next.js routes, API handlers, metadata, and admin pages
components/   Public and administrative React components
content/      Typed Italian and English page content
docs/         SEO, content, launch, and privacy operations notes
drizzle/      Versioned PostgreSQL migrations
lib/          Domain logic, configuration, persistence, auth, and SEO utilities
public/       Static images and web assets
scripts/      Local development helpers
tests/        Node.js test suite
```

## Production readiness checklist

Before accepting real submissions:

- select and verify the database provider, processing region, privacy role, subprocessors, DPA, and transfer safeguards;
- replace every placeholder provider value with accurate deployment information;
- keep Preview and Production databases, OAuth credentials, and secrets isolated;
- verify the GitHub OAuth callback, scopes, allowlisted account, session behaviour, and feature gate;
- update `/it/privacy` and `/en/privacy` so they match the deployed infrastructure;
- define and implement an auditable process for deletion, irreversible anonymization, or a documented renewal of necessity at the review deadline;
- verify the generic `503` failure path and transactional persistence against a non-production database;
- check `/robots.txt`, `/sitemap.xml`, canonical URLs, `hreflang`, structured data, and the complete form flow on the real domain;
- document any Vercel log retention and do not add a Log Drain without assessing the additional provider and data flow.

## TODO

### Analytics with PostHog

Consider integrating PostHog in the future to measure the website funnel, including page views, CTA clicks, form opens, submissions, successes, and errors.

The integration must remain minimal and use cookieless mode, with autocapture, user identification, and session replay disabled. Email addresses, notes, questionnaire data, database identifiers, and any other personal information must never be sent.

The aim is to avoid cookies or non-essential storage and reduce the likelihood that a cookie banner is required. Before activation, the effective PostHog configuration must still be verified, the privacy notice must be updated, and the project must confirm that no other website technology requires prior consent.

Planned configuration:

- PostHog Cloud EU;
- `cookieless_mode: "always"`;
- `autocapture: false`;
- session replay disabled;
- no calls to `identify`;
- explicit custom events only;
- a strict allowlist for transmitted properties;
- separate PostHog projects for Preview and Production.

### Additional work

- Implement and document the operational retention-review workflow.
- Add end-to-end tests for the public submission flow and GitHub-authenticated admin access.
- Add accessibility regression checks and monitor Core Web Vitals in deployed environments.
- Replace illustrative imagery with authentic, optimized photography if the business becomes operational.
- Complete the launch and local SEO checklists with verified business information.

## Supporting documentation

- [`docs/privacy-data-operations.md`](docs/privacy-data-operations.md)
- [`docs/seo-launch-checklist.md`](docs/seo-launch-checklist.md)
- [`docs/seo-keyword-map.md`](docs/seo-keyword-map.md)
- [`docs/local-seo-launch-plan.md`](docs/local-seo-launch-plan.md)
- [`docs/content-plan.md`](docs/content-plan.md)
