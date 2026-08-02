import type { MetadataRoute } from "next";
import { pagesByLocale } from "@/lib/content";
import { businessConfig } from "@/lib/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-02");
  return (["it", "en"] as const).flatMap((locale) => pagesByLocale[locale].map((page) => ({
    url: new URL(`/${locale}${page.slug ? `/${page.slug}` : ""}`, businessConfig.baseUrl).toString(),
    lastModified: page.updatedAt ? new Date(page.updatedAt) : updated,
    changeFrequency: page.kind === "guide" ? "monthly" as const : "weekly" as const,
    priority: page.kind === "commercial" ? 1 : page.kind === "home" ? .9 : .7,
  })));
}
