import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bryan Mejía — Portfolio",
    short_name: "Bryan Mejía",
    description: "Software developer — serverless cloud, full-stack, and automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon", sizes: "512x512", type: "image/png" },
    ],
  };
}
