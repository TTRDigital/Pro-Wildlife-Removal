import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Ben's plan, #5): found a baby raccoon in Florida? What to do, and why you can't keep it. Sources: FWC injured/orphaned and captive wildlife pages, UF/IFAS UW033, Florida DOH rabies. */
const FWC_INJ = "https://myfwc.com/conservation/you-conserve/wildlife/injured-orphaned/";
const FWC_PET = "https://myfwc.com/license/captive-wildlife/personal-pet/";
const UW033 = "https://ask.ifas.ufl.edu/publication/UW033";
const DOH = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";

export const foundABabyRaccoon: Post = {
  slug: "found-a-baby-raccoon-florida",
  title: "Found a Baby Raccoon in Florida? What to Do, and Why You Can't Keep It",
  excerpt:
    "A baby raccoon on its own usually isn't an orphan. Here's what FWC says to do, when to call a wildlife rehabilitator, why Florida law won't let you raise it, and what to do if the family is in your attic.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** leave it alone and watch from a distance. FWC says baby animals are rarely orphaned; the mother is often nearby. If it's hurt or clearly abandoned, call a wildlife rehabilitator. You can't keep it: Florida never allows injured, orphaned or abandoned native animals as pets. Family in your attic? Call (727) 594-7705.",
    ),
    h3("Is it really an orphan?"),
    p(
      `FWC says that, generally, a baby animal found on its own should be left alone. Animals are rarely actually orphaned: the parent may be searching for food or watching from a distance. It asks people not to pick up baby animals or take them out of their surroundings ([FWC](${FWC_INJ})).`,
    ),
    p(
      `Timing helps. UF/IFAS says Florida raccoon litters are generally born in March and April, with three or four young on average ([UF/IFAS](${UW033})). A young raccoon seen in spring or early summer often has a mother close by.`,
    ),
    h3("When to call for help"),
    ul(
      `**It's injured,** visibly sick, or in immediate danger, such as in a road or with a pet.`,
      `**You know the mother is dead,** or you're not sure. A wildlife rehabilitator can tell you whether to step in.`,
      `**Who to call:** FWC says to note where the animal is and contact a wildlife rehabilitator in your area, or the FWC regional office if you can't reach one. FWC keeps a list of permitted rehabilitators by county ([FWC](${FWC_INJ})).`,
    ),
    h3("Why you can't keep it"),
    p(
      `Florida law doesn't allow it. FWC says injured, orphaned or abandoned native animals are never eligible to be kept as personal pets in Florida, and pet permits are only issued for animals from a legal source ([FWC](${FWC_PET})). FWC also says keeping injured or orphaned wildlife longer than it takes to get it to a rehabilitator is a violation of Florida law, and caring for wildlife needs an FWC rehabilitation permit ([FWC](${FWC_INJ})).`,
    ),
    h3("Don't touch it bare-handed"),
    p(
      `Florida DOH names raccoons and bats as the main wildlife sources of rabies in Florida, usually spread through bites ([Florida DOH](${DOH})). Even a small raccoon can bite or scratch. If anyone is bitten or scratched, wash the wound with soap and water and call your doctor and county health department.`,
    ),
    h3("If the family is in your attic or under your house"),
    p(
      "A mother raccoon may raise her kits in an attic or under a house. The young have to come out with the mother, not be left behind or sealed in, and the opening is closed after. Our guides to [raccoons in the attic](/services/raccoons-in-attic/), [raccoon mating season in Florida](/blog/raccoon-mating-season-in-florida/) and [raccoon trapping rules](/blog/raccoon-trapping-florida/) explain how that works. See also [raccoon removal](/services/raccoon-removal/), or call (727) 594-7705.",
    ),
  ),
  faq: [
    faq(
      "What do I do if I find a baby raccoon alone?",
      "Leave it where it is and watch from a distance. FWC says baby animals are rarely orphaned and the mother is often nearby. Call a wildlife rehabilitator only if it's hurt or clearly abandoned.",
    ),
    faq(
      "Can I keep a baby raccoon as a pet in Florida?",
      "No. FWC says injured, orphaned or abandoned native animals are never eligible to be kept as personal pets in Florida.",
    ),
    faq(
      "Who takes orphaned raccoons in Florida?",
      "Wildlife rehabilitators with an FWC permit. FWC lists them by county on its injured and orphaned wildlife page, and its regional offices can help if you can't reach one.",
    ),
    faq(
      "When are baby raccoons born in Florida?",
      "UF/IFAS says Florida raccoon litters are generally born in March and April, with three or four young on average.",
    ),
  ],
  seo: {
    title: "Found a Baby Raccoon in Florida? What to Do",
    description:
      "Found a baby raccoon in Florida? Why it's rarely an orphan, when to call a wildlife rehabber, why you can't keep it, and what to do if it's in the attic.",
  },
  sources: [
    { title: "FWC: Injured and orphaned wildlife (leave baby animals alone; rarely orphaned; don't pick them up; contact a wildlife rehabilitator or FWC regional office; county list; keeping wildlife beyond transport is illegal; rehabilitation permit required)", url: FWC_INJ },
    { title: "FWC: Captive wildlife, personal pets (injured, orphaned or abandoned native animals never eligible as personal pets; permits only for animals from a legal source)", url: FWC_PET },
    { title: "UF/IFAS EDIS UW033: Northern raccoon (litters generally born in March and April in Florida; average 3 to 4 young)", url: UW033 },
    { title: "Florida DOH: Rabies (main wildlife sources in Florida are raccoons and bats; typically spread through bites)", url: DOH },
  ],
  clientQuestions: [],
};
