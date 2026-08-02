"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/content/types";
import { track } from "@/lib/analytics";

type State = "idle" | "loading" | "success" | "error";

export function AvailabilityForm({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("loading"); track("form_submit");
    try {
      const response = await fetch("/api/availability", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const payload = await response.json() as { message?: string };
      if (!response.ok) throw new Error(payload.message || "Request failed");
      setState("success"); track("form_success"); form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Request failed"); setState("error"); track("form_error");
    }
  }

  return <form id="availability-form" className="form" onSubmit={submit} onFocus={() => track("form_open")} aria-busy={state === "loading"}>
    <div className="field"><label htmlFor="startDate">{it ? "Data di inizio" : "Start date"}</label><input id="startDate" name="startDate" type="date" required /></div>
    <div className="field"><label htmlFor="endDate">{it ? "Data di fine" : "End date"}</label><input id="endDate" name="endDate" type="date" required /></div>
    <div className="field"><label htmlFor="scooters">{it ? "Numero di scooter" : "Number of scooters"}</label><input id="scooters" name="scooters" type="number" min="1" max="10" defaultValue="1" required /></div>
    <div className="field"><label htmlFor="people">{it ? "Numero di persone" : "Number of people"}</label><input id="people" name="people" type="number" min="1" max="20" defaultValue="1" required /></div>
    <div className="field"><label htmlFor="name">{it ? "Nome" : "Name"}</label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="phone">{it ? "Telefono o WhatsApp" : "Phone or WhatsApp"}</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
    <div className="field"><label htmlFor="accommodation">{it ? "Struttura ricettiva (facoltativa)" : "Accommodation (optional)"}</label><input id="accommodation" name="accommodation" /></div>
    <div className="field"><label htmlFor="language">{it ? "Lingua preferita" : "Preferred language"}</label><select id="language" name="language" defaultValue={locale}><option value="it">Italiano</option><option value="en">English</option></select></div>
    <div className="field full"><label htmlFor="notes">{it ? "Note" : "Notes"}</label><textarea id="notes" name="notes" maxLength={1500} /></div>
    <div className="field" aria-hidden="true" style={{ position:"absolute", left:"-10000px" }}><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <label className="checkbox field full"><input name="privacyConsent" type="checkbox" value="yes" required />{it ? "Acconsento al trattamento dei dati per ricevere risposta alla richiesta (obbligatorio)." : "I consent to the use of my data to answer this enquiry (required)."}</label>
    <label className="checkbox field full"><input name="marketingConsent" type="checkbox" value="yes" />{it ? "Desidero ricevere aggiornamenti promozionali (facoltativo)." : "I would like to receive promotional updates (optional)."}</label>
    <div className="field full"><button className="button" disabled={state === "loading"}>{state === "loading" ? (it ? "Invio…" : "Sending…") : (it ? "Richiedi disponibilità" : "Check availability")}</button><small>{it ? "Richiesta senza impegno. Riceverai conferma di disponibilità e preventivo." : "No-obligation enquiry. You will receive availability and a quote."}</small></div>
    <div className="field full" aria-live="polite">{state === "success" && <p className="success">{it ? "Richiesta ricevuta. Ti contatteremo per confermare disponibilità, prezzo e modalità di ritiro." : "Request received. We will contact you to confirm availability, price and pickup."}</p>}{state === "error" && <p className="error" role="alert">{message}</p>}</div>
  </form>;
}
