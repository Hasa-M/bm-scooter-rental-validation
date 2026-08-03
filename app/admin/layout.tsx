import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isAdminDashboardEnabled } from "@/lib/admin/config";
import { businessConfig } from "@/lib/config/business";
import "./admin.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.baseUrl),
  title: "Amministrazione | Bosa in Scooter",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  if (!isAdminDashboardEnabled()) notFound();
  return <html lang="it"><body className="admin-body">{children}</body></html>;
}
