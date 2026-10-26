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

## Never

- One phone number only: (727) 594-7705. No county lines.
- No 24/7, hours, prices, "best", "#1", "guaranteed", license or certification claims, street addresses.
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
