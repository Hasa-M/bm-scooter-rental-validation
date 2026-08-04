import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config/business";
import { siteImagePaths } from "@/lib/config/images";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.baseUrl),
  title: "Pagina non trovata | Bosa in Scooter",
  description: "La pagina richiesta non esiste.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [{ url: siteImagePaths.favicon, type: "image/png", sizes: "512x512" }],
    shortcut: siteImagePaths.favicon,
    apple: siteImagePaths.favicon,
  },
  openGraph: {
    title: "Pagina non trovata | Bosa in Scooter",
    description: "La pagina richiesta non esiste.",
    url: businessConfig.baseUrl,
    images: [{ url: new URL("/opengraph-image", businessConfig.baseUrl).toString() }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pagina non trovata | Bosa in Scooter",
    description: "La pagina richiesta non esiste.",
    images: [new URL("/opengraph-image", businessConfig.baseUrl).toString()],
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="it">
      <body>
        <main className="section-shell">
          <div className="container prose narrow">
            <p className="eyebrow">Errore 404</p>
            <h1>Pagina non trovata</h1>
            <p>La pagina richiesta non esiste oppure è stata spostata.</p>
            <Link className="button-link" href="/it">
              Torna alla homepage
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
