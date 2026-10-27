import type { Post } from "../../../types";
import { faq, h3, p, rich, table, ul } from "../pt.ts";

/* Guide (Ben's pick, Oct 26): do bats in Florida carry rabies? DOH tables as rows only (surveillance bats are footnotes, said so); CDC contact guidance as the page words it. No sleeping-person line (not on the CDC page). Never call bats "top". */
const DOH = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const DOH2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const CDC = "https://www.cdc.gov/rabies/prevention/bats.html";
const FWC = "https://myfwc.com/conservation/you-conserve/wildlife/bats/";
const FWCB = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";

export const doBatsCarryRabiesFlorida: Post = {
  slug: "do-bats-carry-rabies-florida",
  title: "Do Bats in Florida Carry Rabies? What the State's Numbers Show",
  excerpt:
    "Only a small share of bats have rabies, but some do, and Florida confirms dozens of rabid bats a year. Here's what Florida DOH's tables show, what FWC and the CDC say, and what to do after any contact.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** some do. Florida DOH names raccoons and bats as the main wildlife sources of rabies in the state, and its tables list dozens of rabid bats a year. FWC says only a very small share of bats have it. Never handle a bat, and if one may have touched anyone, call your county health department. Call (844) 264-6254 for bats in the house.",
    ),
    h3("What the state's tables show"),
    table(
      ["Year", "Rabid bats (DOH state total)", "Rabid raccoons (DOH state total)"],
      ["2024", "30", "49"],
      ["2025", "42", "43"],
    ),
    p(
      `These counts come from Florida DOH's confirmed rabid animals by county, January 1 to December 31 of each year ([DOH 2024](${DOH2024}), [DOH 2025](${DOH2025})). Bats found through surveillance testing aren't in these totals; each table notes them in a footnote. DOH's 2024 state total row lists 30 bats and 49 raccoons; its county rows add up to 29 and 50. In our area, Hillsborough's 2025 table listed four rabid bats among six rabid animals.`,
    ),
    h3("Why the numbers aren't the whole picture"),
    p(
      `Apart from the footnoted surveillance animals, DOH says every animal in these tables potentially exposed people or owned or domestic animals, so they don't show how many bats in Florida carry rabies. FWC puts the share very low: perhaps one among every few hundred bats across Florida's bat populations ([FWC](${FWC})). Florida DOH still names bats, with raccoons, as the main wildlife sources, usually spread through bites ([Florida DOH](${DOH})).`,
    ),
    h3("What the CDC says to do"),
    ul(
      `**Avoid touching bats.** The CDC notes bat bites can be tiny, and you may not even know if you were bitten ([CDC](${CDC})).`,
      "**If you know you were bitten or scratched,** wash the wound with soap and water and get medical help right away.",
      "**If you think you've had contact with a bat,** talk to your health department.",
      "**If you find a bat in your home,** contact animal control or your health department to safely capture it for rabies testing, and don't release the bat until you've talked with a public health expert.",
    ),
    h3("Bats living in the house"),
    p(
      "A colony in the attic is a reason to keep bats and people apart, not to panic. It's illegal to kill bats in Florida, so FWC points to exclusion, and FWC says exclusion is illegal during maternity season, April 16 to August 14 ([FWC](${FWCB})). See [who to call about a bat](/blog/who-to-call-for-bat-removal/), [Florida bat laws](/blog/florida-bat-laws-homeowner-guide/) and [bat removal](/services/bat-removal/), or call (844) 264-6254.",
    ),
  ),
  faq: [
    faq(
      "Do all bats in Florida have rabies?",
      "No. FWC says only a very small share of bats have rabies, perhaps one among every few hundred. But because any bat could, the CDC says to avoid touching them.",
    ),
    faq(
      "How many rabid bats does Florida find a year?",
      "Florida DOH's tables listed about 30 rabid bats in 2024 and 42 in 2025, not counting bats found through surveillance testing, which are footnoted separately.",
    ),
    faq(
      "What should I do if a bat touched me?",
      "Wash any bite or scratch with soap and water and get medical help right away. The CDC says to talk to your health department, and not to release the bat until you've talked with a public health expert.",
    ),
    faq(
      "Can I get rabies from bat droppings?",
      "Florida DOH says rabies is usually spread through bites. Bat droppings carry other risks, so don't sweep them up dry; see our [bat guano cleanup guide](/blog/bat-guano-cleanup-complete-guide/).",
    ),
  ],
  seo: {
    title: "Do Bats in Florida Carry Rabies? | Pro Wildlife Removal",
    description:
      "Do bats in Florida carry rabies? What Florida DOH's rabies tables show for 2024 and 2025, what FWC and the CDC say, and what to do after any bat contact.",
  },
  sources: [
    { title: "Florida DOH: Rabies (main wildlife sources in Florida are raccoons and bats; typically spread through bites)", url: DOH },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024 (state total row: 30 bats, 49 raccoons; county rows sum to 29 and 50; surveillance bats footnoted, not in the table; other results potentially exposed humans or owned or domesticated animals)", url: DOH2024 },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (state table: 42 bats, 43 raccoons; Hillsborough: 4 bats of 6 rabid animals; surveillance bats footnoted)", url: DOH2025 },
    { title: "FWC: Bats (rabies affects a very small portion of bats, perhaps one among every few hundred bats across Florida's bat populations)", url: FWC },
    { title: "FWC: Bats in buildings (illegal to kill bats; exclusion; exclusion illegal during maternity season, April 16 to August 14)", url: FWCB },
    { title: "CDC: Preventing rabies from bats (avoid touching bats; bites can be tiny; wash wounds and get medical help; talk to your health department; contact animal control or the health department to capture a bat found in the home for testing; don't release it until you talk with a public health expert)", url: CDC },
  ],
  clientQuestions: [],
};
