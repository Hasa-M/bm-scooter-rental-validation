import "server-only";

import { desc, eq, sql } from "drizzle-orm";
import { requireAdminQuery } from "@/lib/admin/access";
import { normalizePagination } from "@/lib/admin/policy.mjs";
import type { PaginatedResult } from "@/lib/admin/types";
import { getDatabaseClient } from "@/lib/db/client";
import { contactRequests, researchResponses } from "@/lib/db/schema";

export type AdminContactRow = {
  id: string;
  email: string;
  consent: true;
  consentGrantedAt: string;
  startDate: string;
  endDate: string;
  vehicleType: string;
  stayLocation: string;
  researchResponseId: string;
};

export async function getContactsPage(
  pageValue: unknown,
  pageSizeValue: unknown,
): Promise<PaginatedResult<AdminContactRow>> {
  await requireAdminQuery();
  const { page, pageSize } = normalizePagination(pageValue, pageSizeValue);
  const database = getDatabaseClient();

  const [[total], rows] = await Promise.all([
    database.select({ count: sql<number>`count(*)::int` }).from(contactRequests),
    database
      .select({
        id: contactRequests.id,
        email: contactRequests.email,
        consentGrantedAt: contactRequests.consentGrantedAt,
        startDate: researchResponses.startDate,
        endDate: researchResponses.endDate,
        vehicleType: researchResponses.vehicleType,
        stayLocation: researchResponses.stayLocation,
        researchResponseId: researchResponses.id,
      })
      .from(contactRequests)
      .innerJoin(researchResponses, eq(researchResponses.id, contactRequests.researchResponseId))
      .orderBy(desc(contactRequests.consentGrantedAt), desc(contactRequests.id))
      .limit(pageSize)
      .offset((page - 1) * pageSize),
  ]);

  const totalItems = Number(total?.count ?? 0);
  return {
    items: rows.map((row) => ({ ...row, consent: true as const })),
    page,
    pageSize,
    totalItems,
    totalPages: Math.max(1, Math.ceil(totalItems / pageSize)),
  };
}
