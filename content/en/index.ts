import { definePages } from "@/lib/content/types";

const commonFaq = [
  {
    question: "Do I need a driving licence to rent a scooter?",
    answer: "Yes. The rider and any additional rider must present an original licence that is valid in Italy and appropriate for the selected 50cc or 125cc model, together with a valid passport or identity card. Licence category, age and eligibility are checked before confirmation.",
  },
  {
    question: "Can every scooter carry two people?",
    answer: "The fleet is designed for two-person travel: scooters will be approved for one rider and one passenger and supplied with two helmets, a top box and a lock or disc lock. The model and equipment will always be listed in your confirmation.",
  },
  {
    question: "Where are pickup and return?",
    answer: "Pickup is planned from a base near Viale Alghero in Bosa. We are also assessing delivery and collection at accommodation in Bosa and Bosa Marina: tell us where you are staying to help shape the service. Availability and cost outside the area will be assessed on request.",
  },
  {
    question: "What mileage and deposit apply?",
    answer: "The minimum rental is 24 hours and includes 150 km, even if you only use the scooter for four hours. The 7-day option includes 900 km. Additional distance costs €0.25/km. A €500 security deposit per scooter is planned; its payment and release terms are confirmed before rental.",
  },
  {
    question: "What cover is included?",
    answer: "The package we are defining includes motor third-party liability for a self-drive rental vehicle, third-party damage, passenger cover within policy limits, rider accident cover, theft and fire, accidental or collision damage, and roadside assistance. Limits, exclusions and customer liability will be confirmed in writing before rental.",
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
    h1: "Experience Bosa with total freedom",
    description: "50cc and 125cc scooters for exploring Bosa, Bosa Marina and the coast with more freedom. Discover the service and request availability for your dates.",
    eyebrow: "50cc and 125cc scooters · Bosa",
    primaryKeyword: "scooters in Bosa",
    intro: "From the old town to the beaches, choose where to stop and when to move on. We are preparing a 50cc and 125cc scooter service for visitors who want to discover Bosa without relying on a car.",
    sections: [
      {
        heading: "More freedom in every day",
        body: ["Ride to the beach, return to the old town for dinner and explore the coast at your own pace. Bosa in Scooter is designed to make every journey easier and leave more room for your holiday."],
        bullets: ["50cc and 125cc for every route", "Two seats and two helmets included", "Clear terms with no surprises"],
      },
      {
        heading: "A rental option built around your stay",
        body: ["Choose 24 hours, 7 days or longer and share your dates, route and stay location. We will use incoming requests to define availability and rental options before bookings open."],
        bullets: ["Pickup planned near Viale Alghero", "Delivery and collection under assessment", "Two helmets, top box and security device planned"],
      },
    ],
    faq: commonFaq.slice(0, 4),
  },
  {
    slug: "scooter-rental-bosa",
    alternateSlug: "noleggio-scooter-bosa",
    kind: "commercial",
    title: "Scooter rental in Bosa | 50cc and 125cc",
    h1: "50cc and 125cc scooter rental in Bosa",
    description: "Discover 50cc and 125cc scooter rental in Bosa: rates, equipment, pickup and delivery. Send a no-obligation availability request.",
    eyebrow: "Bosa at your pace",
    primaryKeyword: "scooter rental Bosa",
    intro: "The old town, Bosa Marina and the coast feel closer when you can travel on your own schedule. Choose your scooter and share your dates: your request is non-binding and helps us prepare the service for launch.",
    sections: [
      {
        heading: "The fleet",
        body: ["The fleet is designed around 50cc and 125cc scooters, all approved for one rider and one passenger. We will help you choose the right model for your licence, experience and route."],
        bullets: ["Two helmets", "Top box", "Lock or disc lock", "One additional registered rider"],
      },
      {
        heading: "What is included",
        body: ["Published rates are designed to include VAT, equipment, the full-to-full fuel policy and the listed cover. Before any rental, you will receive availability and the full conditions in writing."],
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
    title: "Scooter rental in Bosa Marina | Request availability",
    h1: "Scooters for Bosa Marina",
    description: "50cc and 125cc scooters for travelling between Bosa Marina, the old town and coast. Request availability and choose pickup or delivery.",
    eyebrow: "From the sea to the old town",
    primaryKeyword: "scooter rental Bosa Marina",
    intro: "Staying in Bosa Marina? Share your dates and accommodation area. We are defining the most convenient option between collection from a base and delivery to where you are staying.",
    sections: [
      {
        heading: "Your scooter where you need it",
        body: ["Rates under assessment are €20–25 for delivery or collection only in Bosa and Bosa Marina, and €35–45 for both journeys. Share your stay location to help us organise a genuinely useful service."],
        bullets: ["Pickup planned in Bosa", "Accommodation delivery under assessment", "Availability confirmed before rental"],
      },
      {
        heading: "Included delivery for longer stays",
        body: ["We want to include delivery for rentals of at least 10 days, or for two scooters rented for at least 7 days. Send us your dates: requests will help us assess and confirm this option."],
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
    title: "Bosa scooter rental prices | 50cc and 125cc rates",
    h1: "Rates and rental options",
    description: "Planned Bosa scooter rental prices for 24 hours and 7 days, including mileage, deposit, delivery and collection costs.",
    eyebrow: "Transparent pricing",
    primaryKeyword: "Bosa scooter rental prices",
    intro: "View our provisional launch rates and share your dates. Your request is non-binding: availability and conditions will be confirmed in writing before any rental.",
    sections: [
      {
        heading: "Included mileage",
        body: ["The minimum 24-hour rental includes 150 km; the same rate applies even if the scooter is only used for four hours. The 7-day option includes 900 km. Distance above the relevant allowance costs €0.25/km."],
        bullets: ["Minimum rental: 24 hours", "Rentals of 2–6 days: price on request", "Outside May–October: price on request"],
      },
      {
        heading: "Deposit and inclusions",
        body: ["The planned deposit is €500 per scooter. Rates include VAT, an additional registered rider, two helmets, top box, security device, full-to-full fuel policy and the listed cover. Each item will be confirmed in the final conditions."],
      },
      {
        heading: "Delivery and collection",
        body: ["Pickup from the Bosa base is planned at no additional cost. For Bosa and Bosa Marina, we are assessing €20–25 for delivery or collection only and €35–45 for both. Availability and cost outside the area will be assessed on request."],
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
    description: "How to request a 50cc or 125cc scooter in Bosa: share your dates and needs, then receive an update when bookings open.",
    eyebrow: "Four simple steps",
    primaryKeyword: "how to rent a scooter in Bosa",
    intro: "In a few simple steps, tell us which scooter you need and when you are staying. At this stage, your request does not create a booking or payment.",
    sections: [
      { heading: "1. Tell us when you arrive", body: ["Select your dates, number of scooters and stay location. No documents or payment details are needed."] },
      { heading: "2. Choose your scooter", body: ["Would you prefer a 50cc for the old town and marina or a 125cc for exploring farther afield? Your licence, experience and route help us recommend the right model."] },
      { heading: "3. Request an update", body: ["If you want to hear when bookings open, optionally leave your email and consent to be contacted."] },
      { heading: "4. Receive confirmation", body: ["When the service is available, we will confirm the scooter, rates, pickup or delivery and full terms in writing before you make any commitment."] },
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
    intro: "Find everything you need to choose with confidence. The service is being validated, so availability and conditions will be confirmed in writing before any rental.",
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
    title: "Request availability | Bosa in Scooter",
    h1: "Request your scooter in Bosa",
    description: "Share your dates, preferred model and stay location. Your request is free, non-binding and helps us prepare the service.",
    eyebrow: "Free request · no commitment",
    primaryKeyword: "Bosa scooter contact",
    intro: "Tell us when you are coming and which scooter you need. Bosa in Scooter is currently being validated: the form does not create a booking, but it helps us build the service around the real needs of visitors.",
    sections: [
      {
        heading: "It only takes a few minutes",
        body: ["Select your dates, number of scooters, model and stay location. We do not ask for your name, documents or payment details; email is optional and only used if you want a launch update."],
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
