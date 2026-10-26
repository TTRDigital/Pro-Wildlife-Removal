import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { h3, p, rich, table, ul } from "../pt.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/* Guide: raccoon trapping in Florida. New slug (no existing post on the topic). */

const UW033 = "https://ask.ifas.ufl.edu/publication/UW033";
const FAQS = "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/";

export const raccoonTrapping: Post = {
  slug: "raccoon-trapping-florida",
  title: "Raccoon Trapping in Florida: Traps, Bait and the Rules",
  excerpt:
    "You can live-trap a nuisance raccoon in Florida, but the trap must be checked every 24 hours and the raccoon can only be released on your property or on 40+ contiguous acres in the same county with written permission.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Pro Wildlife Removal",
  image: images.raccoonRemoval,
  body: rich(
    p(
      "**The short answer:** yes, a Florida property owner can live-trap a nuisance raccoon. Check the trap at least every 24 hours. The raccoon can only be released where it was caught, on 40+ contiguous acres in the same county with the owner's written permission, or humanely put down. In spring, check for babies first.",
    ),
    h3("Before you set a trap"),
    ul(
      "**Is it a mother?** UF/IFAS says most Florida raccoons are born in March and April. Trapping a mother can leave kits in the attic. If the raccoon is in a building in spring, find out first.",
      "**Can you close the way in instead?** UF/IFAS calls exclusion and prevention the cheapest, simplest control. Trapping without sealing just makes room for the next raccoon.",
      "**What will you do with it?** Decide before you catch it. Florida gives you three options, below, and dropping it off in a park or the woods without the landowner's written permission isn't one of them.",
    ),
    h3("What Florida allows"),
    table(
      ["Rule", "What it means for you"],
      ["Legal traps", "Live (cage) traps and locking wire snares. Leghold and body-gripping (steel) traps aren't legal without an FWC permit, and UF/IFAS notes FWC hasn't issued those permits for raccoons."],
      ["Checking", "At least once every 24 hours."],
      ["After capture", "Release or humane euthanasia within 24 hours of capture or inspection."],
      ["Where to release", "On the property where it was caught, or on 40+ contiguous acres in the same county with the owner's written permission. Not on public or private land without written permission."],
      ["Other animals", "Anything else caught has to be released right away, on the spot."],
      ["Feeding", "Rule 68A-4.001 bans putting out food or garbage in a way that attracts raccoons and creates a public nuisance."],
    ),
    p(TRAP_RULES_2026),
    h3("Choosing a trap and bait"),
    p(
      `UF/IFAS prefers traps that open at one end only. With a two-door trap, lock one door so the raccoon has to go all the way in for the bait. For bait, it suggests dry cat food with fish meal as cheap and clean, with chicken necks, sweet corn or whole peanuts as other choices. If a raccoon won't go in after three or four nights, switch bait, or wire the door open and bait inside and out until it's used to the trap ([UF/IFAS](${UW033})).`,
    ),
    h3("Where to put it"),
    p("Set the trap on the raccoon's regular path or where it's been feeding, somewhere you can see it easily. UF/IFAS advises against setting traps in attics or under mobile homes unless it's absolutely necessary and you can check them at least daily."),
    h3("Why relocation is a bad idea"),
    p(
      "Moving a raccoon feels kind, but UF/IFAS recommends humane euthanasia over relocation, because moved raccoons can spread disease to the raccoons already living there and often cause new problems. FWC's raccoon roundworm page also tells wildlife rehabilitators not to relocate raccoons. If you do release one, Florida's rules on where are strict.",
    ),
    h3("Step by step"),
    ul(
      "**1. Check for kits and the entry.** If the raccoon lives in the attic, find the hole and look for young first.",
      "**2. Plan the outcome.** Have permission for a release site, or a humane euthanasia plan, before you set the trap.",
      "**3. Set the trap** on the raccoon's path, baited, somewhere you can see it.",
      "**4. Check it at least every 24 hours.** Release any other animal on the spot.",
      "**5. Act within 24 hours of capture or inspection,** as the rule requires.",
      "**6. Close the entry and clean up.** Repair the hole with strong material, cap the chimney if needed, and remove any latrine with gloves.",
    ),
    h3("Mistakes to avoid"),
    ul(
      "**Trapping a mother in spring** and leaving kits in the attic.",
      "**Setting a trap and forgetting it.** Florida's 24-hour check isn't optional, and a raccoon left in the sun suffers.",
      "**Releasing it in a park.** That's illegal without the land manager's written permission.",
      "**Chasing it out and just sealing the hole.** UF/IFAS says this often causes more damage, because the raccoon, especially a mother with young, comes back and forces its way in.",
      "**Skipping the repair.** A trapped raccoon is soon replaced by the next one if the way in stays open.",
    ),
    h3("Safety"),
    ul(
      "Florida's Department of Health names raccoons as one of the state's two main wildlife sources of rabies. Never handle a trapped raccoon, and keep children and pets away from the trap.",
      "Raccoon droppings can carry roundworm eggs. Wear gloves to clean up and wash your hands after.",
      "If a raccoon bites or scratches anyone, wash the wound with soap and water, see a doctor and call the county health department.",
    ),
    h3("When to call a professional"),
    p("Call if the raccoon is in the attic, walls or chimney, if there may be kits, if you don't want to handle the release or euthanasia, or if the raccoon keeps beating the trap. Trapping is only part of the job: the entry has to be repaired too. See [raccoon removal](/services/raccoon-removal/) and [raccoons in the attic](/services/raccoons-in-attic/), or call (727) 594-7705."),
    h3("Common questions"),
    h3("Can I relocate a raccoon in Florida?"),
    p("Only to land the rules allow: on the property where it was caught, or on 40 or more contiguous acres in the same county with the landowner's written permission. Parks and other public land are off limits without written permission. UF/IFAS recommends against relocating raccoons."),
    h3("How often do I have to check a raccoon trap?"),
    p("At least once every 24 hours, under Florida's nuisance wildlife rule."),
    h3("What if I catch a cat or an opossum instead?"),
    p("Let it go right away, where you caught it. Florida requires non-target animals to be released immediately at the capture site."),
  ),
  seo: {
    title: "Raccoon Trapping in Florida: Traps, Bait and Rules | Pro Wildlife Removal",
    description:
      "How to trap a nuisance raccoon in Florida legally: trap type, bait, 24-hour checks, where a raccoon can be released, why relocation is discouraged, and when to call a pro.",
  },
  sources: [
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (births March-April; exclusion cheapest; legal traps; single-door traps; bait; trap placement; 24-hour checks; release or euthanize within 24 hours; non-targets released at site; euthanasia recommended over relocation; 68A-4.001). Used for trap and bait advice; its release section is out of date (relocation permit, 3 miles), so release rules follow FWC", url: UW033 },
    { title: "FWC: FAQs, nuisance wildlife (24-hour checks; release on same property or 40+ contiguous acres in same county with written permission; no release on public or private land without written permission; non-targets released at capture site)", url: FAQS },
    { title: "FWC: Raccoon roundworm (tells wildlife rehabilitators not to relocate raccoons; gloves)", url: "https://myfwc.com/research/wildlife/health/raccoon-roundworm/" },
    { title: "FWC: Detriments to feeding wildlife (68A-4.001)", url: "https://myfwc.com/conservation/you-conserve/wildlife/feeding/" },
    { title: "Florida Department of Health: Rabies (raccoons and bats main wildlife sources; wash bites)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: ["Named author for guides and posts.", "Real photo: a raccoon in a live trap on a client job."],
};
