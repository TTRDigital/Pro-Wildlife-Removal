// Sanity (client's own project 5prlo93h) <-> page content. No dependencies.
// toDoc(page): content.mjs page -> landingPage document (used by the seed script).
// fromDoc(doc, fallback): landingPage document -> page, anything missing comes from the fallback (used by the build).
// loadPages(fallbackPages): reads landingPage documents at build time; on any problem returns the fallback unchanged.

export const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5prlo93h';
export const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const API_VERSION = '2025-02-19';
export const docId = (slug) => `landingPage-${slug}`;

const has = (v) => v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0);
const clean = (o) => Object.fromEntries(Object.entries(o).filter(([, v]) => has(v)));
let n = 0;
const keyed = (arr) => arr.map((x) => ({ _key: `k${(n++).toString(36)}`, ...x }));
const strip = (arr) => arr.map(({ _key, ...x }) => x);

export function toDoc(p) {
  const d = { _id: docId(p.slug), _type: 'landingPage', slug: p.slug, host: p.host, title: p.title, description: p.description, noindex: true, tel: p.tel, variant: p.variant || 'dark', topbar: p.topbar, headerLabel: p.headerLabel };
  d.hero = clean({ badge: p.hero.badge, h1Line1: p.hero.h1[0], h1Line2: p.hero.h1[1], sub: p.hero.sub, note: p.hero.note, image: p.hero.img, alt: p.hero.alt, chips: p.hero.chips && keyed(p.hero.chips.map(([i, t]) => ({ icon: i, text: t }))) });
  d.trust = keyed(p.trust.map((t) => clean({ icon: t.icon, title: t.t, sub: t.s, stars: t.stars })));
  d.inspect = clean({ kicker: p.inspect.kicker, h2: p.inspect.h2, p: p.inspect.p, items: p.inspect.items, cta: p.inspect.cta, images: keyed(p.inspect.imgs.map(([f, a]) => ({ file: f, alt: a }))) });
  if (p.signs) d.signs = clean({ h2: p.signs.h2, p: p.signs.p, items: keyed(p.signs.items.map(([i, t]) => ({ icon: i, text: t }))) });
  if (p.animals) d.animals = { h2Line1: p.animals.h2[0], h2Line2: p.animals.h2[1], list: p.animals.list };
  d.solution = clean({ h2: p.solution.h2, p: p.solution.p, iconCards: p.solution.iconCards, steps: keyed(p.solution.steps.map(([l, t, x]) => ({ label: l, title: t, text: x }))) });
  if (p.why) d.why = clean({ h2: p.why.h2, p: p.why.p, items: keyed(p.why.items.map(([t, x], i) => clean({ title: t, text: x, icon: p.why.icons && p.why.icons[i] }))) });
  if (p.faq) d.faq = clean({ h2: p.faq.h2, p: p.faq.p, items: keyed(p.faq.items.map(([q, a]) => ({ question: q, answer: a }))) });
  if (p.reviews) d.reviews = keyed(p.reviews.map((r) => ({ quote: r.q, name: r.n })));
  if (p.urgency) d.urgency = { h2: p.urgency.h2, p: p.urgency.p, cta: p.urgency.cta };
  d.contact = clean({ p: p.contact.p, label: p.contact.label, areasHeading: p.contact.areasHeading, areas: p.contact.areas, image: p.contact.img, alt: p.contact.alt });
  return clean(d);
}

