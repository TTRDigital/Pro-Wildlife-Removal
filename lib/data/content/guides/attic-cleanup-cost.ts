import type { Post } from "../../../types";
import { faq, h3, p, rich, table, ul } from "../pt.ts";

/*
 * Guide: animal in attic removal and cleanup cost. Rewritten in place at the existing
 * slug (Ben, Oct 26). The old version printed price ranges the client never confirmed;
 * no figures until the client gives ranges.
 */

const CDC_CLEAN = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";

export const atticCleanupCost: Post = {
  slug: "attic-wildlife-cleanup-cost-in-florida-prices-tips",
  title: "Animal in the Attic: Removal and Cleanup Cost in Florida",
  excerpt:
    "What it costs to get an animal out of your attic and clean up after it depends on the animal, how long it lived there, how many openings need sealing and how much insulation is ruined.",
  date: "2026-04-23T22:49:58+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** an animal in the attic costs three things: getting it out, sealing the way in, and cleaning up. Which animal it is, how long it stayed and how much insulation it ruined decide most of the bill. Book an inspection at (727) 594-7705.",
    ),
    h3("The three parts of the bill"),
    ul(
      "**Removal.** Trapping, a one-way door, or removal by hand, depending on the animal and Florida's rules for it.",
      "**Sealing.** Closing the entry hole and the weak spots around it, so the next animal can't use them. This is often the biggest single item on houses with many gaps.",
      "**Cleanup.** Droppings, urine, nesting and soiled insulation removed, and the attic sanitized.",
    ),
    h3("How the animal changes the job"),
    p("Each animal brings its own rules and its own mess. These differences, all from the agencies' own guidance, are what move the price."),
    table(
      ["Animal", "Removal", "Cleanup concern"],
      ["Roof rats", "Seal every gap, then trap the rats left inside", "Droppings and urine through the insulation; the CDC says not to sweep or vacuum them"],
      ["Bats", "Exclusion only, August 15 to April 15", "Guano under the roost; the CDC advises a respirator in a confined space"],
      ["Raccoons", "Check for kits; strict release rules", "A latrine; the CDC advises removing droppings promptly because of roundworm"],
      ["Squirrels", "One-way door or cage traps; litters in spring and fall", "Nests and chewed wiring; FWC lists chewing as a common complaint"],
      ["Opossums", "Wait for it to leave or live-trap; strict release rules", "A den area with droppings and nesting"],
    ),
    h3("What makes an attic cleanup bigger"),
    table(
      ["Factor", "Why it matters"],
      ["How long the animal lived there", "Weeks leave a little mess on top of the insulation. Years can soak through it."],
      ["Size of the attic", "More square footage of insulation to remove."],
      ["Type of insulation", "Loose blown-in insulation and batts are removed differently."],
      ["Access", "A low, tight attic with little headroom takes longer to work in."],
      ["Damage to repair", "Chewed wiring, torn ductwork or rotted roof decking near the entry, a separate job for an electrician or contractor."],
    ),
    h3("Can you clean the attic yourself?"),
    p(
      `For a few droppings on a garage shelf, the CDC's steps work: air the space out for 30 minutes, wear rubber or plastic gloves, soak droppings and nesting in disinfectant or 1 part bleach to 9 parts water, wait five minutes, wipe up with paper towels and wash your hands. Never sweep or vacuum droppings dry ([CDC](${CDC_CLEAN})).`,
      "An attic is different. Insulation can't be wiped clean, the heat is punishing, and bat guano and raccoon latrines bring their own health warnings. Many homeowners leave the attic to a professional and do the prevention themselves: trimming branches back from the roof, securing trash and pet food.",
    ),
    h3("Don't skip the sealing"),
    p("Paying for removal and cleanup without sealing is an expensive mistake. The gap stays open, and the next animal moves into a freshly cleaned attic. Sealing every opening is what makes the rest of the bill worth it."),
    h3("Signs the attic needs more than a quick cleanup"),
    ul(
      "**Droppings spread across the insulation,** not just in one corner. Rats keep to common pathways, so long-term activity shows as trails and scattered droppings.",
      "**A latrine.** Raccoons go in the same spot again and again, and the CDC advises removing their droppings promptly.",
      "**A deep pile of guano** under a bat roost. Our [bat removal cost guide](/blog/how-much-does-bat-removal-cost-in-florida/) covers that job.",
      "**Flattened or tunneled insulation,** where animals have walked, nested and raised young.",
      "**A smell that reaches the rooms below,** or chewed wires near the entry. A smell alone can mean a [dead animal](/services/dead-animal-removal/) in a wall or vent.",
    ),
    h3("How to get an accurate quote"),
    ul(
      "**Ask for removal, sealing and cleanup as separate lines,** so you can see where the money goes.",
      "**Ask whether every opening is included,** not just the one the animal used.",
      "**Ask how much insulation will be removed,** and how they decide.",
      "**Ask how they handle droppings safely.** The CDC's rule is never to sweep or vacuum rodent droppings dry.",
      "**Ask what happens if the animal comes back.**",
    ),
    h3("Ways to keep the cost down"),
    ul(
      "**Act at the first sign.** The longer an animal stays, the more insulation it ruins.",
      "**Trim branches back from the roof.** FWC recommends it for squirrels, and UF/IFAS Extension advises it for roof rats.",
      "**Secure trash, pet food and fallen fruit.** FWC lists these among the things that draw opossums and raccoons to a house.",
      "**Check the roofline after storms.** UF/IFAS Extension advises repairing storm damage promptly so animals don't find the gap first.",
    ),
    p("See the animal pages for details: [rats in the attic](/services/rats-in-attic/), [bats in the attic](/services/bats-in-attic/), [raccoons in the attic](/services/raccoons-in-attic/), [squirrels in the attic](/services/squirrels-in-attic/) and [opossums in the attic](/services/opossums-in-attic/). Or call (727) 594-7705. We do attic work from [Hillsborough](/service-areas/hillsborough-county/) to [Polk](/service-areas/polk-county/) and [Citrus](/service-areas/citrus-county/)."),
  ),
  faq: [
    faq("Does homeowners insurance cover attic cleanup after animals?", "It depends on your policy and on the animal. Ask your insurer before work starts, and keep the inspection report and photos."),
    faq("How long does attic cleanup take?", "[PLACEHOLDER: ask the client: how long a typical attic cleanup takes]"),
    faq("Why is cleanup sometimes more than the removal?", "Because the mess builds up the longer the animal stays. A raccoon caught the week it moved in leaves little behind. A rat colony that lived in the attic for a year can mean removing the insulation across the whole attic."),
  ],
  seo: {
    title: "Attic Animal Removal and Cleanup Cost | Pro Wildlife Removal",
    description:
      "What sets the cost of removing an animal from a Florida attic: the animal, how long it lived there, sealing, insulation and cleanup. Rats, bats, raccoons.",
  },
  sources: [
    { title: "CDC: How to clean up after rodents (ventilate 30 minutes, gloves, bleach 1:9, 5 minutes, paper towels, no sweeping or vacuuming)", url: CDC_CLEAN },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (rodent-proofing must block all possible entry points; rodent-proofing first, trapping last)", url: "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/" },
    { title: "Florida DOH Indian River: Rodent control booklet (rev. 2008; look for scattered droppings near common pathways)", url: "https://indianriver.floridahealth.gov/wp-content/uploads/sites/32/2025/05/Rodent_Control_Booklet.pdf" },
    { title: "FWC news release, April 6, 2026 (bat exclusion Aug 15 to April 15)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
    { title: "FWC: Bats in buildings (CDC respirator advice for guano)", url: "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/" },
    { title: "CDC: About Baylisascaris (remove raccoon feces promptly)", url: "https://www.cdc.gov/baylisascaris/about/index.html" },
    { title: "FWC: Living with Squirrels (litters spring and autumn; chewing damage among most common complaints)", url: "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf" },
    { title: "FWC: Living with Opossums (release rules; close openings once all are out)", url: "https://myfwc.com/media/28161/livingwithopossums.pdf" },
    { title: "FWC: FAQs, nuisance wildlife (release on same property or 40+ acres same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (trim limbs; repair storm damage promptly)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
  ],
  clientQuestions: [
    "Can the site show typical price ranges for removal, sealing and attic cleanup?",
    "Which parts do you price separately, and is insulation replacement part of the cleanup quote?",
    "How long does a typical attic cleanup take?",
    "Link Josh Holmberg's author page (Ali is building it) from the guides.",
  ],
};
