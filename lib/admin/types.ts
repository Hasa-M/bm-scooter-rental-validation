import type { TimeGranularity, TimeSeriesPoint } from "./series.mjs";

export type DistributionItem = { label: string; count: number };
export type ContactRateItem = {
  label: string;
  responses: number;
  contacts: number;
  percentage: number;
};

export type DashboardData = {
  totalResponses: number;
  totalContacts: number;
  contactPercentage: number;
  responsesLast7Days: number;
  responsesLast30Days: number;
  vehicleTypes: DistributionItem[];
  ageBands: DistributionItem[];
  originAreas: DistributionItem[];
  locations: DistributionItem[];
  contactRateByAge: ContactRateItem[];
  timeGranularity: TimeGranularity;
  timeSeries: TimeSeriesPoint[];
};

export type PaginatedResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};
