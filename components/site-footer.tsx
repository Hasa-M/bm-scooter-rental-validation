import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";

export function SiteFooter({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const hasEmail = !businessConfig.email.startsWith("[");
  const hasPhone = !businessConfig.phone.startsWith("[");
  const contactPath = "/" + locale + "/" + (it ? "contatti" : "contact");

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="brand"><span className="brand-mark" aria-hidden="true">B</span>{businessConfig.brandName}</p>
          <p>{it ? "Mobilità per chi visita Bosa, un servizio per il territorio." : "Visitor mobility and a service for the local area."}</p>
          <small>© {new Date().getFullYear()} {businessConfig.brandName}</small>
        </div>
        <div>
          <strong>{it ? "Esplora" : "Explore"}</strong>
          <p><Link href={"/" + locale + "/" + (it ? "noleggio-scooter-bosa" : "scooter-rental-bosa")}>{it ? "Scooter 50cc e 125cc" : "50cc and 125cc scooters"}</Link></p>
          <p><Link href={"/" + locale + "/" + (it ? "guide" : "guides")}>{it ? "Guide locali" : "Local guides"}</Link></p>
        </div>
        <div>
          <strong>{it ? "Contatti" : "Contact"}</strong>
          {hasEmail && <p>{businessConfig.email}</p>}
          {hasPhone && <p>{businessConfig.phone}</p>}
          {!hasEmail && !hasPhone && (
            <p><Link href={contactPath}>{it ? "Invia una richiesta" : "Send an enquiry"}</Link></p>
          )}
          <small>{it ? "Ritiro in zona Viale Alghero, Bosa." : "Pickup in the Viale Alghero area of Bosa."}</small>
        </div>
      </div>
    </footer>
  );
}
