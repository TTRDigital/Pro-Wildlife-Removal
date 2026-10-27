import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/*
 * Opossum removal. Target searches: "opossum removal Tampa", "possum in attic".
 * Replaces today's three opossum pages (opossum-removal, opossum-control,
 * opossum-removal-tampa); Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (844) 264-6254", href: "tel:+18442646254" };
const FLYER = "https://myfwc.com/media/28161/livingwithopossums.pdf";
const UW471 = "https://ask.ifas.ufl.edu/publication/UW471";

export const opossumRemoval: Service = {
  slug: "opossum-removal",
  title: "Opossum Removal",
  group: "removal",
  animal: "opossum",
  order: 6,
  summary: "Opossums out from under the house, deck, shed or attic, mother and young together, then the openings closed with wire mesh.",
  cardImage: images.opossumRemoval4,
  design: "new",
  hero: {
    eyebrow: "OPOSSUM REMOVAL",
    heading: "Opossum Removal in Central Florida",
    highlight: "Opossum Removal",
    text: p("An opossum (possum) living under the house, in the crawl space or in the attic? We remove it humanely, young included, and close the way in."),
    image: images.opossumRemoval4,
    badges: ["Under houses, decks and sheds", "Openings closed with mesh"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I get rid of an opossum under my house in Florida?",
      text: p(
        "Remove what draws it (pet food, trash, fallen fruit), make sure the opossum is out, then close the opening with wire mesh. If it won't leave, it can be live-trapped and released only on site or on approved land in the same county. Removing one doesn't stop the next. Call (844) 264-6254.",
      ),
      points: ["Nearly immune to rabies", "Remove food first", "Wire mesh on gaps", "Strict release rules"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have an opossum",
      intro: p("Opossums are mostly out at night, so the signs usually show up by morning. More on [opossums in the attic](/services/opossums-in-attic/)."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "critter", title: "A gray, cat-sized animal at night", text: p("Pale to dark gray fur, a pointed snout, small bare ears and a long, hairless tail. FWC notes it's normal to see one in daylight too, and not necessarily a sign it's sick.") },
        { icon: "home", title: "A gap under the house or deck", text: p("Torn skirting, a pushed-in foundation vent, or a hole under a shed, porch or A/C pad with a worn path leading to it.") },
        { icon: "droppings", title: "Raided trash and pet bowls", text: p("Opossums eat almost anything. Tipped trash, empty pet bowls left outside and dropped fruit gone overnight are classic signs.") },
        { icon: "sound", title: "Bumping under the floor", text: p("Shuffling or thumping under the floor or in the crawl space at night, when an opossum comes and goes.") },
        { icon: "odor", title: "A bad smell", text: p("FWC notes a threatened opossum may play dead and give off a foul smell. Pets that corner one under the house often bring the smell back with them.") },
        { icon: "leaf", title: "Missing eggs or chickens", text: p("FWC lists sleeping chickens and their eggs among the things opossums take at night.") },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Opossums are helpful, just not under your floor",
      body: rich(
        p(
          "Opossums do useful work. FWC says they clean up dead animals much like a vulture, eat ticks they find while grooming, and can even eat venomous snakes because they're at least partly immune to the venom. UF/IFAS describes them as nearly immune to rabies. Living under your home is still a problem:",
        ),
        ul(
          "**Mess and smell.** Droppings, urine and nesting material build up under the floor or in the insulation.",
          "**Damage.** Torn screens and vents where they push their way in.",
          "**Pets and chickens.** A cornered opossum hisses, growls and may bite. FWC also notes opossums take chickens and eggs at night.",
          "**Horses.** FWC says opossums are one of the main sources of the parasite that causes EPM in horses. Barn owners should cover feed and keep wildlife out of hay storage.",
        ),
      ),
      image: images.opossumRemoval4,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove opossums",
      heading: "Our opossum removal process",
      intro: p("Opossums in Florida have their young mostly from February to June, and a mother carries them in her pouch, then on her back. The plan has to account for the babies."),
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Find the den and the openings", text: p("We locate where the opossum sleeps and every gap it uses, under the house, deck, shed or in the attic, and check for a mother with young.") },
        {
          number: "2",
          title: "Get them out",
          text: p(
            "Often the simplest way is to wait until the opossum leaves for the night and then block the opening. Where it won't leave, it's caught in a live trap checked at least every 24 hours. A mother with young is removed with her babies.",
            "[PLACEHOLDER: ask the client: confirm your usual method for opossums (one-way door, live trap or both)]",
          ),
        },
        { number: "3", title: "Release legally", text: p("A captured opossum may only be released on the property where it was caught, or on land of 40 acres or more in the same county with the owner's written permission.") },
        { number: "4", title: "Close it off", text: p("Once we're sure every opossum is out, torn screens, vents and gaps are blocked with wire mesh, as FWC recommends.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "What Florida allows for opossums",
      body: rich(
        ul(
          "**Opossums are native and can be removed as nuisance animals** when they cause or are about to cause damage, threaten public safety, or cause a problem in, under or on a building (rule 68A-9.010).",
          "**Live traps must be checked at least once every 24 hours.** Any other animal caught by mistake has to be let go right there.",
          "**A trapped opossum can be released on site, released on 40+ acres in the same county with written permission, or humanely killed.** Nowhere else.",
          TRAP_RULES_2026,
          "**Steel traps need an FWC permit,** and shooting one at night needs a Gun and Light at Night Permit. Leave both to professionals.",
        ),
        p("Read FWC's [Living with Opossums](" + FLYER + ") and our posts on [opossums in attics](/blog/opossums-in-attics/) and [opossums under the house](/blog/opossums-under-house-crawl-space-removal/)."),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Keep them out",
      heading: "Keeping the next opossum out",
      body: p(
        "FWC is blunt about it: removing one or more opossums doesn't stop others from using the same spot. The lasting fix is closing the openings and taking away the food.",
      ),
      checklist: [
        "Gaps under the house, deck, porch and shed closed with sturdy wire mesh",
        "Foundation vents and torn screens closed with wire mesh",
        "Trash secured, pet food brought in at night",
        "Bird seed and fallen fruit cleaned up",
        "Chickens and eggs shut in at night",
        "Droppings and nesting under the house or in the attic pointed out in the inspection",
      ],
      image: images.opossumRemoval4,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What opossum removal costs depends on",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Where it's living", text: p("Under a deck or shed, in a crawl space, or up in the attic.") },
        { title: "Mother and young", text: p("A family takes more care than a single adult.") },
        { title: "How many openings", text: p("One gap in the skirting, or a whole perimeter to close.") },
        { title: "Den location", text: p("Under a deck or porch, or up in the attic.") },
      ],
      outro: p("There's no charge for the opossum inspection, and the price comes before the work."),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Opossum removal in 8 counties",
      intro: p("Opossums live in cities, suburbs and farm country alike. We cover Central Florida and the counties around it."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "opossum",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Opossum removal questions",
      items: [
        faq(
          "Do you handle possum control in Tampa?",
          "Yes. Opossum control in Tampa works the same as anywhere else we cover: find where the possum gets in under the house, the deck or into the attic, get it out, young included, and close the opening with wire mesh. Call (844) 264-6254.",
        ),
        faq(
          "Do opossums carry rabies?",
          "It's rare. UF/IFAS describes opossums as nearly immune to rabies. In Florida, rabies mostly comes from raccoons and bats, but wash any animal bite or scratch and see a doctor. A frightened opossum hisses, growls and may bite, so don't handle one.",
        ),
        faq(
          "I saw an opossum in the daytime. Is it sick?",
          "Not necessarily. FWC says opossums are mostly nocturnal but may be active during the day, which is normal behavior and not by itself a sign of illness.",
        ),
        faq(
          "The opossum looks dead. What do I do?",
          "It may be playing dead. FWC says not to pick it up. Leave it alone, or gently move it to a quiet spot with a shovel, and it will probably get up and leave on its own within minutes to a few hours.",
        ),
        faq(
          "When do opossums have babies in Florida?",
          "UF/IFAS says most young are born between February and June, though breeding can continue into November. UF/IFAS says females usually have one or two litters a year, and FWC says the young ride on their mother's back once they leave the pouch at about 80 days.",
        ),
        faq(
          "Can I trap the opossum and take it to the woods?",
          "Only to land you're allowed to use. Florida lets a trapped opossum be released on the property where it was caught, or on 40 acres or more in the same county with the landowner's written permission. Traps have to be checked at least once a day.",
        ),
        faq(
          "How do I keep opossums from coming back?",
          "Take away food and shelter. Secure trash and pet food, pick up fallen fruit, and once you know the opossum is out, block the openings under the house with wire mesh. FWC suggests a motion-activated sprinkler at the entrance to discourage one from going back in.",
        ),
      ],
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Opossum guides",
      limit: 3,
      match: "opossum",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Opossum under the house?",
      highlight: "under the house?",
      text: p("Ring (844) 264-6254 whenever you find one. We'll get it out and close the gap."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Opossum Removal in Central Florida | Pro Wildlife Removal",
    description:
      "Opossum under the house, deck or in the attic? Humane removal with mother and young together and openings sealed, across Central Florida. (844) 264-6254.",
  },
  sources: [
    { title: "FWC: Living with Opossums (only marsupial; mostly nocturnal, daytime activity normal; hiss, drool, growl, play dead with foul smell; don't pick up; scavengers, partly immune to snake venom, eat ticks; secure trash, pet food, seed, fruit, chickens; close access points, wire mesh, motion sprinkler; EPM in horses; 68A-9.010 nuisance take; 24-hour checks; release on site or 40+ acres same county with written permission, or humanely kill; steel trap permit; Gun and Light at Night Permit; removing one doesn't stop others)", url: FLYER },
    { title: "FWC: Opossum profile (at least 2 litters a year; 7-11 young in the pouch; ride on mother's back at about 80 days)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/opossum/" },
    { title: "UF/IFAS EDIS WEC426 (UW471): Wildlife of Florida Factsheet, Virginia Opossum (most young born February to June, breeding through November; nocturnal; nearly immune to rabies; omnivores)", url: UW471 },
    { title: "FWC: Trap types and trapping rules (from Dec 31, 2026: free Wildlife Trapping Permit after trapping education; physical check within 12 hours of notification; no animal in a trap over 24 hours; relocate or kill within 12 hours of inspection)", url: "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/trap-types/" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources; wash bites, see a provider)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "Opossums: one-way doors, live traps or both? Where are they released?",
    "Can the site show a price range for opossum removal?",
    "Real photos: wire mesh installed under a house or deck, an opossum removal.",
  ],
};
