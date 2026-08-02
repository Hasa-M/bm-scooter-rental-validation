import type { PageContent } from "@/lib/content/types";

const commonFaq = [
  { question: "Quale patente serve per uno scooter 125?", answer: "I requisiti dipendono dalla patente, dall’età e dalle condizioni del fornitore. Li confermeremo nel preventivo: non partire senza aver ricevuto una verifica scritta." },
  { question: "Si può viaggiare in due?", answer: "Soltanto se il mezzo è omologato per due persone e il conducente rispetta i requisiti applicabili. La condizione sarà confermata insieme al modello proposto." },
  { question: "Dove avviene il ritiro?", answer: "Il punto di ritiro è ancora da definire. Indica nel modulo dove alloggi: riceverai una proposta trasparente insieme al preventivo." },
  { question: "Sono previsti deposito e assicurazione?", answer: "Cauzione, coperture, franchigie e condizioni sono da confermare al momento del preventivo. Non pubblichiamo condizioni non ancora definite." },
];

export const itPages: PageContent[] = [
  {
    slug: "", alternateSlug: "", kind: "home", title: "Scooter a Bosa | Richiedi disponibilità", h1: "Bosa è più bella quando puoi muoverti liberamente", description: "Scopri il servizio di scooter 125cc in fase di attivazione a Bosa. Richiedi disponibilità senza impegno.", eyebrow: "Bosa · Sardegna occidentale", primaryKeyword: "scooter a Bosa", intro: "Un modo semplice per collegare il centro, Bosa Marina e la costa, senza dipendere dagli orari e senza presentare il servizio come già operativo.",
    sections: [
      { heading: "Perché esplorare Bosa in scooter", body: ["Le distanze tra il centro storico, il lungomare e le località costiere rendono utile un mezzo agile. La richiesta non è una prenotazione automatica: serve a verificare mezzo, prezzo e modalità reali."], bullets: ["Scooter 125cc da confermare", "Richiesta senza impegno", "Risposta con condizioni complete"] },
      { heading: "Organizza prima di arrivare", body: ["Invia date, numero di persone e struttura ricettiva. Ti risponderemo con disponibilità e dettagli, senza prezzi o promesse inventate."], bullets: ["Consulta come funziona", "Leggi le guide locali", "Chiedi disponibilità"] },
    ], faq: commonFaq.slice(0, 3),
  },
  {
    slug: "noleggio-scooter-bosa", alternateSlug: "scooter-rental-bosa", kind: "commercial", title: "Noleggio Scooter a Bosa | Scooter 125cc", h1: "Noleggio scooter a Bosa", description: "Noleggia uno scooter a Bosa per raggiungere Bosa Marina, le spiagge e la costa occidentale. Richiedi disponibilità e preventivo.", eyebrow: "Muoviti al tuo ritmo", primaryKeyword: "noleggio scooter Bosa", intro: "Scopri Bosa, Bosa Marina e la costa occidentale della Sardegna in libertà con uno scooter 125cc. Il servizio è in fase di attivazione: la richiesta serve a validare disponibilità, prezzo e ritiro.",
    sections: [
      { heading: "Un 125cc per la tua permanenza a Bosa", body: ["L’obiettivo è offrire mezzi adatti agli spostamenti locali, con casco e condizioni comunicate prima della conferma. Modelli, dotazioni e possibilità di viaggiare in due dipendono dalla proposta ricevuta."], bullets: ["Modello e cilindrata confermati nel preventivo", "Dotazioni di sicurezza da verificare", "Assistenza e procedura guasti comunicate per iscritto"] },
      { heading: "Come funziona", body: ["Invia la richiesta, ricevi una proposta e conferma soltanto dopo aver letto condizioni, coperture e luogo di ritiro."], bullets: ["1. Indica date e numero di scooter", "2. Ricevi disponibilità e prezzo", "3. Valuta documenti e condizioni", "4. Conferma con il fornitore"] },
      { heading: "Requisiti e documenti", body: ["Patente, documento, metodo di pagamento, cauzione ed eventuali limiti devono essere verificati prima della conferma. Condizione da confermare al momento del preventivo."] },
      { heading: "Dal centro alla marina", body: ["Uno scooter può essere pratico per alternare il centro storico, Bosa Marina e le tappe costiere. Pianifica ogni itinerario tenendo conto di meteo, fondo stradale, carburante e capacità di guida."] },
    ], faq: commonFaq,
  },
  {
    slug: "noleggio-scooter-bosa-marina", alternateSlug: "scooter-rental-bosa-marina", kind: "commercial", title: "Noleggio Scooter a Bosa Marina | Richiedi disponibilità", h1: "Scooter a Bosa Marina", description: "Alloggi a Bosa Marina? Richiedi disponibilità per uno scooter e verifica ritiro, consegna e condizioni.", eyebrow: "Per chi soggiorna sul mare", primaryKeyword: "noleggio scooter Bosa Marina", intro: "Se alloggi a Bosa Marina, indica la struttura ricettiva: verificheremo se ritiro o consegna sono possibili. Nessuna modalità è data per certa prima del preventivo.",
    sections: [
      { heading: "Tra marina e centro storico", body: ["Soggiornare sul mare e visitare il centro richiede un minimo di organizzazione. Lo scooter può essere una soluzione flessibile, ma il punto di ritiro va confermato."], bullets: ["Hotel o appartamento facoltativo nel form", "Consegna non garantita", "Dettagli confermati per iscritto"] },
      { heading: "Spiagge e dintorni", body: ["Prima di partire verifica itinerario, condizioni della strada, meteo e possibilità di sosta. Le guide del sito offrono spunti, non sostituiscono informazioni locali aggiornate."] },
    ], faq: commonFaq,
  },
  {
    slug: "prezzi", alternateSlug: "prices", kind: "prices", title: "Prezzi Scooter a Bosa | Costi da confermare", h1: "Prezzi e condizioni", description: "Come viene definito il prezzo del noleggio scooter a Bosa: durata, mezzo, stagione, coperture e servizi.", eyebrow: "Preventivo trasparente", primaryKeyword: "prezzi noleggio scooter Bosa", intro: "Non pubblichiamo una tariffa fittizia. In fase di validazione, ogni prezzo deve essere confermato insieme a mezzo, coperture, cauzione e modalità di ritiro.",
    sections: [
      { heading: "Cosa può incidere sul prezzo", body: ["Durata, periodo, modello, coperture, accessori e logistica possono cambiare il totale."], bullets: ["Giorni e fascia stagionale", "Modello e dotazioni", "Coperture e franchigie", "Ritiro o eventuale consegna"] },
      { heading: "Cosa deve contenere il preventivo", body: ["Chiedi sempre totale, deposito, politica carburante, chilometraggio, assistenza, cancellazione e costi extra. Se un punto non è scritto, chiedi chiarimenti prima di confermare."] },
    ], faq: commonFaq,
  },
  {
    slug: "come-funziona", alternateSlug: "how-it-works", kind: "info", title: "Come funziona il noleggio scooter a Bosa", h1: "Come funziona", description: "Dalla richiesta di disponibilità alla conferma: tutti i passaggi per organizzare uno scooter a Bosa.", eyebrow: "Quattro passaggi chiari", primaryKeyword: "come noleggiare scooter a Bosa", intro: "Il sito raccoglie richieste qualificate; non effettua prenotazioni o pagamenti automatici.",
    sections: [
      { heading: "1. Invia le informazioni essenziali", body: ["Date, scooter, persone e contatto ci permettono di verificare una soluzione realistica."] },
      { heading: "2. Ricevi la proposta", body: ["Disponibilità, prezzo, modello, luogo di ritiro e condizioni devono arrivare prima della conferma."] },
      { heading: "3. Verifica documenti e coperture", body: ["Controlla patente, deposito, assicurazione, franchigia e assistenza. Non presumere che siano uguali per tutti i fornitori."] },
      { heading: "4. Conferma consapevolmente", body: ["La richiesta inviata dal sito non blocca automaticamente un mezzo."] },
    ], faq: commonFaq,
  },
  {
    slug: "domande-frequenti", alternateSlug: "faq", kind: "info", title: "Domande frequenti sullo scooter a Bosa", h1: "Domande frequenti", description: "Patente, documenti, passeggero, cauzione, ritiro e assistenza: risposte trasparenti prima del noleggio.", eyebrow: "Prima di partire", primaryKeyword: "domande noleggio scooter Bosa", intro: "Le condizioni definitive saranno sempre quelle incluse nella proposta del fornitore.", sections: [{ heading: "Informazioni da confermare", body: ["Non inventiamo regole operative, prezzi o coperture. Usa queste risposte come lista di controllo per il preventivo."] }], faq: commonFaq,
  },
  {
    slug: "contatti", alternateSlug: "contact", kind: "contact", title: "Contatti | Scooter Bosa", h1: "Richiedi disponibilità", description: "Invia date e dettagli del soggiorno per verificare uno scooter a Bosa o Bosa Marina.", eyebrow: "Richiesta senza impegno", primaryKeyword: "contatti scooter Bosa", intro: "Compila il modulo. Riceverai conferma di disponibilità, prezzo e modalità di ritiro: l’invio non equivale a una prenotazione.", sections: [{ heading: "Prima dell’invio", body: ["Più informazioni fornisci, più precisa potrà essere la risposta. Non inserire documenti, numeri di patente o dati di pagamento nelle note."] }],
  },
  {
    slug: "guide", alternateSlug: "guides", kind: "info", title: "Guide per visitare Bosa e la costa", h1: "Guide locali", description: "Guide pratiche per organizzare gli spostamenti a Bosa, Bosa Marina e sulla costa occidentale.", eyebrow: "Idee utili, non pubblicità", primaryKeyword: "guide Bosa senza auto", intro: "Contenuti iniziali da revisionare con esperienza locale e fonti aggiornate prima del lancio pubblico.", sections: [{ heading: "Pianifica con informazioni aggiornate", body: ["Meteo, viabilità, regole e servizi cambiano. Verifica sempre le condizioni reali prima di partire."] }],
  },
  {
    slug: "guide/visitare-bosa-senza-auto", alternateSlug: "guides/visit-bosa-without-a-car", kind: "guide", title: "Visitare Bosa senza auto: guida pratica", h1: "Visitare Bosa senza auto", description: "Come organizzare una vacanza a Bosa senza macchina: spostamenti, centro, marina e quando può servire uno scooter.", eyebrow: "Guida locale", primaryKeyword: "visitare Bosa senza auto", intro: "Una vacanza senza auto è possibile se pianifichi alloggio, arrivo e spostamenti. Uno scooter può ampliare il raggio, ma non è l’unica soluzione.", updatedAt: "2026-08-02",
    sections: [
      { heading: "Scegliere bene dove alloggiare", body: ["Centro e marina rispondono a esigenze diverse. Verifica distanza reale dai luoghi che vuoi frequentare e i collegamenti disponibili nelle tue date."] },
      { heading: "A piedi, trasporto pubblico o scooter", body: ["Camminare funziona per aree compatte; i servizi pubblici vanno verificati sugli orari ufficiali; lo scooter aggiunge autonomia per chi ha esperienza di guida."] },
      { heading: "Quando lo scooter ha senso", body: ["Può essere utile per alternare centro, marina e dintorni, soprattutto per soggiorni con più tappe. Valuta meteo, bagagli e sicurezza."] },
    ], faq: commonFaq.slice(0,2),
  },
  {
    slug: "guide/come-muoversi-a-bosa", alternateSlug: "guides/getting-around-bosa", kind: "guide", title: "Come muoversi a Bosa e Bosa Marina", h1: "Come muoversi a Bosa", description: "Confronto pratico tra spostamenti a piedi, trasporto pubblico, auto e scooter tra Bosa e Bosa Marina.", eyebrow: "Guida locale", primaryKeyword: "come muoversi a Bosa", intro: "Il mezzo migliore dipende da alloggio, stagione, itinerario e capacità di guida. Questa guida aiuta a scegliere senza promesse assolute.", updatedAt: "2026-08-02",
    sections: [
      { heading: "Per gli spostamenti brevi", body: ["Il centro si presta a essere esplorato con calma. Per percorsi e accessibilità, verifica la mappa e le condizioni sul posto."] },
      { heading: "Tra Bosa e Bosa Marina", body: ["Controlla collegamenti e frequenze per le date del viaggio. Uno scooter può rendere gli orari più flessibili, se le condizioni di guida sono adatte."] },
      { heading: "Scegli in base alla giornata", body: ["Vento, pioggia, caldo e traffico incidono. Mantieni sempre un’alternativa ragionevole."] },
    ], faq: commonFaq.slice(0,2),
  },
  {
    slug: "guide/spiagge-da-raggiungere-in-scooter-da-bosa", alternateSlug: "guides/beaches-near-bosa-by-scooter", kind: "guide", title: "Spiagge vicino a Bosa da raggiungere in scooter", h1: "Spiagge da raggiungere in scooter da Bosa", description: "Come pianificare una giornata sulle spiagge vicino a Bosa in scooter, senza inventare tempi o parcheggi.", eyebrow: "Guida locale", primaryKeyword: "spiagge vicino Bosa scooter", intro: "La costa offre diverse possibilità, ma accessi, soste e viabilità vanno controllati con fonti aggiornate. Qui trovi un metodo pratico per pianificare.", updatedAt: "2026-08-02",
    sections: [
      { heading: "Prima di scegliere la spiaggia", body: ["Verifica previsioni, vento, accesso, servizi e regolamentazione della sosta. Non affidarti a un solo riepilogo online."] },
      { heading: "Preparare lo scooter", body: ["Controlla carburante, caschi, vano disponibile e contatti di assistenza. Non lasciare oggetti di valore sul mezzo."] },
      { heading: "Rientrare con margine", body: ["Pianifica il ritorno con luce e tempo sufficienti. Se non conosci la strada, evita itinerari improvvisati."] },
    ], faq: commonFaq.slice(1,3),
  },
  {
    slug: "guide/itinerario-in-scooter-bosa-alghero", alternateSlug: "guides/bosa-alghero-scooter-route", kind: "guide", title: "Itinerario Bosa–Alghero in scooter: cosa valutare", h1: "Itinerario in scooter da Bosa ad Alghero", description: "Una guida prudente per valutare l’itinerario panoramico tra Bosa e Alghero in scooter.", eyebrow: "Guida locale", primaryKeyword: "itinerario scooter Bosa Alghero", intro: "È un itinerario da affrontare solo con mezzo, esperienza e meteo adeguati. Tempi, condizioni e limitazioni devono essere verificati il giorno della partenza.", updatedAt: "2026-08-02",
    sections: [
      { heading: "Valuta se è il percorso giusto", body: ["Considera esperienza, passeggero, autonomia, vento e condizioni della strada. Il noleggiatore deve confermare che il percorso sia consentito dal contratto."] },
      { heading: "Controlli prima di partire", body: ["Verifica carburante, gomme, meteo, copertura telefonica e contatti di assistenza. Comunica a qualcuno il piano della giornata."] },
      { heading: "La sicurezza viene prima dell’itinerario", body: ["Rimanda la partenza se le condizioni non sono favorevoli. Questa guida non sostituisce indicazioni ufficiali o valutazione sul posto."] },
    ], faq: commonFaq.slice(0,3),
  },
];