export function fromDoc(d, fb) {
  const p = { ...fb };
  for (const k of ['host', 'title', 'description', 'tel', 'variant', 'topbar', 'headerLabel']) if (has(d[k])) p[k] = d[k];
  if (p.variant === 'dark') delete p.variant;
  p.noindex = d.noindex !== false;   // noindex unless an editor switches it off on purpose
  const h = d.hero;
  if (h) {
    const f = fb.hero;
    p.hero = { ...f, ...clean({ badge: h.badge, sub: h.sub, note: h.note, img: h.image, alt: h.alt }) };
    if (has(h.h1Line1) && has(h.h1Line2)) p.hero.h1 = [h.h1Line1, h.h1Line2];
    if (has(h.chips)) p.hero.chips = strip(h.chips).map((c) => [c.icon, c.text]);
  }
  if (has(d.trust)) p.trust = strip(d.trust).map((t) => clean({ icon: t.icon, t: t.title, s: t.sub, stars: t.stars }));
  const i = d.inspect;
  if (i) p.inspect = { ...fb.inspect, ...clean({ kicker: i.kicker, h2: i.h2, p: i.p, items: i.items, cta: i.cta }), ...(has(i.images) ? { imgs: strip(i.images).map((x) => [x.file, x.alt]) } : {}) };
  if (d.signs) p.signs = { ...(fb.signs || {}), ...clean({ h2: d.signs.h2, p: d.signs.p }), ...(has(d.signs.items) ? { items: strip(d.signs.items).map((x) => [x.icon, x.text]) } : {}) };
  if (d.animals && fb.animals) p.animals = { h2: has(d.animals.h2Line1) ? [d.animals.h2Line1, d.animals.h2Line2] : fb.animals.h2, list: has(d.animals.list) ? d.animals.list : fb.animals.list };
  if (d.solution) {
    const s = d.solution;
    p.solution = { ...fb.solution, ...clean({ h2: s.h2, p: s.p }), ...(s.iconCards !== undefined ? { iconCards: s.iconCards } : {}), ...(has(s.steps) ? { steps: strip(s.steps).map((x) => [x.label, x.title, x.text]) } : {}) };
  }
  if (d.why && fb.why) {
    const w = d.why, items = has(w.items) ? strip(w.items) : null;
    p.why = { ...fb.why, ...clean({ h2: w.h2, p: w.p }) };
    if (items) { p.why.items = items.map((x) => [x.title, x.text]); if (items.every((x) => x.icon)) p.why.icons = items.map((x) => x.icon); }
  }
  if (d.faq && fb.faq) p.faq = { ...fb.faq, ...clean({ h2: d.faq.h2, p: d.faq.p }), ...(has(d.faq.items) ? { items: strip(d.faq.items).map((x) => [x.question, x.answer]) } : {}) };
  if (has(d.reviews)) p.reviews = strip(d.reviews).map((r) => ({ q: r.quote, n: r.name }));
  if (d.urgency && fb.urgency !== undefined) p.urgency = { ...(fb.urgency || {}), ...clean(d.urgency) };
  if (d.contact) p.contact = { ...fb.contact, ...clean({ p: d.contact.p, label: d.contact.label, areasHeading: d.contact.areasHeading, areas: d.contact.areas, img: d.contact.image, alt: d.contact.alt }) };
  return p;
}

/** Reads the landingPage documents. Never throws: any problem (offline, private dataset, bad data) = built-in content. */
export async function loadPages(fallbackPages) {
  try {
    const token = process.env.SANITY_READ_TOKEN;   // only needed if the dataset is private; set in the host, never in code
    const host = token ? 'api' : 'apicdn';
    const q = encodeURIComponent('*[_type == "landingPage" && !(_id in path("drafts.**"))]');
    const res = await fetch(`https://${PROJECT_ID}.${host}.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${q}&perspective=published`, { headers: token ? { authorization: `Bearer ${token}` } : {}, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`Sanity answered ${res.status}`);
    const docs = (await res.json()).result || [];
    const bySlug = new Map(docs.map((d) => [d.slug, d]));
    let used = 0;
    const pages = fallbackPages.map((fb) => {
      const d = bySlug.get(fb.slug);
      if (!d) return fb;
      try { const p = fromDoc(d, fb); used++; return p; } catch (e) { console.warn(`Sanity doc for ${fb.slug} unusable (${e.message}); using built-in content`); return fb; }
    });
    console.log(`Sanity: ${used} of ${fallbackPages.length} pages read from project ${PROJECT_ID}; the rest use built-in content`);
    return pages;
  } catch (e) {
    console.warn(`Sanity not read (${e.message}); using built-in content`);
    return fallbackPages;
  }
}
