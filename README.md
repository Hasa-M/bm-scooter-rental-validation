# Bosa in Scooter

Sito locale bilingue per validare l’interesse verso un possibile servizio di scooter 50cc e 125cc a Bosa, con tariffe e condizioni indicative da confermare. Costruito con Next.js 16, App Router, TypeScript e React.

## Stato del progetto

Il progetto è un esperimento di ricerca di mercato, non un sistema di prenotazione, un CRM o un’attività di noleggio già operativa. Il percorso principale raccoglie una risposta senza identificativi diretti; il ricontatto email è separato, facoltativo e basato su consenso specifico. Questa implementazione non costituisce una certificazione legale o una dichiarazione di piena conformità GDPR.

## Avvio locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`; la root reindirizza a `/it`.

## Configurazione

Copiare `.env.example` in un file d’ambiente locale non versionato e valorizzare soltanto dati reali:

- `NEXT_PUBLIC_SITE_URL`: dominio canonico definitivo;
- `DATABASE_URL`: connection string PostgreSQL fornita da Neon, usata soltanto lato server;
- `BETTER_AUTH_SECRET`: segreto casuale ad alta entropia, lungo almeno 32 caratteri, usato per firma e cifratura;
- `BETTER_AUTH_URL`: origine pubblica esatta dell'applicazione, senza slash finale;
- `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`: credenziali dell'OAuth App GitHub dedicata;
- `ADMIN_GITHUB_USER_ID`: ID numerico dell'unico account GitHub autorizzato;
- `ADMIN_DASHBOARD_ENABLED`: deve essere esattamente `true` per esporre l'area admin;
- `DATA_PROVIDER_NAME`: nome reale del fornitore che riceve e conserva le risposte;
- `DATA_PROVIDER_ROLE`: ruolo privacy verificato del fornitore;
- `DATA_PROVIDER_REGION`: luogo o regione effettiva del trattamento;
- `DATA_PROVIDER_TRANSFER_SAFEGUARDS`: garanzie effettivamente applicabili agli eventuali trasferimenti;
- `DATA_PROVIDER_PRIVACY_POLICY_URL`: link reale all'informativa del fornitore, obbligatorio per attivare il modulo.

`DATABASE_URL` e tutti i campi `DATA_PROVIDER_*` sono controllati lato server. Se ne manca uno, l'API restituisce `503` con un messaggio generico e non salva alcun dato. Non inserire segreti nel repository.

## Configurazione GitHub OAuth e dashboard

1. Creare o aprire l'OAuth App da GitHub, **Settings → Developer settings → OAuth Apps**.
2. Usare `https://www.bosainscooter.it` come Homepage URL e `https://www.bosainscooter.it/api/auth/callback/github` come Authorization callback URL.
3. Copiare Client ID e un nuovo Client Secret nelle variabili protette dell'ambiente interessato. GitHub mostra il secret soltanto al momento della generazione.
4. Generare `BETTER_AUTH_SECRET` con `npx auth@latest secret` oppure `openssl rand -base64 32`; non riutilizzarlo tra ambienti che hanno database separati.
5. Recuperare l'ID GitHub numerico dell'amministratore dalla risposta autenticata `GET https://api.github.com/user` o dal profilo API pubblico e impostarlo come `ADMIN_GITHUB_USER_ID`.
6. Abilitare `ADMIN_DASHBOARD_ENABLED=true` soltanto dopo aver configurato tutte le variabili precedenti e applicato le migration.

Better Auth richiede per GitHub gli scope `read:user` e `user:email`. Conserva il profilo amministrativo, i token OAuth cifrati e i metadati di sessione previsti dallo schema. Le sessioni scadono dopo otto ore e i record di sessione/verifica scaduti vengono rimossi al successivo accesso admin o OAuth.

## Configurazione Neon e migration

