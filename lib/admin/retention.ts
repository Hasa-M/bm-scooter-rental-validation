import "server-only";

import { lt } from "drizzle-orm";
import { getDatabaseClient } from "@/lib/db/client";
import { adminSession, adminVerification } from "@/lib/db/schema";

export async function pruneExpiredAdminAuthRecords(now = new Date()): Promise<void> {
  const database = getDatabaseClient();
  await Promise.all([
    database.delete(adminSession).where(lt(adminSession.expiresAt, now)),
    database.delete(adminVerification).where(lt(adminVerification.expiresAt, now)),
  ]);
}
