# Bosa in Scooter

Sito locale bilingue per richiedere scooter 50cc e 125cc a Bosa, con tariffe e condizioni indicative da confermare. Costruito con Next.js 16, App Router, TypeScript, React Server Components e Tailwind CSS.

## Stato del progetto

Il progetto è in stato validation: il sito è un esperimento di ricerca di mercato e non un sistema di prenotazione o un CRM. Il percorso principale raccoglie una risposta senza identificativi diretti; il ricontatto email è separato e facoltativo. Prima del lancio sostituire tutti i placeholder aziendali, approvare l'informativa e collegare il form a un endpoint sicuro.

## Avvio locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`; la root reindirizza a `/it`.

## Configurazione

1. Aggiornare `lib/config/business.ts` con dati reali e coerenti.
2. Impostare `NEXT_PUBLIC_SITE_URL` sul dominio canonico definitivo.
3. Impostare LEAD_WEBHOOK_URL su un endpoint server-to-server che accetti i record di validazione. Il provider deve applicare minimizzazione, controllo accessi e la revisione indicata da reviewAfter; senza la variabile il form restituisce volutamente un errore 503.
4. Sostituire i placeholder visuali con fotografie autentiche e ottimizzate.
5. Completare e far approvare /it/privacy e /en/privacy, identificando il provider webhook e le garanzie per eventuali trasferimenti.

## Qualità

```bash
npm run lint
npm test
npm run build
```

Le pagine sono generate staticamente da `content/it` e `content/en`; metadata, canonical, hreflang, JSON-LD, sitemap e breadcrumb sono centralizzati in `lib/seo`.

## Deploy su Vercel

Importare il repository in Vercel, impostare le due variabili d’ambiente e mantenere i comandi Next.js predefiniti. Dopo il primo deploy controllare `/robots.txt`, `/sitemap.xml`, canonical e invio form sul dominio reale.

## Local SEO esterna

Il codice non può sostituire il lavoro locale. Dopo aver definito attività e sede: creare e verificare il Profilo dell’attività su Google; scegliere la categoria pertinente; inserire contatti, servizi e orari reali; caricare foto autentiche; collegare il sito; raccogliere recensioni autentiche; ottenere link da hotel, B&B e partner locali; mantenere coerenti nome, indirizzo e telefono; collaborare con portali turistici pertinenti. Non comprare recensioni o link.

Vedi anche `docs/seo-keyword-map.md`, `docs/seo-launch-checklist.md`, `docs/local-seo-launch-plan.md` e `docs/content-plan.md`.


Operazioni privacy e conservazione: docs/privacy-data-operations.md
