export const businessConfig = {
  status: "validation" as "validation" | "active",
  brandName: "Scooter Bosa",
  legalName: "[RAGIONE SOCIALE]",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  email: "[EMAIL]",
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
  pickupLocation: "[LUOGO DI RITIRO]",
  startingPrice: null as number | null,
  currency: "EUR",
  serviceArea: ["Bosa", "Bosa Marina", "Planargia", "Sardegna occidentale"],
} as const;

export const isConfigured = () =>
  !businessConfig.email.startsWith("[") &&
  !businessConfig.whatsappNumber.startsWith("[");
