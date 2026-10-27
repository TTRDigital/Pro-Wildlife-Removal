import type { MetadataRoute } from "next";
import { getLocations, getPosts, getServicePlaces, getServices } from "@/lib/content";
import { placePath } from "@/lib/place-links";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, locations, posts, places] = await Promise.all([getServices(), getLocations(), getPosts(), getServicePlaces()]);
  const entry = (path: string, priority: number, lastModified?: string) => ({ url: absoluteUrl(path), priority, ...(lastModified ? { lastModified } : {}) });
  return [
    entry("/", 1),
    entry("/services/", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}/`, s.group === "removal" ? 0.9 : 0.8)),
    ...places.map((p) => entry(placePath(p), 0.8)),
    entry("/service-areas/", 0.8),
    ...locations.map((l) => entry(`/${l.path}/`, 0.7)),
    entry("/about-us/", 0.6),
    entry("/how-we-work/", 0.6),
    entry("/contact-us/", 0.7),
    entry("/blog/", 0.6),
    ...posts.map((p) => entry(`/blog/${p.slug}/`, 0.5, p.modified ?? p.date)),
    entry("/sitemap/", 0.2),
    entry("/privacy-policy/", 0.1),
    entry("/terms-of-service/", 0.1),
  ];
}
