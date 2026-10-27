import type { Cta } from "@/lib/types";

const digits = (href: string) => href.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

/**
 * The client takes requests by phone only (Oct 25, 2026): any button that sent visitors to the contact page
 * ("Request an inspection" and the like) becomes a tap-to-call button, and a row never shows the same number twice.
 */
export function callCtas(ctas: Cta[] | undefined, phone: string, phoneHref: string): Cta[] {
  const out: Cta[] = [];
  const seen = new Set<string>();
  for (const c of ctas ?? []) {
    const toContact = /^\/contact-us\/?(#.*)?$/.test(c.href) || c.href.includes("#estimate");
    const cta = toContact ? { ...c, label: `Call ${phone}`, href: phoneHref } : c;
    const key = cta.href.startsWith("tel:") ? `tel:${digits(cta.href)}` : cta.href;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(cta);
  }
  return out;
}
