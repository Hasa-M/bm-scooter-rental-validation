"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/content/types";
import { serviceLocations } from "@/lib/leads/options";
import { track } from "@/lib/analytics";

type State = "idle" | "loading" | "success" | "error";

export function InterestForm({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState("loading");
    setMessage("");
    track("form_submit");

    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const payload = await response.json() as { message?: string };
      if (!response.ok) throw new Error(payload.message || (it ? "Invio non riuscito." : "Request failed."));
      setState("success");
      track("form_success");
      form.reset();
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
          <p className="eyebrow">{it ? "Il tuo interesse conta" : "Your interest matters"}</p>
          <h2>{it ? "Facci sapere se sei interessato" : "Let us know if you’re interested"}</h2>
          <p className="lead">
            {it
              ? "Raccontaci quale soluzione stai cercando: ci aiuterai a organizzare un servizio più utile per chi visita Bosa e il territorio."
              : "Tell us what you are looking for: you will help us shape a more useful service for people visiting Bosa and the surrounding area."}
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
            <label htmlFor="age">{it ? "Età" : "Age"}</label>
            <input id="age" name="age" type="number" min="18" max="79" inputMode="numeric" required />
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
                      ? "Più adatto per soggiorni lunghi, paesi vicini e calette più lontane."
                      : "Better suited to longer stays, nearby villages and more remote coves."}
                  </small>
                </span>
              </label>
              <label>
                <input type="radio" name="vehicleType" value="50cc" required />
                <span>
                  <strong>50cc</strong>
                  <small>
                    {it
                      ? "Ideale per restare tra il borgo medievale e le località di mare più vicine."
                      : "Ideal for staying around the medieval village and nearby seaside spots."}
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
            <label htmlFor="email">
              {"Email"}
              <small className="label-info">{it ? "Facoltativo, ma apprezzato, non verrai ricontattato in ogni caso." : "Optional, but appreciated, you will not be contacted in any case."}</small>
            </label>
            <input id="email" name="email" type="email" autoComplete="email" />
          </div>

          <div className="field full">
            <label htmlFor="origin">
              {it ? "Luogo di origine" : "Place of origin"}
              <small className="label-info">{it ? "Città / Nazione · facoltativo" : "City / Country · optional"}</small>
            </label>
            <input id="origin" name="origin" autoComplete="country-name" />
          </div>

          <label className="checkbox field full">
            <input name="licensedOverFiveYears" type="checkbox" value="yes" defaultChecked />
            <span>
              {it ? "Ho la patente da oltre 5 anni" : "I have held a driving licence for more than 5 years"}
            </span>
          </label>

          <div className="field full">
            <label htmlFor="notes">
              {it ? "Note" : "Notes"}
              <small className="label-info">{it ? "Facoltative" : "Optional"}</small>
            </label>
            <textarea id="notes" name="notes" maxLength={1500} />
          </div>

          <input type="hidden" name="language" value={locale} />
          <div className="field" aria-hidden="true" style={{ position: "absolute", left: "-10000px" }}>
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="checkbox field full">
            <input name="privacyConsent" type="checkbox" value="yes" required />
            <span>
              {it
                ? "Acconsento al trattamento dei dati per valutare la richiesta e la fattibilità del servizio. Nessun dato sarà condiviso con terze parti o usato a fini di marketing."
                : "I consent to the use of my data to evaluate the request and the feasibility of the service. No data will be shared with third parties or used for marketing purposes."}
            </span>
          </label>

          <div className="field full">
            <button className="button" disabled={state === "loading"}>
              {state === "loading" ? (it ? "Invio…" : "Sending…") : (it ? "Invia il tuo interesse" : "Send your interest")}
            </button>
          </div>

          <div className="field full" aria-live="polite">
            {state === "success" && (
              <p className="success">
                {it
                  ? "Grazie, abbiamo ricevuto il tuo interesse. Ti contatteremo via email."
                  : "Thank you, we have received your interest. We will contact you by email."}
              </p>
            )}
            {state === "error" && <p className="error" role="alert">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
