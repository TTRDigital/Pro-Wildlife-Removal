"use client";

import { useEffect } from "react";
import { TTR_ORIGIN, TTR_SITE_KEY } from "@/lib/ttr";

/*
 * Dynamic call number for Google Ads visitors (TTR-1339), same behavior as the ad landing pages.
 * A visitor who arrives with a gclid in the address gets one number from the TTR OS pool for about 30 minutes after their
 * last activity, so calls to it can be matched to the click. Everyone else keeps the site's own number, and so does anyone
 * when the pool is busy, the request fails or takes longer than 1.5 s, or JavaScript is off.
 *
 * It swaps the visible number and every tel: link that points at the site's number. The page is server-rendered with the
 * site's number, so this only runs after hydration (no hydration mismatch), and a MutationObserver re-applies the held
 * number after client-side navigations. Structured data (JSON-LD) and metadata are never touched: they keep the site number.
 */
const API = `${TTR_ORIGIN}/api/site/number`;
const STORE = "pw_call_number";
const HOLD_MS = 30 * 60 * 1000;
const WAIT_MS = 1500;

type Held = { tel: string; display: string };

function read(): Held | null {
  try {
    const s = JSON.parse(localStorage.getItem(STORE) || "null");
    return s && s.exp > Date.now() && /^\+1\d{10}$/.test(s.tel || "") && typeof s.display === "string" && s.display ? { tel: s.tel, display: s.display } : null;
  } catch {
    return null;
  }
}

function write(n: Held) {
  try {
    localStorage.setItem(STORE, JSON.stringify({ tel: n.tel, display: n.display, exp: Date.now() + HOLD_MS }));
  } catch {
    /* private mode or storage full: the number still shows for this page view */
  }
}

export function CallNumber({ phone }: { phone: string }) {
  useEffect(() => {
    if (!TTR_SITE_KEY) return;
    const defDigits = phone.replace(/\D/g, "").slice(-10);
    if (defDigits.length !== 10) return;
    const a = defDigits.slice(0, 3), b = defDigits.slice(3, 6), c = defDigits.slice(6);
    // The ways the site writes its number: "(844) 264-6254" (and as a plain string it was given) and "844-264-6254".
    const spellings = [phone, `(${a}) ${b}-${c}`, `${a}-${b}-${c}`].filter((v, i, all) => v && all.indexOf(v) === i);

    let current: Held | null = null;
    let queued = 0;
    const observer = new MutationObserver(() => schedule());

    function replaceIn(text: string, n: Held): string {
      const d = n.display.replace(/\D/g, "").slice(-10);
      const dashed = `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
      let out = text;
      for (const s of spellings) if (out.includes(s)) out = out.split(s).join(s === `${a}-${b}-${c}` ? dashed : n.display);
      return out;
    }

    function apply(n: Held) {
      observer.disconnect();
      try {
        document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((el) => {
          const href = el.getAttribute("href") || "";
          if (href.replace(/\D/g, "").slice(-10) === defDigits) el.setAttribute("href", `tel:${n.tel}`);
        });
        document.querySelectorAll<HTMLElement>("[aria-label],[title]").forEach((el) => {
          for (const attr of ["aria-label", "title"]) {
            const v = el.getAttribute(attr);
            if (v && spellings.some((s) => v.includes(s))) el.setAttribute(attr, replaceIn(v, n));
          }
        });
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const todo: Text[] = [];
        let node: Node | null;
        while ((node = walker.nextNode())) {
          const t = node as Text;
          const tag = t.parentNode?.nodeName;
          if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") continue;
          if (spellings.some((s) => t.nodeValue?.includes(s))) todo.push(t);
        }
        for (const t of todo) t.nodeValue = replaceIn(t.nodeValue || "", n);
        document.documentElement.setAttribute("data-call-number", n.tel);
      } finally {
        observe();
      }
    }

    function observe() {
      observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["href"] });
    }

    function schedule() {
      if (!current || queued) return;
      queued = window.setTimeout(() => {
        queued = 0;
        if (current) apply(current);
      }, 50);
    }

    function use(n: Held) {
      current = n;
      write(n);
      apply(n);
    }

    const held = read();
    let controller: AbortController | null = null;
    let timer = 0;
    if (held) {
      use(held); // keep it, and renew the hold on activity
    } else {
      const q = new URLSearchParams(location.search);
      const gclid = q.get("gclid");
      if (gclid) {
        controller = typeof AbortController === "function" ? new AbortController() : null;
        timer = window.setTimeout(() => controller?.abort(), WAIT_MS);
        fetch(API, {
          method: "POST",
          headers: { "content-type": "application/json" },
          keepalive: true,
          signal: controller?.signal,
          body: JSON.stringify({ k: TTR_SITE_KEY, gclid, campaign: q.get("campaign_id") || "", adgroup: q.get("ad_group_id") || "", page: location.pathname, referrer: document.referrer || "" }),
        })
          .then((r) => (r.ok ? r.json() : null))
          .then((n) => {
            window.clearTimeout(timer);
            if (n && /^\+1\d{10}$/.test(n.number || "") && n.display) use({ tel: n.number, display: String(n.display) });
          })
          .catch(() => window.clearTimeout(timer));
      }
    }

    const renew = () => {
      const h = read();
      if (h) write(h);
    };
    const events = ["click", "scroll", "touchstart"] as const;
    events.forEach((ev) => window.addEventListener(ev, renew, { passive: true }));
    return () => {
      events.forEach((ev) => window.removeEventListener(ev, renew));
      observer.disconnect();
      window.clearTimeout(timer);
      window.clearTimeout(queued);
      controller?.abort();
    };
  }, [phone]);
  return null;
}
