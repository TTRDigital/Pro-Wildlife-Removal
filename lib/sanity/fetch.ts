import "server-only";

import { isPreview, previewReadToken } from "@/lib/preview";
import { apiVersion, dataset, projectId } from "@/sanity/env";

/**
 * Fetch published content from Sanity's API CDN.
 *
 * - Runs at build time only (static export): publishing in Sanity starts a
 *   rebuild + upload (.github/workflows/deploy-siteground.yml).
 * - Draft preview (lib/preview.ts): while draft mode is on, reads Sanity's
 *   drafts from the live API with the read token, never cached. Visitors
 *   never have draft mode on, so they always get published content.
 * - Never throws: returns null on any failure so pages fall back to
 *   lib/content.ts defaults and the site keeps working.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  if (!projectId) return null;

  const token = previewReadToken() && (await isPreview()) ? previewReadToken() : "";
  const search = new URLSearchParams({ query, perspective: token ? "drafts" : "published" });
  for (const [key, value] of Object.entries(params)) {
    search.set(`$${key}`, JSON.stringify(value));
  }
  const url = `https://${projectId}.${token ? "api" : "apicdn"}.sanity.io/v${apiVersion}/data/query/${dataset}?${search}`;

  try {
    const res = token
      ? await fetch(url, { cache: "no-store", headers: { Authorization: `Bearer ${token}` } })
      : await fetch(url, { cache: "force-cache" });
    if (!res.ok) {
      console.warn(`[sanity] ${res.status} for query tags=${tags.join(",")}`);
      return null;
    }
    const json = (await res.json()) as { result?: T };
    return json.result ?? null;
  } catch (error) {
    console.warn("[sanity] fetch failed, using fallbacks", error);
    return null;
  }
}
