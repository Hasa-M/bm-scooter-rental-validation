import { definePages } from "@/lib/content/types";

const commonFaq = [
  {
    question: "Do I need a driving licence to rent a scooter?",
    answer: "Yes. The rider and any additional rider must present an original licence that is valid in Italy and appropriate for the selected 50cc or 125cc model, together with a valid passport or identity card. Licence category, age and eligibility are checked before confirmation.",
  },
  {
    question: "Can every scooter carry two people?",
    answer: "The planned fleet consists of models approved for one rider and one passenger. The provisional equipment includes two helmets, a top box and a lock or disc lock; the model and equipment are confirmed in the quote.",
  },
  {
    question: "Where are pickup and return?",
    answer: "The project assumes pickup from a base in the Viale Alghero area of Bosa. Delivery or collection in Bosa and Bosa Marina are hypotheses being tested; service outside the area would only be assessed if the business launches.",
  },
  {
    question: "What mileage and deposit apply?",
    answer: "The minimum rental is 24 hours and includes 150 km, even if you only use the scooter for four hours. The 7-day option includes 900 km. Additional distance costs €0.25/km. A €500 security deposit per scooter is planned; its payment and release terms are confirmed before rental.",
  },
  {
    question: "What cover is included?",
    answer: "The provisional price includes motor third-party liability for a self-drive rental vehicle, third-party damage, passenger cover within policy limits, rider accident cover, theft and fire, accidental or collision damage, and roadside assistance. The written policy and contract determine limits, exclusions and customer liability.",
  },
  {
    question: "What is the fuel policy?",
    answer: "The policy is full-to-full: you receive the scooter with a full tank and return it full. The final conditions are summarised before pickup.",
  },
];

