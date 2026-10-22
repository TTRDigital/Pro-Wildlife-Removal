import { MIN_FILL_MS, propertyOptions, serviceOptions } from "@/lib/lead-options";

/*
 * Inspection form handler (Vercel function). Validates the lead like the
 * form does, filters spam and posts it as flat JSON to the GoHighLevel
 * inbound webhook in the GHL_WEBHOOK_URL environment variable. Without it,
 * leads are validated and accepted but not sent anywhere (logged as a warning).
 */

export const dynamic = "force-dynamic";

const reply = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

/* Best-effort per-IP rate limit (per function instance): 10 leads per 10 minutes. */
const recent = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const list = (recent.get(ip) ?? []).filter((t) => now - t < 600_000);
  list.push(now);
  recent.set(ip, list);
  return list.length > 10;
}

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function GET() {
  return reply(405, { ok: false, error: "Method not allowed." });
}

export async function POST(request: Request) {
  // Same-site posts only.
  const origin = request.headers.get("origin");
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").replace(/:\d+$/, "").toLowerCase();
  if (origin) {
    let originHost = "";
    try {
      originHost = new URL(origin).hostname.toLowerCase();
    } catch {
      /* invalid origin */
    }
    if (originHost !== host) return reply(403, { ok: false, error: "Forbidden." });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (limited(ip)) return reply(429, { ok: false, error: "Too many requests. Please call us instead." });

  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 64 * 1024) throw new Error("too large");
    input = JSON.parse(raw);
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("not an object");
  } catch {
    return reply(400, { ok: false, error: "Invalid request." });
  }

  const lead = {
    name: text(input.name, 120),
    phone: text(input.phone, 40),
    email: text(input.email, 200),
    zip: text(input.zip, 10),
    address: text(input.address, 240),
    property: text(input.property, 40),
    service: text(input.service, 80),
    message: text(input.message, 3000),
  };

  const errors: Record<string, string> = {};
  if (lead.name.length < 2) errors.name = "Please enter your name.";
  if (lead.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number with area code.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) errors.email = "Please enter a valid email address.";
  if (!/^\d{5}(-\d{4})?$/.test(lead.zip)) errors.zip = "Please enter a 5-digit ZIP code.";
  if (!(serviceOptions as readonly string[]).includes(lead.service)) errors.service = "Please choose a service.";
  if (lead.property && !(propertyOptions as readonly string[]).includes(lead.property)) lead.property = "";
  if (input.consent !== true) errors.consent = "Please agree so we can contact you.";
  if (Object.keys(errors).length) return reply(422, { ok: false, error: "Please check the form.", fields: errors });

  // Spam: drop only when both signals agree (hidden field filled AND sent faster than a
  // person can type). One signal alone is delivered with a "suspected-spam" tag.
  const trapFilled = text(input.hp_pw, 200) !== "";
  const elapsed = typeof input.elapsed_ms === "number" ? input.elapsed_ms : null;
  const tooFast = elapsed !== null && elapsed < MIN_FILL_MS;
  if (trapFilled && tooFast) return reply(200, { ok: true });
  const spamCheck = trapFilled ? "suspect: hidden field filled" : tooFast ? `suspect: sent in ${elapsed} ms` : "ok";

  const webhook = (process.env.GHL_WEBHOOK_URL ?? "").trim();
  if (!webhook) {
    console.warn("[lead] GHL_WEBHOOK_URL is not set: lead accepted but NOT sent.");
    return reply(200, { ok: true, delivered: false });
  }
  // https only; plain http is allowed for localhost so the form can be tested against a local webhook.
  if (!/^https:\/\//.test(webhook) && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//.test(webhook)) {
    console.error("[lead] GHL_WEBHOOK_URL is not https: lead accepted but NOT sent.");
    return reply(200, { ok: true, delivered: false });
  }

  // E.164 for US numbers.
  const digits = lead.phone.replace(/\D/g, "");
  const phone = digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits[0] === "1" ? `+${digits}` : `${lead.phone.startsWith("+") ? "+" : ""}${digits}`;
  const parts = lead.name.split(/\s+/);
  const slug = lead.service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const tags = ["website-lead", `service-${slug}`, ...(spamCheck !== "ok" ? ["suspected-spam"] : [])];

  const payload: Record<string, unknown> = {
    source: "Website form",
    submitted_at: new Date().toISOString(),
    name: lead.name,
    first_name: parts[0],
    last_name: parts.slice(1).join(" "),
    email: lead.email,
    phone,
    phone_raw: lead.phone,
    address: lead.address,
    postal_code: lead.zip,
    property_type: lead.property,
    service_needed: lead.service,
    consent: true,
    message: lead.message,
    tags,
    spam_check: spamCheck,
  };
  for (const k of ["page_url", "landing_page", "referrer", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]) {
    payload[k] = text(input[k], 1000);
  }

  // One retry for rate limits, server errors and network failures.
  for (let attempt = 0; attempt < 2; attempt++) {
    let status = 0;
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      status = res.status;
      if (res.ok) return reply(200, { ok: true, delivered: true });
      console.error(`[lead] GoHighLevel webhook answered ${status}: ${(await res.text()).slice(0, 300)}`);
    } catch (e) {
      console.error("[lead] GoHighLevel webhook failed:", e);
    }
    if (status !== 0 && status !== 429 && status < 500) break;
    await new Promise((r) => setTimeout(r, 600));
  }

  // Nothing saved the lead: tell the visitor so they can call instead.
  return reply(502, { ok: false, error: "We could not send your request. Please call us instead." });
}
