import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";
import { siteImagePaths } from "@/lib/config/images";
import { tr } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const hasEmail = !businessConfig.email.startsWith("[");
  const hasPhone = !businessConfig.phone.startsWith("[");
  const contactPath = "/" + locale + "/contact";
  const commercialPath = "/" + locale + "/" + tr(locale, "noleggio-scooter-bosa", "scooter-rental-bosa", "location-scooter-bosa");
  const guidesPath = "/" + locale + "/" + tr(locale, "guide", "guides", "guides");
  const privacyPath = "/" + locale + "/" + tr(locale, "privacy", "privacy", "confidentialite");

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand"><Image className="brand-logo" src={siteImagePaths.logo} alt="" width={44} height={44} />{businessConfig.brandName}</p>
          <p>{tr(locale, "Il modo più libero di vivere Bosa, la marina e la costa.", "A freer way to experience Bosa, the marina and the coast.", "Une façon plus libre de découvrir Bosa, la marina et la côte.")}</p>
          <small>© {new Date().getFullYear()} {businessConfig.brandName}</small>
        </div>
        <div>
          <strong>{tr(locale, "Esplora", "Explore", "Explorer")}</strong>
          <p><Link href={commercialPath}>{tr(locale, "Scooter 50cc e 125cc", "50cc and 125cc scooters", "Scooters 50cc et 125cc")}</Link></p>
          <p><Link href={guidesPath}>{tr(locale, "Guide locali", "Local guides", "Guides locaux")}</Link></p>
          <p><Link href={privacyPath}>{tr(locale, "Privacy", "Privacy", "Confidentialité")}</Link></p>
        </div>
        <div>
          <strong>{tr(locale, "Contatti", "Contact", "Contact")}</strong>
          {hasEmail && <p>{businessConfig.email}</p>}
          {hasPhone && <p>{businessConfig.phone}</p>}
          {!hasEmail && !hasPhone && (
            <p><Link href={contactPath}>{tr(locale, "Invia una richiesta", "Send an enquiry", "Envoyer une demande")}</Link></p>
          )}
          <small>{tr(locale, "Ritiro previsto a Bosa · servizio in fase di lancio.", "Planned pickup in Bosa · service launching soon.", "Retrait prévu à Bosa · lancement prochain du service.")}</small>
        </div>
      </div>
    </footer>
  );
}
