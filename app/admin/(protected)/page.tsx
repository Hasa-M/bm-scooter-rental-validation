import {
  ContactRateChart,
  DistributionBars,
  TimeSeriesChart,
} from "@/components/admin/dashboard-charts";
import { getDashboardData } from "@/lib/admin/dashboard-repository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const originLabels: Record<string, string> = {
  sardinia: "Sardegna",
  italy: "Italia (fuori Sardegna)",
  eu: "Unione europea",
  "europe-non-eu": "Europa non UE",
  "north-america": "Nord America",
  other: "Altra provenienza",
};

export default async function AdminDashboardPage() {
  const data = await getDashboardData();
  const metrics = [
    ["Risposte totali", data.totalResponses.toLocaleString("it-IT")],
    ["Richieste di contatto", data.totalContacts.toLocaleString("it-IT")],
    ["Percentuale ricontatto", `${data.contactPercentage.toFixed(1)}%`],
    ["Risposte ultimi 7 giorni", data.responsesLast7Days.toLocaleString("it-IT")],
    ["Risposte ultimi 30 giorni", data.responsesLast30Days.toLocaleString("it-IT")],
  ];

  return (
    <main className="admin-main">
      <div className="admin-title">
        <div>
          <p className="admin-eyebrow">Panoramica read-only</p>
          <h1>Dashboard</h1>
        </div>
        <p>Aggregati sull&apos;intero periodo disponibile, salvo i KPI temporali indicati.</p>
      </div>

      <section className="metric-grid" aria-label="Indicatori principali">
        {metrics.map(([label, value]) => (
          <article className="metric-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <div className="admin-grid">
        <TimeSeriesChart points={data.timeSeries} granularity={data.timeGranularity} />
        <ContactRateChart items={data.contactRateByAge} />
        <DistributionBars title="Distribuzione 50cc / 125cc" items={data.vehicleTypes} />
        <DistributionBars title="Fasce d'eta" items={data.ageBands} />
        <DistributionBars title="Macroaree" items={data.originAreas} labelMap={originLabels} />
        <DistributionBars title="Localita" items={data.locations} />
      </div>
    </main>
  );
}
