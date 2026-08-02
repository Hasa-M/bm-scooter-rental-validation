import { enPages } from "@/content/en";
import { itPages } from "@/content/it";
import type { Locale, PageContent } from "./types";

export const locales: Locale[] = ["it", "en"];
export const pagesByLocale = { it: itPages, en: enPages };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPage(locale: Locale, slug = ""): PageContent | undefined {
  return pagesByLocale[locale].find((page) => page.slug === slug);
}

export function getAlternatePath(locale: Locale, page: PageContent): string {
  const otherLocale = locale === "it" ? "en" : "it";
  return `/${otherLocale}${page.alternateSlug ? `/${page.alternateSlug}` : ""}`;
}
