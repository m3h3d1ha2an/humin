import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const robots = (): MetadataRoute.Robots => ({
  rules: [{ userAgent: "*", allow: ["/"], disallow: ["/dashboard", "/api", "/auth"] }],
  sitemap: `${siteConfig.url}/sitemap.xml`,
});

export default robots;
