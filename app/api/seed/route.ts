import { readFile } from "node:fs/promises";
import { basename, join, normalize } from "node:path";
import { createClient } from "@sanity/client";
import { runSeed } from "@/lib/seed/write";
import { apiVersion, dataset, projectId } from "@/sanity/env";

/*
 * TEMPORARY protected seed route (TTR-1341). Remove it in a follow-up commit once Sanity is seeded.
 *
 *   POST /api/seed            dry run: what would be created (default)
 *   POST /api/seed?apply=1    creates the missing documents (run again if it says "remaining")
 *
 * - The Sanity Editor token is read only from the server env var SANITY_WRITE_TOKEN, never from the request.
 *   Without that variable the route answers 404 and names the missing variable.
 * - The caller must send a TTR OS key as "Authorization: Bearer <key>". It is checked by calling
 *   https://ttr-portal.vercel.app/api/v1/me and only the roles owner and build_lead are let through.
 *   The key is not stored or logged.
 * - It only creates documents that do not exist (createIfNotExists). It never deletes or overwrites.
 */
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const ALLOWED_ROLES = new Set(["owner", "build_lead"]);
const reply = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

/** Collects every "role" style value in the /me answer (string or list, at any depth up to 3). */
function roles(v: unknown, depth = 0): string[] {
  if (!v || typeof v !== "object" || depth > 3) return [];
  const out: string[] = [];
  for (const [k, x] of Object.entries(v as Record<string, unknown>)) {
    if (/^(role|roles|capability|capabilities)$/i.test(k)) out.push(...(Array.isArray(x) ? x : [x]).filter((r): r is string => typeof r === "string").map((r) => r.toLowerCase()));
    else out.push(...roles(x, depth + 1));
  }
  return out;
}

async function allowed(authorization: string | null) {
  if (!authorization?.startsWith("Bearer ") || authorization.length < 15) return false;
  try {
    const res = await fetch("https://ttr-portal.vercel.app/api/v1/me", { headers: { Authorization: authorization }, cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!res.ok) return false;
    return roles(await res.json()).some((r) => ALLOWED_ROLES.has(r));
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) return new Response("Seed is off: the env var SANITY_WRITE_TOKEN is not set on this deployment.", { status: 404, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
  if (!(await allowed(request.headers.get("authorization")))) return reply(403, { ok: false, error: "A TTR OS owner or build_lead key is required." });

  const apply = new URL(request.url).searchParams.get("apply") === "1";
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  try {
    const result = await runSeed({
      client,
      apply,
      loadPhoto: async (src) => {
        const file = normalize(join(process.cwd(), "public", src));
        if (!file.startsWith(join(process.cwd(), "public", "images"))) throw new Error("Bad photo path");
        return { data: await readFile(file), filename: basename(file) };
      },
    });
    return reply(200, { ok: true, project: projectId, dataset, ...result });
  } catch (error) {
    console.error("[seed] failed", error instanceof Error ? error.message : error);
    return reply(500, { ok: false, error: "Seeding failed. See the function log." });
  }
}

export async function GET() {
  return reply(405, { ok: false, error: "Use POST." });
}
