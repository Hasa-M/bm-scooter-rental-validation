import { definePages } from "@/lib/content/types";

const commonFaq = [
  {
    question: "Serve la patente per noleggiare uno scooter?",
    answer: "Sì. Il conducente e l’eventuale secondo conducente devono presentare una patente originale, valida in Italia e adatta al modello 50cc o 125cc scelto, insieme a carta d’identità o passaporto validi. Categoria, età e idoneità vengono verificate prima della conferma.",
  },
  {
    question: "Ogni scooter può trasportare due persone?",
    answer: "La flotta è pensata per viaggiare anche in due: gli scooter saranno omologati per conducente e passeggero e forniti con due caschi, bauletto e lucchetto o bloccadisco. Modello e dotazioni saranno sempre riepilogati nella conferma.",
  },
  {
    question: "Dove avvengono ritiro e riconsegna?",
    answer: "Il ritiro è previsto presso una base in zona Viale Alghero a Bosa. Stiamo valutando anche consegna e ritiro presso l’alloggio a Bosa e Bosa Marina: indica dove soggiornerai per aiutarci a definire il servizio. Fuori zona, disponibilità e costo saranno valutati su richiesta.",
  },
  {
    question: "Quali sono chilometraggio e cauzione?",
    answer: "Il noleggio minimo è di 24 ore e comprende 150 km, anche se utilizzi lo scooter soltanto per quattro ore. La formula 7 giorni comprende 900 km. I chilometri extra costano 0,25 €/km. È prevista una cauzione di 500 € per scooter; modalità e restituzione vengono confermate prima del noleggio.",
  },
  {
    question: "Quali coperture sono incluse?",
    answer: "La formula che stiamo definendo comprende RC per veicolo a noleggio senza conducente, danni a terzi, passeggero nei limiti di polizza, infortuni conducente, furto e incendio, danni accidentali o collisione e assistenza stradale. Massimali, esclusioni e responsabilità saranno confermati per iscritto prima del noleggio.",
  },
  {
    question: "Come funziona il carburante?",
    answer: "La formula è pieno-pieno: ricevi lo scooter con il serbatoio pieno e lo restituisci pieno. Le condizioni definitive vengono riepilogate prima del ritiro.",
  },
];

