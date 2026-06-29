import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://portfolio-bryan-mejia.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
