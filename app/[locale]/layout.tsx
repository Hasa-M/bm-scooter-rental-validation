import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/content";
import { businessConfig } from "@/lib/config/business";
import "../globals.css";

const manrope = Manrope({ variable:"--font-sans", subsets:["latin"], display:"swap" });
const sourceSerif = Source_Serif_4({ variable:"--font-serif", subsets:["latin"], display:"swap" });

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.baseUrl),
  title: { default:"Scooter Bosa", template:"%s" },
  description:"Richiedi disponibilità per uno scooter 125cc a Bosa e Bosa Marina.",
  icons: { icon:"/favicon.svg", shortcut:"/favicon.svg" },
};

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale}><body className={`${manrope.variable} ${sourceSerif.variable}`}>{children}</body></html>;
}
