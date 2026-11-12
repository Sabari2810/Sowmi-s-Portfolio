import type { MetadataRoute } from "next";

const base = "https://by-sowmya.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/projects/cognitive-playground", priority: 0.8 },
    { path: "/projects/managed-office-spaces", priority: 0.8 },
    { path: "/projects/client-projects", priority: 0.8 },
  ];
  return pages.map((p) => ({ url: `${base}${p.path}`, priority: p.priority }));
}
