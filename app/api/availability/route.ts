import { NextResponse } from "next/server";
import { getLeadRepository, type Lead } from "@/lib/leads/repository";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try { data = await request.json(); } catch { return NextResponse.json({ message:"Invalid JSON" }, { status:400 }); }
  if (typeof data.website === "string" && data.website) return NextResponse.json({ ok:true });
  const required = ["startDate","endDate","name","email","phone","language"];
  if (required.some((key) => typeof data[key] !== "string" || !(data[key] as string).trim()) || data.privacyConsent !== "yes") return NextResponse.json({ message:"Please complete all required fields." }, { status:400 });
  if (!datePattern.test(String(data.startDate)) || !datePattern.test(String(data.endDate)) || String(data.endDate) < String(data.startDate)) return NextResponse.json({ message:"Please enter a valid date range." }, { status:400 });
  if (!emailPattern.test(String(data.email)) || !["it","en"].includes(String(data.language))) return NextResponse.json({ message:"Please check your contact details." }, { status:400 });
  const scooters = Number(data.scooters); const people = Number(data.people);
  if (!Number.isInteger(scooters) || scooters < 1 || scooters > 10 || !Number.isInteger(people) || people < 1 || people > 20) return NextResponse.json({ message:"Invalid quantities." }, { status:400 });
  const lead: Lead = { startDate:String(data.startDate), endDate:String(data.endDate), scooters, people, name:String(data.name).slice(0,120), email:String(data.email).slice(0,160), phone:String(data.phone).slice(0,60), accommodation:String(data.accommodation ?? "").slice(0,160), language:data.language as "it"|"en", notes:String(data.notes ?? "").slice(0,1500), marketingConsent:data.marketingConsent === "yes" };
  try { await getLeadRepository().save(lead); return NextResponse.json({ ok:true }); } catch { return NextResponse.json({ message:"Il modulo non è ancora collegato. Riprova più tardi o usa il contatto diretto." }, { status:503 }); }
}
