import { createHmac, timingSafeEqual } from "node:crypto";
import { draftMode } from "next/headers";

/*
 * Draft preview for TTR OS (lib/connectors/sanity.ts previewUrl in ttr-portal):
 *   /api/preview?path=/blog/new-post/&exp=<unix seconds>&sig=<hex>
 * sig = HMAC-SHA256(PREVIEW_SECRET, `${path}\n${exp}`). A valid, unexpired link turns on Next draft mode
 * (pages then read Sanity drafts with SANITY_READ_TOKEN) and redirects to the path on this site.
 * PREVIEW_SECRET and SANITY_READ_TOKEN are env vars set in Vercel; without PREVIEW_SECRET every link is refused.
 */

export const dynamic = "force-dynamic";

const MAX_AGE = 31 * 24 * 3600; // TTR OS links last at most 30 days

const refuse = (status: number, message: string) =>
  new Response(message, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

export async function GET(request: Request) {
  const secret = (process.env.PREVIEW_SECRET ?? "").trim();
  if (!secret) return refuse(503, "Preview is not set up on this site.");

  const url = new URL(request.url);
  const path = url.searchParams.get("path") ?? "";
  const exp = url.searchParams.get("exp") ?? "";
  const sig = (url.searchParams.get("sig") ?? "").toLowerCase();

  // Same-site paths only (no //host or /\host open redirects).
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return refuse(400, "Invalid path.");
  const expires = /^\d{1,12}$/.test(exp) ? Number(exp) : 0;
  const now = Math.floor(Date.now() / 1000);
  if (expires <= now || expires > now + MAX_AGE) return refuse(401, "This preview link has expired.");

  const expected = createHmac("sha256", secret).update(`${path}\n${exp}`).digest();
  const given = /^[0-9a-f]{64}$/.test(sig) ? Buffer.from(sig, "hex") : Buffer.alloc(0);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return refuse(401, "Invalid preview link.");

  const target = new URL(path, url.origin);
  if (target.origin !== url.origin) return refuse(400, "Invalid path.");

  (await draftMode()).enable();
  return new Response(null, { status: 307, headers: { Location: target.pathname + target.search + target.hash, "Cache-Control": "no-store" } });
}
