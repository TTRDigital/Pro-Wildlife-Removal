import "server-only";

import { draftMode } from "next/headers";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { SANITY_TAG } from "@/lib/revalidate";

/** True inside a draft preview request (app/api/preview). False at build time and outside a request. */
export async function isPreview() {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

/**
 * Whether draft preview can read Sanity: one small read of drafts from the live API with
 * SANITY_READ_TOKEN. Checked by app/api/preview before draft mode is turned on, because pages
 * fall back to the built-in content when a read fails, and a draft post would then answer 404.
 */
export async function canReadDrafts(): Promise<boolean> {
  const token = (process.env.SANITY_READ_TOKEN ?? "").trim();
  if (!projectId || !token) return false;
  const search = new URLSearchParams({ query: `count(*[_type == "post"])`, perspective: "drafts" });
  try {
    const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?${search}`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) console.warn(`[sanity] preview read refused: ${res.status}`);
    return res.ok;
  } catch (error) {
    console.warn("[sanity] preview read failed", error);
    return false;
  }
}

/**
 * Fetch published content from Sanity's API CDN.
 *
 * - Runs at build time: publishing in Sanity starts a rebuild (Vercel deploy hook). Published reads are
 *   also tagged, so a signed POST /api/revalidate/ refreshes pages without a rebuild.
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
    // Published reads are tagged so POST /api/revalidate/ can refresh them after a publish (lib/revalidate.ts).
    const res = await fetch(
      url,
      token ? { cache: "no-store", headers: { Authorization: `Bearer ${token}` } } : { cache: "force-cache", next: { tags: [SANITY_TAG, ...tags] } },
    );
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
