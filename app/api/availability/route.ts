import { NextResponse } from "next/server";
import { serviceLocations, type ScooterInterest, type ServiceLocation } from "@/lib/leads/options";
import { getLeadRepository, type Lead } from "@/lib/leads/repository";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const vehicleTypes = ["50cc", "125cc"] as const;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ message: "Richiesta non valida / Invalid request." }, { status: 400 });
  }

  if (typeof data.website === "string" && data.website) return NextResponse.json({ ok: true });

  const it = data.language !== "en";
  const localized = (italian: string, english: string) => it ? italian : english;
  const required = ["startDate", "endDate", "name", "email", "vehicleType", "stayLocation", "language"];

  if (
    required.some((key) => typeof data[key] !== "string" || !(data[key] as string).trim()) ||
    data.privacyConsent !== "yes"
  ) {
    return NextResponse.json(
      { message: localized("Completa tutti i campi obbligatori.", "Please complete all required fields.") },
      { status: 400 },
    );
  }

  if (
    !datePattern.test(String(data.startDate)) ||
    !datePattern.test(String(data.endDate)) ||
    String(data.endDate) < String(data.startDate)
  ) {
    return NextResponse.json(
      { message: localized("Inserisci un intervallo di date valido.", "Please enter a valid date range.") },
      { status: 400 },
    );
  }

  if (!emailPattern.test(String(data.email)) || !["it", "en"].includes(String(data.language))) {
    return NextResponse.json(
      { message: localized("Controlla l’indirizzo email.", "Please check your email address.") },
      { status: 400 },
    );
  }

  const scooters = Number(data.scooters);
  const age = Number(data.age);
  if (
    !Number.isInteger(scooters) ||
    scooters < 1 ||
    scooters > 10 ||
    !Number.isInteger(age) ||
    age < 14 ||
    age > 99
  ) {
    return NextResponse.json(
      { message: localized("Controlla numero di scooter ed età.", "Please check the scooter quantity and age.") },
      { status: 400 },
    );
  }

  if (!vehicleTypes.includes(data.vehicleType as ScooterInterest)) {
    return NextResponse.json(
      { message: localized("Seleziona uno scooter 50cc o 125cc.", "Select a 50cc or 125cc scooter.") },
      { status: 400 },
    );
  }

  if (!serviceLocations.includes(data.stayLocation as ServiceLocation)) {
    return NextResponse.json(
      { message: localized("Seleziona una località servita.", "Select a serviced location.") },
      { status: 400 },
    );
  }

  const lead: Lead = {
    startDate: String(data.startDate),
    endDate: String(data.endDate),
    scooters,
    name: String(data.name).slice(0, 120),
    email: String(data.email).slice(0, 160),
    vehicleType: data.vehicleType as ScooterInterest,
    age,
    licensedOverFiveYears: data.licensedOverFiveYears === "yes",
    stayLocation: data.stayLocation as ServiceLocation,
    origin: String(data.origin ?? "").slice(0, 160),
    language: data.language as "it" | "en",
    notes: String(data.notes ?? "").slice(0, 1500),
  };

  try {
    await getLeadRepository().save(lead);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        message: localized(
          "Il modulo non è momentaneamente disponibile. Riprova più tardi.",
          "The form is temporarily unavailable. Please try again later.",
        ),
      },
      { status: 503 },
    );
  }
}
