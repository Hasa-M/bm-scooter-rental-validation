import type { Locale } from "@/lib/content/types";

export function tr(locale: Locale, italian: string, english: string, french: string): string {
  return { it: italian, en: english, fr: french }[locale];
}

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
};

export const hrefLang: Record<Locale, string> = {
  it: "it-IT",
  en: "en",
  fr: "fr-FR",
};
