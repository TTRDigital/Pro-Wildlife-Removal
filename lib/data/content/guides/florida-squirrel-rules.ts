import type { Post } from "../../../types";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Ben's plan, #4): can you kill or trap a squirrel in Florida? What the law allows under the nuisance-wildlife rule. Ben: no "how to kill" advice. Queries: "can you kill squirrels in florida", "can you kill possums". */
const FWC_FAQ = "https://myfwc.com/conservation/you-conserve/wildlife/faqs/";
const RULE = "https://www.flrules.org/gateway/ruleNo.asp?id=68A-9.010";
const NONGAME = "https://myfwc.com/hunting/regulations/nongame/";
const SOUTHERN = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/southern-fox-squirrel/";
const FWC_GRAY = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/";
const FWC_FOX = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/";
const FWC_SEASONS = "https://myfwc.com/hunting/season-dates/";

export const floridaSquirrelRules: Post = {
  slug: "can-you-kill-or-trap-a-squirrel-in-florida",
  title: "Can You Kill or Trap a Squirrel in Florida? What the Rules Allow",
  excerpt:
    "A gray squirrel chewing into your attic counts as nuisance wildlife under Florida's rules, which allow trapping with conditions. Fox squirrels are a different story. Here's what FWC allows, and what it doesn't.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** for a gray squirrel causing damage, yes, within limits. FWC lets property owners live-trap nuisance wildlife if they check traps every 24 hours, and the squirrel can only be released on their own property or permitted land. Fox squirrels can't be trapped or taken without FWC authorization. Call (727) 594-7705.",
    ),
    h3("When a squirrel counts as nuisance wildlife"),
    p(
      `Florida's rule (68A-9.010) defines nuisance wildlife as an animal that causes or is about to cause property damage, threatens public safety, or causes an annoyance in, under or on a building ([FWC](${FWC_FAQ})). A gray squirrel nesting in your attic or chewing a soffit fits. FWC says gray squirrels are active by day and Florida also has fox squirrels and southern flying squirrels ([FWC](${FWC_GRAY})).`,
    ),
    h3("What the rule allows"),
    ul(
      `**No permit for most cases.** FWC says property owners, and trappers they hire, don't need to notify FWC or get its approval to take most nuisance wildlife from private property ([FWC](${FWC_FAQ})).`,
      "**Live traps,** inspected at least once every 24 hours. Any other animal caught has to be let go on the spot.",
      "**A decision within 24 hours.** A live-caught animal has to be released legally or humanely euthanized within 24 hours of capture or trap inspection.",
      "**Firearms only where allowed,** in daylight. FWC notes that firing a gun may be prohibited in some cities and residential areas, so check with local law enforcement first.",
    ),
    h3("Where a trapped squirrel can go"),
    p(
      `Gray squirrels are native, so they can be released, but only two ways, FWC says: on the property where they were caught (one contiguous piece of land), or on land of at least 40 contiguous acres in the same county, with the landowner's written permission in hand ([FWC](${FWC_FAQ})). Dropping one at a park or along a road without the landowner's written permission isn't legal. Our [Florida wildlife trapping rules](/blog/florida-wildlife-trapping-rules/) guide covers the details.`,
    ),
    p(TRAP_RULES_2026),
    h3("Fox squirrels are different"),
    p(
      `FWC says fox squirrels may not be taken or pursued, and its rule (68A-29.002) covers their young and nests too, so the nuisance-wildlife rule above doesn't apply to them without FWC authorization ([FWC](${NONGAME})). The Big Cypress fox squirrel in southwest Florida is state-designated Threatened. The southern fox squirrel, once called Sherman's fox squirrel and found in Central Florida, came off the Species of Special Concern list in 2018 but is still under FWC's conservation guidelines ([FWC](${SOUTHERN})). If the squirrel in your attic is a big, black-faced fox squirrel, get advice before doing anything.`,
    ),
    h3("What about hunting season?"),
    p(
      `Gray squirrels are also a game species, with FWC hunting rules and bag limits ([FWC](${FWC_SEASONS})). Those rules are about hunting, which generally needs a license and isn't the same thing as dealing with a squirrel in your house.`,
    ),
    h3("The part that actually fixes it"),
    p(
      "Removing a squirrel without closing the hole it chewed just leaves room for the next one. Check for a nest of young before anything is sealed, and close the roofline afterward. See [squirrels in the attic](/services/squirrels-in-attic/), [squirrel removal](/services/squirrel-removal/) and [why squirrels come back](/blog/why-squirrels-return-after-removal/), or call (727) 594-7705.",
    ),
  ),
  faq: [
    faq(
      "Is it legal to trap a squirrel in Florida?",
      "Yes, if it's nuisance wildlife on your property. FWC allows live traps without a permit for most cases, checked at least every 24 hours, with release only where the rule allows.",
    ),
    faq(
      "Can I relocate a squirrel to a park?",
      "Not without written permission. FWC allows release only on the property where it was caught, or on 40 or more contiguous acres in the same county with the landowner's written permission in hand.",
    ),
    faq(
      "Are fox squirrels protected in Florida?",
      "Yes. FWC says fox squirrels may not be taken or pursued in Florida without its authorization. The southern fox squirrel, once called Sherman's fox squirrel, was removed from the Species of Special Concern list in 2018 but stays under FWC's conservation guidelines, and the Big Cypress fox squirrel is state-designated Threatened.",
    ),
    faq(
      "Do the trapping rules change in 2026?",
      "Yes. FWC's new trapping rules start December 31, 2026, with registration and training for most trappers and a 12-hour limit for animals taken off site. Homeowners using one regular-size cage trap on their own land are exempt from registration, training and reporting when trapping nuisance or non-native wildlife.",
    ),
  ],
  seo: {
    title: "Can You Kill or Trap a Squirrel in Florida?",
    description:
      "Can you kill or trap a squirrel in Florida? What FWC's nuisance wildlife rule allows, where trapped squirrels can go, and why fox squirrels are protected.",
  },
  sources: [
    { title: "FWC: FAQs, nuisance wildlife (68A-9.010 definition; live traps or snares, or firearms in daylight where allowed; traps inspected every 24 hours; firearm discharge may be prohibited in cities; no FWC notice for most nuisance wildlife; release or euthanize within 24 hours; native release on the property or 40+ contiguous acres in the same county with written permission)", url: FWC_FAQ },
    { title: "FWC: Eastern gray squirrel profile (native; active during the day; Florida also has fox squirrels and southern flying squirrels)", url: FWC_GRAY },
    { title: "FWC: Fox squirrel profile (Big Cypress fox squirrel state-designated Threatened)", url: FWC_FOX },
    { title: "FWC: Southern fox squirrel profile (Imperiled; removed as a Species of Special Concern in 2018)", url: SOUTHERN },
    { title: "FWC: Nongame wildlife regulations (fox squirrels may not be taken or pursued; rules 68A-29.002 and 68A-27.003)", url: NONGAME },
    { title: "Florida Administrative Code 68A-9.010, Taking nuisance wildlife (non-target wildlife released immediately at the capture site)", url: RULE },
    { title: "FWC: Hunting season dates (gray squirrel bag and possession limits)", url: FWC_SEASONS },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [],
};
