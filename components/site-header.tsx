import Image from "next/image";
import Link from "next/link";
import type { Locale, PageContent } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";
import { siteImagePaths } from "@/lib/config/images";
import { getAlternatePath } from "@/lib/content";
import { MobileNavigation } from "@/components/mobile-navigation";

export function SiteHeader({ locale, page }: { locale: Locale; page: PageContent }) {
  const isIt = locale === "it";
  const commercial = "/" + locale + "/" + (isIt ? "noleggio-scooter-bosa" : "scooter-rental-bosa");
  const guides = "/" + locale + "/" + (isIt ? "guide" : "guides");
  const contact = "/" + locale + "/" + (isIt ? "contatti" : "contact");
  const prices = "/" + locale + "/" + (isIt ? "prezzi" : "prices");
  const alternatePath = getAlternatePath(locale, page);
  const navigationItems = [
    { href: commercial, label: isIt ? "Noleggio" : "Rental" },
    { href: prices, label: isIt ? "Prezzi" : "Prices" },
    { href: guides, label: isIt ? "Guide" : "Guides" },
  ];

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{isIt ? "Vai al contenuto" : "Skip to content"}</a>
      <div className="container nav">
        <Link className="brand" href={"/" + locale}>
          <Image className="brand-logo" src={siteImagePaths.logo} alt="" width={44} height={44} priority />
          {businessConfig.brandName}
        </Link>
        <nav className="nav-links desktop-nav" aria-label={isIt ? "Navigazione principale" : "Main navigation"}>
          <Link href={commercial}>{isIt ? "Noleggio" : "Rental"}</Link>
          <Link href={prices}>{isIt ? "Prezzi" : "Prices"}</Link>
          <Link href={guides}>{isIt ? "Guide" : "Guides"}</Link>
          <Link
            className="locale"
            href={alternatePath}
            hrefLang={isIt ? "en" : "it-IT"}
            aria-label={isIt ? "View this page in English" : "Visualizza questa pagina in italiano"}
          >
            {isIt ? "EN" : "IT"}
          </Link>
          <Link className="button" href={contact + "#interest-form"}>
            {isIt ? "Sono interessato" : "I am interested"}
          </Link>
        </nav>
        <MobileNavigation
          localeHref={alternatePath}
          localeLabel={isIt ? "EN" : "IT"}
          localeAriaLabel={isIt ? "View this page in English" : "Visualizza questa pagina in italiano"}
          menuLabel={isIt ? "Apri il menu" : "Open menu"}
          closeLabel={isIt ? "Chiudi il menu" : "Close menu"}
          navigationLabel="Menu"
          items={navigationItems}
          action={{ href: contact + "#interest-form", label: isIt ? "Sono interessato" : "I am interested" }}
        />
      </div>
    </header>
  );
}
