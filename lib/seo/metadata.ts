import type { Metadata } from "next";
import type { Locale, PageContent } from "@/lib/content/types";
import { absolute, languageAlternates } from "./hreflang";

export function createMetadata(locale: Locale, page: PageContent): Metadata {
  const alternates = languageAlternates(locale, page);
  const socialImage = absolute("/opengraph-image");
  const openGraphType = page.kind === "guide"
    ? { type: "article" as const, publishedTime: page.publishedAt, modifiedTime: page.lastModified }
    : { type: "website" as const };
  return {
    title: page.title,
    description: page.description,
    alternates,
    robots: { index: true, follow: true },
    openGraph: {
      ...openGraphType,
      locale: locale === "it" ? "it_IT" : "en_GB",
      alternateLocale: locale === "it" ? ["en_GB"] : ["it_IT"],
      siteName: "Bosa in Scooter",
      title: page.title,
      description: page.description,
      url: alternates.canonical,
      images: [{ url: socialImage, width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [socialImage] },
  };
}
