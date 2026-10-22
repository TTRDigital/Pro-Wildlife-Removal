# Pro Wildlife Removal website

Next.js 16 (App Router, static export) + Sanity Studio embedded at `/cms`, Tailwind CSS v4, hosted on **SiteGround** as plain files. Rebuild of the WordPress/Elementor site at https://prowildliferemoval.net, built by TTR Digital Marketing.

- **Design:** the client's new design from the bat-removal page, applied to every page: navy `#0E2A47`, blue `#1E9BF0`, light-blue `#EAF4FC` bands, Inter headings, Open Sans text, 12px cards. Tokens are in `app/globals.css`, section components in `components/sections`.
- **Content:** the live site's own text, photos, FAQs and reviews, at the **same URLs** (every page and post in the old `page-sitemap.xml` and `post-sitemap.xml`). Everything is editable in `/cms`; until Sanity has content (or when a field is empty), the site shows the built-in content from `lib/data`, so it never breaks.
- **Leads:** the inspection form posts to `/api/lead.php` (PHP on SiteGround), which validates it, filters spam and forwards it to a GoHighLevel inbound webhook.

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

`/about-us/service-area/tampa/` is listed in the old sitemap but the live site already 301-redirects it to the Tampa page; `.htaccess` keeps that redirect. Other old links and WordPress leftovers redirect in `public/.htaccess`.

## Setup

1. **Sanity project:** `5prlo93h`, dataset `production` (defaults in `sanity/env.ts`, no env var needed). Add CORS origins in sanity.io/manage > API > CORS origins: `https://prowildliferemoval.net`, `https://www.prowildliferemoval.net` and `http://localhost:3000`, each **with credentials allowed**.
2. **Local env:** copy `.env.example` to `.env.local`.
3. **Load the content into Sanity (once):** create an Editor token (sanity.io/manage > API > Tokens), put it in `.env.local` as `SANITY_WRITE_TOKEN`, then `npm install && npm run seed`. It uploads the photos and writes site settings, 10 pages, 26 services, 43 service areas, 56 posts, 24 reviews and the FAQ library. Running it again only adds missing documents; `npm run seed -- --force` overwrites the CMS with the built-in content, `npm run seed -- --dry-run` checks everything without writing. Delete the token from `.env.local` (and revoke it) when done.
4. **Run:** `npm run dev`, then open http://localhost:3000 and http://localhost:3000/cms.

## Hosting on SiteGround

`npm run build` writes the whole site to `out/` as plain files: HTML pages, `_next/` scripts, `_img/` WebP photos (made by `scripts/optimize-images.mjs`), `api/lead.php` and `.htaccess`. Upload the **contents** of `out/` into the site's `public_html`.

Automatic deploys (`.github/workflows/deploy-siteground.yml`) build and upload over FTPS on every push to `main` (and the current working branch), when Sanity publishes, and from Actions > "Deploy to SiteGround" > Run workflow. Only changed files are uploaded; the upload step is skipped until the FTP secrets exist. Each run keeps the built site as a downloadable artifact. Repository secrets:

| Secret | Value |
|---|---|
| `SG_FTP_SERVER` | FTP host (Site Tools > Site > FTP Accounts > Manage > FTP credentials) |
| `SG_FTP_USERNAME` / `SG_FTP_PASSWORD` | an FTP account whose folder is `prowildliferemoval.net/public_html` |
| `GHL_WEBHOOK_URL` | the GoHighLevel inbound webhook for the form. The workflow writes it to `api/lead-config.php` (never served, see `.htaccess`). Without it, leads are accepted but not sent. |
| `GHL_CHAT_WIDGET_ID` | optional: GoHighLevel chat widget ID. Without it the chat stays hidden. |
| `GTM_ID` | optional: Google Tag Manager container (the old site used `GTM-K458279`) |

**Publish → live:** in sanity.io/manage > API > Webhooks, add a webhook: URL `https://api.github.com/repos/TTRDigital/Pro-Wildlife-Removal/dispatches`, method POST, triggers create/update/delete, projection `{"event_type": "sanity-publish"}`, HTTP headers `Authorization: Bearer <GitHub fine-grained token with Contents: read and write on this repo>` and `Accept: application/vnd.github+json`. Each publish then rebuilds and uploads the site (a few minutes).

In SiteGround, turn on Site Tools > Security > SSL Manager (Let's Encrypt) and HTTPS Enforce. `.htaccess` sends `www.prowildliferemoval.net` to `https://prowildliferemoval.net`, as the old site did.

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
npm run build      # production build (static export to out/)
npm run seed       # load built-in content into Sanity
```

If your shell has another project's `NEXT_PUBLIC_SANITY_PROJECT_ID`, unset it for builds: `env -u NEXT_PUBLIC_SANITY_PROJECT_ID -u NEXT_PUBLIC_SANITY_DATASET npm run build`.

- `lib/data/*`: built-in content (fallbacks and seed source), generated from the live site. `lib/data/images.ts` lists every photo with its alt text.
- `lib/content.ts`: GROQ queries plus the merge over the built-in content (fetched at build time).
- `public/.htaccess`, `public/api/lead.php`: the SiteGround side (redirects, headers, form).
- `components/sections/*`: the design system's sections; `components/sections/Sections.tsx` renders a page's sections.
- `sanity/schemaTypes`: CMS schema.
