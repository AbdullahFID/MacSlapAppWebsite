import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "38px",
          background: "linear-gradient(145deg, #0a0a0a, #0a1a0f)",
          fontSize: "120px",
        }}
      >
        👋
      </div>
    ),
    { ...size }
  );
}
