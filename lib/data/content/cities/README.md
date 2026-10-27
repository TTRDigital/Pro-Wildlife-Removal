# City and county pages: writer brief

City and county pages share one layout, `countyPage()` in `../counties/build.ts`. Every page writes its own words; only the layout is shared. Model pages: `holiday.ts` (city), `../counties/polk.ts` (county).

## Files

- One file per place: `cities/<city>.ts` (`kind: "city"`) or `counties/<county>.ts` (county is the default kind).
- Register it in `lib/data/locations.ts`: import it, and either replace the old migrated entry (rewrite in place, same `path`) or add it to the list for a new page.
- `path` for an existing page: keep it exactly (the URL doesn't change). For a new page: `about-us/service-area/wildlife-removal-<city>-fl` (county: `wildlife-removal-<county>-county-fl`). The catch-all route serves it; tell Wade so he can check the sitemap and links.
- Add the place's link in `lib/data/content/areas.ts` (the shared areas list) and in its county page's `towns` once the page exists.
- Content files may only import data and helpers by relative path (next.config imports the data).

## What a page needs

- Hero: `heroText` is one or two sentences about the place, ending "Call (844) 264-6254." `eyebrow` like "WILDLIFE REMOVAL IN OCALA".
- `answer`: 40 to 60 words answering `answerHeading` ("Who removes wildlife in X, FL?"). Say who handles what locally (city or county animal services handle pets and strays, not wildlife in your home).
- `points`: 3 short chips: the number plus two checkable facts.
- `towns`: the place and its neighbors, linked once their pages exist. A place that can't reach the bar is named here and in areas.ts as plain text.
- `local`: 6 or more cards, each one checkable fact about wildlife in or right around this place (parks and preserves, FWC or DOH data, rabies alerts, city trash or code rules), with the source's wording for any number, date or rule. At least 3 must be about the town itself, not only the county. A park card only if the park's own page names the animal.
- A fact must show the animal as a local problem or rule (Ben, Oct 26): a rabies alert or table, a code or ordinance, a closure record, news of one in a home or business, or an agency document naming it a nuisance. Sightings and reader photos of animals outdoors, museum specimens, iNaturalist records and fox squirrel conservation lines don't count.
- Facts that count toward the bar must be about rats, bats, squirrels or raccoons, or about wildlife rules that name them (Ben, Oct 26). Bears, bobcats, snakes, macaques and other animals don't count and shouldn't be cards. A single FWC contact line for bears is fine. We don't handle bears.
- `contacts`: who to call for what: city or county animal services, the county DOH office, FWC. Each number from the agency's own page. Agency numbers are fine; the company has one number only.
- `faqs`: 4 to 6. One answers "how soon": "Same-day appointments are often available in X." You may add, once, inside that answer only: "Pro Wildlife Removal takes calls 24 hours a day."
- `seo`: title 60 characters or fewer; description 150 to 155.
- `sources`: every fact, with a title that lists the facts it supports and the date or version. Prefer the newest data and the latest alert. Withdrawn UF/IFAS publications: cite a current page; otherwise title it "(archived)".
- `clientQuestions`: anything only the client can confirm (as `[PLACEHOLDER: ask the client: ...]` blocks in the text, each in its own block).

## Communities we serve (county pages)

Kia, Oct 26: Google Ads communities too small for their own page (fewer than 6 distinct four-animal facts) get a short section on their county page instead, so there are no thin doorway pages.

- On the county page, add `communities: [{ name: "Lutz", text: ["First sentence.", "Second sentence."] }, ...]` (and optionally `communitiesIntro`). `countyPage()` renders it as a "Communities we serve in <county>" section after the local cards, with an H3 per community. Each string in `text` becomes its own paragraph.
- Under each H3, 2 to 4 sentences of sourced facts about rats, bats, squirrels or raccoons in that community (DOH alerts that name it, county code or trash rules that apply there, a park whose own page names the animal). Each community written differently: no shared sentence frames.
- Their sources go in the county page's `sources` list.
- No animal pages for these communities. They stay named in `towns` and in areas.ts as plain text.
- Current list: Hillsborough (Owen): Carrollwood, Town 'n' Country, Lutz, Westchase, Citrus Park, Cheval, Keystone, Lake Magdalene, Greater Northdale; plus New Tampa and Temple Terrace (Rhea) if they can't reach a full page. Marion (Nia): Belleview, Summerfield.

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
