import Image from "next/image";
import Link from "next/link";
import type { Locale, PageContent } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";
import { siteImagePaths } from "@/lib/config/images";
import { getLocalizedPath, locales } from "@/lib/content";
import { MobileNavigation } from "@/components/mobile-navigation";
import { hrefLang, localeNames, tr } from "@/lib/i18n";

export function SiteHeader({ locale, page }: { locale: Locale; page: PageContent }) {
  const commercial = "/" + locale + "/" + tr(locale, "noleggio-scooter-bosa", "scooter-rental-bosa", "location-scooter-bosa");
  const guides = "/" + locale + "/" + tr(locale, "guide", "guides", "guides");
  const contact = "/" + locale + "/contact";
  const prices = "/" + locale + "/" + tr(locale, "prezzi", "prices", "tarifs");
  const languageItems = locales
    .filter((targetLocale) => targetLocale !== locale)
    .map((targetLocale) => ({
      href: getLocalizedPath(targetLocale, page),
      hrefLang: hrefLang[targetLocale],
      label: targetLocale.toUpperCase(),
      ariaLabel: tr(
        targetLocale,
        "Visualizza questa pagina in italiano",
        "View this page in English",
        "Afficher cette page en français",
      ),
      title: localeNames[targetLocale],
    }));
  const navigationItems = [
    { href: commercial, label: tr(locale, "Noleggio", "Rental", "Location") },
    { href: prices, label: tr(locale, "Prezzi", "Prices", "Tarifs") },
    { href: guides, label: tr(locale, "Guide", "Guides", "Guides") },
  ];

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{tr(locale, "Vai al contenuto", "Skip to content", "Aller au contenu")}</a>
      <div className="container nav">
        <Link className="brand" href={"/" + locale}>
          <Image className="brand-logo" src={siteImagePaths.logo} alt="" width={44} height={44} priority />
          {businessConfig.brandName}
        </Link>
        <nav className="nav-links desktop-nav" aria-label={tr(locale, "Navigazione principale", "Main navigation", "Navigation principale")}>
          {navigationItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          {languageItems.map((item) => (
            <Link
              key={item.hrefLang}
              className="locale"
              href={item.href}
              hrefLang={item.hrefLang}
              aria-label={item.ariaLabel}
              title={item.title}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button" href={contact + "#interest-form"}>
            {tr(locale, "Richiedi disponibilità", "Request availability", "Demander les disponibilités")}
          </Link>
        </nav>
        <MobileNavigation
          localeItems={languageItems}
          menuLabel={tr(locale, "Apri il menu", "Open menu", "Ouvrir le menu")}
          closeLabel={tr(locale, "Chiudi il menu", "Close menu", "Fermer le menu")}
          navigationLabel="Menu"
          items={navigationItems}
          action={{ href: contact + "#interest-form", label: tr(locale, "Richiedi disponibilità", "Request availability", "Demander les disponibilités") }}
        />
      </div>
    </header>
  );
}
