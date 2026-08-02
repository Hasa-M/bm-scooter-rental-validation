import type { Metadata } from "next";
import type { Locale, PageContent } from "@/lib/content/types";
import { languageAlternates } from "./hreflang";

export function createMetadata(locale: Locale, page: PageContent): Metadata {
  const alternates = languageAlternates(locale, page);
  return {
    title: page.title,
    description: page.description,
    alternates,
    robots: { index: true, follow: true },
    openGraph: {
      type: page.kind === "guide" ? "article" : "website",
      locale: locale === "it" ? "it_IT" : "en_GB",
      title: page.title,
      description: page.description,
      url: alternates.canonical,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/opengraph-image"] },
  };
}
