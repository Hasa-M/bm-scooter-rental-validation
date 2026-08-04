import { definePages } from "@/lib/content/types";

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
    answer: "Il progetto prevede il ritiro presso una base in zona Viale Alghero a Bosa. Consegna o ritiro a domicilio a Bosa e Bosa Marina sono ipotesi da validare; fuori zona valuteremo fattibilità e costi soltanto se il servizio verrà avviato.",
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

export const itPages = definePages([
  {
    slug: "",
    alternateSlug: "",
    kind: "home",
    title: "Bosa in Scooter | Noleggio scooter 50cc e 125cc",
    h1: "Bosa in Scooter",
    description: "Progetto di scooter 50cc e 125cc tra Bosa, Bosa Marina e la costa. Consulta le ipotesi di servizio e aiutaci a validare la domanda.",
    eyebrow: "Mobilità turistica · Bosa",
    primaryKeyword: "scooter a Bosa",
    intro: "Stiamo valutando un servizio di scooter 50cc e 125cc per chi visita Bosa. Consulta l'ipotesi e aiutaci a capire se può migliorare gli spostamenti tra centro, marina e costa.",
    sections: [
      {
        heading: "Muoversi meglio, vivere di più il territorio",
        body: ["Bosa in Scooter nasce per rendere più semplici gli spostamenti di chi soggiorna qui e favorire una scoperta più ampia delle attività, delle spiagge e dei luoghi della zona."],
        bullets: ["Scooter 50cc e 125cc", "Mezzi per due persone", "Contatto diretto e condizioni chiare"],
      },
      {
        heading: "Una formula adatta al tuo soggiorno",
        body: ["Da 24 ore a 7 giorni o più: raccontaci il tuo programma e valuteremo modello, periodo e condizioni più adatti. Tariffe e servizi pubblicati sono indicativi e diventano definitivi soltanto nel preventivo."],
        bullets: ["Ipotesi di ritiro in zona Viale Alghero", "Consegna e ritiro da validare", "Due caschi e dotazioni previsti"],
      },
    ],
    faq: commonFaq.slice(0, 4),
  },
  {
    slug: "noleggio-scooter-bosa",
    alternateSlug: "scooter-rental-bosa",
    kind: "commercial",
    title: "Noleggio scooter a Bosa | Progetto in validazione",
    h1: "Noleggio scooter 50cc e 125cc a Bosa",
    description: "Progetto di noleggio scooter a Bosa con mezzi 50cc e 125cc. Consulta condizioni indicative ed esprimi il tuo interesse senza prenotare.",
    eyebrow: "Bosa al tuo ritmo",
    primaryKeyword: "noleggio scooter Bosa",
    intro: "Stiamo verificando la domanda per un possibile servizio tra centro storico, Bosa Marina e costa. Indicaci mezzo, periodo e itinerario che sarebbero utili al tuo soggiorno.",
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
    title: "Noleggio scooter a Bosa Marina | Progetto in validazione",
    h1: "Scooter per Bosa Marina",
    description: "Aiutaci a validare un possibile noleggio scooter a Bosa Marina, inclusa l'ipotesi di consegna e ritiro presso l'alloggio.",
    eyebrow: "Dal mare al centro",
    primaryKeyword: "noleggio scooter Bosa Marina",
    intro: "Soggiorni a Bosa Marina? Stiamo valutando se convenga un punto di ritiro, la consegna presso l'alloggio o un modello misto. La tua risposta ci aiuta a misurare questa esigenza separatamente da Bosa.",
    sections: [
      {
        heading: "Consegna pensata per il soggiorno",
        body: ["L'ipotesi da validare prevede una sola tratta a Bosa o Bosa Marina a 20–25 € e consegna più ritiro a 35–45 €. Questi importi servono a misurare l'interesse e non costituiscono ancora un'offerta."],
        bullets: ["Punto di ritiro da definire", "Consegna oppure ritiro da validare", "Località di soggiorno raccolta nel modulo"],
      },
      {
        heading: "Ipotesi di consegna gratuita",
        body: ["Stiamo testando anche l'interesse per la consegna inclusa con almeno 10 giorni, oppure con due scooter per almeno 7 giorni. La regola potrà esistere soltanto se il modello economico e logistico risulterà sostenibile."],
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
    title: "Prezzi noleggio scooter a Bosa | Tariffe provvisorie",
    h1: "Tariffe e formule",
    description: "Tariffe provvisorie per scooter a Bosa: noleggio minimo di 24 ore, formula 7 giorni, chilometri inclusi, cauzione e consegna.",
    eyebrow: "Prezzi trasparenti",
    primaryKeyword: "prezzi noleggio scooter Bosa",
    intro: "Consulta le tariffe stagionali provvisorie. Disponibilità, modello, coperture, cauzione e servizi diventano definitivi soltanto nel preventivo e nel contratto.",
    sections: [
      {
        heading: "Chilometri inclusi",
        body: ["Il noleggio minimo di 24 ore comprende 150 km; la stessa tariffa si applica anche quando lo scooter viene utilizzato soltanto per quattro ore. La formula 7 giorni comprende 900 km. I chilometri oltre la soglia prevista costano 0,25 €/km."],
        bullets: ["Durata minima: 24 ore", "Durate da 2 a 6 giorni: prezzo su richiesta", "Fuori maggio–ottobre: prezzo su richiesta"],
      },
      {
        heading: "Cauzione e servizi inclusi",
        body: ["È prevista una cauzione indicativa di 500 € per scooter. IVA, secondo conducente registrato, due caschi, bauletto, dispositivo antifurto, pieno-pieno e coperture elencate sono inclusi nelle condizioni provvisorie."],
      },
      {
        heading: "Consegna e ritiro",
        body: ["Nel modello ipotizzato, il ritiro presso una base sarebbe incluso. Per Bosa e Bosa Marina stiamo testando 20–25 € per una sola tratta e 35–45 € per consegna più ritiro. Fuori zona, fattibilità e costo resterebbero da valutare."],
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
    description: "Come partecipare alla validazione del possibile noleggio scooter 50cc e 125cc a Bosa, senza prenotazione o pagamento.",
    eyebrow: "Quattro passaggi semplici",
    primaryKeyword: "come noleggiare scooter a Bosa",
    intro: "Il sito raccoglie manifestazioni di interesse: non effettua prenotazioni o pagamenti automatici. Ogni condizione viene confermata prima del noleggio.",
    sections: [
      { heading: "1. Invia una risposta", body: ["Indica date, numero di scooter, modello preferito, fascia d'età, esperienza di patente, località del soggiorno e macroarea di provenienza. Il ricontatto email è separato e facoltativo."] },
      { heading: "2. Indica il mezzo", body: ["La preferenza tra 50cc e 125cc, insieme a patente e programma, ci aiuta a misurare quale flotta potrebbe essere sostenibile."] },
      { heading: "3. Lascia un contatto facoltativo", body: ["Se il servizio verrà avviato, chi ha scelto il ricontatto potrà ricevere un aggiornamento; il modulo non genera preventivi o prenotazioni."] },
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
    intro: "Condividi una risposta priva di identificativi diretti per aiutarci a validare la domanda. Il ricontatto email è separato e completamente facoltativo.",
    sections: [
      {
        heading: "Informazioni utili",
        body: ["Seleziona periodo, quantità, fascia d'età, modello, località del soggiorno e macroarea di provenienza. Non inserire documenti, dati di pagamento o informazioni sensibili."],
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
