import type { MetadataRoute } from "next";
import { locales, pagesByLocale } from "@/lib/content";
import { businessConfig } from "@/lib/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => pagesByLocale[locale].map((page) => ({
    url: new URL(`/${locale}${page.slug ? `/${page.slug}` : ""}`, businessConfig.baseUrl).toString(),
    lastModified: new Date(page.lastModified),
  })));
}
