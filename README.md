# Bosa in Scooter

Sito locale bilingue per richiedere scooter 50cc e 125cc a Bosa, con tariffe e condizioni indicative da confermare. Costruito con Next.js 16, App Router, TypeScript, React Server Components e Tailwind CSS.

## Stato del progetto

Il valore businessConfig.status è active: il sito presenta un servizio attivo con richiesta di disponibilità e condizioni commerciali provvisorie da confermare. Prima del lancio sostituire tutti i placeholder aziendali e collegare il form a un endpoint sicuro.

## Avvio locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`; la root reindirizza a `/it`.

## Configurazione

1. Aggiornare `lib/config/business.ts` con dati reali e coerenti.
2. Impostare `NEXT_PUBLIC_SITE_URL` sul dominio canonico definitivo.
3. Impostare `LEAD_WEBHOOK_URL` su un endpoint server-to-server che accetti i lead. Senza questa variabile il form restituisce volutamente un errore 503, evitando di perdere richieste fingendo un salvataggio.
4. Sostituire i placeholder visuali con fotografie autentiche e ottimizzate.
5. Aggiungere documenti privacy/cookie/condizioni approvati.

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
