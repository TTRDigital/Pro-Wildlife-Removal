import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

/** Every published Sanity read carries this cache tag (lib/sanity/fetch.ts), so one refresh covers the whole site. */
export const SANITY_TAG = "sanity";

/** How old a signed request may be (or how far ahead the sender's clock may run). */
const MAX_SKEW_MS = 5 * 60 * 1000;

export type SignatureCheck = { ok: true } | { ok: false; reason: string };

/**
 * Checks a `sanity-webhook-signature` header: `t=<unix ms>,v1=<base64url HMAC-SHA256(secret, "<t>.<body>")>`.
 * The same format as Sanity's own webhooks and TTR OS's refresh calls. Compared in constant time; requests
 * older than five minutes are refused, so a captured request can't be replayed later.
 */
export function verifySignature(header: string | null, body: string, secret: string, now = Date.now()): SignatureCheck {
  if (!header) return { ok: false, reason: "Missing signature." };
  const parts = new Map(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i).trim(), p.slice(i + 1).trim()] as const;
    }),
  );
  const t = parts.get("t") ?? "";
  const v1 = parts.get("v1") ?? "";
  if (!/^\d{1,16}$/.test(t) || !/^[A-Za-z0-9_-]+={0,2}$/.test(v1)) return { ok: false, reason: "Malformed signature." };
  if (Math.abs(now - Number(t)) > MAX_SKEW_MS) return { ok: false, reason: "Signature expired." };

  const expected = createHmac("sha256", secret).update(`${t}.${body}`).digest();
  // base64url, with or without padding; plain base64 (+ and /) is not accepted by the format check above.
  const given = Buffer.from(v1.replace(/=+$/, ""), "base64url");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return { ok: false, reason: "Invalid signature." };
  return { ok: true };
}
