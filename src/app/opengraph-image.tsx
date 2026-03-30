import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MacSlapApp — Slap Your MacBook and It Screams Back";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #050505 0%, #0a1a0f 40%, #051005 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "60px",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74, 222, 128, 0.12) 0%, transparent 70%)",
          }}
        />

        {/* Emoji */}
        <div style={{ fontSize: "80px", marginBottom: "20px" }}>👋</div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            letterSpacing: "-2px",
            textAlign: "center",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#f0f0f0" }}>Slap Your MacBook.</span>
          <span
            style={{
              background: "linear-gradient(135deg, #4ade80, #22d3ee, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            It Screams Back.
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#9ca3af",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          5-algorithm impact detection • 7 voice packs • Screen shake • Free & open source
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            color: "#6b7280",
          }}
        >
          <span style={{ color: "#4ade80", fontWeight: 600 }}>macslap.app</span>
          <span>•</span>
          <span>Free Forever</span>
          <span>•</span>
          <span>MIT License</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
