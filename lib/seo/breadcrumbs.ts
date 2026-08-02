import type { Locale, PageContent } from "@/lib/content/types";

export type Crumb = { label: string; href: string };

export function getBreadcrumbs(locale: Locale, page: PageContent): Crumb[] {
  const home = { label: locale === "it" ? "Home" : "Home", href: `/${locale}` };
  if (!page.slug) return [home];
  if (page.kind === "guide") {
    return [home, { label: locale === "it" ? "Guide" : "Guides", href: `/${locale}/${locale === "it" ? "guide" : "guides"}` }, { label: page.h1, href: `/${locale}/${page.slug}` }];
  }
  return [home, { label: page.h1, href: `/${locale}/${page.slug}` }];
}
