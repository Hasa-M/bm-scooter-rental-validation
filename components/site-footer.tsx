import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { businessConfig } from "@/lib/config/business";

export function SiteFooter({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return <footer className="footer"><div className="container footer-grid">
    <div><p className="brand"><span className="brand-mark" aria-hidden="true">S</span>{businessConfig.brandName}</p><p>{it ? "Servizio in fase di attivazione a Bosa, Sardegna." : "Service being prepared in Bosa, Sardinia."}</p><small>© {new Date().getFullYear()} {businessConfig.brandName}</small></div>
    <div><strong>{it ? "Esplora" : "Explore"}</strong><p><Link href={`/${locale}/${it ? "noleggio-scooter-bosa" : "scooter-rental-bosa"}`}>{it ? "Noleggio scooter a Bosa" : "Scooter rental in Bosa"}</Link></p><p><Link href={`/${locale}/${it ? "guide" : "guides"}`}>{it ? "Guide locali" : "Local guides"}</Link></p></div>
    <div><strong>{it ? "Contatti" : "Contact"}</strong><p>{businessConfig.email}</p><p>{businessConfig.phone}</p><small>{it ? "Recapiti e dati legali da configurare prima del lancio." : "Contact and legal details must be configured before launch."}</small></div>
  </div></footer>;
}
