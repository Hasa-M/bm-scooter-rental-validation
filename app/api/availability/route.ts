import { NextResponse } from "next/server";
import { isDataProviderConfigured } from "@/lib/config/privacy";
import {
  ageBands,
  originAreas,
  serviceLocations,
  type AgeBand,
  type OriginArea,
  type ScooterInterest,
  type ServiceLocation,
} from "@/lib/leads/options";
import {
  getLeadRepository,
  isLeadWebhookConfigured,
  type SubmissionPayload,
} from "@/lib/leads/repository";
import {
  isValidIsoDate,
  validateContactRequest,
} from "@/lib/leads/validation.mjs";

const vehicleTypes = ["50cc", "125cc"] as const;
const originAreaValues = originAreas.map((item) => item.value);

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ message: "Richiesta non valida / Invalid request." }, { status: 400 });
  }


  const it = data.language !== "en";
  const localized = (italian: string, english: string) => it ? italian : english;
  const unavailableMessage = localized(
    "Il modulo non è momentaneamente disponibile. Riprova più tardi.",
    "The form is temporarily unavailable. Please try again later.",
  );

  if (!isLeadWebhookConfigured() || !isDataProviderConfigured()) {
    return NextResponse.json({ message: unavailableMessage }, { status: 503 });
  }
  if (typeof data.website === "string" && data.website) {
    return NextResponse.json({ ok: true });
  }

  const required = [
    "startDate",
    "endDate",
    "scooters",
    "ageBand",
    "vehicleType",
    "stayLocation",
    "originArea",
    "licensedOverFiveYears",
    "language",
  ];

  if (
    required.some((key) => typeof data[key] !== "string" || !(data[key] as string).trim()) ||
    data.privacyNoticeAcknowledged !== "yes"
  ) {
    return NextResponse.json(
      { message: localized("Completa tutti i campi obbligatori.", "Please complete all required fields.") },
      { status: 400 },
    );
  }

  if (!["it", "en"].includes(String(data.language))) {
    return NextResponse.json({ message: "Lingua non valida / Invalid language." }, { status: 400 });
  }

  if (
    !isValidIsoDate(data.startDate) ||
    !isValidIsoDate(data.endDate) ||
    String(data.endDate) < String(data.startDate)
  ) {
    return NextResponse.json(
      { message: localized("Inserisci un intervallo di date valido.", "Please enter a valid date range.") },
      { status: 400 },
    );
  }

  const scooters = Number(data.scooters);
  if (!Number.isInteger(scooters) || scooters < 1 || scooters > 3) {
    return NextResponse.json(
      { message: localized("Controlla il numero di scooter.", "Please check the scooter quantity.") },
      { status: 400 },
    );
  }

  if (!ageBands.includes(data.ageBand as AgeBand)) {
    return NextResponse.json(
      { message: localized("Seleziona una fascia d'età.", "Please select an age range.") },
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

  if (!originAreaValues.includes(data.originArea as OriginArea)) {
    return NextResponse.json(
      { message: localized("Seleziona la tua macroarea di provenienza.", "Select your origin macro-region.") },
      { status: 400 },
    );
  }

  if (!["yes", "no"].includes(String(data.licensedOverFiveYears))) {
    return NextResponse.json(
      { message: localized("Indica da quanto tempo hai la patente.", "Tell us how long you have held your licence.") },
      { status: 400 },
    );
  }

  const notes = typeof data.notes === "string" ? data.notes.trim() : "";
  if (notes.length > 500) {
    return NextResponse.json(
      { message: localized("Le note non possono superare 500 caratteri.", "Notes cannot exceed 500 characters.") },
      { status: 400 },
    );
  }

  const submittedAt = new Date();
  // Operational review deadline only; the storage system must implement and document the outcome.
  const reviewAfter = new Date(submittedAt);
  reviewAfter.setUTCFullYear(reviewAfter.getUTCFullYear() + 2);
  const submittedAtIso = submittedAt.toISOString();
  const reviewAfterIso = reviewAfter.toISOString();

  const contactValidation = validateContactRequest(data, submittedAtIso, reviewAfterIso);
  if (!contactValidation.ok) {
    return NextResponse.json(
      {
        message: localized(
          "Inserisci un'email valida e conferma il consenso al ricontatto.",
          "Enter a valid email and confirm consent to be contacted.",
        ),
      },
      { status: 400 },
    );
  }

  const payload: SubmissionPayload = {
    researchResponse: {
      startDate: String(data.startDate),
      endDate: String(data.endDate),
      scooters,
      vehicleType: data.vehicleType as ScooterInterest,
      ageBand: data.ageBand as AgeBand,
      licensedOverFiveYears: data.licensedOverFiveYears === "yes",
      stayLocation: data.stayLocation as ServiceLocation,
      originArea: data.originArea as OriginArea,
      ...(notes ? { notes: notes.slice(0, 500) } : {}),
      language: data.language as "it" | "en",
      submittedAt: submittedAtIso,
      researchPurpose: "market-validation",
      reviewAfter: reviewAfterIso,
      privacyNoticeAcknowledgedAt: submittedAtIso,
    },
    ...(contactValidation.contactRequest
      ? { contactRequest: contactValidation.contactRequest }
      : {}),
  };

  try {
    await getLeadRepository().save(payload);
    return NextResponse.json({
      ok: true,
      message: contactValidation.contactRequest
        ? localized(
            "Grazie. Abbiamo registrato la risposta e la richiesta di ricontatto.",
            "Thank you. We recorded your response and contact request.",
          )
        : localized(
            "Grazie. La tua risposta priva di identificativi diretti è stata registrata.",
            "Thank you. Your response without direct identifiers has been recorded.",
          ),
    });
  } catch {
    return NextResponse.json({ message: unavailableMessage }, { status: 503 });
  }
}
