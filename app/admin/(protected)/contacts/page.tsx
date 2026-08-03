import { AdminPagination } from "@/components/admin/pagination";
import { getContactsPage } from "@/lib/admin/contacts-repository";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatTimestamp(value: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Rome",
  }).format(new Date(value));
}

export default async function AdminContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; pageSize?: string }>;
}) {
  const params = await searchParams;
  const result = await getContactsPage(params.page, params.pageSize);

  return (
    <main className="admin-main">
      <div className="admin-title">
        <div><p className="admin-eyebrow">Dati di ricontatto</p><h1>Contatti</h1></div>
        <p>Richieste con consenso esplicito, separate dalle risposte di ricerca.</p>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Consenso</th>
              <th>Data consenso</th>
              <th>Periodo</th>
              <th>Cilindrata</th>
              <th>Localita</th>
              <th>ID risposta</th>
              <th>Azione</th>
            </tr>
          </thead>
          <tbody>
            {result.items.map((row) => (
              <tr key={row.id}>
                <td>{row.email}</td>
                <td>{row.consent ? "Si" : "No"}</td>
                <td>{formatTimestamp(row.consentGrantedAt)}</td>
                <td>{row.startDate} - {row.endDate}</td>
                <td>{row.vehicleType}</td>
                <td>{row.stayLocation}</td>
                <td><code>{row.researchResponseId}</code></td>
                <td><a className="admin-mail-link" href={`mailto:${row.email}`}>Scrivi</a></td>
              </tr>
            ))}
            {result.items.length === 0 ? (
              <tr><td colSpan={8} className="admin-empty">Nessun contatto disponibile.</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <AdminPagination basePath="/admin/contacts" {...result} />
    </main>
  );
}
