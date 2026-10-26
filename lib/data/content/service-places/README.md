# Animal x place pages (TTR-738)

One page per animal per place, served by Wade's route at `/services/<service>/<place>/`
(for example `/services/raccoon-removal/tampa-fl/`).

Model page: `raccoon-removal/tampa-fl.ts`. Copy its shape, never its words.

## Files

- `lib/data/content/service-places/<service>/<place>.ts`: one page, built with `servicePlacePage()` from `build.ts`.
- `lib/data/service-places.ts`: add one import and one line per page, grouped by place.
- `<service>` is the animal page slug: `rat-removal`, `raccoon-removal`, `squirrel-removal`, `snake-removal`,
  `bat-removal`, `opossum-removal`, `armadillo-removal`, `bee-removal`, `dead-animal-removal`.
- `<place>` is `tampa-fl` for a city and `polk-county-fl` for a county.
- The 9 existing rat-in-city pages in `locations.ts` are the rat pages for those cities. Don't add new ones.

## What every page needs

- An answer of 40 to 60 words that answers the search and ends with (727) 594-7705.
- Six or more local cards. Each card is one true fact about this animal in this place, with its source in `sources`.
  Good sources: FL DOH rabies tables by county and species, county rabies alerts, FWC and SWFWMD land pages,
  county and city park pages, city or county rules on trash, feeding and dead animals on roads, UF/IFAS county
  Extension posts, FWC venomous snake and bat pages, FDACS bee pages. Statewide facts only count when they
  are tied to the place.
- Four to six FAQs. One of them answers "how soon": "Same-day ... are often available in [place]", plus a
  `[PLACEHOLDER: ask the client: ...]` for the typical response time.
- `attic` set when the animal has an attic page (rats, bats, raccoons, squirrels, opossums).
- An SEO title of 60 characters or fewer ("Raccoon Removal in Tampa, FL | Pro Wildlife Removal") and a description of 150 to 155 characters.
- `reviewsIntro` as a placeholder for a real Google review from that place, quoted exactly. Never write a review.

## Facts: read the fine print

- DOH county rabies tables leave out bats found by surveillance testing; they're in the footnotes. Write
  "the county's table listed N" or count the footnote separately, never "N cases" for the table alone.
- Always look for the latest DOH alert for the county (floridahealth.gov uploads, county DOH newsroom) and cite the newest.
- Every card is about this animal in this place. A park or preserve only counts if its own page names the animal.
- Quote the source's wording for anything with a number, a date or a rule; don't round it up or add to it.
- Call the region "Central Florida", never "Tampa Bay" (Kia, Oct 26). "Tampa Bay" only for the bay itself (Old Tampa Bay, "on Tampa Bay").
- Use the newest figures. Tampa's tree canopy numbers come from the 2021 analysis (tampa-utc-2021-hires.pdf: 42% of canopy on residential properties; citywide cover 30.0% in 2021). The 2016 figures (13,956 acres, 50%) are out of date.

## Never

- One company number only: (727) 594-7705. No second company number (no county or city lines). Agency numbers, such as DOH, animal services, code enforcement or a wildlife rehabber, are fine on contact cards.
- No prices or price ranges (Kia, Oct 26): use a "[PLACEHOLDER: ask the client: price range for ...]" block instead. The checker fails on "$" followed by a digit.
- 24-hour calls (Kia, Oct 26): the company takes calls 24 hours a day, but say it quietly, at most once per page, and only inside the "how soon" FAQ answer, e.g. "Pro Wildlife Removal takes calls 24 hours a day; same-day appointments are often available in [place]." Never in the hero, headings, points, CTA, title or description. No "24/7", "round-the-clock" or "after-hours" anywhere.
- No "best", "#1", "guaranteed", superlatives, license, insurance or certification claims, street addresses.
- No promise in the hero or anywhere else (no "so it can't come back", "for good", "never again").
- Same-day: only "Same-day appointments ... are often available in [place]". No times.
- No moles, no ducks.
- No company claims (years, jobs done, response times, warranties) unless confirmed. Use placeholders.
- No sentence reused from another page. If a place has nothing true and local for an animal, skip the page and list it.
- Real job photos only, or leave `image` out.

## Check before you push

```
npm run -s typecheck
npx eslint lib/data/content lib/data/service-places.ts
node --experimental-strip-types --no-warnings scripts/check-content.mjs --quiet
```

The checker must end with `0 problems`. It checks duplicate sentences across every page on the site,
banned words, answer length, SEO lengths and duplicates, and local fact and FAQ counts.
