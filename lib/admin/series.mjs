const DAY_MS = 86_400_000;

function startOfUtcWeek(date) {
  const result = new Date(date);
  result.setUTCHours(0, 0, 0, 0);
  const day = result.getUTCDay() || 7;
  result.setUTCDate(result.getUTCDate() - day + 1);
  return result;
}

function startOfUtcMonth(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

function bucketKey(date) {
  return date.toISOString().slice(0, 10);
}

export function chooseTimeGranularity(firstSubmittedAt, lastSubmittedAt) {
  if (!firstSubmittedAt || !lastSubmittedAt) return "week";
  const spanDays = Math.max(
    0,
    (new Date(lastSubmittedAt).getTime() - new Date(firstSubmittedAt).getTime()) / DAY_MS,
  );
  return spanDays <= 26 * 7 ? "week" : "month";
}

export function fillTimeSeries(firstSubmittedAt, lastSubmittedAt, granularity, rows) {
  if (!firstSubmittedAt || !lastSubmittedAt) return [];
  const start = granularity === "week"
    ? startOfUtcWeek(new Date(firstSubmittedAt))
    : startOfUtcMonth(new Date(firstSubmittedAt));
  const end = granularity === "week"
    ? startOfUtcWeek(new Date(lastSubmittedAt))
    : startOfUtcMonth(new Date(lastSubmittedAt));
  const values = new Map();

  for (const row of rows) {
    const current = values.get(row.bucket) ?? { "50cc": 0, "125cc": 0 };
    current[row.vehicleType] = Number(row.count);
    values.set(row.bucket, current);
  }

  const result = [];
  for (const cursor = new Date(start); cursor <= end;) {
    const key = bucketKey(cursor);
    const value = values.get(key) ?? { "50cc": 0, "125cc": 0 };
    result.push({ bucket: key, count50cc: value["50cc"], count125cc: value["125cc"] });
    if (granularity === "week") cursor.setUTCDate(cursor.getUTCDate() + 7);
    else cursor.setUTCMonth(cursor.getUTCMonth() + 1);
  }
  return result;
}
