import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";
import { siteImagePaths } from "@/lib/config/images";

export function SiteFooter({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const hasEmail = !businessConfig.email.startsWith("[");
  const hasPhone = !businessConfig.phone.startsWith("[");
  const contactPath = "/" + locale + "/" + (it ? "contatti" : "contact");

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand"><Image className="brand-logo" src={siteImagePaths.logo} alt="" width={44} height={44} />{businessConfig.brandName}</p>
          <p>{it ? "Il modo più libero di vivere Bosa, la marina e la costa." : "A freer way to experience Bosa, the marina and the coast."}</p>
          <small>© {new Date().getFullYear()} {businessConfig.brandName}</small>
        </div>
        <div>
          <strong>{it ? "Esplora" : "Explore"}</strong>
          <p><Link href={"/" + locale + "/" + (it ? "noleggio-scooter-bosa" : "scooter-rental-bosa")}>{it ? "Scooter 50cc e 125cc" : "50cc and 125cc scooters"}</Link></p>
          <p><Link href={"/" + locale + "/" + (it ? "guide" : "guides")}>{it ? "Guide locali" : "Local guides"}</Link></p>
          <p><Link href={"/" + locale + "/privacy"}>{it ? "Privacy" : "Privacy"}</Link></p>
        </div>
        <div>
          <strong>{it ? "Contatti" : "Contact"}</strong>
          {hasEmail && <p>{businessConfig.email}</p>}
          {hasPhone && <p>{businessConfig.phone}</p>}
          {!hasEmail && !hasPhone && (
            <p><Link href={contactPath}>{it ? "Invia una richiesta" : "Send an enquiry"}</Link></p>
          )}
          <small>{it ? "Ritiro previsto a Bosa · servizio in fase di lancio." : "Planned pickup in Bosa · service launching soon."}</small>
        </div>
      </div>
    </footer>
  );
}
