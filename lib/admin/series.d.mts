export type TimeGranularity = "week" | "month";
export type RawTimeSeriesRow = {
  bucket: string;
  vehicleType: "50cc" | "125cc";
  count: number;
};
export type TimeSeriesPoint = {
  bucket: string;
  count50cc: number;
  count125cc: number;
};
export function chooseTimeGranularity(
  firstSubmittedAt: string | null,
  lastSubmittedAt: string | null,
): TimeGranularity;
export function fillTimeSeries(
  firstSubmittedAt: string | null,
  lastSubmittedAt: string | null,
  granularity: TimeGranularity,
  rows: RawTimeSeriesRow[],
): TimeSeriesPoint[];