export const itPages = definePages([
  {
    slug: "",
    alternateSlug: "",
    kind: "home",
    title: "Bosa in Scooter | Noleggio scooter 50cc e 125cc",
    h1: "Vivi Bosa in piena libertà",
    description: "Scooter 50cc e 125cc per vivere Bosa, Bosa Marina e la costa con più libertà. Scopri il servizio e richiedi disponibilità per le tue date.",
    eyebrow: "Scooter 50cc e 125cc · Bosa",
    primaryKeyword: "scooter a Bosa",
    intro: "Dal centro storico alle spiagge, scegli tu dove fermarti e quando ripartire. Stiamo preparando un servizio di scooter 50cc e 125cc pensato per chi vuole scoprire Bosa senza dipendere dall’auto.",
    sections: [
      {
        heading: "Più libertà per ogni giornata a Bosa",
        body: ["Raggiungi il mare, torna in centro per cena ed esplora i dintorni al tuo ritmo. Bosa in Scooter nasce per rendere ogni spostamento più semplice e lasciare più spazio alla vacanza."],
        bullets: ["50cc e 125cc per ogni itinerario", "Due posti e due caschi inclusi", "Condizioni chiare, senza sorprese"],
      },
      {
        heading: "Una formula costruita sul tuo soggiorno",
        body: ["Da 24 ore a 7 giorni o più: indicaci date, itinerario e zona dell’alloggio. Useremo le richieste ricevute per definire disponibilità e formule prima dell’apertura delle prenotazioni."],
        bullets: ["Ritiro previsto in zona Viale Alghero", "Consegna e ritiro in valutazione", "Due caschi, bauletto e antifurto previsti"],
      },
    ],
    faq: commonFaq.slice(0, 4),
  },
  {
    slug: "noleggio-scooter-bosa",
    alternateSlug: "scooter-rental-bosa",
    kind: "commercial",
    title: "Noleggio scooter a Bosa | 50cc e 125cc",
    h1: "Noleggio scooter 50cc e 125cc a Bosa",
    description: "Scopri il noleggio scooter 50cc e 125cc a Bosa: tariffe, dotazioni, ritiro e consegna. Invia una richiesta di disponibilità senza impegno.",
    eyebrow: "Bosa al tuo ritmo",
    primaryKeyword: "noleggio scooter Bosa",
    intro: "Centro storico, Bosa Marina e costa diventano più vicini quando puoi muoverti ai tuoi orari. Scegli il mezzo e indicaci le date: la richiesta è senza impegno e ci aiuta a preparare il servizio per il lancio.",
    sections: [
      {
        heading: "La flotta",
        body: ["La flotta è pensata con scooter 50cc e 125cc, tutti omologati per conducente e passeggero. Ti aiuteremo a scegliere il modello più adatto in base a patente, esperienza e itinerario."],
        bullets: ["Due caschi", "Bauletto", "Lucchetto o bloccadisco", "Secondo conducente registrato"],
      },
      {
        heading: "Cosa è incluso",
        body: ["Le tariffe pubblicate prevedono IVA, dotazioni, formula pieno-pieno e le coperture indicate. Prima dell’eventuale noleggio riceverai disponibilità e condizioni complete per iscritto."],
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
    title: "Noleggio scooter a Bosa Marina | Richiedi disponibilità",
    h1: "Scooter per Bosa Marina",
    description: "Scooter 50cc e 125cc per muoverti tra Bosa Marina, il centro e la costa. Richiedi disponibilità e indica se preferisci ritiro o consegna.",
    eyebrow: "Dal mare al centro",
    primaryKeyword: "noleggio scooter Bosa Marina",
    intro: "Soggiorni a Bosa Marina? Indicaci le tue date e dove alloggerai. Stiamo definendo la soluzione più comoda tra punto di ritiro e consegna presso la struttura.",
    sections: [
      {
        heading: "Lo scooter dove ti serve",
        body: ["Le tariffe in valutazione sono 20–25 € per la sola consegna o il solo ritiro a Bosa e Bosa Marina, e 35–45 € per entrambe le tratte. Indica la località del soggiorno: ci aiuterà a organizzare un servizio davvero utile."],
        bullets: ["Ritiro previsto a Bosa", "Consegna presso l’alloggio in valutazione", "Disponibilità da confermare prima del noleggio"],
      },
      {
        heading: "Consegna inclusa per i soggiorni più lunghi",
        body: ["Vogliamo offrire la consegna inclusa per noleggi di almeno 10 giorni, oppure per due scooter per almeno 7 giorni. Inviaci le tue date: le richieste ci permetteranno di verificare e confermare questa formula."],
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
    title: "Prezzi noleggio scooter a Bosa | Tariffe 50cc e 125cc",
    h1: "Tariffe e formule",
    description: "Prezzi previsti per il noleggio scooter a Bosa: 24 ore, 7 giorni, chilometri inclusi, cauzione, consegna e ritiro.",
    eyebrow: "Prezzi trasparenti",
    primaryKeyword: "prezzi noleggio scooter Bosa",
    intro: "Consulta le tariffe di lancio, ancora provvisorie, e indicaci le tue date. La richiesta è senza impegno: disponibilità e condizioni saranno confermate per iscritto prima dell’eventuale noleggio.",
    sections: [
      {
        heading: "Chilometri inclusi",
        body: ["Il noleggio minimo di 24 ore comprende 150 km; la stessa tariffa si applica anche quando lo scooter viene utilizzato soltanto per quattro ore. La formula 7 giorni comprende 900 km. I chilometri oltre la soglia prevista costano 0,25 €/km."],
        bullets: ["Durata minima: 24 ore", "Durate da 2 a 6 giorni: prezzo su richiesta", "Fuori maggio–ottobre: prezzo su richiesta"],
      },
      {
        heading: "Cauzione e servizi inclusi",
        body: ["La cauzione prevista è di 500 € per scooter. Le tariffe comprendono IVA, secondo conducente registrato, due caschi, bauletto, dispositivo antifurto, formula pieno-pieno e le coperture elencate. Ogni voce sarà confermata nelle condizioni definitive."],
      },
      {
        heading: "Consegna e ritiro",
        body: ["Il ritiro presso la base di Bosa è previsto senza costi aggiuntivi. Per Bosa e Bosa Marina stiamo valutando 20–25 € per una sola tratta e 35–45 € per consegna più ritiro. Fuori zona, disponibilità e costo saranno valutati su richiesta."],
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
    description: "Come richiedere uno scooter 50cc o 125cc a Bosa: indica date ed esigenze e ricevi un aggiornamento quando apriranno le prenotazioni.",
    eyebrow: "Quattro passaggi semplici",
    primaryKeyword: "come noleggiare scooter a Bosa",
    intro: "In pochi passaggi puoi indicarci lo scooter che cerchi e le date del soggiorno. In questa fase la richiesta non genera una prenotazione né un pagamento.",
    sections: [
      { heading: "1. Indicaci quando arrivi", body: ["Seleziona le date, il numero di scooter e la località in cui soggiornerai. Non servono documenti o dati di pagamento."] },
      { heading: "2. Scegli il tuo scooter", body: ["Preferisci un 50cc per borgo e marina o un 125cc per esplorare più lontano? Patente, esperienza e itinerario ci aiuteranno a consigliarti il mezzo adatto."] },
      { heading: "3. Richiedi l’aggiornamento", body: ["Se vuoi sapere quando apriranno le prenotazioni, lascia facoltativamente la tua email e il consenso al ricontatto."] },
      { heading: "4. Ricevi la conferma", body: ["Quando il servizio sarà disponibile, confermeremo per iscritto mezzo, tariffe, ritiro o consegna e condizioni prima di qualsiasi impegno."] },
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
    intro: "Qui trovi tutto ciò che serve per scegliere con più sicurezza. Il servizio è in fase di validazione: disponibilità e condizioni saranno confermate per iscritto prima dell’eventuale noleggio.",
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
    title: "Richiedi disponibilità | Bosa in Scooter",
    h1: "Richiedi il tuo scooter a Bosa",
    description: "Indicaci date, modello e zona del soggiorno. La richiesta è gratuita, senza impegno e ci aiuta a preparare il servizio.",
    eyebrow: "Richiesta gratuita · senza impegno",
    primaryKeyword: "contatti scooter Bosa",
    intro: "Dicci quando arriverai e quale scooter cerchi. Bosa in Scooter è in fase di validazione: il modulo non crea una prenotazione, ma ci permette di costruire il servizio sulle esigenze reali di chi visita il territorio.",
    sections: [
      {
        heading: "Bastano pochi minuti",
        body: ["Seleziona periodo, numero di scooter, modello e località del soggiorno. Non ti chiediamo nome, documenti o dati di pagamento; l’email è facoltativa e serve solo se vuoi essere avvisato al lancio."],
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
    description: "Come organizzare arrivo, bagagli e spostamenti tra centro, Bosa Marina e costa durante una vacanza a Bosa senza auto.",
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
        sources: [{ label: "Orari e linee ARST", href: "https://www.arstspa.info/" }],
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
    description: "Confronto pratico tra spostamenti a piedi, trasporto pubblico e scooter nel centro di Bosa e verso Bosa Marina.",
    eyebrow: "Guida locale",
    primaryKeyword: "come muoversi a Bosa",
    intro: "Distanza, bagagli e frequenza degli spostamenti aiutano a scegliere il mezzo senza complicare la giornata.",
    sections: [
      {
        heading: "Centro storico a piedi",
        body: ["Per una giornata concentrata nel centro, camminare evita la ricerca del parcheggio e permette di fermarsi con libertà. Valuta pendenze, caldo e distanza dall'alloggio; dal 2026 il Comune indica stalli a pagamento in varie strade centrali e, in stagione, anche a Bosa Marina."],
        sources: [{ label: "Parcheggi — Comune di Bosa", href: "https://comune.bosa.or.it/argomento/parcheggi/" }],
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
    title: "Spiagge vicino a Bosa in scooter | Guida locale",
    h1: "Spiagge vicino a Bosa in scooter",
    description: "Come valutare Bosa Marina, s'Abba Druche, Portu Managu, Turas e Compoltitu in base a strada, parcheggio e condizioni.",
    eyebrow: "Guida locale",
    primaryKeyword: "spiagge vicino Bosa scooter",
    intro: "La destinazione conta quanto il viaggio: distanza, strada e ciò che porti determinano il modello e l’organizzazione della giornata.",
    sections: [
      {
        heading: "Scegli la costa in base alla giornata",
        body: ["Bosa Marina è la soluzione più semplice per restare vicino ai servizi; s'Abba Druche, Portu Managu, Turas e Compoltitu richiedono invece di valutare accesso, tipo di strada e parcheggio. Controlla sempre indicazioni e condizioni sul posto: accessi e servizi possono cambiare con la stagione."],
        sources: [
          { label: "Bosa — SardegnaTurismo", href: "https://www.sardegnaturismo.it/it/luoghi/nord-ovest/bosa" },
          { label: "Parcheggi — Comune di Bosa", href: "https://comune.bosa.or.it/argomento/parcheggi/" },
        ],
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
    title: "Bosa–Alghero in scooter | Guida alla strada costiera",
    h1: "Da Bosa ad Alghero in scooter",
    description: "Come valutare la strada costiera SP 49 tra Bosa e Alghero: mezzo, esperienza, vento, chilometri e margine per il rientro.",
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
        body: ["La SP 49 attraversa un tratto costiero esposto e ricco di curve, passando nell'area di Capo Marrargiu. Vento, visibilità e traffico possono cambiare lungo il percorso: accorcia o rimanda l'itinerario se non puoi completarlo con margine e in sicurezza."],
        sources: [
          { label: "In moto lungo la costa — SardegnaTurismo", href: "https://www.sardegnaturismo.it/it/moto-lungo-la-costa" },
          { label: "Capo Marrargiu — SardegnaTurismo", href: "https://www.sardegnaturismo.it/it/esplora/capo-marrargiu" },
        ],
      },
    ],
    faq: commonFaq.slice(0, 5),
  },
  {
    slug: "privacy",
    alternateSlug: "privacy",
    kind: "info",
    title: "Informativa privacy | Bosa in Scooter",
    h1: "Informativa privacy",
    description: "Informazioni sul trattamento dei dati raccolti per validare il servizio e per l'eventuale ricontatto facoltativo.",
    eyebrow: "Articolo 13 GDPR",
    primaryKeyword: "informativa privacy Bosa in Scooter",
    intro: "Questa informativa descrive i dati raccolti dal sito, perché vengono trattati, per quanto tempo e come esercitare i propri diritti.",
    sections: [
      {
        heading: "Titolare del trattamento",
        body: [],
      },
      {
        heading: "Dati, finalità e basi giuridiche",
        body: [
          "Per la validazione raccogliamo periodo richiesto, numero di scooter, fascia d'età, preferenza 50cc/125cc, località di soggiorno, macroarea di provenienza e indicazione sulla patente oltre cinque anni. Non chiediamo nome, età esatta, indirizzo o documenti. È disponibile un campo note facoltativo di massimo 500 caratteri, nel quale non devono essere inseriti dati sensibili.",
          "Le risposte sono progettate per non identificare direttamente la persona e servono a misurare domanda, stagionalità e interesse verso il servizio. Questi dati e i metadati tecnici necessari a erogazione, sicurezza e prevenzione degli abusi sono trattati sulla base del legittimo interesse del titolare, articolo 6(1)(f) GDPR, previa valutazione di necessità e bilanciamento.",
          "Come fornitore di hosting, Vercel può trattare per ogni visitatore indirizzo IP, localizzazione approssimativa derivata dall'IP, URL e parametri della richiesta, data e ora, stato della risposta, regione di esecuzione e user-agent. Questi dati non vengono aggiunti alla risposta di ricerca né usati dal titolare per profilazione o pubblicità.",
          "Se chiedi volontariamente di essere ricontattato, raccogliamo l'email sulla base del consenso, articolo 6(1)(a). Il consenso è separato, facoltativo e revocabile. Per una successiva richiesta specifica di disponibilità o informazioni, i dati necessari possono essere trattati per misure precontrattuali richieste dall'interessato, articolo 6(1)(b).",
          "L'area amministrativa è riservata a un unico account GitHub autorizzato. Per autenticazione, controllo degli accessi e sicurezza vengono trattati ID GitHub, nome, email, stato di verifica dell'email, immagine profilo, scope e token OAuth cifrati, token e date della sessione, indirizzo IP e user-agent. La base giuridica è il legittimo interesse del titolare a proteggere e amministrare il servizio, articolo 6(1)(f) GDPR.",
        ],
      },
      {
        heading: "Dati obbligatori e facoltativi",
        body: [
          "I campi privi di identificativi diretti e la dichiarazione di lettura dell'informativa sono necessari per inviare la risposta. Le note, il ricontatto, l'email e il relativo consenso sono sempre facoltativi. Senza ricontatto il modulo non mostra né invia alcun indirizzo email.",
          "I dati OAuth e di sessione sono necessari soltanto per l'amministratore che sceglie di accedere all'area riservata; il sito pubblico non richiede un account GitHub.",
        ],
      },
      {
        heading: "Destinatari e fornitori",
        body: [
          "Le risposte e i contatti sono consultabili esclusivamente dal titolare attraverso una dashboard protetta e non vengono ceduti o usati per pubblicità. I fornitori tecnici possono trattare soltanto i dati necessari a fornire database, hosting, sicurezza e autenticazione, secondo i rispettivi ruoli e accordi descritti di seguito.",
        ],
      },
      {
        heading: "Trasferimenti fuori dallo SEE",
        body: [
          "Il database è configurato nella regione dichiarata nella sezione precedente. Vercel utilizza una rete edge globale e GitHub tratta dati anche negli Stati Uniti e in altri Paesi. Per i trasferimenti soggetti al GDPR si applicano, secondo il servizio e l'accordo vigente, decisioni di adeguatezza come il Data Privacy Framework UE-USA e/o le Clausole contrattuali standard della Commissione europea.",
          "Il modulo resta disattivato se non sono state configurate le garanzie effettivamente verificate per il provider del database.",
        ],
      },
      {
        heading: "Conservazione e cancellazione",
        body: [
          "Le risposte grezze sono usate per ricerca di mercato e sottoposte a una verifica documentata di necessità almeno ogni 24 mesi. Se un record individuale non è più necessario, viene cancellato oppure trasformato in dato realmente anonimo e aggregato. Le statistiche irreversibilmente anonime possono essere conservate senza un termine fisso.",
          "Le email sono conservate solo finché serve per comunicare la disponibilità del servizio o fino alla revoca del consenso. La necessità viene rivalutata almeno ogni 24 mesi; se la finalità non è più attuale, l'email viene cancellata oppure viene richiesto un nuovo consenso. La sola mancata richiesta di cancellazione non giustifica una conservazione illimitata.",
          "Le sessioni amministrative hanno una scadenza di otto ore, aggiornabile durante l'uso, e vengono eliminate al logout o, dopo la scadenza, al successivo accesso amministrativo o OAuth. I record di verifica OAuth scaduti sono eliminati allo stesso modo. Profilo GitHub, collegamento dell'account e token OAuth cifrati sono conservati finché l'accesso amministrativo rimane autorizzato e necessario.",
          "I log tecnici di Vercel seguono la conservazione nativa del piano attivo e non vengono esportati tramite Log Drain. Un eventuale cambio di piano, retention o destinazione dei log richiede una nuova verifica e l'aggiornamento di questa informativa.",
        ],
      },
      {
        heading: "Diritti e revoca del consenso",
        body: [
          "Puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione e, quando applicabile, portabilità. Puoi revocare in qualsiasi momento il consenso al ricontatto scrivendo al titolare; la revoca non pregiudica la liceità del trattamento svolto prima della revoca.",
          "Puoi presentare reclamo al Garante per la protezione dei dati personali. Le risposte prive di email non contengono identificativi diretti, ma date, località, timestamp o note possono comunque renderle dati personali. In assenza di elementi sufficienti per individuarle, una richiesta relativa a una singola risposta potrebbe non essere tecnicamente eseguibile.",
        ],
      },
      {
        heading: "Cookie e analytics",
        body: [
          "Il sito non installa analytics di terze parti né cookie non essenziali. L'area amministrativa usa un cookie di sessione proprietario, HttpOnly, Secure in produzione e SameSite=Lax, con scadenza di otto ore, oltre a un cookie transitorio per proteggere il flusso OAuth. Sono cookie strettamente necessari e non sono usati per profilazione o pubblicità.",
          "Prima di introdurre strumenti non essenziali, analytics o altri tracciamenti sarà necessario aggiornare questa informativa e, quando richiesto, raccogliere una scelta valida dell'utente.",
        ],
      },
      {
        heading: "Aggiornamenti",
        body: [
          "Questa informativa deve essere aggiornata quando cambiano titolare, contatti, fornitori, finalità, basi giuridiche, tempi di conservazione o tecnologie di tracciamento. Ultima revisione organizzativa: 4 agosto 2026.",
        ],
      },
    ],
  },
], { publishedAt: "2026-08-02", lastModified: "2026-08-04" });
