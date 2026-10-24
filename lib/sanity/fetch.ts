import "server-only";

import { draftMode } from "next/headers";
import { apiVersion, dataset, projectId } from "@/sanity/env";

/** True inside a draft preview request (app/api/preview). False at build time and outside a request. */
export async function isPreview() {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

/**
 * Fetch published content from Sanity's API CDN.
 *
 * - Runs at build time: publishing in Sanity starts a rebuild (Vercel deploy hook).
 * - In draft preview (TTR OS preview links) it reads drafts over published content
 *   from the live API with SANITY_READ_TOKEN, uncached.
 * - Never throws: returns null on any failure so pages fall back to
 *   lib/content.ts defaults and the site keeps working.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  if (!projectId) return null;

  const token = (await isPreview()) ? (process.env.SANITY_READ_TOKEN ?? "").trim() : "";
  const search = new URLSearchParams({ query, perspective: token ? "drafts" : "published" });
  for (const [key, value] of Object.entries(params)) {
    search.set(`$${key}`, JSON.stringify(value));
  }
  const url = `https://${projectId}.${token ? "api" : "apicdn"}.sanity.io/v${apiVersion}/data/query/${dataset}?${search}`;

  try {
    const res = await fetch(url, token ? { cache: "no-store", headers: { Authorization: `Bearer ${token}` } } : { cache: "force-cache" });
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
