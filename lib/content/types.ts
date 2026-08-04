export type Locale = "it" | "en";
export type SourceLink = { label: string; href: string };
export type Section = { heading: string; body: string[]; bullets?: string[]; sources?: SourceLink[] };
export type Faq = { question: string; answer: string };
export type PageContent = {
  slug: string;
  alternateSlug: string;
  kind: "home" | "commercial" | "guide" | "info" | "contact" | "prices";
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  primaryKeyword: string;
  publishedAt: string;
  lastModified: string;
  reviewedAt?: string;
  sections: Section[];
  faq?: Faq[];
};

type PageContentDraft = Omit<PageContent, "publishedAt" | "lastModified" | "reviewedAt"> &
  Partial<Pick<PageContent, "publishedAt" | "lastModified" | "reviewedAt">>;

export function definePages(
  pages: PageContentDraft[],
  dates: Pick<PageContent, "publishedAt" | "lastModified">,
): PageContent[] {
  return pages.map((page) => ({
    ...dates,
    ...page,
    reviewedAt: page.reviewedAt ?? (page.kind === "guide" ? dates.lastModified : undefined),
  }));
}
