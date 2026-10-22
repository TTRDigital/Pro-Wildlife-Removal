import type { Metadata } from "next";
import type { Img, Seo } from "@/lib/types";
import { images } from "@/lib/data/images";

const SITE_NAME = "Pro Wildlife Removal";

/** Title, description, canonical, Open Graph and Twitter tags for a page. Titles are used as written (same as the live site). */
export function pageMetadata(seo: Seo, path: string, fallbackImage?: Img, type: "website" | "article" = "website"): Metadata {
  const image = seo.image ?? fallbackImage ?? images.ogDefault;
  const og = { url: image.src, width: image.width, height: image.height, alt: image.alt };
  const canonical = path.endsWith("/") ? path : `${path}/`;
  return {
    title: { absolute: seo.title },
    description: seo.description || undefined,
    alternates: { canonical },
    robots: seo.noIndex ? { index: false, follow: true } : undefined,
    openGraph: { type, siteName: SITE_NAME, locale: "en_US", url: canonical, title: seo.title, description: seo.description || undefined, images: [og] },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description || undefined, images: [image.src] },
  };
}
