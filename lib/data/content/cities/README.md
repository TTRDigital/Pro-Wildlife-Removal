# City and county pages: writer brief

City and county pages share one layout, `countyPage()` in `../counties/build.ts`. Every page writes its own words; only the layout is shared. Model pages: `holiday.ts` (city), `../counties/sumter.ts` (county).

## Files

- One file per place: `cities/<city>.ts` (`kind: "city"`) or `counties/<county>.ts` (county is the default kind).
- Register it in `lib/data/locations.ts`: import it, and either replace the old migrated entry (rewrite in place, same `path`) or add it to the list for a new page.
- `path` for an existing page: keep it exactly (the URL doesn't change). For a new page: `about-us/service-area/wildlife-removal-<city>-fl` (county: `wildlife-removal-<county>-county-fl`). The catch-all route serves it; tell Wade so he can check the sitemap and links.
- Add the place's link in `lib/data/content/areas.ts` (the shared areas list) and in its county page's `towns` once the page exists.
- Content files may only import data and helpers by relative path (next.config imports the data).

## What a page needs

- Hero: `heroText` is one or two sentences about the place, ending "Call (727) 594-7705." `eyebrow` like "WILDLIFE REMOVAL IN OCALA".
- `answer`: 40 to 60 words answering `answerHeading` ("Who removes wildlife in X, FL?"). Say who handles what locally (city or county animal services handle pets and strays, not wildlife in your home).
- `points`: 3 short chips: the number plus two checkable facts.
- `towns`: the place and its neighbors. Small communities with no page of their own are named here (Marion: Silver Springs, Summerfield; Hillsborough: Cheval, Keystone, Lake Magdalene, Greater Northdale, New Tampa).
- `local`: 6 or more cards, each one checkable fact about wildlife in or right around this place (parks and preserves, FWC or DOH data, rabies alerts, city trash or code rules), with the source's wording for any number, date or rule. At least 3 must be about the town itself, not only the county. A park card only if the park's own page names the animal.
- `contacts`: who to call for what: city or county animal services, the county DOH office, FWC. Each number from the agency's own page. Agency numbers are fine; the company has one number only.
- `faqs`: 4 to 6. One answers "how soon": "Same-day appointments are often available in X." You may add, once, inside that answer only: "Pro Wildlife Removal takes calls 24 hours a day."
- `seo`: title 60 characters or fewer; description 150 to 155.
- `sources`: every fact, with a title that lists the facts it supports and the date or version. Prefer the newest data and the latest alert. Withdrawn UF/IFAS publications: cite a current page; otherwise title it "(archived)".
- `clientQuestions`: anything only the client can confirm (as `[PLACEHOLDER: ask the client: ...]` blocks in the text, each in its own block).

## Never

- A second company number, prices or price ranges, hours on display, 24/7, round-the-clock or after-hours.
- "Best", "#1", "guaranteed", superlatives (even quoted), license, insurance or certification claims, street addresses.
- Promises of results, "sealed for good", warranties, speed claims other than the same-day line.
- Moles or ducks. Company facts you can't source (make them client questions).
- "Tampa Bay" for the region: say "Central Florida". "Tampa Bay" only for the water.
- A sentence of 8+ words repeated from any other page. Real photos only, or none.

## Check before you push

```
npm run -s typecheck
npx eslint lib/data/content lib/data/locations.ts
node --experimental-strip-types --no-warnings scripts/check-content.mjs --only <path-or-name>
node --experimental-strip-types --no-warnings scripts/check-content.mjs --quiet   # must end "0 problems"
```

Then tell Cole the commit. Cole reviews for style, Ben fact-checks. The four animal pages for a new place (rat, bat, squirrel, raccoon; see `../service-places/README.md`) come after its city page.
