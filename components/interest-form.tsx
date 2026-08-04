"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/content/types";
import { ageBands, originAreas, serviceLocations } from "@/lib/leads/options";
import { track } from "@/lib/analytics";

type State = "idle" | "loading" | "success" | "error";

export function InterestForm({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [wantsContact, setWantsContact] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState("loading");
    setMessage("");
    track("form_submit", { contactRequested: wantsContact });

    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const payload = await response.json() as { message?: string };
      if (!response.ok) throw new Error(payload.message || (it ? "Invio non riuscito." : "Request failed."));

      setMessage(payload.message || (it ? "Risposta registrata." : "Response recorded."));
      setState("success");
      track("form_success", { contactRequested: wantsContact });
      form.reset();
      setWantsContact(false);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : (it ? "Invio non riuscito." : "Request failed."));
      setState("error");
      track("form_error");
    }
  }

  return (
    <section className="section alt interest-section">
      <div className="container split">
        <div>
          <p className="eyebrow">{it ? "Richieste aperte" : "Requests open"}</p>
          <h2>{it ? "Quando vuoi vivere Bosa in scooter?" : "When would you like to explore Bosa by scooter?"}</h2>
          <p className="lead">
            {it
              ? "Indicaci date, scooter e zona del soggiorno: bastano pochi minuti per farci capire di cosa hai bisogno."
              : "Share your dates, preferred scooter and stay location: it only takes a few minutes to tell us what you need."}
          </p>
          <p className="form-note">
            {it
              ? "Bosa in Scooter è in fase di lancio. La richiesta non è una prenotazione e non richiede pagamenti; puoi lasciare l'email, separatamente e in modo facoltativo, per sapere quando apriranno le prenotazioni."
              : "Bosa in Scooter is preparing to launch. Your request is not a booking and requires no payment; you can separately and optionally leave your email to hear when bookings open."}
          </p>
        </div>

        <form
          id="interest-form"
          className="form"
          onSubmit={submit}
          onFocus={() => track("form_open")}
          aria-busy={state === "loading"}
        >
          <div className="field">
            <label htmlFor="startDate">{it ? "Data di inizio" : "Start date"}</label>
            <input id="startDate" name="startDate" type="date" required />
          </div>

          <div className="field">
            <label htmlFor="endDate">{it ? "Data di fine" : "End date"}</label>
            <input id="endDate" name="endDate" type="date" required />
          </div>

          <div className="field">
            <label htmlFor="scooters">{it ? "Numero di scooter" : "Number of scooters"}</label>
            <input id="scooters" name="scooters" type="number" min="1" max="3" defaultValue="1" required />
          </div>

          <div className="field">
            <label htmlFor="ageBand">{it ? "Fascia d'età" : "Age range"}</label>
            <select id="ageBand" name="ageBand" defaultValue="" required>
              <option value="" disabled>{it ? "Seleziona una fascia" : "Select a range"}</option>
              {ageBands.map((band) => <option key={band} value={band}>{band}</option>)}
            </select>
          </div>

          <fieldset className="field full vehicle-choice">
            <legend>{it ? "Quale scooter ti interessa?" : "Which scooter are you interested in?"}</legend>
            <div className="vehicle-switch">
              <label>
                <input type="radio" name="vehicleType" value="125cc" required />
                <span>
                  <strong>125cc</strong>
                  <small>
                    {it
                      ? "Per soggiorni lunghi, paesi vicini e calette più lontane."
                      : "For longer stays, nearby villages and more remote coves."}
                  </small>
                </span>
              </label>
              <label>
                <input type="radio" name="vehicleType" value="50cc" required />
                <span>
                  <strong>50cc</strong>
                  <small>
                    {it
                      ? "Per il borgo, la marina e le località di mare più vicine."
                      : "For the old town, marina and nearby seaside spots."}
                  </small>
                </span>
              </label>
            </div>
          </fieldset>

          <div className="field full">
            <label htmlFor="stayLocation">{it ? "Dove soggiornerai?" : "Where will you be staying?"}</label>
            <select id="stayLocation" name="stayLocation" defaultValue="" required>
              <option value="" disabled>{it ? "Seleziona una località" : "Select a location"}</option>
              {serviceLocations.map((location) => <option key={location} value={location}>{location}</option>)}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="originArea">{it ? "Macroarea di provenienza" : "Origin macro-region"}</label>
            <select id="originArea" name="originArea" defaultValue="" required>
              <option value="" disabled>{it ? "Seleziona una macroarea" : "Select a macro-region"}</option>
              {originAreas.map((area) => (
                <option key={area.value} value={area.value}>{area[locale]}</option>
              ))}
            </select>
            <small className="label-info">
              {it ? "Non chiediamo città, indirizzo o nazionalità esatta." : "We do not ask for your city, address or exact nationality."}
            </small>
          </div>

          <fieldset className="field full vehicle-choice">
            <legend>{it ? "Hai la patente da oltre cinque anni?" : "Have you held your licence for more than five years?"}</legend>
            <div className="binary-choice">
              <label><input type="radio" name="licensedOverFiveYears" value="yes" required />{it ? "Sì" : "Yes"}</label>
              <label><input type="radio" name="licensedOverFiveYears" value="no" required />No</label>
            </div>
          </fieldset>

          <fieldset className="field full contact-panel">
            <legend>{it ? "Ricevi l'apertura delle prenotazioni" : "Hear when bookings open"}</legend>
            <label className="checkbox">
              <input
                name="wantsContact"
                type="checkbox"
                value="yes"
                checked={wantsContact}
                onChange={(event) => setWantsContact(event.target.checked)}
                aria-controls="contact-details"
                aria-expanded={wantsContact}
              />
              <span>
                {it
                  ? "Avvisami via email appena il servizio sarà disponibile"
                  : "Email me as soon as the service becomes available"}
              </span>
            </label>

            {wantsContact && (
              <div id="contact-details" className="contact-details">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={160} required />
                </div>
                <label className="checkbox">
                  <input name="contactConsent" type="checkbox" value="yes" required />
                  <span>
                    {it
                      ? "Acconsento a ricevere via email aggiornamenti sulla disponibilità del servizio. Posso revocare il consenso in qualsiasi momento tramite email."
                      : "I consent to receiving email updates about service availability. I may withdraw consent at any time by emailing the controller."}
                  </span>
                </label>
              </div>
            )}
          </fieldset>

          <div className="field full">
            <label htmlFor="notes">
              {it ? "Raccontaci il tuo programma" : "Tell us about your plans"}
              <small className="label-info">{it ? "Facoltative · massimo 500 caratteri" : "Optional · maximum 500 characters"}</small>
            </label>
            <textarea id="notes" name="notes" maxLength={500} />
            <small className="label-info">
              {it
                ? "Facoltativo: indicaci itinerari, esigenze o domande. Non inserire documenti o informazioni sensibili."
                : "Optional: share routes, needs or questions. Do not enter documents or sensitive information."}
            </small>
          </div>
          <input type="hidden" name="language" value={locale} />
          <div className="field" aria-hidden="true" style={{ position: "absolute", left: "-10000px" }}>
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="checkbox field full">
            <input name="privacyNoticeAcknowledged" type="checkbox" value="yes" required />
            <span>
              {it ? "Dichiaro di aver letto l'" : "I confirm that I have read the "}
              <Link href={"/" + locale + "/privacy"}>
                {it ? "informativa privacy" : "privacy notice"}
              </Link>.
            </span>
          </label>

          <div className="field full">
            <button className="button" disabled={state === "loading"}>
              {state === "loading"
                ? (it ? "Invio…" : "Sending…")
                : (it ? "Invia la richiesta" : "Send my request")}
            </button>
          </div>

          <div className="field full" aria-live="polite">
            {state === "success" && <p className="success">{message}</p>}
            {state === "error" && <p className="error" role="alert">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
