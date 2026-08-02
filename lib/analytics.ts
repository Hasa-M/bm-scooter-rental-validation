export type AnalyticsEvent = "primary_cta" | "whatsapp_click" | "form_open" | "form_submit" | "form_success" | "form_error" | "language_change" | "commercial_view" | "guide_view" | "commercial_internal_click";

export function track(event: AnalyticsEvent, data: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("scooterbosa:analytics", { detail: { event, ...data } }));
}
