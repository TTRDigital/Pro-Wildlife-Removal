# Pro Wildlife Removal website

Next.js 16 (App Router, every page prerendered at build time) + Sanity Studio embedded at `/cms`, Tailwind CSS v4, hosted on **Vercel**. Rebuild of the WordPress/Elementor site at https://prowildliferemoval.net, built by TTR Digital Marketing.

- **Design:** the client's new design from the bat-removal page, applied to every page: navy `#0E2A47`, blue `#1E9BF0`, light-blue `#EAF4FC` bands, Inter headings, Open Sans text, 12px cards. Tokens are in `app/globals.css`, section components in `components/sections`.
- **Content:** the live site's own text, photos, FAQs and reviews, at the **same URLs** (every page and post in the old `page-sitemap.xml` and `post-sitemap.xml`). Everything is editable in `/cms`; until Sanity has content (or when a field is empty), the site shows the built-in content from `lib/data`, so it never breaks.
- **Leads:** the inspection form posts to `/api/lead/` (`app/api/lead/route.ts`, a Vercel function), which validates it, filters spam and forwards it to the GoHighLevel inbound webhook in `GHL_WEBHOOK_URL`.

## Pages

| URL | What |
|---|---|
| `/` | Home |
| `/services/`, `/services/<slug>/` | Services hub and 26 service pages: 9 removal pages (incl. `armadillo-removal-2`, `dead-animal-tampla-fl`), 9 "control" pages, 8 Tampa pages |
| `/about-us/service-area/`, `/about-us/service-area/<slug>/` | Service-area hub and 41 county/city pages, incl. `/about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl/` |
| `/rat-removal-new-port-richey/`, `/rat-removal-trinity/` | Service-area pages at the root, as on the old site |
| `/about-us/`, `/how-we-work/`, `/contact-us/` | |
| `/blog/`, `/blog/<slug>/` | Blog index and 56 posts |
| `/privacy-policy/`, `/terms-of-service/`, `/sitemap/` | Legal pages and the HTML sitemap |
| `/sitemap.xml`, `/robots.txt` | Generated at build time |
| `/cms` | Sanity Studio |

`/about-us/service-area/tampa/` is listed in the old sitemap but the live site already 301-redirects it to the Tampa page; the new site keeps that redirect. Other old links and WordPress leftovers redirect too (`redirects()` in `next.config.ts`, which also sets the security headers and CSP).

## Setup

1. **Sanity project:** `5prlo93h`, dataset `production` (defaults in `sanity/env.ts`, no env var needed). Add CORS origins in sanity.io/manage > API > CORS origins: `https://prowildliferemoval.net`, `https://www.prowildliferemoval.net` and `http://localhost:3000`, each **with credentials allowed**.
2. **Local env:** copy `.env.example` to `.env.local`.
3. **Load the content into Sanity (once):** create an Editor token (sanity.io/manage > API > Tokens), put it in `.env.local` as `SANITY_WRITE_TOKEN`, then `npm install && npm run seed`. It uploads the photos and writes site settings, 10 pages, 26 services, 43 service areas, 56 posts, 24 reviews and the FAQ library. Running it again only adds missing documents; `npm run seed -- --force` overwrites the CMS with the built-in content, `npm run seed -- --dry-run` checks everything without writing. Delete the token from `.env.local` (and revoke it) when done.
4. **Run:** `npm run dev`, then open http://localhost:3000 and http://localhost:3000/cms.

## Hosting on Vercel

1. **Import the repo:** vercel.com > Add New > Project > import `TTRDigital/Pro-Wildlife-Removal`. Framework preset: Next.js (detected), build command `npm run build` (default), Node 22. Production branch: `main` (Settings > Git).
2. **Environment variables** (Settings > Environment Variables, Production and Preview):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://prowildliferemoval.net` |
| `GHL_WEBHOOK_URL` | the GoHighLevel inbound webhook for the form. Without it, leads are accepted but not sent. |
| `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID` | optional: GoHighLevel chat widget ID. Without it the chat stays hidden. |
| `NEXT_PUBLIC_GTM_ID` | optional: Google Tag Manager container (the old site used `GTM-K458279`) |

   The Sanity project ID and dataset are built in (`sanity/env.ts`); don't set them unless you change projects.
3. **Domain:** Settings > Domains > add `prowildliferemoval.net` and `www.prowildliferemoval.net`, with www redirecting to the apex (301). At the DNS host, add the records Vercel shows (normally `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`). Vercel issues the SSL certificate automatically.
4. **Sanity CORS:** sanity.io/manage > API > CORS origins: add `https://prowildliferemoval.net`, `https://www.prowildliferemoval.net`, the Vercel project URL (e.g. `https://pro-wildlife-removal.vercel.app`) and `http://localhost:3000`, each with credentials allowed.
5. **Publish → live:** Vercel > Settings > Git > Deploy Hooks: create one for `main`. In sanity.io/manage > API > Webhooks, add a webhook with that URL, method POST, triggers create/update/delete, dataset `production`. Each publish then rebuilds the site (a few minutes).

## Editing in /cms

- **Site settings:** phone, email, address, hours, county phone lines (the "Locations" menu), social links, header button, default call-to-action band, license line (hidden while it says `[PLACEHOLDER]`).
- **Pages:** Home, Services, Service area, About, How we work, Contact, Blog, Privacy, Terms, Sitemap. Each page is a header plus a stack of sections (photo + text, cards, text, FAQ, reviews, areas list, call-to-action band, contact details, services grid, service-areas grid, latest posts).
- **Services / Service areas / Blog posts / Reviews / FAQs:** collections. FAQ sections pick questions from the FAQ library, so one answer can be reused on several pages.
- Do not change a page's URL (slug / path) after launch; that would break its Google ranking.

## Development

```bash
npm run dev        # local site
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # production build
npm run start      # serve the production build locally
npm run seed       # load built-in content into Sanity
```

If your shell has another project's `NEXT_PUBLIC_SANITY_PROJECT_ID`, unset it for builds: `env -u NEXT_PUBLIC_SANITY_PROJECT_ID -u NEXT_PUBLIC_SANITY_DATASET npm run build`.

- `lib/data/*`: built-in content (fallbacks and seed source), generated from the live site. `lib/data/images.ts` lists every photo with its alt text.
- `lib/content.ts`: GROQ queries plus the merge over the built-in content (fetched at build time).
- `next.config.ts`: redirects of old URLs, security headers and CSP. `app/api/lead/route.ts`: the form handler.
- `components/sections/*`: the design system's sections; `components/sections/Sections.tsx` renders a page's sections.
- `sanity/schemaTypes`: CMS schema.