1. Creare un database Neon o collegarne uno dedicato al progetto.
2. Copiare `.env.example` in `.env.local` e impostare `DATABASE_URL` con la connection string del database di sviluppo. `.env.local` contiene segreti, è ignorato da Git e non deve essere committato.
3. Impostare `DATABASE_URL` nelle variabili d’ambiente Vercel per l’ambiente interessato, senza inserirla nel codice. Preview e Production dovrebbero usare database o branch Neon separati.
4. Generare una migration versionata dopo ogni modifica allo schema:

   ```bash
   npm run db:generate
   ```

5. Applicare esplicitamente le migration al database selezionato:

   ```bash
   npm run db:migrate
   ```

   Le migration non vengono eseguite automaticamente da `dev`, `build`, `start` o `check`.

6. Avviare l’applicazione:

   ```bash
   npm run dev
   ```

La persistenza usa due tabelle. `research_responses` contiene il questionario e non contiene email; l'eventuale email è salvata in `contact_requests`. Le due tabelle restano collegabili tramite la foreign key interna `research_response_id`, e i due inserimenti avvengono nella stessa transazione. Gli UUID non vengono restituiti al browser. L'invio di notifiche email non fa parte di questa implementazione.

## Hosting Vercel

`vercel.json` fissa le funzioni server nella regione `fra1` di Francoforte, vicina al database Neon in `eu-central-1`. Gli asset statici restano distribuiti tramite la rete edge globale di Vercel. Il progetto assume che non sia configurato alcun Log Drain: prima di abilitarne uno occorre documentare fornitore, dati esportati, retention, ruolo privacy e trasferimenti.

Verificare nel progetto Vercel che tutte le variabili siano presenti nel corretto ambiente. Preview e Production devono avere credenziali e database separati quando vengono entrambi abilitati. Controllare il piano Vercel attivo per registrare la retention effettiva dei Runtime Logs.

## Blocco prima della produzione

Il modulo non può essere attivato in produzione finché:

1. il provider non è stato scelto;
2. è stato verificato il luogo di conservazione e trattamento;
3. è stato chiarito e documentato il suo ruolo privacy;
4. sono stati verificati o sottoscritti i DPA applicabili di Neon e Vercel, inclusi sub-responsabili e trasferimenti;
5. `DATA_PROVIDER_TRANSFER_SAFEGUARDS` descrive soltanto garanzie realmente applicabili;
6. la configurazione OAuth GitHub, gli scope e l'account autorizzato sono stati verificati;
7. `/it/privacy` e `/en/privacy` riportano dati reali e coerenti con il deploy;
8. è stato definito e implementato un processo effettivo di cancellazione, anonimizzazione irreversibile o rinnovo documentato della necessità.

`reviewAfter` è una scadenza operativa di revisione fissata a 24 mesi, non una cancellazione automatica. Il sistema di storage definitivo deve eseguire e documentare l’esito della revisione.

## Qualità

```bash
npm run lint
npm test
npm run build
```

Le pagine sono generate staticamente da `content/it` e `content/en`; metadata, canonical, hreflang, JSON-LD, sitemap e breadcrumb sono centralizzati in `lib/seo`.

## Pubblicazione

Non effettuare il deploy del modulo finché la checklist privacy precedente non è completata. Dopo la configurazione, verificare in un ambiente di prova il blocco `503`, la persistenza transazionale su un database Neon non produttivo, `/robots.txt`, `/sitemap.xml`, canonical e invio form sul dominio reale.

## Local SEO esterna

Il codice non può sostituire il lavoro locale. Dopo aver definito davvero attività e sede, completare soltanto dati commerciali reali e coerenti. Non pubblicare indirizzi privati, non creare schede aziendali fittizie e non comprare recensioni o link.

Vedi anche `docs/seo-keyword-map.md`, `docs/seo-launch-checklist.md`, `docs/local-seo-launch-plan.md`, `docs/content-plan.md` e `docs/privacy-data-operations.md`.
