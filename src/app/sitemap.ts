import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const ROUTES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/testimonials", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/lawn-care", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/landscape-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/hardscaping", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/tree-shrub-care", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/tree-removal", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/seasonal-cleanup", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service-area", changeFrequency: "monthly", priority: 0.9 },
  { path: "/service-area/bradenton", changeFrequency: "monthly", priority: 0.9 },
  { path: "/service-area/ellenton", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service-area/palmetto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service-area/sarasota", changeFrequency: "monthly", priority: 0.9 },
  { path: "/service-area/venice", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service-area/osprey", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
