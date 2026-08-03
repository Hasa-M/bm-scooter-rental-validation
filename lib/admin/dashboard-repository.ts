import "server-only";

import { asc, sql } from "drizzle-orm";
import { requireAdminQuery } from "@/lib/admin/access";
import { chooseTimeGranularity, fillTimeSeries } from "@/lib/admin/series.mjs";
import type { RawTimeSeriesRow } from "@/lib/admin/series.mjs";
import type { DashboardData, DistributionItem } from "@/lib/admin/types";
import { getDatabaseClient } from "@/lib/db/client";
import { contactRequests, researchResponses } from "@/lib/db/schema";

function distribution(rows: Array<{ label: string; count: number }>): DistributionItem[] {
  return rows.map((row) => ({ label: row.label, count: Number(row.count) }));
}

export async function getDashboardData(): Promise<DashboardData> {
  await requireAdminQuery();
  const database = getDatabaseClient();

  const [
    [responseTotal],
    [contactTotal],
    [recent],
    vehicleRows,
    ageRows,
    originRows,
    locationRows,
    contactRateRows,
    [range],
  ] = await Promise.all([
    database.select({ count: sql<number>`count(*)::int` }).from(researchResponses),
    database.select({ count: sql<number>`count(*)::int` }).from(contactRequests),
    database.select({
      last7Days: sql<number>`count(*) filter (
        where ${researchResponses.submittedAt} >= now() - interval '7 days'
      )::int`,
      last30Days: sql<number>`count(*) filter (
        where ${researchResponses.submittedAt} >= now() - interval '30 days'
      )::int`,
    }).from(researchResponses),
    database
      .select({
        label: researchResponses.vehicleType,
        count: sql<number>`count(*)::int`,
      })
      .from(researchResponses)
      .groupBy(researchResponses.vehicleType)
      .orderBy(asc(researchResponses.vehicleType)),
    database
      .select({
        label: researchResponses.ageBand,
        count: sql<number>`count(*)::int`,
      })
      .from(researchResponses)
      .groupBy(researchResponses.ageBand)
      .orderBy(asc(researchResponses.ageBand)),
    database
      .select({
        label: researchResponses.originArea,
        count: sql<number>`count(*)::int`,
      })
      .from(researchResponses)
      .groupBy(researchResponses.originArea)
      .orderBy(asc(researchResponses.originArea)),
    database
      .select({
        label: researchResponses.stayLocation,
        count: sql<number>`count(*)::int`,
      })
      .from(researchResponses)
      .groupBy(researchResponses.stayLocation)
      .orderBy(sql`count(*) desc`, asc(researchResponses.stayLocation)),
    database
      .select({
        label: researchResponses.ageBand,
        responses: sql<number>`count(${researchResponses.id})::int`,
        contacts: sql<number>`count(${contactRequests.id})::int`,
      })
      .from(researchResponses)
      .leftJoin(contactRequests, sql`${contactRequests.researchResponseId} = ${researchResponses.id}`)
      .groupBy(researchResponses.ageBand)
      .orderBy(asc(researchResponses.ageBand)),
    database
      .select({
        firstSubmittedAt: sql<string | null>`min(${researchResponses.submittedAt})`,
        lastSubmittedAt: sql<string | null>`max(${researchResponses.submittedAt})`,
      })
      .from(researchResponses),
  ]);

  const firstSubmittedAt = range?.firstSubmittedAt ?? null;
  const lastSubmittedAt = range?.lastSubmittedAt ?? null;
  const timeGranularity = chooseTimeGranularity(firstSubmittedAt, lastSubmittedAt);
  const bucketExpression = timeGranularity === "week"
    ? sql<string>`date_trunc('week', ${researchResponses.submittedAt} at time zone 'UTC')::date`
    : sql<string>`date_trunc('month', ${researchResponses.submittedAt} at time zone 'UTC')::date`;

  const timeRows = firstSubmittedAt
    ? await database
        .select({
          bucket: bucketExpression,
          vehicleType: researchResponses.vehicleType,
          count: sql<number>`count(*)::int`,
        })
        .from(researchResponses)
        .groupBy(bucketExpression, researchResponses.vehicleType)
        .orderBy(asc(bucketExpression), asc(researchResponses.vehicleType))
    : [];

  const normalizedTimeRows: RawTimeSeriesRow[] = timeRows.flatMap((row) =>
    row.vehicleType === "50cc" || row.vehicleType === "125cc"
      ? [{
          bucket: row.bucket,
          vehicleType: row.vehicleType === "50cc" ? "50cc" as const : "125cc" as const,
          count: Number(row.count),
        }]
      : [],
  );

  const totalResponses = Number(responseTotal?.count ?? 0);
  const totalContacts = Number(contactTotal?.count ?? 0);

  return {
    totalResponses,
    totalContacts,
    contactPercentage: totalResponses === 0 ? 0 : (totalContacts / totalResponses) * 100,
    responsesLast7Days: Number(recent?.last7Days ?? 0),
    responsesLast30Days: Number(recent?.last30Days ?? 0),
    vehicleTypes: distribution(vehicleRows),
    ageBands: distribution(ageRows),
    originAreas: distribution(originRows),
    locations: distribution(locationRows),
    contactRateByAge: contactRateRows.map((row) => {
      const responses = Number(row.responses);
      const contacts = Number(row.contacts);
      return {
        label: row.label,
        responses,
        contacts,
        percentage: responses === 0 ? 0 : (contacts / responses) * 100,
      };
    }),
    timeGranularity,
    timeSeries: fillTimeSeries(
      firstSubmittedAt,
      lastSubmittedAt,
      timeGranularity,
      normalizedTimeRows,
    ),
  };
}
