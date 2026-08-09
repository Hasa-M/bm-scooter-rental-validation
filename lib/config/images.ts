import type { Locale } from "@/lib/content/types";

/**
 * Put image files in public/images and replace the empty values below with paths
 * such as "/images/home-hero.webp". All customer-facing image paths live here.
 */
export const siteImagePaths: Record<SiteImageKey, string> = {
  favicon: "/favicon.png",
  logo: "/images/logo.png",
  homeHero: "/images/hero-card.png",
  rentalBosa: "/images/rental-bosa.png",
  guides: "/images/guides.png",
  beachesNearBosa: "/images/beaches-near-bosa.png",
  bosaAlgheroRoute: "/images/bosa-alghero-route.png",
};

type SiteImageKey =
  | "favicon"
  | "logo"
  | "homeHero"
  | "rentalBosa"
  | "guides"
  | "beachesNearBosa"
  | "bosaAlgheroRoute";

type ContentImageKey = Exclude<SiteImageKey, "favicon" | "logo">;

const pageImageKeys: Record<string, ContentImageKey> = {
  "": "homeHero",
  "noleggio-scooter-bosa": "rentalBosa",
  "scooter-rental-bosa": "rentalBosa",
  "location-scooter-bosa": "rentalBosa",
  "guide": "guides",
  "guides": "guides",
  "guide/spiagge-da-raggiungere-in-scooter-da-bosa": "beachesNearBosa",
  "guides/beaches-near-bosa-by-scooter": "beachesNearBosa",
  "guides/plages-pres-bosa-scooter": "beachesNearBosa",
  "guide/itinerario-in-scooter-bosa-alghero": "bosaAlgheroRoute",
  "guides/bosa-alghero-scooter-route": "bosaAlgheroRoute",
  "guides/itineraire-scooter-bosa-alghero": "bosaAlgheroRoute",
};

const imageAlts: Record<ContentImageKey, Record<Locale, string>> = {
  homeHero: {
    it: "Illustrazione di scooter per scoprire Bosa e il territorio",
    en: "Illustration of scooters for exploring Bosa and the surrounding area",
    fr: "Illustration de scooters pour découvrir Bosa et ses environs",
  },
  rentalBosa: {
    it: "Illustrazione del progetto di scooter 50cc e 125cc a Bosa",
    en: "Illustration of the planned 50cc and 125cc scooter service in Bosa",
    fr: "Illustration du projet de scooters 50cc et 125cc à Bosa",
  },
  guides: {
    it: "Illustrazione panoramica di Bosa e del territorio circostante",
    en: "Illustrated view of Bosa and the surrounding area",
    fr: "Vue illustrée de Bosa et de ses environs",
  },
  beachesNearBosa: {
    it: "Illustrazione della costa e delle spiagge nei dintorni di Bosa",
    en: "Illustration of the coast and beaches near Bosa",
    fr: "Illustration de la côte et des plages près de Bosa",
  },
  bosaAlgheroRoute: {
    it: "Illustrazione della strada costiera panoramica tra Bosa e Alghero",
    en: "Illustration of the scenic coastal road between Bosa and Alghero",
    fr: "Illustration de la route côtière panoramique entre Bosa et Alghero",
  },
};

const imagePositions: Record<ContentImageKey, string> = {
  homeHero: "42% center",
  rentalBosa: "50% 42%",
  guides: "55% 38%",
  beachesNearBosa: "50% 58%",
  bosaAlgheroRoute: "52% center",
};
export function getPageImage(slug: string, locale: Locale) {
  const key = pageImageKeys[slug];
  if (!key) return null;
  return {
    src: siteImagePaths[key],
    alt: imageAlts[key][locale],
    position: imagePositions[key],
  };
}
