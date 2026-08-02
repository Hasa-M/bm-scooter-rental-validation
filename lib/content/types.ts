export type Locale = "it" | "en";
export type Section = { heading: string; body: string[]; bullets?: string[] };
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
  sections: Section[];
  faq?: Faq[];
  updatedAt?: string;
};
