import { redirect } from "next/navigation";
import { GithubSignInButton } from "@/components/admin/auth-buttons";
import { getAdminAccess } from "@/lib/admin/access";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const access = await getAdminAccess(await headers());
  if (access.status === "allowed") redirect("/admin");
  const { error } = await searchParams;

  return (
    <main className="admin-login">
      <section className="admin-login-card">
        <p className="admin-eyebrow">Area riservata</p>
        <h1>Dashboard amministrativa</h1>
        <p>L&apos;accesso &egrave; consentito esclusivamente all&apos;account GitHub autorizzato.</p>
        {error ? <p className="admin-error">Account non autorizzato o accesso annullato.</p> : null}
        <GithubSignInButton />
      </section>
    </main>
  );
}
