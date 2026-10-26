import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { h3, p, rich, table, ul } from "../pt.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/* Guide: Florida's wildlife trapping rules for homeowners. New slug (no existing post on the topic). */

const FAQS = "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/";
const RULES = "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/";

export const floridaTrappingRules: Post = {
  slug: "florida-wildlife-trapping-rules",
  title: "Florida's Wildlife Trapping Rules for Homeowners",
  excerpt:
    "Florida lets property owners trap most nuisance wildlife without notifying FWC, but traps must be checked every 24 hours, release is limited to the same property or 40+ acres in the same county, and some animals can't be trapped at all.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Pro Wildlife Removal",
  image: images.post1776984844429,
  body: rich(
    p(
      "**The short answer:** Florida property owners can trap most nuisance wildlife without telling FWC. Check traps at least every 24 hours. Native animals can only be released on the same property or on 40+ contiguous acres in the same county with written permission. Non-natives can't be released, bat colonies can only be excluded, and new rules start December 31, 2026.",
    ),
    h3("When an animal counts as a nuisance"),
    p(`FWC defines nuisance wildlife as an animal that causes, or is about to cause, property damage, threatens public safety, or causes an annoyance in, under or on a building. That's the trigger for the rules below ([FWC](${FAQS})).`),
    h3("Who can trap"),
    ul(
      "**Property owners** can take nuisance wildlife on their own property, or authorize someone else to.",
      "**Trappers** working for you must have the property owner's consent.",
      "**No FWC notice** is needed for most nuisance wildlife on private property. Some species and methods need a permit.",
    ),
    h3("The rules at a glance"),
    table(
      ["Rule", "What it says"],
      ["Methods", "Live traps or snares, or firearms during daylight where they're allowed. Steel traps need an FWC permit. Shooting certain animals at night, for crop or livestock damage, needs a Gun and Light at Night Permit and a hunting license."],
      ["Checks", "Every trap and snare inspected at least once every 24 hours."],
      ["After capture", "Released legally or humanely euthanized within 24 hours of capture or inspection."],
      ["Release: native animals", "On the property where it was caught, or on 40+ contiguous acres in the same county with the landowner's written permission. Never on public or private land without written permission."],
      ["Release: non-native animals", "Not allowed. Non-native wildlife can only be moved to be euthanized."],
      ["Non-target animals", "Released immediately at the capture site."],
      ["Bobcats", "Euthanizing a live-caught bobcat is prohibited; it must be released."],
    ),
    h3("New rules from December 31, 2026"),
    p(TRAP_RULES_2026),
    p(`FWC's trapping rules page also says the time to release or put down an animal taken off site drops from 24 hours to 12 ([FWC](${RULES})).`),
    h3("Animals you can't trap"),
    ul(
      "**Bats.** FWC says capturing and relocating bats is illegal, and so are poison and fumigants. Colonies leave a building only by exclusion, from August 15 to April 15 (FWC allows a single bat in the living space to be caught and let outside any time). See [bat removal](/services/bat-removal/).",
      "**Protected species.** FWC notes many species can't be taken as nuisance wildlife. The eastern indigo snake is federally threatened, and the Big Cypress fox squirrel can't be trapped without a permit.",
      "**Alligators.** Nuisance alligators go to FWC's hotline, 866-FWC-GATOR (866-392-4286), not a backyard trap.",
      "**Bears.** Report bear conflicts to your FWC regional office.",
    ),
    h3("Animal by animal"),
    table(
      ["Animal", "Native?", "What the rules mean"],
      ["Raccoon", "Yes", "Release on site or on 40+ acres in the same county with permission; UF/IFAS recommends euthanasia over relocation"],
      ["Opossum", "Yes", "Release on site or on 40+ acres in the same county with permission, or humane euthanasia"],
      ["Gray and flying squirrels", "Yes", "Can be taken as nuisance animals with cage traps"],
      ["Armadillo", "Treated as native", "Release on site or on 40+ acres in the same county with permission; FWC calls relocation seldom biologically sound"],
      ["Roof and Norway rats", "No", "Can't be released anywhere"],
      ["Bats", "Yes", "Exclusion only (a single bat in the living space can be caught and let outside any time)"],
    ),
    h3("Getting written permission for a release site"),
    p("If you plan to release a native animal anywhere but where you caught it, Florida requires the landowner's written permission, and the land must be at least 40 contiguous acres in the same county. Before you trap, get that permission in writing from the owner, keep it with you, and make sure you know the county line. Public land needs written permission from whoever manages it."),
    h3("Firearms and night hunting"),
    p("FWC allows nuisance wildlife to be taken with firearms during daylight where firearms are allowed, but check local rules first. UF/IFAS warns never to fire a gun inside city limits or in residential areas. Taking some animals at night, including raccoons and opossums causing crop or livestock damage, needs a Gun and Light at Night Permit and a hunting license."),
    h3("What about glue traps and poison?"),
    p("For rodents, UF/IFAS Extension calls glue traps inhumane and a hazard to other wildlife, and the CDC warns glue and live traps can scare rodents into urinating. Rodenticides are a last resort, in tamper-resistant bait stations away from children and pets. Poison is never allowed on bats."),
    h3("Trapping legally, step by step"),
    ul(
      "**1. Make sure it's a nuisance** under FWC's definition, and that the species can be trapped.",
      "**2. Decide the outcome first:** release on site, release on permitted land, or humane euthanasia.",
      "**3. Use a legal trap,** set where you can check it.",
      "**4. Check it at least every 24 hours,** and let any other animal go on the spot.",
      "**5. Act within the deadline:** 24 hours today, 12 hours for off-site release or euthanasia from December 31, 2026.",
      "**6. Fix the reason it came:** seal the entry and remove food and shelter.",
    ),
    h3("Should you trap it yourself?"),
    p("Trapping is legal, but it's the easy half. You still have to check the trap every day, deal with what you catch within the deadline, and close the hole the animal used, or the next one moves in. Many homeowners call a professional for exactly those reasons. See [raccoon trapping](/blog/raccoon-trapping-florida/) for a worked example, or call (727) 594-7705, 24/7."),
    h3("Common questions"),
    h3("Do I need a permit to trap a raccoon on my property in Florida?"),
    p("Not for a live trap on your own property under today's rules. From December 31, 2026, FWC's new rules require registration and training for most trappers, with an exemption for a homeowner using one regular-size cage trap on their own property."),
    h3("Can I drive a trapped animal to a park and let it go?"),
    p("No. Release on public or private land without written permission isn't allowed, and only land of 40 or more contiguous acres in the same county qualifies."),
    h3("What happens if I catch the wrong animal?"),
    p("Release it right away at the spot where you caught it. If it's a bobcat, it must be released."),
  ),
  seo: {
    title: "Florida Wildlife Trapping Rules for Homeowners (2026) | Pro Wildlife Removal",
    description:
      "Florida's nuisance wildlife trapping rules in plain words: who can trap, 24-hour checks, where animals can be released, animals you can't trap, and the rules that start December 31, 2026.",
  },
  sources: [
    { title: "FWC: FAQs, nuisance wildlife (definition; property owners may take nuisance wildlife; no FWC notice for most; owner consent; methods; steel trap permit; Gun and Light at Night Permit; 24-hour checks; release rules; non-native no release; bobcats; non-targets)", url: FAQS },
    TRAP_RULES_SOURCE,
    { title: "FWC: Bats in buildings (capture and relocation illegal; poison and fumigants illegal)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "FWC news release, April 6, 2026 (bat exclusion Aug 15 to April 15)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Eastern indigo snake (federally threatened)", url: "https://myfwc.com/wildlifehabitats/profiles/reptiles/snakes/eastern-indigo-snake/" },
    { title: "FWC: Living with Squirrels (gray and flying squirrels as nuisance; cage traps; Big Cypress fox squirrel permit)", url: "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf" },
    { title: "FWC: Statewide Nuisance Alligator Program (866-FWC-GATOR)", url: "https://myfwc.com/wildlifehabitats/wildlife/alligator/snap/" },
    { title: "FWC: Living with bears (report conflicts to the regional office)", url: "https://myfwc.com/wildlifehabitats/wildlife/bear/living/" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): euthanasia recommended over relocation for raccoons", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "FWC and UF/IFAS: A guide to living with bats (a single bat in the living space can be removed any time of year)", url: "https://myfwc.com/media/nu2fvsvj/livingwithbats.pdf" },
    { title: "FWC: Armadillo profile (relocation seldom biologically sound) and Living with Armadillos (naturalized native)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/armadillo/" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): never discharge a firearm inside city limits or in residential areas", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "UF/IFAS Extension Sarasota County: glue traps inhumane; rodenticides last resort in tamper-resistant stations", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
    { title: "CDC: How to trap up (glue and live traps can make rodents urinate)", url: "https://www.cdc.gov/healthy-pets/rodent-control/trap-up.html" },
  ],
  clientQuestions: ["Named author for guides and posts."],
};
