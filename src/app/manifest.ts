import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Autoscuola Silveri",
    short_name: "Autoscuola Silveri",
    description: "Autoscuola Silveri",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1017",
    theme_color: "#0d1017",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}