import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/content";
import { businessConfig } from "@/lib/config/business";
import { siteImagePaths } from "@/lib/config/images";
import "../globals.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const sourceSerif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.baseUrl),
  title: { default: businessConfig.brandName, template: "%s" },
  description: "Scooter 50cc e 125cc per muoversi tra Bosa, Bosa Marina e la costa.",
  icons: { icon: siteImagePaths.favicon, shortcut: siteImagePaths.favicon },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale}><body className={manrope.variable + " " + sourceSerif.variable}>{children}</body></html>;
}
