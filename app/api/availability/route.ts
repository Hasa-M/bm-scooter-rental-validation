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
  isDatabaseConfigured,
  type SubmissionPayload,
} from "@/lib/leads/repository";
import {
  isValidIsoDate,
  validateContactRequest,
} from "@/lib/leads/validation.mjs";

const vehicleTypes = ["50cc", "125cc"] as const;
const originAreaValues = originAreas.map((item) => item.value);

export const runtime = "nodejs";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ message: "Richiesta non valida / Invalid request / Requête invalide." }, { status: 400 });
  }


  const locale = String(data.language);
  const localized = (italian: string, english: string, french: string) =>
    locale === "it" ? italian : locale === "fr" ? french : english;
  const unavailableMessage = localized(
    "Il modulo non è momentaneamente disponibile. Riprova più tardi.",
    "The form is temporarily unavailable. Please try again later.",
          "Le formulaire est temporairement indisponible. Veuillez réessayer plus tard.",
  );

  if (!isDatabaseConfigured() || !isDataProviderConfigured()) {
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
      { message: localized("Completa tutti i campi obbligatori.", "Please complete all required fields.",
          "Veuillez remplir tous les champs obligatoires.") },
      { status: 400 },
    );
  }

  if (!["it", "en", "fr"].includes(String(data.language))) {
    return NextResponse.json({ message: "Lingua non valida / Invalid language / Langue invalide." }, { status: 400 });
  }

  if (
    !isValidIsoDate(data.startDate) ||
    !isValidIsoDate(data.endDate) ||
    String(data.endDate) < String(data.startDate)
  ) {
    return NextResponse.json(
      { message: localized("Inserisci un intervallo di date valido.", "Please enter a valid date range.",
          "Veuillez saisir une période valide.") },
      { status: 400 },
    );
  }

  const scooters = Number(data.scooters);
  if (!Number.isInteger(scooters) || scooters < 1 || scooters > 3) {
    return NextResponse.json(
      { message: localized("Controlla il numero di scooter.", "Please check the scooter quantity.",
          "Veuillez vérifier le nombre de scooters.") },
      { status: 400 },
    );
  }

  if (!ageBands.includes(data.ageBand as AgeBand)) {
    return NextResponse.json(
      { message: localized("Seleziona una fascia d'età.", "Please select an age range.",
          "Veuillez sélectionner une tranche d’âge.") },
      { status: 400 },
    );
  }

  if (!vehicleTypes.includes(data.vehicleType as ScooterInterest)) {
    return NextResponse.json(
      { message: localized("Seleziona uno scooter 50cc o 125cc.", "Select a 50cc or 125cc scooter.",
          "Sélectionnez un scooter 50cc ou 125cc.") },
      { status: 400 },
    );
  }

  if (!serviceLocations.includes(data.stayLocation as ServiceLocation)) {
    return NextResponse.json(
      { message: localized("Seleziona una località servita.", "Select a serviced location.",
          "Sélectionnez un lieu desservi.") },
      { status: 400 },
    );
  }

  if (!originAreaValues.includes(data.originArea as OriginArea)) {
    return NextResponse.json(
      { message: localized("Seleziona la tua macroarea di provenienza.", "Select your origin macro-region.",
          "Sélectionnez votre macro-région d’origine.") },
      { status: 400 },
    );
  }

  if (!["yes", "no"].includes(String(data.licensedOverFiveYears))) {
    return NextResponse.json(
      { message: localized("Indica da quanto tempo hai la patente.", "Tell us how long you have held your licence.",
          "Indiquez depuis combien de temps vous avez votre permis.") },
      { status: 400 },
    );
  }

  const notes = typeof data.notes === "string" ? data.notes.trim() : "";
  if (notes.length > 500) {
    return NextResponse.json(
      { message: localized("Le note non possono superare 500 caratteri.", "Notes cannot exceed 500 characters.",
          "Les notes ne peuvent pas dépasser 500 caractères.") },
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
          "Saisissez une adresse e-mail valide et confirmez votre consentement à être contacté.",
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
      language: data.language as "it" | "en" | "fr",
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
            "Richiesta ricevuta. Ti avviseremo via email quando il servizio sarà disponibile.",
            "Request received. We will email you when the service becomes available.",
          "Demande reçue. Nous vous préviendrons par e-mail dès que le service sera disponible.",
          )
        : localized(
            "Richiesta ricevuta. Grazie: ci aiuterà a costruire un servizio più adatto al tuo soggiorno.",
            "Request received. Thank you: it will help us build a service that better fits your stay.",
          "Demande reçue. Merci : elle nous aidera à créer un service mieux adapté à votre séjour.",
          ),
    });
  } catch {
    return NextResponse.json({ message: unavailableMessage }, { status: 503 });
  }
}
