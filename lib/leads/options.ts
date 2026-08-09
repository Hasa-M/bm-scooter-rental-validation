export const serviceLocations = [
  "Alghero",
  "Bosa",
  "Bosa Marina",
  "Flussio",
  "Macomer",
  "Magomadas",
  "Modolo",
  "Montresta",
  "Porto Alabe",
  "Sabba Drucche",
  "Sagama",
  "Santa Maria del Mare",
  "Sindia",
  "Suni",
  "Tinnura",
  "Tresnuraghes",
  "Turas",
  "Altre località (non elencate)",
] as const;

export const ageBands = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"] as const;

export const originAreas = [
  { value: "sardinia", it: "Sardegna", en: "Sardinia", fr: "Sardaigne" },
  { value: "italy", it: "Resto d'Italia", en: "Rest of Italy", fr: "Reste de l'Italie" },
  { value: "eu", it: "Unione europea (esclusa Italia)", en: "European Union (excluding Italy)", fr: "Union européenne (hors Italie)" },
  { value: "europe-non-eu", it: "Europa fuori dall'UE", en: "Europe outside the EU", fr: "Europe hors UE" },
  { value: "north-america", it: "Nord America", en: "North America", fr: "Amérique du Nord" },
  { value: "other", it: "Altra macroarea", en: "Another macro-region", fr: "Autre macro-région" },
] as const;

export type ServiceLocation = (typeof serviceLocations)[number];
export type ScooterInterest = "50cc" | "125cc";
export type AgeBand = (typeof ageBands)[number];
export type OriginArea = (typeof originAreas)[number]["value"];
