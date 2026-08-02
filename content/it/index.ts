import type { PageContent } from "@/lib/content/types";

const commonFaq = [
  {
    question: "Serve la patente per noleggiare uno scooter?",
    answer: "Sì. Il conducente e l’eventuale secondo conducente devono presentare una patente originale, valida in Italia e adatta al modello 50cc o 125cc scelto, insieme a carta d’identità o passaporto validi. Categoria, età e idoneità vengono verificate prima della conferma.",
  },
  {
    question: "Ogni scooter può trasportare due persone?",
    answer: "La flotta è prevista con mezzi omologati per conducente e un passeggero. La dotazione provvisoria comprende due caschi, bauletto e lucchetto o bloccadisco; modello e dotazioni vengono confermati nel preventivo.",
  },
  {
    question: "Dove avvengono ritiro e riconsegna?",
    answer: "Il ritiro presso la sede in zona Viale Alghero a Bosa è incluso. Consegna o ritiro a domicilio a Bosa e Bosa Marina sono disponibili su richiesta; fuori zona verifichiamo prima la fattibilità e prepariamo un preventivo.",
  },
  {
    question: "Quali sono chilometraggio e cauzione?",
    answer: "Il noleggio minimo è di 24 ore e comprende 150 km, anche se utilizzi lo scooter soltanto per quattro ore. La formula 7 giorni comprende 900 km. I chilometri extra costano 0,25 €/km. È prevista una cauzione di 500 € per scooter; modalità e restituzione vengono confermate prima del noleggio.",
  },
  {
    question: "Quali coperture sono incluse?",
    answer: "Il prezzo comprende provvisoriamente RC per veicolo a noleggio senza conducente, danni a terzi, passeggero nei limiti di polizza, infortuni conducente, furto e incendio, danni accidentali o collisione e assistenza stradale. Massimali, esclusioni e responsabilità restano quelli della polizza e del contratto confermati per iscritto.",
  },
  {
    question: "Come funziona il carburante?",
    answer: "La formula è pieno-pieno: ricevi lo scooter con il serbatoio pieno e lo restituisci pieno. Le condizioni definitive vengono riepilogate prima del ritiro.",
  },
];

