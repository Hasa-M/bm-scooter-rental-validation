# Checklist SEO di lancio

## Prima del lancio

- [ ] Completare soltanto i dati commerciali reali necessari in `lib/config/business.ts`; non pubblicare un indirizzo privato o dati aziendali inesistenti.
- [ ] Configurare `NEXT_PUBLIC_SITE_URL`, `DATABASE_URL` e tutti i campi minimi `DATA_PROVIDER_*`; applicare esplicitamente le migration e verificare che la configurazione incompleta restituisca `503`.
- [ ] Scegliere e verificare il provider, il luogo del trattamento, il ruolo privacy, l’eventuale accordo e le garanzie effettive; aggiornare /it/privacy e /en/privacy con dati reali.
- [ ] Verificare HTTPS, canonical, hreflang, metadata, sitemap, robots, favicon e social image.
- [ ] Sostituire tutti i placeholder con fotografie autentiche, compresse e dotate di alt pertinente.
- [ ] Verificare prezzi, coperture, cauzione, patente, ritiro, assistenza e contatti.
- [ ] Revisionare le guide con una persona del posto e fonti aggiornate.
- [ ] Implementare e provare il processo effettivo di cancellazione, anonimizzazione irreversibile o rinnovo documentato alla scadenza `reviewAfter`.
- [ ] Testare mobile, link, form, consenso, Lighthouse e Rich Results Test.
- [ ] Puntare a Performance ≥90, Accessibility ≥95, Best Practices ≥95 e SEO 100 senza degradare l’esperienza.

## Dopo il lancio

- [ ] Verificare il dominio in Google Search Console e inviare `/sitemap.xml`.
- [ ] Richiedere l’indicizzazione delle pagine commerciali prioritarie.
- [ ] Creare e collegare il Profilo dell’attività su Google.
- [ ] Costruire partnership reali con strutture ricettive e portali locali.
- [ ] Pubblicare contenuti soltanto dopo revisione e arricchimento locale.
- [ ] Monitorare query, impression, CTR, indicizzazione e Core Web Vitals.
- [ ] Migliorare le pagine con impression e CTR basso; aggiornare prima dell’estate.
