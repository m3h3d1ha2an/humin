import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const manifest = (): MetadataRoute.Manifest => ({
  name: siteConfig.title,
  short_name: "Humin",
  description: siteConfig.description,
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#2563eb",
  icons: [
    { src: "/icon.png", sizes: "512x512", type: "image/png" },
    { src: "/apple-icon.png", sizes: "192x192", type: "image/png" },
    { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
  ],
});

export default manifest;
