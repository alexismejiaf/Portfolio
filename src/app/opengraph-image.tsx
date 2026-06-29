import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bryan Alexis Mejía Fonseca — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "80px", backgroundColor: "#0a0a0b", color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 8, textTransform: "uppercase", color: "#a1a1aa" }}>
          Software Developer
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 600, marginTop: 24, lineHeight: 1.05 }}>
          <div style={{ display: "flex" }}>Bryan Alexis</div>
          <div style={{ display: "flex" }}>Mejía Fonseca</div>
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#a1a1aa" }}>
          Serverless cloud · Full-stack · Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
