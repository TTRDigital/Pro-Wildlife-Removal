import { revalidateTag } from "next/cache";
import { SANITY_TAG, verifySignature } from "@/lib/revalidate";

/*
 * On-demand refresh after a Sanity publish, called by TTR OS (and usable as a Sanity webhook):
 *   POST /api/revalidate/   (the site uses trailing slashes: /api/revalidate answers 308 to this URL)
 *   header sanity-webhook-signature: t=<unix ms>,v1=<base64url HMAC-SHA256(SANITY_REVALIDATE_SECRET, "<t>.<body>")>
 * A valid call marks every published Sanity read (tag "sanity") stale; each page is rebuilt with fresh content
 * on its next visit. SANITY_REVALIDATE_SECRET is an env var set in Vercel; without it every call gets 503.
 */

export const dynamic = "force-dynamic";

const MAX_BODY = 64 * 1024;

const answer = (status: number, data: Record<string, unknown>) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

export async function POST(request: Request) {
  const secret = (process.env.SANITY_REVALIDATE_SECRET ?? "").trim();
  if (!secret) return answer(503, { revalidated: false, message: "Revalidation is not set up on this site." });

  const body = await request.text();
  if (body.length > MAX_BODY) return answer(413, { revalidated: false, message: "Body too large." });

  const check = verifySignature(request.headers.get("sanity-webhook-signature"), body, secret);
  if (!check.ok) return answer(401, { revalidated: false, message: check.reason });

  // Stale content is never served after a publish: the next visit to each page waits for fresh content.
  revalidateTag(SANITY_TAG, { expire: 0 });
  return answer(200, { revalidated: true, tags: [SANITY_TAG], now: Date.now() });
}
