import { enPages } from "@/content/en";
import { frPages } from "@/content/fr";
import { itPages } from "@/content/it";
import type { Locale, PageContent } from "./types";

export const locales: Locale[] = ["it", "en", "fr"];
export const pagesByLocale = { it: itPages, en: enPages, fr: frPages };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPage(locale: Locale, slug = ""): PageContent | undefined {
  return pagesByLocale[locale].find((page) => page.slug === slug);
}

export function getLocalizedPath(targetLocale: Locale, page: PageContent): string {
  const translatedPage = pagesByLocale[targetLocale].find((candidate) =>
    candidate.slug === page.alternateSlug ||
    candidate.alternateSlug === page.slug ||
    candidate.alternateSlug === page.alternateSlug
  );
  if (!translatedPage) throw new Error(`Missing ${targetLocale} translation for ${page.slug || "home"}`);
  return `/${targetLocale}${translatedPage.slug ? `/${translatedPage.slug}` : ""}`;
}
