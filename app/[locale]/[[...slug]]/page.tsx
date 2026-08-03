import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { InterestForm } from "@/components/interest-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { businessConfig } from "@/lib/config/business";
import { isDataProviderConfigured, privacyConfig } from "@/lib/config/privacy";
import { getPageImage } from "@/lib/config/images";
import { getBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildJsonLd, JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getPage, isLocale, pagesByLocale } from "@/lib/content";
import type { Locale, PageContent } from "@/lib/content/types";

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

export function generateStaticParams() {
  return (["it", "en"] as Locale[]).flatMap((locale) =>
    pagesByLocale[locale].map((page) => ({
      locale,
      slug: page.slug ? page.slug.split("/") : [],
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = getPage(locale, slug?.join("/") ?? "");
  return page ? createMetadata(locale, page) : {};
}

function Cta({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return (
    <div className="actions">
      <a className="button" href="#interest-form">
        {it ? "Facci sapere se sei interessato" : "Let us know if you are interested"}
      </a>
      <a className="button secondary" href="#interest-form">
        {it ? "Chiedi informazioni" : "Ask for details"}
      </a>
    </div>
  );
}

function GuideCards({ locale }: { locale: Locale }) {
  const guides = pagesByLocale[locale].filter((item) => item.kind === "guide");
  return (
    <div className="grid-3">
      {guides.map((guide) => (
        <Link key={guide.slug} href={"/" + locale + "/" + guide.slug} className="card card-link">
          <p className="eyebrow">{locale === "it" ? "Guida locale" : "Local guide"}</p>
          <h3>{guide.h1}</h3>
          <p>{guide.description}</p>
        </Link>
      ))}
    </div>
  );
}

function PageVisual({
  locale,
  page,
  hero = false,
}: {
  locale: Locale;
  page: PageContent;
  hero?: boolean;
}) {
  const it = locale === "it";
  const image = getPageImage(page.slug, locale);

  if (hero) {
    return (
      <div
        className={"hero-card" + (image?.src ? " has-image" : "")}
      >
        {image?.src && (
          <Image
            className="site-image"
            style={{ objectPosition: image.position }}
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 42vw"
          />
        )}
        <span className="status">{businessConfig.brandName}</span>
        <strong>{it ? "Più libertà. Più Bosa." : "More freedom. More of Bosa."}</strong>
      </div>
    );
  }

  if (image?.src) {
    return (
      <div className="page-image">
        <Image
          className="site-image"
          style={{ objectPosition: image.position }}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 820px) 100vw, 38vw"
        />
      </div>
    );
  }

  return null;
}
function euro(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale === "it" ? "it-IT" : "en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function PricingTables({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const offer = businessConfig.provisionalOffer;
  const delivery = offer.delivery;
  const oneWay = euro(locale, delivery.oneWay.min) + "–" + euro(locale, delivery.oneWay.max);
  const roundTrip = euro(locale, delivery.roundTrip.min) + "–" + euro(locale, delivery.roundTrip.max);

  return (
    <section className="section">
      <div className="container pricing-tables">
        <div>
          <p className="eyebrow">{it ? "Tariffe stagionali" : "Seasonal rates"}</p>
          <h2>{it ? "Prezzi per scooter" : "Prices per scooter"}</h2>
          <p className="lead">
            {it
              ? "Importi provvisori, calcolati per 125cc, IVA inclusa e assicurazione completa."
              : "Provisional prices including VAT calculated and full insurance for 125cc."}
          </p>
          <div className="table-scroll">
            <table className="rate-table">
              <thead>
                <tr>
                  <th scope="col">{it ? "Periodo" : "Period"}</th>

                  <th scope="col">{it ? "24 ore" : "24 hours"}</th>
                  <th scope="col">{it ? "7 giorni" : "7 days"}</th>
                </tr>
              </thead>
              <tbody>
                {offer.seasonalRates.map((rate) => (
                  <tr key={rate.period.it}>
                    <th scope="row">{rate.period[locale]}</th>

                    <td data-label={it ? "24 ore" : "24 hours"}>{euro(locale, rate.fullDay)}</td>
                    <td data-label={it ? "7 giorni" : "7 days"}>{euro(locale, rate.sevenDays)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note">
            {it
              ? "Noleggio minimo di 24 ore con 150 km inclusi; 900 km nei 7 giorni. Extra: 0,25 €/km."
              : "Minimum 24-hour rental with 150 km included; 900 km for 7 days. Extra distance: €0.25/km."}
          </p>
        </div>

        <div>
          <p className="eyebrow">{it ? "Logistica" : "Logistics"}</p>
          <h2>{it ? "Consegna e ritiro" : "Delivery and collection"}</h2>
          <div className="table-scroll">
            <table className="rate-table">
              <thead>
                <tr>
                  <th scope="col">{it ? "Servizio" : "Service"}</th>
                  <th scope="col">{it ? "Prezzo indicativo" : "Indicative price"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{it ? "Ritiro in sede" : "Pickup from our base"}</th>
                  <td data-label={it ? "Prezzo indicativo" : "Indicative price"}>{it ? "Incluso" : "Included"}</td>
                </tr>
                <tr>
                  <th scope="row">{it ? "Consegna oppure ritiro a Bosa/Bosa Marina" : "Delivery or collection in Bosa/Bosa Marina"}</th>
                  <td data-label={it ? "Prezzo indicativo" : "Indicative price"}>{oneWay}</td>
                </tr>
                <tr>
                  <th scope="row">{it ? "Consegna e ritiro a Bosa/Bosa Marina" : "Delivery and collection in Bosa/Bosa Marina"}</th>
                  <td data-label={it ? "Prezzo indicativo" : "Indicative price"}>{roundTrip}</td>
                </tr>
                <tr>
                  <th scope="row">{it ? "Fuori Bosa/Bosa Marina" : "Outside Bosa/Bosa Marina"}</th>
                  <td data-label={it ? "Prezzo indicativo" : "Indicative price"}>{it ? "Fattibilità e prezzo su richiesta" : "Feasibility and price on request"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">
            {it
              ? "Possibile consegna gratuita per almeno 10 giorni, oppure per due scooter noleggiati almeno 7 giorni. Da confermare caso per caso."
              : "Free delivery may be available for bookings of at least 10 days, or two scooters for at least 7 days. Confirmed case by case."}
          </p>
        </div>
      </div>
    </section>
  );
}

function HomePage({ locale, page }: { locale: Locale; page: PageContent }) {
  const it = locale === "it";
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{page.intro}</p>
            <Cta locale={locale} />
            <div className="trust">
              <span>{it ? "Scooter 50cc e 125cc" : "50cc and 125cc scooters"}</span>
              <span>{it ? "Condizioni confermate prima del noleggio" : "Terms confirmed before rental"}</span>
            </div>
          </div>
          <PageVisual locale={locale} page={page} hero />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{it ? "Un servizio per il territorio" : "A service for the local area"}</p>
            <h2>{page.sections[0].heading}</h2>
            <p className="lead">{page.sections[0].body[0]}</p>
          </div>
          <div className="grid-3">
            {page.sections[0].bullets?.map((item, index) => (
              <article className="card" key={item}>
                <span className="number">{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{it ? "Preparati al viaggio" : "Plan your stay"}</p>
            <h2>{it ? "Guide locali per muoverti meglio" : "Local guides for easier travel"}</h2>
          </div>
          <GuideCards locale={locale} />
        </div>
      </section>

      <InterestForm locale={locale} />
    </>
  );
}

function PrivacyControllerDetails({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return (
    <p>
      {it ? "Il titolare del trattamento è " : "The data controller is "}
      {privacyConfig.controllerName}, {privacyConfig.controllerRole[locale]}.{" "}
      {it ? "Contatto privacy: " : "Privacy contact: "}
      <a href={`mailto:${privacyConfig.contactEmail}`}>{privacyConfig.contactEmail}</a>.
    </p>
  );
}

function PrivacyProviderDetails({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const provider = privacyConfig.dataProvider;

  if (!isDataProviderConfigured()) {
    return (
      <p>
        {it
          ? "Il fornitore incaricato di ricevere e conservare le risposte non è ancora stato selezionato. Il modulo non sarà attivato in produzione finché il fornitore, il luogo del trattamento, il ruolo privacy e le eventuali garanzie per trasferimenti internazionali non saranno stati verificati e riportati in questa informativa."
          : "The provider responsible for receiving and storing responses has not yet been selected. The form will not be enabled in production until the provider, processing location, privacy role and any safeguards for international transfers have been verified and included in this notice."}
      </p>
    );
  }

  return (
    <>
      <p>
        {it ? "Fornitore: " : "Provider: "}<strong>{provider.name}</strong>.{" "}
        {it ? "Ruolo privacy: " : "Privacy role: "}{provider.role}.{" "}
        {it ? "Regione del trattamento: " : "Processing region: "}{provider.region}.
        {provider.transferSafeguards && (
          <> {it ? "Garanzie per i trasferimenti: " : "Transfer safeguards: "}{provider.transferSafeguards}.</>
        )}
      </p>
      {provider.privacyPolicyUrl && (
        <p>
          <a href={provider.privacyPolicyUrl} target="_blank" rel="noreferrer">
            {it ? "Informativa privacy del fornitore" : "Provider privacy policy"}
          </a>
        </p>
      )}
    </>
  );
}
function StandardPage({ locale, page }: { locale: Locale; page: PageContent }) {
  const it = locale === "it";
  const showForm = ["commercial", "contact", "prices"].includes(page.kind);
  const hasVisual = Boolean(getPageImage(page.slug, locale)?.src);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="lead">{page.intro}</p>
          {page.kind === "commercial" && <Cta locale={locale} />}
          <div className="notice">
            {it
              ? "Tariffe, dotazioni, coperture e servizi sono provvisori: difenteranno effettivi solo all'apertura del business."
              : "Rates, equipment, cover and services are provisional and only become final upon business opening."}
          </div>
        </div>
      </section>

      {page.kind === "prices" && <PricingTables locale={locale} />}

      <section className="section alt">
        <div className={"container" + (hasVisual ? " split" : " content-column")}>
          <article className="prose">
            {page.kind === "guide" && (
              <p><strong>{it ? "A cura di" : "By"} {businessConfig.brandName}</strong></p>
            )}
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {page.slug === "privacy" && section.heading === (it ? "Titolare del trattamento" : "Data controller") && (
                  <PrivacyControllerDetails locale={locale} />
                )}
                {page.slug === "privacy" && section.heading === (it ? "Destinatari e fornitori" : "Recipients and providers") && (
                  <PrivacyProviderDetails locale={locale} />
                )}
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            {page.slug === "privacy" && (
              <section className="privacy-references">
                <h2>{it ? "Riferimenti ufficiali" : "Official references"}</h2>
                <ul>
                  <li>
                    <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noreferrer">
                      {it ? "Regolamento generale sulla protezione dei dati (GDPR)" : "General Data Protection Regulation (GDPR)"}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.garanteprivacy.it/it/i-miei-diritti" target="_blank" rel="noreferrer">
                      {it ? "Diritti e reclami — Garante Privacy" : "Rights and complaints — Italian Data Protection Authority"}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en" target="_blank" rel="noreferrer">
                      {it ? "Linee guida EDPB sul consenso" : "EDPB guidelines on consent"}
                    </a>
                  </li>
                </ul>
              </section>
            )}            {page.kind === "guide" && (
              <p>
                <Link href={"/" + locale + "/" + (it ? "noleggio-scooter-bosa" : "scooter-rental-bosa")}>
                  {it ? "Scopri gli scooter disponibili a Bosa" : "Explore available scooters in Bosa"}
                </Link>
              </p>
            )}
          </article>
          {hasVisual && (
            <aside>
              <PageVisual locale={locale} page={page} />
            </aside>
          )}
        </div>
      </section>

      {page.slug === (it ? "guide" : "guides") && (
        <section className="section">
          <div className="container"><GuideCards locale={locale} /></div>
        </section>
      )}

      {page.faq?.length ? (
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>{it ? "Domande frequenti" : "Frequently asked questions"}</h2>
            </div>
            <div className="faq">
              {page.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showForm && <InterestForm locale={locale} />}

      {page.kind === "guide" && (
        <section className="section">
          <div className="container">
            <h2>{it ? "Continua a esplorare" : "Keep exploring"}</h2>
            <GuideCards locale={locale} />
          </div>
        </section>
      )}
    </>
  );
}

export default async function LocalizedPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const page = getPage(rawLocale, slug?.join("/") ?? "");
  if (!page) notFound();
  const crumbs = getBreadcrumbs(rawLocale, page);

  return (
    <>
      <SiteHeader locale={rawLocale} page={page} />
      {page.slug && <Breadcrumbs items={crumbs} />}
      <main id="main">
        {page.kind === "home" ? <HomePage locale={rawLocale} page={page} /> : <StandardPage locale={rawLocale} page={page} />}
      </main>
      <SiteFooter locale={rawLocale} />
      <JsonLd data={buildJsonLd(rawLocale, page, crumbs)} />
    </>
  );
}
