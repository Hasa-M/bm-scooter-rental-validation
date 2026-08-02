import type { MetadataRoute } from "next";
import { siteImagePaths } from "@/lib/config/images";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bosa in Scooter",
    short_name: "Bosa in Scooter",
    description: "Scooter 50cc e 125cc per muoversi a Bosa e Bosa Marina.",
    start_url: "/it",
    display: "standalone",
    background_color: "#fbf9ff",
    theme_color: "#7c3aed",
    icons: [{ src: siteImagePaths.favicon, sizes: "512x512", type: "image/png" }],
  };
}
