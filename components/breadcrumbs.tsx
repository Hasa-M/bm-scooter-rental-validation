import Link from "next/link";
import type { Crumb } from "@/lib/seo/breadcrumbs";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return <nav className="breadcrumb container" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={item.href}>{index === items.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}</li>)}</ol></nav>;
}