export const enPages = definePages([
  {
    slug: "",
    alternateSlug: "",
    kind: "home",
    title: "Bosa in Scooter | 50cc and 125cc scooter rental",
    h1: "Bosa in Scooter",
    description: "A proposed 50cc and 125cc scooter service for Bosa, Bosa Marina and the coast. Review the model and help us validate demand.",
    eyebrow: "Visitor mobility · Bosa",
    primaryKeyword: "scooters in Bosa",
    intro: "We are assessing a possible 50cc and 125cc scooter service for visitors to Bosa. Review the proposal and help us understand demand between the old town, marina and coast.",
    sections: [
      {
        heading: "Move easily and experience more of the area",
        body: ["Bosa in Scooter is designed to make local journeys simpler for visitors and help them discover more businesses, beaches and places across the area."],
        bullets: ["50cc and 125cc scooters", "Two-person models", "Direct contact and clear terms"],
      },
      {
        heading: "A rental option for your stay",
        body: ["Choose 24 hours, 7 days or a longer stay. Tell us about your plans and we will assess the most suitable model, period and terms. Published rates and services are indicative until confirmed in writing."],
        bullets: ["Proposed pickup near Viale Alghero", "Delivery and collection to be validated", "Two helmets and equipment planned"],
      },
    ],
    faq: commonFaq.slice(0, 4),
  },
  {
    slug: "scooter-rental-bosa",
    alternateSlug: "noleggio-scooter-bosa",
    kind: "commercial",
    title: "Scooter rental in Bosa | Validation project",
    h1: "50cc and 125cc scooter rental in Bosa",
    description: "Proposed 50cc and 125cc scooter rental in Bosa. Review indicative conditions and express interest without making a booking.",
    eyebrow: "Bosa at your pace",
    primaryKeyword: "scooter rental Bosa",
    intro: "We are testing demand for a possible service between the old town, Bosa Marina and the coast. Tell us which model, period and route would suit your stay.",
    sections: [
      {
        heading: "The fleet",
        body: ["The planned fleet includes 50cc and 125cc scooters, all approved for one rider and one passenger. We confirm the available model and riding requirements before rental."],
        bullets: ["Two helmets", "Top box", "Lock or disc lock", "One additional registered rider"],
      },
      {
        heading: "What is included",
        body: ["VAT, equipment, the full-to-full fuel policy and the listed cover are included in the provisional price. Policy and rental conditions are always provided in writing."],
        bullets: ["Motor liability and third-party damage", "Passenger and rider accident cover", "Theft, fire and collision cover", "Roadside assistance"],
      },
      {
        heading: "Required documents",
        body: ["You need an original licence that is valid in Italy and appropriate for the selected scooter, plus a valid identity card or passport. The same documents are required for an additional rider."],
      },
      {
        heading: "From the old town to the marina",
        body: ["A scooter can make everyday journeys more flexible and spread your visit across neighbourhoods, beaches and local businesses. Choose the model according to your experience, route and conditions on the day."],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "scooter-rental-bosa-marina",
    alternateSlug: "noleggio-scooter-bosa-marina",
    kind: "commercial",
    title: "Scooter rental in Bosa Marina | Validation project",
    h1: "Scooters for Bosa Marina",
    description: "Help validate a possible scooter rental service in Bosa Marina, including delivery and collection at accommodation.",
    eyebrow: "From the sea to the old town",
    primaryKeyword: "scooter rental Bosa Marina",
    intro: "Staying in Bosa Marina? We are assessing a pickup point, accommodation delivery or a mixed model. Your response lets us measure this need separately from Bosa.",
    sections: [
      {
        heading: "Delivery arranged around your stay",
        body: ["The hypothesis being tested sets one delivery or collection journey in Bosa or Bosa Marina at €20–25 and combined delivery and collection at €35–45. These figures measure interest and are not yet an offer."],
        bullets: ["Pickup point to be defined", "Delivery or collection to be validated", "Stay location collected in the form"],
      },
      {
        heading: "Free-delivery hypothesis",
        body: ["We are also testing interest in included delivery for stays of at least 10 days, or for two scooters rented for at least 7 days. This rule can only exist if the economic and logistics model proves sustainable."],
      },
      {
        heading: "Between the marina, old town and coast",
        body: ["A scooter lets you combine the sea, historic centre and local businesses without planning every day around a single starting point. Weather, roads and riding ability should always guide the choice."],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "prices",
    alternateSlug: "prezzi",
    kind: "prices",
    title: "Bosa scooter rental prices | Provisional rates",
    h1: "Rates and rental options",
    description: "Provisional Bosa scooter rates for a minimum 24-hour rental and 7 days, including mileage, deposit and delivery costs.",
    eyebrow: "Transparent pricing",
    primaryKeyword: "Bosa scooter rental prices",
    intro: "View our provisional seasonal rates. Availability, model, cover, deposit and services only become final in your written quote and rental agreement.",
    sections: [
      {
        heading: "Included mileage",
        body: ["The minimum 24-hour rental includes 150 km; the same rate applies even if the scooter is only used for four hours. The 7-day option includes 900 km. Distance above the relevant allowance costs €0.25/km."],
        bullets: ["Minimum rental: 24 hours", "Rentals of 2–6 days: price on request", "Outside May–October: price on request"],
      },
      {
        heading: "Deposit and inclusions",
        body: ["The indicative deposit is €500 per scooter. VAT, an additional registered rider, two helmets, top box, security device, full-to-full fuel policy and the listed cover are included in the provisional terms."],
      },
      {
        heading: "Delivery and collection",
        body: ["In the proposed model, pickup from a base would be included. In Bosa and Bosa Marina we are testing €20–25 for one delivery or collection journey and €35–45 for both. Feasibility and cost outside the area would remain subject to assessment."],
      },
    ],
    faq: commonFaq.slice(2),
  },
  {
    slug: "how-it-works",
    alternateSlug: "come-funziona",
    kind: "info",
    title: "How scooter rental works | Bosa in Scooter",
    h1: "How it works",
    description: "How to take part in validating a possible 50cc and 125cc scooter rental service in Bosa, without booking or payment.",
    eyebrow: "Four simple steps",
    primaryKeyword: "how to rent a scooter in Bosa",
    intro: "The website collects expressions of interest; it does not process instant bookings or payments. Every condition is confirmed before rental.",
    sections: [
      { heading: "1. Submit a response", body: ["Share dates, scooter quantity, preferred model, age range, licence experience, stay location and origin macro-region. Email contact is separate and optional."] },
      { heading: "2. Indicate the scooter", body: ["Your 50cc or 125cc preference, licence and plans help us assess which fleet could be sustainable."] },
      { heading: "3. Leave an optional contact", body: ["If the service launches, people who requested contact may receive an update; the form does not create quotes or bookings."] },
      { heading: "4. Collect or request delivery", body: ["Collect near Viale Alghero or arrange delivery and collection when feasible."] },
    ],
    faq: commonFaq,
  },
  {
    slug: "faq",
    alternateSlug: "domande-frequenti",
    kind: "info",
    title: "Bosa scooter rental FAQ | Bosa in Scooter",
    h1: "Frequently asked questions",
    description: "Licence, documents, passenger, deposit, insurance, fuel, pickup and delivery for scooter rental in Bosa.",
    eyebrow: "Before you ride",
    primaryKeyword: "Bosa scooter rental questions",
    intro: "These are the conditions currently planned. As provisional terms, they must be confirmed in the quote and rental agreement before pickup.",
    sections: [
      {
        heading: "Clear confirmation before rental",
        body: ["Do not send identity or payment details through the form. We will request the necessary documents through the agreed channel and provide all conditions in writing."],
      },
    ],
    faq: commonFaq,
  },
  {
    slug: "contact",
    alternateSlug: "contatti",
    kind: "contact",
    title: "Let us know if you are interested | Bosa in Scooter",
    h1: "Let us know if you are interested",
    description: "Share your interest in a 50cc or 125cc scooter and help us organise the service across the local area.",
    eyebrow: "Direct enquiry",
    primaryKeyword: "Bosa scooter contact",
    intro: "Share a response without direct identifiers to help validate demand. Email contact is separate and entirely optional.",
    sections: [
      {
        heading: "Useful details",
        body: ["Select period, quantity, age range, model, stay location and origin macro-region. Do not enter documents, payment details or sensitive information."],
      },
    ],
  },
  {
    slug: "guides",
    alternateSlug: "guide",
    kind: "info",
    title: "Bosa local guides | Bosa in Scooter",
    h1: "Local guides",
    description: "Essential advice for travelling between Bosa, the marina, beaches and coast.",
    eyebrow: "Explore the area",
    primaryKeyword: "Bosa local guides",
    intro: "Four practical guides to choosing how to travel, preparing a beach day and assessing longer routes.",
    sections: [
      {
        heading: "Choose a guide",
        body: ["Start with the kind of day you are planning: staying in town, moving between Bosa and the marina, reaching a beach or taking the coastal road."],
        bullets: ["Visit Bosa without a car", "Travel between the old town and marina", "Reach nearby beaches", "Assess the Bosa–Alghero road"],
      },
    ],
  },
  {
    slug: "guides/visit-bosa-without-a-car",
    alternateSlug: "guide/visitare-bosa-senza-auto",
    kind: "guide",
    title: "Visit Bosa without a car | Local mobility guide",
    h1: "Visiting Bosa without a car",
    description: "How to plan arrival, luggage and travel between the old town, Bosa Marina and the coast on a car-free stay in Bosa.",
    eyebrow: "Local guide",
    primaryKeyword: "visit Bosa without a car",
    intro: "A car-free stay works best when arrival, luggage and daily journeys are planned separately.",
    sections: [
      {
        heading: "Choose where to stay",
        body: ["The old town is ideal for walking to restaurants and sights; Bosa Marina is more convenient for the beach. Your base determines which daily journeys need transport."],
      },
      {
        heading: "Manage arrival and luggage",
        body: ["Use public transport, a transfer or an arranged delivery for arrival. A scooter is useful once bags are at the accommodation, not as a substitute for a luggage transfer."],
      },
      {
        heading: "Use the right option for each journey",
        body: ["Walk in the historic centre, use a scooter for the marina and nearby coast, and choose a car or transfer for long journeys or large luggage."],
        sources: [{ label: "ARST routes and timetables", href: "https://www.arstspa.info/" }],
      },
    ],
    faq: commonFaq.slice(0, 3),
  },
  {
    slug: "guides/getting-around-bosa",
    alternateSlug: "guide/come-muoversi-a-bosa",
    kind: "guide",
    title: "Getting around Bosa and Bosa Marina",
    h1: "Getting around Bosa",
    description: "A practical comparison of walking, public transport and scooters in central Bosa and towards Bosa Marina.",
    eyebrow: "Local guide",
    primaryKeyword: "getting around Bosa",
    intro: "Bosa is compact, but hills, heat and the distance to the marina can make transport useful.",
    sections: [
      {
        heading: "Old town on foot",
        body: ["Walking is the simplest option among the historic streets, riverfront and central restaurants. Since 2026, the Municipality lists paid spaces in several central streets and, seasonally, in Bosa Marina."],
        sources: [{ label: "Parking — Municipality of Bosa", href: "https://comune.bosa.or.it/argomento/parcheggi/" }],
      },
      {
        heading: "Between the old town and Bosa Marina",
        body: ["A scooter makes repeated trips to the beach or evening returns easier, especially in summer and for accommodation outside the centre."],
      },
      {
        heading: "50cc or 125cc",
        body: ["A 50cc suits the medieval village and nearby seaside spots. A 125cc is better for nearby villages and more remote coves, subject to licence and rental requirements."],
      },
    ],
    faq: commonFaq.slice(0, 3),
  },
  {
    slug: "guides/beaches-near-bosa-by-scooter",
    alternateSlug: "guide/spiagge-da-raggiungere-in-scooter-da-bosa",
    kind: "guide",
    title: "Beaches near Bosa by scooter | Local guide",
    h1: "Beaches near Bosa by scooter",
    description: "How to assess Bosa Marina, s'Abba Druche, Portu Managu, Turas and Compoltitu by road access, parking and conditions.",
    eyebrow: "Local guide",
    primaryKeyword: "beaches near Bosa by scooter",
    intro: "Choose the beach according to distance, road conditions and the mileage included in the rental.",
    sections: [
      {
        heading: "Choose the coast for the day",
        body: ["Bosa Marina is the simplest option for staying close to services. Reaching s'Abba Druche, Portu Managu, Turas or Compoltitu requires checking access, road type and parking. Always follow on-site information because seasonal access and services can change."],
        sources: [
          { label: "Bosa — SardegnaTurismo", href: "https://www.sardegnaturismo.it/it/luoghi/nord-ovest/bosa" },
          { label: "Parking — Municipality of Bosa", href: "https://comune.bosa.or.it/argomento/parcheggi/" },
        ],
      },
      {
        heading: "Prepare the scooter",
        body: ["Bring water and sun protection, store only suitable items in the top case, and secure the scooter with the supplied lock or disc lock."],
      },
      {
        heading: "Plan parking and return",
        body: ["Use designated areas, avoid sand and unstable ground, and allow time to refuel before the agreed return or collection."],
      },
    ],
    faq: commonFaq.slice(1, 6),
  },
  {
    slug: "guides/bosa-alghero-scooter-route",
    alternateSlug: "guide/itinerario-in-scooter-bosa-alghero",
    kind: "guide",
    title: "Bosa–Alghero by scooter | Coastal road guide",
    h1: "Bosa to Alghero by scooter",
    description: "How to assess the SP 49 coastal road from Bosa to Alghero: scooter, experience, wind, mileage and return margin.",
    eyebrow: "Local guide",
    primaryKeyword: "Bosa Alghero scooter route",
    intro: "The coastal road is scenic but longer and more exposed than local journeys around Bosa.",
    sections: [
      {
        heading: "Check vehicle suitability",
        body: ["Ask whether the chosen scooter is suitable for the route, your licence and your experience, especially when travelling with a passenger."],
      },
      {
        heading: "Calculate the full journey",
        body: ["Count the return trip, local travel in Alghero and a safety margin against the mileage included in your rental formula."],
      },
      {
        heading: "Decide based on conditions",
        body: ["The SP 49 follows an exposed, winding stretch of coast through the Capo Marrargiu area. Strong wind, heat, traffic and limited daylight can change the experience; choose a shorter route or another form of transport when conditions are poor."],
        sources: [
          { label: "Riding along the coast — SardegnaTurismo", href: "https://www.sardegnaturismo.it/en/node/264061" },
          { label: "Capo Marrargiu — SardegnaTurismo", href: "https://www.sardegnaturismo.it/en/explore/capo-marrargiu" },
        ],
      },
    ],
    faq: commonFaq.slice(0, 5),
  },
  {
    slug: "privacy",
    alternateSlug: "privacy",
    kind: "info",
    title: "Privacy notice | Bosa in Scooter",
    h1: "Privacy notice",
    description: "How data is handled for the Bosa in Scooter validation experiment and optional contact request.",
    eyebrow: "GDPR Article 13",
    primaryKeyword: "Bosa in Scooter privacy notice",
    intro: "This notice explains what the site collects, why it is processed, how long it is kept and how you can exercise your rights.",
    sections: [
      {
        heading: "Data controller",
        body: [],
      },
      {
        heading: "Data, purposes and lawful bases",
        body: [
          "For validation we collect requested period, scooter quantity, age range, 50cc/125cc preference, stay location, origin macro-region and whether the licence has been held for more than five years. We do not ask for a name, exact age, address or documents. An optional notes field is available with a 500-character limit and must not contain sensitive data.",
          "Responses are designed not to identify a person directly and are used to measure demand, seasonality and interest in the service. These data and technical metadata required for delivery, security and abuse prevention are processed under the controller's legitimate interests, GDPR Article 6(1)(f), following a necessity and balancing assessment.",
          "As hosting provider, Vercel may process each visitor's IP address, approximate location derived from the IP address, request URL and parameters, date and time, response status, execution region and user-agent. These data are not added to the research response or used by the controller for profiling or advertising.",
          "If you voluntarily request contact, we collect your email on the basis of consent under Article 6(1)(a). Consent is separate, optional and withdrawable. If you later make a specific availability or information request, necessary data may be processed to take pre-contractual steps at your request under Article 6(1)(b).",
          "The administration area is restricted to one authorised GitHub account. GitHub ID, name, email, email-verification status, profile image, OAuth scopes, encrypted OAuth tokens, session token and timestamps, IP address and user-agent are processed for authentication, access control and security. The lawful basis is the controller's legitimate interest in protecting and administering the service under Article 6(1)(f) GDPR.",
        ],
      },
      {
        heading: "Required and optional data",
        body: [
          "The fields without direct identifiers and confirmation that the notice was read are required to submit a response. Notes, contact, email and related consent are always optional. Without contact, the form does not display or submit an email address.",
          "OAuth and session data are required only for the administrator who chooses to access the restricted area; the public website does not require a GitHub account.",
        ],
      },
      {
        heading: "Recipients and providers",
        body: [
          "Responses and contact requests can be viewed only by the controller through a protected dashboard and are not sold or used for advertising. Technical providers may process only the data needed to provide the database, hosting, security and authentication services under the roles and agreements described below.",
        ],
      },
      {
        heading: "Transfers outside the EEA",
        body: [
          "The database is configured in the region stated above. Vercel uses a global edge network, and GitHub also processes data in the United States and other countries. Transfers subject to the GDPR rely, according to the service and applicable agreement, on adequacy decisions such as the EU-US Data Privacy Framework and/or the European Commission's Standard Contractual Clauses.",
          "The form remains disabled unless the safeguards actually verified for the database provider have been configured.",
        ],
      },
      {
        heading: "Retention and deletion",
        body: [
          "Raw responses are used for market research and undergo a documented necessity review at least every 24 months. If an individual record is no longer necessary, it is erased or converted into genuinely anonymous aggregate data. Irreversibly anonymous statistics may be retained without a fixed end date.",
          "Email addresses are kept only while needed to communicate service availability or until consent is withdrawn. Necessity is reviewed at least every 24 months; if the purpose is no longer current, the email is erased or renewed consent is requested. The absence of an erasure request does not justify unlimited retention.",
          "Administrative sessions have an eight-hour expiry that may be refreshed while in use. They are deleted on sign-out or, once expired, on the next administrative or OAuth request. Expired OAuth verification records are removed in the same way. The GitHub profile, linked account and encrypted OAuth tokens are kept while administrative access remains authorised and necessary.",
          "Vercel technical logs follow the native retention of the active plan and are not exported through a Log Drain. Any change to the plan, retention or log destination requires a new assessment and an update to this notice.",
        ],
      },
      {
        heading: "Rights and withdrawal",
        body: [
          "You may request access, rectification, erasure, restriction, objection and, where applicable, portability. You may withdraw contact consent at any time by writing to the controller; withdrawal does not affect processing carried out lawfully before withdrawal.",
          "You may lodge a complaint with the Italian Data Protection Authority. Responses without an email do not contain direct identifiers, but dates, locations, timestamps or notes may still make them personal data. If there is not enough information to locate one, a request concerning an individual response may not be technically actionable.",
        ],
      },
      {
        heading: "Cookies and analytics",
        body: [
          "The site does not install third-party analytics or non-essential cookies. The administration area uses a first-party session cookie that is HttpOnly, Secure in production and SameSite=Lax, with an eight-hour expiry, plus a short-lived cookie that protects the OAuth flow. These cookies are strictly necessary and are not used for profiling or advertising.",
          "Before any non-essential tool, analytics or other tracking is introduced, this notice must be updated and a valid user choice collected where required.",
        ],
      },
      {
        heading: "Updates",
        body: [
          "This notice must be updated whenever the controller, contacts, providers, purposes, lawful bases, retention periods or tracking technologies change. Last organisational review: 4 August 2026.",
        ],
      },
    ],
  },
], { publishedAt: "2026-08-02", lastModified: "2026-08-04" });
