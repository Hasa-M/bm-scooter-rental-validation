import { businessConfig } from "@/lib/config/business";
import type { Locale, PageContent } from "@/lib/content/types";
import { getLocalizedPath } from "@/lib/content";

export function absolute(path: string) {
  return new URL(path, businessConfig.baseUrl).toString();
}

export function languageAlternates(locale: Locale, page: PageContent) {
  const currentPath = `/${locale}${page.slug ? `/${page.slug}` : ""}`;
  const itPath = locale === "it" ? currentPath : getLocalizedPath("it", page);
  const enPath = locale === "en" ? currentPath : getLocalizedPath("en", page);
  const frPath = locale === "fr" ? currentPath : getLocalizedPath("fr", page);
  return {
    canonical: absolute(currentPath),
    languages: {
      "it-IT": absolute(itPath),
      "en": absolute(enPath),
      "fr-FR": absolute(frPath),
      "x-default": absolute(itPath),
    },
  };
}
