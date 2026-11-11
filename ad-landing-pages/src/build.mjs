// Builds static landing pages into public/<slug>/index.html. No dependencies.
// Run: node src/build.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, site } from './content.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const P = {
  phone: '<path fill="currentColor" stroke="none" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  star: '<polygon fill="currentColor" stroke="none" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  circle: '<circle cx="12" cy="12" r="10"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
};
const icon = (n, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const stars = (cls = 'stars') => `<span class="${cls}" aria-label="5 stars">${icon('star').repeat(5)}</span>`;
const img = (src, alt, cls = '', eager = false, w, h) =>
  `<img src="/img/${src}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${w ? ` width="${w}" height="${h}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

function render(pg) {
  const tel = pg.tel;
  const callBtn = (label = site.phone, cls = 'btn') => `<a class="${cls}" href="${tel}">${icon('phone')}<span>${esc(label)}</span></a>`;
  const light = pg.variant === 'light';
  const s = [];

  s.push(`<header class="hdr"><div class="wrap hdr-in">
<img src="/img/logo.png" alt="Pro Wildlife Removal Logo" class="logo" width="88" height="80">
<span class="hdr-label">${esc(pg.topbar)}</span>
<a class="tel-pill" href="${tel}"><span class="tel-ic">${icon('phone')}</span><span class="tel-tx"><small>${esc(pg.headerLabel)}</small><b>${esc(site.phone)}</b></span></a>
</div></header>`);

  const h = pg.hero;
  s.push(`<section class="hero" style="background-image:url(/img/${h.img})" role="img" aria-label="${esc(h.alt)}"><div class="wrap hero-in">
<div class="hero-copy">
<span class="eyebrow">${esc(h.badge)}</span>
<h1><span class="hl">${esc(h.h1[0])}</span> ${esc(h.h1[1])}</h1>
<p class="lead">${esc(h.sub)}</p>
<div class="hero-cta">${callBtn(site.phone, 'btn btn-lg')}${h.note ? `<p class="note">${esc(h.note)}</p>` : ''}</div>
${h.chips ? `<div class="chips">${h.chips.map(([i, t]) => `<span>${icon(i)}${esc(t)}</span>`).join('')}</div>` : ''}
</div>
</div></section>`);

  s.push(`<section class="trust"><div class="wrap trust-in n${pg.trust.length}">${pg.trust.map((t) => `<div class="trust-i">${icon(t.icon, 'ic ' + (t.icon === 'star' ? 'gold' : 'blue'))}<strong>${esc(t.t)}</strong>${t.stars ? '<small class="gold">★★★★★</small>' : t.s ? `<small>${esc(t.s)}</small>` : ''}</div>`).join('')}</div></section>`);

  const ins = pg.inspect;
  s.push(`<section class="sec inspect"><div class="wrap inspect-in">
<div class="inspect-imgs n${ins.imgs.length}">${ins.imgs.map(([f, a]) => img(f, a)).join('')}</div>
<div class="inspect-copy"><span class="kicker">${esc(ins.kicker)}</span><h2>${esc(ins.h2)}</h2><p>${esc(ins.p)}</p>
<ul class="checks">${ins.items.map((i) => `<li>${icon('check')}<span>${esc(i)}</span></li>`).join('')}</ul>
${callBtn(ins.cta, 'btn')}</div>
</div></section>`);

  if (pg.signs) {
    s.push(`<section class="sec alt"><div class="wrap center"><h2>${esc(pg.signs.h2)}</h2><p class="sub">${esc(pg.signs.p)}</p>
<div class="grid3 signs">${pg.signs.items.map(([i, t]) => `<div class="card sign">${icon(i, 'ic blue lg')}<p>${esc(t)}</p></div>`).join('')}</div>
${callBtn()}</div></section>`);
  }

  if (pg.animals) {
    s.push(`<section class="sec alt"><div class="wrap center"><h2>${esc(pg.animals.h2[0])} <span class="hl">${esc(pg.animals.h2[1])}</span></h2>
<div class="animals">${pg.animals.list.map((a) => `<figure class="animal">${img('animal-' + a.toLowerCase() + '.jpg', a)}<figcaption>${esc(a)}</figcaption></figure>`).join('')}</div>
${callBtn()}</div></section>`);
  }

  const so = pg.solution;
  s.push(`<section class="sec"><div class="wrap center"><h2>${esc(so.h2)}</h2>${so.p ? `<p class="sub">${esc(so.p)}</p>` : ''}
<div class="grid3 steps">${so.steps.map(([a, t, d]) => `<div class="card step">${so.iconCards ? `<span class="step-ic">${icon(a, 'ic')}</span>` : `<span class="num">${esc(a)}</span>`}<h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section>`);

  if (pg.why) {
    s.push(`<section class="sec alt"><div class="wrap center"><h2>${esc(pg.why.h2)}</h2>${pg.why.p ? `<p class="sub">${esc(pg.why.p)}</p>` : ''}
<div class="grid3 why">${pg.why.items.map(([t, d], i) => `<div class="card whyc">${pg.why.icons ? `<span class="step-ic">${icon(pg.why.icons[i], 'ic')}</span>` : `<span class="emoji" aria-hidden="true">${site.whyEmoji[i]}</span>`}<h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div></div></section>`);
  }

  if (pg.faq) {
    s.push(`<section class="sec"><div class="wrap narrow"><div class="center"><h2>${esc(pg.faq.h2)}</h2><p class="sub">${esc(pg.faq.p)}</p></div>
<div class="faq">${pg.faq.items.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}${icon('chevron')}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>`);
  }

  if (pg.reviews) {
    s.push(`<section class="sec dark"><div class="wrap reviews-in">
<div class="reviews-head"><h2>What Our Clients Say</h2></div>
<div class="reviews">${pg.reviews.map((r) => `<figure class="review">${stars()}<blockquote>"${esc(r.q)}"</blockquote><figcaption><i>${esc(r.n[0])}</i>${esc(r.n)}</figcaption></figure>`).join('')}</div>
</div></section>`);
  }

  if (pg.urgency) {
    s.push(`<section class="sec urgency"><div class="wrap center"><h2>${esc(pg.urgency.h2)}</h2><p class="sub">${esc(pg.urgency.p)}</p>${callBtn(pg.urgency.cta, 'btn btn-lg')}</div></section>`);
  }

  const c = pg.contact;
  s.push(`<section class="sec alt"><div class="wrap contact-in">
<div class="card contact-card"><h2>Need Help? <span class="hl">Reach Out to Us!</span></h2><p>${esc(c.p)}</p>
<a class="call-row" href="${tel}"><span class="call-ic">${icon('phone')}</span><span><small>${esc(c.label)}</small><b>${esc(site.phone)}</b></span></a>
<div class="areas"><small>${esc(c.areasHeading || 'Service Areas')}</small><p>${esc(c.areas)}</p></div></div>
<div class="contact-img">${img(c.img, c.alt)}</div>
</div></section>
<footer class="ftr"><div class="wrap center"><img src="/img/logo.png" alt="Pro Wildlife Removal Logo" class="logo" width="66" height="60" loading="lazy">
<p class="ftr-name">Pro Wildlife Removal</p><p>${esc(site.address)}</p><p>${esc(site.phone)}</p><p><a href="/privacy/">Privacy Policy</a></p><hr><p class="copy">© 2026 Pro Wildlife Removal. All Rights Reserved.</p></div></footer>`);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pg.title)}</title>
<meta name="description" content="${esc(pg.description)}">
<meta name="robots" content="noindex, nofollow">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(pg.title)}">
<meta property="og:description" content="${esc(pg.description)}">
<meta property="og:image" content="/img/${pg.hero.img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0E2A47">
<link rel="icon" href="/img/logo.png">
<!-- Google Tag Manager (same container as the live GHL pages) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtm}');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap">
<link rel="preload" as="image" href="/img/${pg.hero.img}" fetchpriority="high">
<link rel="stylesheet" href="/styles.css">
</head>
<body class="pg-${pg.slug}">
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${site.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
${s.join('\n')}
<script src="/number.js" defer></script>
</body>
</html>
`;
}

for (const pg of pages) {
  const out = join(root, 'public', pg.slug, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(pg));
  console.log('built', pg.slug);
}

// Privacy policy (Google Ads asks for one on landing pages; Kia approved Nov 11 2026). Plain words, no tracking on this page.
const privacy = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Privacy Policy | Pro Wildlife Removal</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="/img/logo.png">
<link rel="stylesheet" href="/styles.css">
<style>.pp{max-width:760px;margin:0 auto;padding:32px 20px 48px;font:16px/1.65 'Open Sans',Arial,sans-serif;color:#1b2430}.pp h1{font:800 30px/1.2 Inter,Arial,sans-serif;margin:8px 0 6px}.pp h2{font:700 19px/1.3 Inter,Arial,sans-serif;margin:28px 0 6px}.pp small{color:#5a6573}.pp a{color:#0E2A47}</style>
</head>
<body>
<main class="pp">
<p><a href="javascript:history.back()">&larr; Back</a></p>
<h1>Privacy Policy</h1>
<p><small>Pro Wildlife Removal &middot; Last updated November 11, 2026</small></p>
<p>This page explains what information Pro Wildlife Removal ("we", "us") collects when you visit our website or call us, and what we do with it. It applies to this website and to the phone number shown on it.</p>
<h2>Who we are</h2>
<p>Pro Wildlife Removal, ${esc(site.address)}. Phone: ${esc(site.phone)}.</p>
<h2>What we collect</h2>
<ul>
<li><b>When you call us:</b> your phone number, the date and time of the call, how long it lasted, and what you tell us so we can book and perform the work. Calls to the number on this website may be recorded and transcribed for quality, training and to keep an accurate record of the job. You will hear a notice at the start of the call.</li>
<li><b>When you visit this website:</b> basic technical information such as the pages you view, your device and browser type, the approximate area you are in, and the ad or search that brought you here. We collect this with cookies and similar tools from Google (Google Tag Manager and Google Ads).</li>
</ul>
<p>This website does not have a contact form, and we do not ask for payment details here.</p>
<h2>How we use it</h2>
<ul>
<li>To answer your call, schedule an inspection, give you a quote and do the work.</li>
<li>To keep records of our jobs and follow up about your service.</li>
<li>To measure whether our advertising works and to improve our website and service.</li>
</ul>
<h2>Who we share it with</h2>
<p>We do not sell your personal information. We share it only with companies that help us run the business, such as our phone and call-recording provider, our customer-records and scheduling tools, and Google for advertising measurement. They may use it only to provide those services to us. We may also share it if the law requires.</p>
<h2>Cookies and advertising</h2>
<p>Cookies are small files your browser stores. We use them to measure visits and ad results. You can block or delete cookies in your browser settings, and you can control how Google uses data for ads at <a href="https://adssettings.google.com">adssettings.google.com</a>.</p>
<h2>How long we keep it</h2>
<p>We keep call and job records for as long as we need them to serve you and to keep our business records, and then delete or anonymize them.</p>
<h2>Your choices</h2>
<p>You can ask us what information we hold about you, ask us to correct it, or ask us to delete it, by calling ${esc(site.phone)} or writing to the address above. This website is not meant for children under 13 and we do not knowingly collect their information.</p>
<h2>Changes</h2>
<p>If we change this policy we will post the new version on this page and update the date at the top.</p>
</main>
<footer class="ftr"><div class="wrap center"><p class="ftr-name">Pro Wildlife Removal</p><p>${esc(site.address)}</p><p>${esc(site.phone)}</p><hr><p class="copy">© 2026 Pro Wildlife Removal. All Rights Reserved.</p></div></footer>
</body>
</html>`;
mkdirSync(join(root, 'public', 'privacy'), { recursive: true });
writeFileSync(join(root, 'public', 'privacy', 'index.html'), privacy);
console.log('built privacy');

// Simple index for preview deployments: links to each page. Lives at /pages-index/ so that
// "/" has no static file and the host rewrites in vercel.json decide what "/" shows.
mkdirSync(join(root, 'public', 'pages-index'), { recursive: true });
writeFileSync(join(root, 'public', 'pages-index', 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Pro Wildlife Removal landing pages</title><link rel="stylesheet" href="/styles.css"></head><body><main class="wrap sec"><h2>Pro Wildlife Removal landing pages</h2><ul class="idx">${pages.map((p) => `<li><a href="/${p.slug}/">${p.slug}</a> → ${p.host}</li>`).join('')}</ul></main></body></html>\n`);
console.log('built index');
