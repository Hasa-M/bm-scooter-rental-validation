export const serviceLocations = [
  "Bosa",
  "Bosa Marina",
  "Suni",
  "Magomadas",
  "Tresnuraghes",
  "Porto Alabe",
  "Turas",
  "Santa Maria del Mare",
  "Sagama",
  "Tinnura",
  "Flussio",
  "Montresta",
  "Modolo",
  "Sabba Drucche",
] as const;

export type ServiceLocation = (typeof serviceLocations)[number];
export type ScooterInterest = "50cc" | "125cc";
