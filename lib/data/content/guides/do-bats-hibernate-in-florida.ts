import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Ben's plan, #3): do bats hibernate in Florida? What bats do in winter, and what that means for exclusion. No species-level winter behavior claims: no official Florida source gives them. */
const UW548 = "https://ask.ifas.ufl.edu/publication/UW548";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const TAMPA = "https://www.tampa.gov/art-programs/Riverfront-Park";

export const doBatsHibernateInFlorida: Post = {
  slug: "do-bats-hibernate-in-florida",
  title: "Do Bats Hibernate in Florida? What Bats Do in Winter",
  excerpt:
    "Florida's bats don't disappear for the winter. Here's what UF/IFAS and FWC say about bats in the cooler months, why fall and winter are exclusion season, and why a cold snap can pause the work.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** not the way bats up north do. UF/IFAS says bats are active year-round in Florida. That's why fall and winter are the season to get them out of a house, as long as the nights are warm enough: FWC requires overnight lows of 50°F or warmer during an exclusion. Call (727) 594-7705.",
    ),
    h3("Florida bats in winter"),
    p(
      `UF/IFAS counts 13 bat species in Florida and says they're active year-round ([UF/IFAS](${UW548})). In Tampa, the city says the Brazilian free-tailed bat, a common bat in the area, stays active all year ([City of Tampa](${TAMPA})). So a colony in your attic in July may well still be there in January.`,
    ),
    h3("Why winter is exclusion season"),
    p(
      `Florida law protects bats while they raise their young. FWC bans exclusion from April 16 to August 14, and allows it from August 15 to April 15 ([FWC](${FWC_BATS})). UF/IFAS recommends fall and winter for a bat exclusion in Florida. During the spring and summer pup season, young bats that can't fly yet would be trapped inside and die, and the decay can draw pests such as cockroaches ([UF/IFAS](${UW548})).`,
    ),
    h3("What a cold snap does to the work"),
    ul(
      `**FWC's temperature rule:** one-way exclusion devices stay up for at least four nights in a row with overnight lows forecast at 50°F or above ([FWC](${FWC_BATS})).`,
      `**Bats stay in when it's cold.** FWC says bats tend not to leave their roost on windy, cold or rainy nights, and recommends leaving the exclusion devices up for extra nights when that happens. FWC also notes bats can cut back their activity in cool weather and stay in the roost for several days ([FWC](${FWC_BATS})).`,
      "**Plan around the forecast.** In a Florida winter, that usually means waiting out a cold front and starting the count again on the warm nights after it.",
    ),
    h3("What not to do in winter"),
    ul(
      "**Don't seal holes while bats are inside,** even if you haven't seen them in a while. They're likely still roosting, and sealed-in bats die in the walls or attic.",
      "**Don't use ultrasonic devices or repellents.** UF/IFAS says ultrasonic devices don't repel bats.",
      "**Don't wait until spring.** Exclusion closes on April 15 and doesn't open again until August 15.",
    ),
    p(
      "More on the rules in [Florida bat laws](/blog/florida-bat-laws-homeowner-guide/) and [bat maternity season](/blog/bat-maternity-season-guide/), and on tile roofs in [bats under barrel tile roofs](/blog/bats-in-barrel-tile-roof-florida/). See also [bat removal](/services/bat-removal/) and [bats in the attic](/services/bats-in-attic/).",
    ),
  ),
  faq: [
    faq(
      "Do bats go away in the winter in Florida?",
      "Usually not. UF/IFAS says Florida's bats are active year-round, so a colony in the attic generally stays through the cooler months.",
    ),
    faq(
      "Can bats be removed from a house in winter?",
      "Yes. FWC allows exclusion from August 15 to April 15, and UF/IFAS recommends fall and winter. Devices have to stay up four nights with lows of 50°F or warmer.",
    ),
    faq(
      "Why does cold weather delay bat exclusion?",
      "Bats tend not to leave their roost on windy, cold or rainy nights, FWC says, so it recommends leaving the devices up for extra nights when the weather turns.",
    ),
    faq(
      "Is it too late to deal with bats after spring arrives?",
      "FWC bans exclusion from April 16 to August 14, the maternity season, so after April 15 it can't start again until August 15. That's why winter is the time to act.",
    ),
  ],
  seo: {
    title: "Do Bats Hibernate in Florida? | Pro Wildlife Removal",
    description:
      "Do bats hibernate in Florida? UF/IFAS says bats stay active year-round. Why fall and winter are exclusion season, the 50°F rule, and what cold snaps do.",
  },
  sources: [
    { title: "UF/IFAS EDIS UW548: Has Your House Gone Batty? Facts about Bats (13 species; active year-round in Florida; exclusion recommended in fall and winter; pup season: flightless young sealed in die, decay attracts pests such as cockroaches; ultrasonic devices don't repel bats)", url: UW548 },
    { title: "FWC: Bats in buildings (maternity season April 16 to August 14; exclusion August 15 to April 15; four nights in a row; lows forecast at 50°F or warmer; bats tend not to leave on windy, cold or rainy nights, leave devices up extra nights; bats may stay in the roost several days in cool weather)", url: FWC_BATS },
    { title: "City of Tampa: Julian B. Lane Riverfront Park art (Brazilian free-tailed bats most common in the area, active year-round)", url: TAMPA },
  ],
  clientQuestions: [],
};
