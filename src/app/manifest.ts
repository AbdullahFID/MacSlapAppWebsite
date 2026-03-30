import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MacSlapApp — Slap Your MacBook and It Screams Back",
    short_name: "MacSlapApp",
    description:
      "Free, open-source app that makes your MacBook scream when you slap it. 5-algorithm impact detection, screen shake, haptic feedback, 7 voice packs.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#4ade80",
  };
}
