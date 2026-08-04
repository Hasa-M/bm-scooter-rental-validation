import type { MetadataRoute } from "next";
import { pagesByLocale } from "@/lib/content";
import { businessConfig } from "@/lib/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["it", "en"] as const).flatMap((locale) => pagesByLocale[locale].map((page) => ({
    url: new URL(`/${locale}${page.slug ? `/${page.slug}` : ""}`, businessConfig.baseUrl).toString(),
    lastModified: new Date(page.lastModified),
  })));
}
