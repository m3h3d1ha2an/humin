export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Humin - Smart Employee Data & Reporting Platform",
  description:
    "Simplify employee data entry, manage records securely, and export detailed reports in multiple formats.",
  keywords: [
    "HR management",
    "employee data",
    "reporting",
    "data entry",
    "secure management",
    "multiple formats",
    "HR analytics",
    "SaaS HR tool",
    "employee records",
  ],
  author: "Mehedi Hasan",
  url: process.env.NODE_ENV === "production" ? "https://humin.vercel.app" : "http://localhost:3000",
};
