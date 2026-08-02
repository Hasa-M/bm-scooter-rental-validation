import { businessConfig } from "@/lib/config/business";
import type { Locale, PageContent } from "@/lib/content/types";
import type { Crumb } from "./breadcrumbs";
import { absolute } from "./hreflang";

function cleanBusiness() {
  const business: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": `${businessConfig.baseUrl}/#business`,
    name: businessConfig.brandName,
    url: businessConfig.baseUrl,
    areaServed: businessConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.region,
      addressCountry: businessConfig.address.country,
    },
  };
  if (!businessConfig.phone.startsWith("[")) business.telephone = businessConfig.phone;
  if (!businessConfig.email.startsWith("[")) business.email = businessConfig.email;
  return business;
}

export function buildJsonLd(locale: Locale, page: PageContent, crumbs: Crumb[]) {
  const url = absolute(`/${locale}${page.slug ? `/${page.slug}` : ""}`);
  const graph: Record<string, unknown>[] = [
    { "@type": "WebSite", "@id": `${businessConfig.baseUrl}/#website`, url: businessConfig.baseUrl, name: businessConfig.brandName, inLanguage: locale },
    cleanBusiness(),
    { "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.label, item: absolute(crumb.href) })) },
  ];
  if (page.kind === "commercial") graph.push({ "@type": "Service", name: page.h1, description: page.description, provider: { "@id": `${businessConfig.baseUrl}/#business` }, areaServed: businessConfig.serviceArea, url });
  if (page.kind === "guide") graph.push({ "@type": "Article", headline: page.h1, description: page.description, dateModified: page.updatedAt, datePublished: page.updatedAt, inLanguage: locale, author: { "@type": "Organization", name: businessConfig.brandName }, mainEntityOfPage: url });
  if (page.faq?.length) graph.push({ "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) });
  return { "@context": "https://schema.org", "@graph": graph };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
