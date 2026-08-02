import type { Locale } from "@/lib/content/types";

/**
 * Put image files in public/images and replace the empty values below with paths
 * such as "/images/home-hero.webp". All customer-facing image paths live here.
 */
export const siteImagePaths: Record<SiteImageKey, string> = {
  favicon: "/favicon.svg",
  homeHero: "",
  rentalBosa: "",
  guides: "",
  beachesNearBosa: "",
  bosaAlgheroRoute: "",
};

type SiteImageKey =
  | "favicon"
  | "homeHero"
  | "rentalBosa"
  | "guides"
  | "beachesNearBosa"
  | "bosaAlgheroRoute";

type ContentImageKey = Exclude<SiteImageKey, "favicon">;

const pageImageKeys: Record<string, ContentImageKey> = {
  "": "homeHero",
  "noleggio-scooter-bosa": "rentalBosa",
  "scooter-rental-bosa": "rentalBosa",
  "guide": "guides",
  "guides": "guides",
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
  guides: {
    it: "Panorama di Bosa e del territorio circostante",
    en: "View of Bosa and the surrounding area",
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
  const key = pageImageKeys[slug];
  if (!key) return null;
  return {
    src: siteImagePaths[key],
    alt: imageAlts[key][locale],
  };
}
