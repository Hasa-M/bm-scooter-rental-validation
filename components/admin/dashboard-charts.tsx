import type { ContactRateItem, DistributionItem } from "@/lib/admin/types";
import type { TimeGranularity, TimeSeriesPoint } from "@/lib/admin/series.mjs";

export function DistributionBars({
  title,
  items,
  labelMap = {},
}: {
  title: string;
  items: DistributionItem[];
  labelMap?: Record<string, string>;
}) {
  const maximum = Math.max(1, ...items.map((item) => item.count));
  return (
    <section className="admin-panel">
      <h2>{title}</h2>
      {items.length === 0 ? <p className="admin-empty">Nessun dato disponibile.</p> : (
        <ul className="distribution-list">
          {items.map((item) => (
            <li key={item.label}>
              <div><span>{labelMap[item.label] ?? item.label}</span><strong>{item.count}</strong></div>
              <span className="distribution-track" aria-hidden="true">
                <span style={{ width: `${(item.count / maximum) * 100}%` }} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function formatBucket(bucket: string, granularity: TimeGranularity): string {
  return new Intl.DateTimeFormat("it-IT", granularity === "month"
    ? { month: "short", year: "2-digit", timeZone: "UTC" }
    : { day: "2-digit", month: "short", timeZone: "UTC" }
  ).format(new Date(`${bucket}T00:00:00Z`));
}

export function TimeSeriesChart({
  points,
  granularity,
}: {
  points: TimeSeriesPoint[];
  granularity: TimeGranularity;
}) {
  const maximum = Math.max(1, ...points.map((point) => point.count50cc + point.count125cc));
  const unit = granularity === "week" ? "settimana" : "mese";
  return (
    <section className="admin-panel admin-panel-wide">
      <div className="admin-panel-heading">
        <div>
          <p className="admin-eyebrow">Intero periodo disponibile</p>
          <h2>Andamento per cilindrata</h2>
        </div>
        <div className="chart-legend"><span className="legend-50">50cc</span><span className="legend-125">125cc</span></div>
      </div>
      {points.length === 0 ? <p className="admin-empty">Nessun dato disponibile.</p> : (
        <>
          <div className="time-chart" role="img" aria-label={`Risposte per ${unit}, suddivise tra 50cc e 125cc`}>
            {points.map((point) => {
              const total = point.count50cc + point.count125cc;
              return (
                <div className="time-column" key={point.bucket} title={`${point.bucket}: ${total}`}>
                  <span className="time-total">{total}</span>
                  <span className="time-stack" style={{ height: `${(total / maximum) * 100}%` }}>
                    {total > 0 ? <>
                      <span className="time-125" style={{ flex: point.count125cc }} />
                      <span className="time-50" style={{ flex: point.count50cc }} />
                    </> : null}
                  </span>
                  <span className="time-label">{formatBucket(point.bucket, granularity)}</span>
                </div>
              );
            })}
          </div>
          <details className="chart-data">
            <summary>Mostra i dati del grafico</summary>
            <table>
              <thead><tr><th>Periodo</th><th>50cc</th><th>125cc</th><th>Totale</th></tr></thead>
              <tbody>{points.map((point) => (
                <tr key={point.bucket}>
                  <th>{formatBucket(point.bucket, granularity)}</th>
                  <td>{point.count50cc}</td>
                  <td>{point.count125cc}</td>
                  <td>{point.count50cc + point.count125cc}</td>
                </tr>
              ))}</tbody>
            </table>
          </details>
        </>
      )}
    </section>
  );
}

export function ContactRateChart({ items }: { items: ContactRateItem[] }) {
  return (
    <section className="admin-panel admin-panel-wide">
      <p className="admin-eyebrow">Intero periodo disponibile</p>
      <h2>Tasso di ricontatto per fascia d&apos;eta</h2>
      {items.length === 0 ? <p className="admin-empty">Nessun dato disponibile.</p> : (
        <ul className="contact-rate-list">
          {items.map((item) => (
            <li key={item.label}>
              <div>
                <strong>{item.label}</strong>
                <span>{item.contacts} su {item.responses} ({item.percentage.toFixed(1)}%)</span>
              </div>
              <span className="contact-rate-track" aria-hidden="true">
                <span style={{ width: `${Math.min(100, item.percentage)}%` }} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
