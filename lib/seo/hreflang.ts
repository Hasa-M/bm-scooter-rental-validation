import { businessConfig } from "@/lib/config/business";
import type { Locale, PageContent } from "@/lib/content/types";
import { getAlternatePath } from "@/lib/content";

export function absolute(path: string) {
  return new URL(path, businessConfig.baseUrl).toString();
}

export function languageAlternates(locale: Locale, page: PageContent) {
  const currentPath = `/${locale}${page.slug ? `/${page.slug}` : ""}`;
  const alternatePath = getAlternatePath(locale, page);
  const itPath = locale === "it" ? currentPath : alternatePath;
  const enPath = locale === "en" ? currentPath : alternatePath;
  return {
    canonical: absolute(currentPath),
    languages: {
      "it-IT": absolute(itPath),
      "en": absolute(enPath),
      "x-default": absolute(itPath),
    },
  };
}