export const itPages: PageContent[] = [
  {
    slug: "",
    alternateSlug: "",
    kind: "home",
    title: "Bosa in Scooter | Noleggio scooter 50cc e 125cc",
    h1: "Bosa in Scooter",
    description: "Scooter 50cc e 125cc per muoversi tra Bosa, Bosa Marina e la costa. Consulta le tariffe indicative e facci sapere se sei interessato.",
    eyebrow: "Mobilità turistica · Bosa",
    primaryKeyword: "scooter a Bosa",
    intro: "Più libertà per chi visita Bosa, un servizio in più per il territorio. Scegli uno scooter 50cc o 125cc e vivi centro, marina e costa con tempi più flessibili.",
    sections: [
      {
        heading: "Muoversi meglio, vivere di più il territorio",
        body: ["Bosa in Scooter nasce per rendere più semplici gli spostamenti di chi soggiorna qui e favorire una scoperta più ampia delle attività, delle spiagge e dei luoghi della zona."],
        bullets: ["Scooter 50cc e 125cc", "Mezzi per due persone", "Contatto diretto e condizioni chiare"],
      },
      {
        heading: "Una formula adatta al tuo soggiorno",
        body: ["Da 24 ore a 7 giorni o più: raccontaci il tuo programma e valuteremo modello, periodo e condizioni più adatti. Tariffe e servizi pubblicati sono indicativi e diventano definitivi soltanto nel preventivo."],
        bullets: ["Ritiro in zona Viale Alghero", "Consegna e ritiro su richiesta", "Due caschi e dotazioni incluse"],
      },
    ],
    faq: commonFaq.slice(0, 4),
  },
  {
    slug: "noleggio-scooter-bosa",
    alternateSlug: "scooter-rental-bosa",
    kind: "commercial",
    title: "Noleggio scooter a Bosa | Bosa in Scooter",
    h1: "Noleggio scooter 50cc e 125cc a Bosa",
    description: "Noleggia uno scooter a Bosa per il centro, Bosa Marina e la costa. Mezzi per due persone, coperture e dotazioni incluse.",
    eyebrow: "Bosa al tuo ritmo",
    primaryKeyword: "noleggio scooter Bosa",
    intro: "Scegli il mezzo più adatto alla tua esperienza e al tuo itinerario. Ti aiutiamo a organizzare una mobilità semplice tra il centro storico, Bosa Marina e le tappe della costa.",
    sections: [
      {
        heading: "La flotta",
        body: ["Sono previsti scooter 50cc e 125cc, tutti omologati per conducente e un passeggero. Il modello disponibile e i requisiti di guida vengono verificati prima della conferma."],
        bullets: ["Due caschi", "Bauletto", "Lucchetto o bloccadisco", "Secondo conducente registrato"],
      },
      {
        heading: "Cosa è incluso",
        body: ["IVA, dotazioni, formula pieno-pieno e le coperture indicate sono comprese nel prezzo provvisorio. Le condizioni della polizza e del contratto vengono sempre comunicate per iscritto."],
        bullets: ["RC e danni a terzi", "Passeggero e infortuni conducente", "Furto, incendio e collisione", "Assistenza stradale"],
      },
      {
        heading: "Documenti necessari",
        body: ["Servono patente originale valida in Italia e adatta allo scooter scelto, più carta d’identità o passaporto validi. Gli stessi documenti sono richiesti per l’eventuale secondo conducente."],
      },
      {
        heading: "Dal centro alla marina",
        body: ["Uno scooter rende più flessibili gli spostamenti quotidiani e aiuta a distribuire la visita tra quartieri, spiagge e attività locali. Scegli sempre il modello in base a esperienza, percorso e condizioni della giornata."],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "noleggio-scooter-bosa-marina",
    alternateSlug: "scooter-rental-bosa-marina",
    kind: "commercial",
    title: "Noleggio scooter a Bosa Marina | Bosa in Scooter",
    h1: "Scooter per Bosa Marina",
    description: "Richiedi uno scooter 50cc o 125cc a Bosa Marina, con consegna e ritiro a domicilio disponibili su richiesta.",
    eyebrow: "Dal mare al centro",
    primaryKeyword: "noleggio scooter Bosa Marina",
    intro: "Soggiorni a Bosa Marina? Puoi ritirare lo scooter presso la sede in zona Viale Alghero oppure chiedere consegna e ritiro direttamente al tuo alloggio.",
    sections: [
      {
        heading: "Consegna pensata per il soggiorno",
        body: ["Una sola tratta a Bosa o Bosa Marina ha un costo indicativo di 20–25 €; consegna e ritiro insieme 35–45 €. Tempi, indirizzo e importo definitivo vengono confermati con la richiesta."],
        bullets: ["Ritiro in sede incluso", "Consegna o ritiro su richiesta", "Fuori zona previa verifica di fattibilità"],
      },
      {
        heading: "Possibile consegna gratuita",
        body: ["Le prenotazioni di almeno 10 giorni o di due scooter per almeno 7 giorni possono beneficiare della consegna gratuita. La disponibilità dell’agevolazione viene valutata e confermata caso per caso."],
      },
      {
        heading: "Tra marina, centro e dintorni",
        body: ["Lo scooter permette di alternare mare, centro storico e attività locali senza organizzare ogni giornata attorno a un solo punto di partenza. Meteo, strada e capacità di guida restano sempre parte della scelta."],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "prezzi",
    alternateSlug: "prices",
    kind: "prices",
    title: "Prezzi noleggio scooter a Bosa | Tariffe indicative",
    h1: "Tariffe e formule",
    description: "Tariffe indicative per scooter a Bosa: noleggio minimo di 24 ore, formula 7 giorni, chilometri inclusi, cauzione e consegna.",
    eyebrow: "Prezzi trasparenti",
    primaryKeyword: "prezzi noleggio scooter Bosa",
    intro: "Consulta le tariffe stagionali indicative. Disponibilità, modello, coperture, cauzione e servizi diventano definitivi soltanto nel preventivo e nel contratto.",
    sections: [
      {
        heading: "Chilometri inclusi",
        body: ["Il noleggio minimo di 24 ore comprende 150 km; la stessa tariffa si applica anche quando lo scooter viene utilizzato soltanto per quattro ore. La formula 7 giorni comprende 900 km. I chilometri oltre la soglia prevista costano 0,25 €/km."],
        bullets: ["Durata minima: 24 ore", "Durate da 2 a 6 giorni: prezzo su richiesta", "Fuori giugno–ottobre: prezzo su richiesta"],
      },
      {
        heading: "Cauzione e servizi inclusi",
        body: ["È prevista una cauzione indicativa di 500 € per scooter. IVA, secondo conducente registrato, due caschi, bauletto, dispositivo antifurto, pieno-pieno e coperture elencate sono inclusi nelle condizioni provvisorie."],
      },
      {
        heading: "Consegna e ritiro",
        body: ["Il ritiro in sede è incluso. Per Bosa e Bosa Marina è previsto indicativamente un costo di 20–25 € per una sola tratta e 35–45 € per consegna e ritiro. Fuori zona, fattibilità e costo sono su preventivo."],
      },
    ],
    faq: commonFaq.slice(2),
  },
  {
    slug: "come-funziona",
    alternateSlug: "how-it-works",
    kind: "info",
    title: "Come funziona il noleggio | Bosa in Scooter",
    h1: "Come funziona",
    description: "Dalla richiesta al ritiro: come scegliere e noleggiare uno scooter 50cc o 125cc a Bosa.",
    eyebrow: "Quattro passaggi semplici",
    primaryKeyword: "come noleggiare scooter a Bosa",
    intro: "Il sito raccoglie manifestazioni di interesse: non effettua prenotazioni o pagamenti automatici. Ogni condizione viene confermata prima del noleggio.",
    sections: [
      { heading: "1. Invia la richiesta", body: ["Indica date, numero di scooter, modello preferito, età, esperienza di patente e località del soggiorno."] },
      { heading: "2. Scegli il mezzo", body: ["Verifichiamo disponibilità di 50cc o 125cc, requisiti della patente e formula più adatta al tuo programma."] },
      { heading: "3. Ricevi il preventivo", body: ["Prezzo, chilometri, cauzione, coperture, dotazioni e logistica vengono riepilogati per iscritto."] },
      { heading: "4. Ritira o richiedi la consegna", body: ["Puoi ritirare in zona Viale Alghero oppure concordare consegna e raccolta, se fattibili."] },
    ],
    faq: commonFaq,
  },
  {
    slug: "domande-frequenti",
    alternateSlug: "faq",
    kind: "info",
    title: "FAQ noleggio scooter a Bosa | Bosa in Scooter",
    h1: "Domande frequenti",
    description: "Patente, documenti, passeggero, cauzione, assicurazione, carburante, ritiro e consegna degli scooter a Bosa.",
    eyebrow: "Prima di partire",
    primaryKeyword: "domande noleggio scooter Bosa",
    intro: "Qui trovi le condizioni attualmente previste. Essendo provvisorie, devono essere confermate nel preventivo e nel contratto prima del ritiro.",
    sections: [
      {
        heading: "Una conferma chiara prima del noleggio",
        body: ["Non inviare documenti o dati di pagamento nel modulo. Ti chiederemo ciò che serve attraverso il canale concordato e riceverai tutte le condizioni per iscritto."],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "contatti",
    alternateSlug: "contact",
    kind: "contact",
    title: "Facci sapere se sei interessato | Bosa in Scooter",
    h1: "Facci sapere se sei interessato",
    description: "Condividi il tuo interesse per uno scooter 50cc o 125cc e aiutaci a organizzare il servizio sul territorio.",
    eyebrow: "Contatto diretto",
    primaryKeyword: "contatti scooter Bosa",
    intro: "Raccontaci quale scooter ti interessa, quando vorresti utilizzarlo e dove soggiornerai. Ti contatteremo esclusivamente via email.",
    sections: [
      {
        heading: "Informazioni utili",
        body: ["Seleziona la località del soggiorno e il modello che preferisci. Usa le note soltanto per aggiungere esigenze particolari; non inserire documenti o dati di pagamento."],
      },
    ],
  },
  {
    slug: "guide",
    alternateSlug: "guides",
    kind: "info",
    title: "Guide per muoversi a Bosa | Bosa in Scooter",
    h1: "Guide locali",
    description: "Consigli essenziali per muoversi tra Bosa, marina, spiagge e costa.",
    eyebrow: "Conoscere il territorio",
    primaryKeyword: "guide Bosa senza auto",
    intro: "Quattro guide pratiche per scegliere come spostarti, preparare una giornata al mare e valutare gli itinerari più lunghi.",
    sections: [
      {
        heading: "Scegli la guida",
        body: ["Parti dal tipo di giornata: centro senza auto, collegamenti con Bosa Marina, spiagge vicine oppure itinerario verso Alghero. Per il noleggio, indica il percorso previsto così possiamo valutare modello e chilometri."],
        bullets: ["Visitare Bosa senza auto", "Muoversi tra centro e marina", "Raggiungere le spiagge", "Valutare la strada Bosa–Alghero"],
      },
    ],
  },
  {
    slug: "guide/visitare-bosa-senza-auto",
    alternateSlug: "guides/visit-bosa-without-a-car",
    kind: "guide",
    title: "Visitare Bosa senza auto | Guida alla mobilità",
    h1: "Visitare Bosa senza auto",
    description: "Come combinare alloggio, camminate, trasporti e scooter durante il soggiorno.",
    eyebrow: "Guida locale",
    primaryKeyword: "visitare Bosa senza auto",
    intro: "Una vacanza senza macchina funziona meglio se arrivo, bagagli e spostamenti quotidiani vengono organizzati separatamente.",
    sections: [
      {
        heading: "Scegli la zona in cui alloggiare",
        body: ["Il centro è comodo per vie, attività e servizi; la marina per chi concentra il soggiorno sul mare. Se vuoi frequentare entrambe le aree, pianifica prima il collegamento e la frequenza degli spostamenti."],
      },
      {
        heading: "Gestisci arrivo e bagagli",
        body: ["Organizza il trasferimento con le valigie prima di pensare allo scooter. Una volta sistemato il bagaglio, il mezzo diventa più pratico per gli spostamenti giornalieri e l’eventuale consegna può essere valutata in base alla località selezionata."],
      },
      {
        heading: "Usa il mezzo giusto per ogni tratta",
        body: ["Cammina nelle aree compatte, verifica i trasporti sulle date effettive e valuta uno scooter per marina, spiagge e dintorni. La scelta tra 50cc e 125cc dipende da patente, esperienza e percorso."],
      },
    ],
    faq: commonFaq.slice(0, 3),
  },
  {
    slug: "guide/come-muoversi-a-bosa",
    alternateSlug: "guides/getting-around-bosa",
    kind: "guide",
    title: "Come muoversi a Bosa e Bosa Marina",
    h1: "Come muoversi a Bosa",
    description: "Quando conviene camminare e quando scegliere uno scooter tra centro e marina.",
    eyebrow: "Guida locale",
    primaryKeyword: "come muoversi a Bosa",
    intro: "Distanza, bagagli e frequenza degli spostamenti aiutano a scegliere il mezzo senza complicare la giornata.",
    sections: [
      {
        heading: "Centro storico a piedi",
        body: ["Per una giornata concentrata nel centro, camminare evita il problema del parcheggio e permette di fermarsi con libertà. Valuta soltanto pendenze, caldo e distanza dall’alloggio."],
      },
      {
        heading: "Centro e Bosa Marina",
        body: ["Se prevedi più spostamenti tra centro e mare, lo scooter offre maggiore flessibilità. Considera passeggero, bagagli e comfort prima di scegliere il modello."],
      },
      {
        heading: "50cc o 125cc",
        body: ["Il 50cc è indicato soprattutto per il borgo e le località di mare vicine; il 125cc è più adatto a paesi circostanti e calette più lontane, nel rispetto di patente e condizioni del noleggio."],
      },
    ],
    faq: commonFaq.slice(0, 3),
  },
  {
    slug: "guide/spiagge-da-raggiungere-in-scooter-da-bosa",
    alternateSlug: "guides/beaches-near-bosa-by-scooter",
    kind: "guide",
    title: "Spiagge vicino a Bosa in scooter",
    h1: "Raggiungere le spiagge in scooter",
    description: "Percorso, dotazioni e rientro: cosa preparare per una giornata al mare.",
    eyebrow: "Guida locale",
    primaryKeyword: "spiagge vicino Bosa scooter",
    intro: "La destinazione conta quanto il viaggio: distanza, strada e ciò che porti determinano il modello e l’organizzazione della giornata.",
    sections: [
      {
        heading: "Valuta percorso e chilometri",
        body: ["Controlla distanza, tipo di strada, vento, accesso e parcheggio. Confronta l’intero tragitto con i 150 km inclusi nelle 24 ore e considera comfort e spazio se viaggi in due."],
      },
      {
        heading: "Prepara il mezzo",
        body: ["Prima di partire verifica pieno, caschi, pneumatici, bauletto, antifurto e contatto di assistenza. Porta soltanto oggetti che possono essere custoditi correttamente."],
      },
      {
        heading: "Parcheggio e rientro",
        body: ["Usa aree consentite, inserisci sempre bloccasterzo e antifurto e conserva tempo sufficiente per il ritorno. Se vento o visibilità peggiorano, scegli un percorso più breve."],
      },
    ],
    faq: commonFaq.slice(1, 6),
  },
  {
    slug: "guide/itinerario-in-scooter-bosa-alghero",
    alternateSlug: "guides/bosa-alghero-scooter-route",
    kind: "guide",
    title: "Itinerario Bosa–Alghero in scooter",
    h1: "Da Bosa ad Alghero in scooter",
    description: "Mezzo, chilometri e condizioni da verificare prima della strada costiera.",
    eyebrow: "Guida locale",
    primaryKeyword: "itinerario scooter Bosa Alghero",
    intro: "La strada costiera richiede esperienza e una valutazione completa del viaggio di andata e ritorno.",
    sections: [
      {
        heading: "Verifica l’idoneità del percorso",
        body: ["Comunica l’itinerario nella richiesta: modello, patente, passeggero ed esperienza devono essere compatibili con una strada extraurbana più impegnativa dei normali spostamenti locali."],
      },
      {
        heading: "Calcola l’intero viaggio",
        body: ["Confronta andata, ritorno e deviazioni con i chilometri inclusi. Prima di lasciare Bosa controlla carburante, pneumatici, previsioni e contatti di assistenza."],
      },
      {
        heading: "Decidi in base alle condizioni",
        body: ["Vento, visibilità e traffico possono cambiare lungo la costa. Accorcia o rimanda l’itinerario se non puoi completarlo con margine e in sicurezza."],
      },
    ],
    faq: commonFaq.slice(0, 5),
  },
];
