import { ImageResponse } from "next/og";

export const alt = "Bosa in Scooter — 50cc and 125cc scooters for exploring Bosa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#281b35",
        background: "linear-gradient(135deg,#f1e8ff,#fbf9ff 48%,#ffe4d1)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: 2 }}>BOSA · SARDEGNA</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 82, lineHeight: 1, fontWeight: 800 }}>Bosa in Scooter</div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#7c3aed" }}>Più libertà. Più Bosa.</div>
      </div>
      <div style={{ fontSize: 22 }}>Scooter 50cc e 125cc · Condizioni indicative</div>
    </div>,
    size,
  );
}
