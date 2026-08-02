import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AvailabilityForm } from "@/components/availability-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildJsonLd, JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getPage, isLocale, pagesByLocale } from "@/lib/content";
import type { Locale, PageContent } from "@/lib/content/types";

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

export function generateStaticParams() {
  return (["it", "en"] as Locale[]).flatMap((locale) => pagesByLocale[locale].map((page) => ({ locale, slug: page.slug ? page.slug.split("/") : [] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = getPage(locale, slug?.join("/") ?? "");
  return page ? createMetadata(locale, page) : {};
}

function Cta({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return <div className="actions"><a className="button" href="#availability-form">{it ? "Richiedi disponibilità" : "Check availability"}</a><a className="button secondary" href="#availability-form">{it ? "Scrivici su WhatsApp" : "Message us on WhatsApp"}</a></div>;
}

function GuideCards({ locale }: { locale: Locale }) {
  const guides = pagesByLocale[locale].filter((item) => item.kind === "guide");
  return <div className="grid-3">{guides.map((guide) => <Link key={guide.slug} href={`/${locale}/${guide.slug}`} className="card card-link"><p className="eyebrow">{guide.updatedAt}</p><h3>{guide.h1}</h3><p>{guide.description}</p></Link>)}</div>;
}

function HomePage({ locale, page }: { locale: Locale; page: PageContent }) {
  const it = locale === "it";
  return <>
    <section className="hero"><div className="container hero-grid"><div><p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1><p className="lead">{page.intro}</p><Cta locale={locale} /><div className="trust"><span>{it ? "Nessun pagamento online" : "No online payment"}</span><span>{it ? "Condizioni prima della conferma" : "Terms before confirmation"}</span></div></div><div className="hero-card" role="img" aria-label={it ? "Spazio riservato a una fotografia autentica di uno scooter a Bosa" : "Reserved space for an authentic scooter photograph in Bosa"}><span className="status">{it ? "Servizio in fase di attivazione" : "Service being prepared"}</span><strong>{it ? "Il tuo ritmo. La costa davanti." : "Your pace. The coast ahead."}</strong></div></div></section>
    <section className="section alt"><div className="container"><div className="section-head"><p className="eyebrow">{it ? "Una scelta consapevole" : "A considered choice"}</p><h2>{page.sections[0].heading}</h2><p className="lead">{page.sections[0].body[0]}</p></div><div className="grid-3">{page.sections[0].bullets?.map((item, index) => <article className="card" key={item}><span className="number">{index + 1}</span><h3>{item}</h3></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-head"><p className="eyebrow">{it ? "Preparati al viaggio" : "Plan your stay"}</p><h2>{it ? "Guide locali per decidere meglio" : "Local guides for better decisions"}</h2></div><GuideCards locale={locale} /></div></section>
    <section className="section alt"><div className="container split"><div><p className="eyebrow">{it ? "Contatto diretto" : "Direct enquiry"}</p><h2>{it ? "Raccontaci quando arrivi" : "Tell us when you arrive"}</h2><p className="lead">{it ? "Ti risponderemo con disponibilità, prezzo e condizioni reali." : "We will reply with actual availability, price and terms."}</p></div><AvailabilityForm locale={locale} /></div></section>
  </>;
}

function StandardPage({ locale, page }: { locale: Locale; page: PageContent }) {
  const it = locale === "it";
  const showForm = ["commercial", "contact", "prices"].includes(page.kind);
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1><p className="lead">{page.intro}</p>{page.kind === "commercial" && <Cta locale={locale} />}<div className="notice">{it ? "Servizio in fase di attivazione. Disponibilità, prezzo e condizioni devono essere confermati." : "Service being prepared. Availability, price and terms must be confirmed."}</div></div></section>
    <section className="section alt"><div className="container split"><article className="prose">{page.kind === "guide" && <p><strong>{it ? "A cura di" : "By"} {"Scooter Bosa"}</strong> · {it ? "Aggiornato il" : "Updated"} {page.updatedAt}</p>}{page.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</article><aside><div className="placeholder-photo">{it ? "Placeholder: sostituire con una fotografia autentica e ottimizzata di Bosa o del mezzo disponibile." : "Placeholder: replace with an authentic, optimised photo of Bosa or the actual scooter."}</div>{page.kind === "guide" && <p><Link href={`/${locale}/${it ? "noleggio-scooter-bosa" : "scooter-rental-bosa"}`}>{it ? "Scopri il noleggio scooter a Bosa" : "Explore scooter rental in Bosa"}</Link></p>}</aside></div></section>
    {page.slug === (it ? "guide" : "guides") && <section className="section"><div className="container"><GuideCards locale={locale} /></div></section>}
    {page.faq?.length ? <section className="section"><div className="container split"><div><p className="eyebrow">FAQ</p><h2>{it ? "Domande frequenti" : "Frequently asked questions"}</h2></div><div className="faq">{page.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section> : null}
    {showForm && <section className="section alt"><div className="container split"><div><p className="eyebrow">{it ? "Senza impegno" : "No obligation"}</p><h2>{it ? "Verifica disponibilità" : "Check availability"}</h2><p className="lead">{it ? "Non inserire documenti o dati di pagamento." : "Do not enter ID or payment details."}</p></div><AvailabilityForm locale={locale} /></div></section>}
    {page.kind === "guide" && <section className="section"><div className="container"><h2>{it ? "Continua a pianificare" : "Keep planning"}</h2><GuideCards locale={locale} /></div></section>}
  </>;
}

export default async function LocalizedPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const page = getPage(rawLocale, slug?.join("/") ?? "");
  if (!page) notFound();
  const crumbs = getBreadcrumbs(rawLocale, page);
  return <><SiteHeader locale={rawLocale} page={page} />{page.slug && <Breadcrumbs items={crumbs} />}<main id="main">{page.kind === "home" ? <HomePage locale={rawLocale} page={page} /> : <StandardPage locale={rawLocale} page={page} />}</main><SiteFooter locale={rawLocale} /><JsonLd data={buildJsonLd(rawLocale, page, crumbs)} /></>;
}
