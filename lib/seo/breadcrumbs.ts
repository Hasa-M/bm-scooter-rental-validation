import type { Locale, PageContent } from "@/lib/content/types";

export type Crumb = { label: string; href: string };

export function getBreadcrumbs(locale: Locale, page: PageContent): Crumb[] {
  const home = { label: "Home", href: `/${locale}` };
  if (!page.slug) return [home];
  if (page.kind === "guide") {
    const guidesLabel = locale === "it" ? "Guide" : locale === "fr" ? "Guides" : "Guides";
    const guidesSlug = locale === "it" ? "guide" : "guides";
    return [home, { label: guidesLabel, href: `/${locale}/${guidesSlug}` }, { label: page.h1, href: `/${locale}/${page.slug}` }];
  }
  return [home, { label: page.h1, href: `/${locale}/${page.slug}` }];
}
