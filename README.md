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
- `DATA_PROVIDER_NAME`: nome reale del fornitore che riceve e conserva le risposte;
- `DATA_PROVIDER_ROLE`: ruolo privacy verificato del fornitore;
- `DATA_PROVIDER_REGION`: luogo o regione effettiva del trattamento;
- `DATA_PROVIDER_TRANSFER_SAFEGUARDS`: garanzie effettivamente applicabili agli eventuali trasferimenti;
- `DATA_PROVIDER_PRIVACY_POLICY_URL`: link reale all’informativa del fornitore, se disponibile.

`DATABASE_URL`, nome, ruolo e regione del provider sono controllati lato server. Le garanzie di trasferimento e il link alla policy devono essere valorizzati quando effettivamente applicabili. Se manca la configurazione minima, l’API restituisce `503` con un messaggio generico e non salva alcun dato. Non inserire segreti nel repository.

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

La persistenza usa due tabelle. `research_responses` contiene il questionario e non contiene email; l’eventuale email è salvata in `contact_requests`. Le due tabelle restano collegabili tramite la foreign key interna `research_response_id`, e i due inserimenti avvengono nella stessa transazione. Gli UUID non vengono restituiti al browser. L’invio di notifiche email non fa parte di questa implementazione.

## Blocco prima della produzione

Il modulo non può essere attivato in produzione finché:

1. il provider non è stato scelto;
2. è stato verificato il luogo di conservazione e trattamento;
3. è stato chiarito e documentato il suo ruolo privacy;
4. è stato sottoscritto l’eventuale accordo sul trattamento dei dati;
5. `/it/privacy` e `/en/privacy` sono state aggiornate con dati reali;
6. è stato definito e implementato un processo effettivo di cancellazione, anonimizzazione irreversibile o rinnovo documentato della necessità.

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
