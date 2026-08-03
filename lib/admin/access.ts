import "server-only";

import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { getAdminAuth } from "@/lib/admin/auth";
import { getAdminGithubUserId, isAdminDashboardEnabled } from "@/lib/admin/config";
import { evaluateAdminAccess } from "@/lib/admin/policy.mjs";
import { getDatabaseClient } from "@/lib/db/client";
import { adminAccount } from "@/lib/db/schema";

export type AdminAccess =
  | { status: "disabled" | "unauthenticated" | "denied" }
  | { status: "allowed"; userId: string; userName: string };

export async function getAdminAccess(requestHeaders: Headers): Promise<AdminAccess> {
  if (!isAdminDashboardEnabled()) return { status: "disabled" };

  const session = await getAdminAuth().api.getSession({ headers: requestHeaders });
  if (!session?.user.id) return { status: "unauthenticated" };

  const adminGithubUserId = getAdminGithubUserId();
  const [account] = await getDatabaseClient()
    .select({
      providerId: adminAccount.providerId,
      accountId: adminAccount.accountId,
    })
    .from(adminAccount)
    .where(
      and(
        eq(adminAccount.userId, session.user.id),
        eq(adminAccount.providerId, "github"),
        eq(adminAccount.accountId, adminGithubUserId),
      ),
    )
    .limit(1);

  const status = evaluateAdminAccess({
    enabled: true,
    sessionUserId: session.user.id,
    account,
    adminGithubUserId,
  });

  if (status !== "allowed") return { status };
  return {
    status,
    userId: session.user.id,
    userName: session.user.name,
  };
}

export async function requireAdminPage(): Promise<Extract<AdminAccess, { status: "allowed" }>> {
  const access = await getAdminAccess(await headers());
  if (access.status !== "allowed") {
    if (access.status === "unauthenticated") redirect("/admin/login");
    notFound();
  }
  return access;
}

export async function requireAdminQuery(): Promise<void> {
  const access = await getAdminAccess(await headers());
  if (access.status !== "allowed") {
    throw new Error("Administrative access denied");
  }
}
