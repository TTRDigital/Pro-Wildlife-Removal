# Pro Wildlife Removal ad landing pages (Vercel)

Static rebuild of the five Google Ads landing pages that live on Go High Level today:

| Page | Live today | Built file |
|---|---|---|
| Rat | rat.prowildliferemoval.net | public/rat/index.html |
| Bat | bat.prowildliferemoval.net | public/bat/index.html |
| Squirrel | squirrel.prowildliferemoval.net | public/squirrel/index.html |
| Raccoon | raccoon.prowildliferemoval.net | public/raccoon/index.html |
| Wildlife (general) | wildlife.prowildliferemoval.net | public/wildlife/index.html |

No framework, no npm installs. Content lives in `src/content.mjs`; `node src/build.mjs` regenerates the HTML into `public/`.

## Matches the live pages
- Same copy, headings, reviews, FAQs and section order as the live pages on Nov 6 2026.
- Phone: (727) 855-6766 only (the Google Ads number). No other number anywhere.
- Call-only: no forms on the live pages, none here.
- Same Google Tag Manager container: GTM-K458279 (head script + noscript).
- noindex, nofollow (meta + X-Robots-Tag header), like the live pages.

## Deploy
1. Import this folder as a Vercel project (framework: Other). `vercel.json` sets the build command and `public/` as output.
2. Preview: `/rat/`, `/bat/`, `/squirrel/`, `/raccoon/`, `/wildlife/` on the preview URL.
3. Switch (only on Kia's go-ahead): add the five subdomains to the project and point their DNS at Vercel. `vercel.json` rewrites `/` on each subdomain to its page, so ad final URLs stay the same.

## Before switching
- Images were captured from the live pages by screenshot (the originals' file URLs couldn't be read). Swap in the original files from GHL media if available; same filenames in `public/img/`.
- Check in GTM that the Google Ads conversion/call tags fire on the new host, and that any call tracking is inside GTM (couldn't confirm nothing loads outside it on the live pages).

## Dynamic call number (`public/number.js`)
Generic: the page's default number is the first `tel:` link on the page (nothing hard coded). A visitor with `?gclid` gets a pool number from TTR OS; only links and text showing the default number are swapped. Any other page (for example the main site's `/rat-removal-ads/`) only needs `<script src="/number.js" defer></script>` and a copy of the file.

## Content in Sanity (project 5prlo93h, document type `landingPage`)
- Schema: `sanity/schemaTypes/landingPage.ts` (deploy the Studio so editors see it). Document id `landingPage-<slug>`.
- `node src/build.mjs` reads published `landingPage` documents at build time (`SANITY_READ_TOKEN` only if the dataset is private). Anything missing, or any error, falls back to `src/content.mjs`, so the build never breaks. `SKIP_SANITY=1` forces built-in content.
- Seed: `node scripts/seed-sanity.mjs` is a dry run. `--write` needs `SANITY_WRITE_TOKEN`, creates only missing documents (`createIfNotExists`), never overwrites.
- Images stay in `public/img` (documents hold file names). `noindex` defaults on; the `X-Robots-Tag` header in `vercel.json` is separate.
