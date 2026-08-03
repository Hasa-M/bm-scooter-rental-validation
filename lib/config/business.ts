export const businessConfig = {
  status: "validation" as "validation" | "active",
  brandName: "Bosa in Scooter",
  legalName: "[RAGIONE SOCIALE]",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bosainscooter.it",
  email: "info@bosainscooter.it",
  phone: "[TELEFONO]",
  whatsappNumber: "[NUMERO WHATSAPP]",
  address: {
    streetAddress: "[INDIRIZZO]",
    postalCode: "[CAP]",
    city: "Bosa",
    province: "OR",
    region: "Sardegna",
    country: "IT",
  },
  coordinates: null as { latitude: number; longitude: number } | null,
  openingHours: [] as string[],
  pickupLocation: "Zona Viale Alghero, Bosa",
  startingPrice: null as number | null,
  currency: "EUR",
  serviceArea: ["Bosa", "Bosa Marina", "Planargia", "Sardegna occidentale"],
  provisionalOffer: {
    isProvisional: true,
    vehicleClasses: ["50cc", "125cc"],
    securityDeposit: 500,
    mileage: { fullDay: 150, sevenDays: 900, extraPerKm: 0.25 },

    seasonalRates: [
      {
        period: { it: "Bassa stagione (maggio, giugno, ottobre)", en: "Low season (May, June, October)" },
        fullDay: 66,
        sevenDays: 399,
      },
      {
        period: { it: "Alta stagione (luglio, agosto, settembre)", en: "High season (July, August, September)" },
        fullDay: 74,
        sevenDays: 449,
      },
    ],
    delivery: {
      oneWay: { min: 20, max: 25 },
      roundTrip: { min: 35, max: 45 },
      freeFromDays: 10,
      freeForTwoScootersFromDays: 7,
    },
  },
} as const;

export const isConfigured = () =>
  !businessConfig.email.startsWith("[") &&
  !businessConfig.whatsappNumber.startsWith("[");
