import Link from "next/link";
import type { Locale, PageContent } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";
import { getAlternatePath } from "@/lib/content";

export function SiteHeader({ locale, page }: { locale: Locale; page: PageContent }) {
  const isIt = locale === "it";
  const commercial = "/" + locale + "/" + (isIt ? "noleggio-scooter-bosa" : "scooter-rental-bosa");
  const guides = "/" + locale + "/" + (isIt ? "guide" : "guides");
  const contact = "/" + locale + "/" + (isIt ? "contatti" : "contact");

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{isIt ? "Vai al contenuto" : "Skip to content"}</a>
      <div className="container nav">
        <Link className="brand" href={"/" + locale}>
          <span className="brand-mark" aria-hidden="true">B</span>
          {businessConfig.brandName}
        </Link>
        <nav className="nav-links" aria-label={isIt ? "Navigazione principale" : "Main navigation"}>
          <Link href={commercial}>{isIt ? "Noleggio" : "Rental"}</Link>
          <Link href={"/" + locale + "/" + (isIt ? "prezzi" : "prices")}>{isIt ? "Prezzi" : "Prices"}</Link>
          <Link href={guides}>{isIt ? "Guide" : "Guides"}</Link>
          <Link
            className="locale"
            href={getAlternatePath(locale, page)}
            hrefLang={isIt ? "en" : "it-IT"}
            aria-label={isIt ? "View this page in English" : "Visualizza questa pagina in italiano"}
          >
            {isIt ? "EN" : "IT"}
          </Link>
          <Link className="button" href={contact + "#interest-form"}>
            {isIt ? "Sono interessato" : "I am interested"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
