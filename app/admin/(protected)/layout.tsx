import Link from "next/link";
import type { ReactNode } from "react";
import { SignOutButton } from "@/components/admin/auth-buttons";
import { requireAdminPage } from "@/lib/admin/access";

export default async function ProtectedAdminLayout({ children }: { children: ReactNode }) {
  const access = await requireAdminPage();
  return (
    <div className="admin-shell">
      <header className="admin-header">
        <Link className="admin-brand" href="/admin">Bosa in Scooter Admin</Link>
        <nav aria-label="Navigazione amministrativa">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/responses">Risposte</Link>
          <Link href="/admin/contacts">Contatti</Link>
        </nav>
        <div className="admin-user">
          <span>{access.userName}</span>
          <SignOutButton />
        </div>
      </header>
      {children}
    </div>
  );
}
