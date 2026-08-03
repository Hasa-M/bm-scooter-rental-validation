import { AdminPagination } from "@/components/admin/pagination";
import { getResponsesPage } from "@/lib/admin/responses-repository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const originLabels: Record<string, string> = {
  sardinia: "Sardegna",
  italy: "Italia",
  eu: "UE",
  "europe-non-eu": "Europa non UE",
  "north-america": "Nord America",
  other: "Altro",
};

function formatTimestamp(value: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Rome",
  }).format(new Date(value));
}

export default async function AdminResponsesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; pageSize?: string }>;
}) {
  const params = await searchParams;
  const result = await getResponsesPage(params.page, params.pageSize);

  return (
    <main className="admin-main">
      <div className="admin-title">
        <div><p className="admin-eyebrow">Dati non identificativi</p><h1>Risposte</h1></div>
        <p>Elenco read-only ordinato dall&apos;invio piu recente.</p>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Scooter</th>
              <th>Cilindrata</th>
              <th>Fascia d&apos;eta</th>
              <th>Patente</th>
              <th>Localita</th>
              <th>Provenienza</th>
              <th>Lingua</th>
              <th>Invio</th>
              <th>Note presenti</th>
              <th>Ricontatto</th>
            </tr>
          </thead>
          <tbody>
            {result.items.map((row) => (
              <tr key={row.id}>
                <td>{row.startDate} - {row.endDate}</td>
                <td>{row.scooters}</td>
                <td>{row.vehicleType}</td>
                <td>{row.ageBand}</td>
                <td>{row.licensedOverFiveYears ? "Oltre 5 anni" : "Fino a 5 anni"}</td>
                <td>{row.stayLocation}</td>
                <td>{originLabels[row.originArea] ?? row.originArea}</td>
                <td>{row.language.toUpperCase()}</td>
                <td>{formatTimestamp(row.submittedAt)}</td>
                <td>{row.hasNotes ? "Si" : "No"}</td>
                <td>{row.hasContact ? "Si" : "No"}</td>
              </tr>
            ))}
            {result.items.length === 0 ? (
              <tr><td colSpan={11} className="admin-empty">Nessuna risposta disponibile.</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <AdminPagination basePath="/admin/responses" {...result} />
    </main>
  );
}
