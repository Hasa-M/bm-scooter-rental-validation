import Link from "next/link";

export function AdminPagination({
  basePath,
  page,
  pageSize,
  totalItems,
  totalPages,
}: {
  basePath: string;
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}) {
  const href = (nextPage: number) => `${basePath}?page=${nextPage}&pageSize=${pageSize}`;
  return (
    <nav className="admin-pagination" aria-label="Paginazione">
      <span>{totalItems.toLocaleString("it-IT")} record</span>
      <div>
        {page > 1 ? <Link href={href(page - 1)}>Precedente</Link> : <span>Precedente</span>}
        <strong>Pagina {page} di {totalPages}</strong>
        {page < totalPages ? <Link href={href(page + 1)}>Successiva</Link> : <span>Successiva</span>}
      </div>
    </nav>
  );
}
