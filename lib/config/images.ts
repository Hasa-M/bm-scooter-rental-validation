import type { Locale } from "@/lib/content/types";

/**
 * Put image files in public/images and replace the empty values below with paths
 * such as "/images/home-hero.webp". All customer-facing image paths live here.
 */
export const siteImagePaths: Record<SiteImageKey, string> = {
  favicon: "/favicon.svg",
  homeHero: "",
  rentalBosa: "",
  rentalBosaMarina: "",
  prices: "",
  howItWorks: "",
  faq: "",
  contact: "",
  guides: "",
  visitBosaWithoutCar: "",
  gettingAroundBosa: "",
  beachesNearBosa: "",
  bosaAlgheroRoute: "",
};

type SiteImageKey =
  | "favicon"
  | "homeHero"
  | "rentalBosa"
  | "rentalBosaMarina"
  | "prices"
  | "howItWorks"
  | "faq"
  | "contact"
  | "guides"
  | "visitBosaWithoutCar"
  | "gettingAroundBosa"
  | "beachesNearBosa"
  | "bosaAlgheroRoute";

type ContentImageKey = Exclude<SiteImageKey, "favicon">;

const pageImageKeys: Record<string, ContentImageKey> = {
  "": "homeHero",
  "noleggio-scooter-bosa": "rentalBosa",
  "scooter-rental-bosa": "rentalBosa",
  "noleggio-scooter-bosa-marina": "rentalBosaMarina",
  "scooter-rental-bosa-marina": "rentalBosaMarina",
  "prezzi": "prices",
  "prices": "prices",
  "come-funziona": "howItWorks",
  "how-it-works": "howItWorks",
  "domande-frequenti": "faq",
  "faq": "faq",
  "contatti": "contact",
  "contact": "contact",
  "guide": "guides",
  "guides": "guides",
  "guide/visitare-bosa-senza-auto": "visitBosaWithoutCar",
  "guides/visit-bosa-without-a-car": "visitBosaWithoutCar",
  "guide/come-muoversi-a-bosa": "gettingAroundBosa",
  "guides/getting-around-bosa": "gettingAroundBosa",
  "guide/spiagge-da-raggiungere-in-scooter-da-bosa": "beachesNearBosa",
  "guides/beaches-near-bosa-by-scooter": "beachesNearBosa",
  "guide/itinerario-in-scooter-bosa-alghero": "bosaAlgheroRoute",
  "guides/bosa-alghero-scooter-route": "bosaAlgheroRoute",
};

const imageAlts: Record<ContentImageKey, Record<Locale, string>> = {
  homeHero: {
    it: "Scooter per scoprire Bosa e il suo territorio",
    en: "Scooters for exploring Bosa and the surrounding area",
  },
  rentalBosa: {
    it: "Scooter 50cc e 125cc disponibili a Bosa",
    en: "50cc and 125cc scooters available in Bosa",
  },
  rentalBosaMarina: {
    it: "Scooter per muoversi tra Bosa Marina e il centro",
    en: "Scooter travel between Bosa Marina and the old town",
  },
  prices: {
    it: "Scooter Bosa in Scooter con caschi e dotazioni",
    en: "Bosa in Scooter vehicle with helmets and equipment",
  },
  howItWorks: {
    it: "Preparazione di uno scooter prima del noleggio",
    en: "Preparing a scooter before rental",
  },
  faq: {
    it: "Dettaglio di uno scooter e delle dotazioni di sicurezza",
    en: "Scooter and safety equipment detail",
  },
  contact: {
    it: "Punto di incontro Bosa in Scooter in zona Viale Alghero",
    en: "Bosa in Scooter meeting point near Viale Alghero",
  },
  guides: {
    it: "Panorama di Bosa e del territorio circostante",
    en: "View of Bosa and the surrounding area",
  },
  visitBosaWithoutCar: {
    it: "Visitare Bosa e il centro storico senza auto",
    en: "Visiting Bosa and its old town without a car",
  },
  gettingAroundBosa: {
    it: "Mobilità tra Bosa, Bosa Marina e il territorio",
    en: "Travel between Bosa, Bosa Marina and the surrounding area",
  },
  beachesNearBosa: {
    it: "Costa e spiagge nei dintorni di Bosa",
    en: "Coast and beaches near Bosa",
  },
  bosaAlgheroRoute: {
    it: "Strada costiera panoramica tra Bosa e Alghero",
    en: "Scenic coastal road between Bosa and Alghero",
  },
};

export function getPageImage(slug: string, locale: Locale) {
  const key = pageImageKeys[slug] ?? "guides";
  return {
    src: siteImagePaths[key],
    alt: imageAlts[key][locale],
  };
}
