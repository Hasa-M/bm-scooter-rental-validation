import "server-only";

import { desc, eq, sql } from "drizzle-orm";
import { requireAdminQuery } from "@/lib/admin/access";
import { normalizePagination } from "@/lib/admin/policy.mjs";
import type { PaginatedResult } from "@/lib/admin/types";
import { getDatabaseClient } from "@/lib/db/client";
import { contactRequests, researchResponses } from "@/lib/db/schema";

export type AdminResponseRow = {
  id: string;
  startDate: string;
  endDate: string;
  scooters: number;
  vehicleType: string;
  ageBand: string;
  licensedOverFiveYears: boolean;
  stayLocation: string;
  originArea: string;
  language: string;
  submittedAt: string;
  hasNotes: boolean;
  hasContact: boolean;
};

export async function getResponsesPage(
  pageValue: unknown,
  pageSizeValue: unknown,
): Promise<PaginatedResult<AdminResponseRow>> {
  await requireAdminQuery();
  const { page, pageSize } = normalizePagination(pageValue, pageSizeValue);
  const database = getDatabaseClient();

  const [[total], items] = await Promise.all([
    database.select({ count: sql<number>`count(*)::int` }).from(researchResponses),
    database
      .select({
        id: researchResponses.id,
        startDate: researchResponses.startDate,
        endDate: researchResponses.endDate,
        scooters: researchResponses.scooters,
        vehicleType: researchResponses.vehicleType,
        ageBand: researchResponses.ageBand,
        licensedOverFiveYears: researchResponses.licensedOverFiveYears,
        stayLocation: researchResponses.stayLocation,
        originArea: researchResponses.originArea,
        language: researchResponses.language,
        submittedAt: researchResponses.submittedAt,
        hasNotes: sql<boolean>`coalesce(length(trim(${researchResponses.notes})), 0) > 0`,
        hasContact: sql<boolean>`${contactRequests.id} is not null`,
      })
      .from(researchResponses)
      .leftJoin(contactRequests, eq(contactRequests.researchResponseId, researchResponses.id))
      .orderBy(desc(researchResponses.submittedAt), desc(researchResponses.id))
      .limit(pageSize)
      .offset((page - 1) * pageSize),
  ]);

  const totalItems = Number(total?.count ?? 0);
  return {
    items,
    page,
    pageSize,
    totalItems,
    totalPages: Math.max(1, Math.ceil(totalItems / pageSize)),
  };
}
