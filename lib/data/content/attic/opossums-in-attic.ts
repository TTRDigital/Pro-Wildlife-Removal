import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";

/*
 * Opossums in the attic. Target searches: "possum in attic", "opossum in attic".
 * Links to the opossum removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const FLYER = "https://myfwc.com/media/28161/livingwithopossums.pdf";
const UW471 = "https://ask.ifas.ufl.edu/publication/UW471";

export const opossumsInAttic: Service = {
  slug: "opossums-in-attic",
  title: "Opossums in the Attic",
  // Temporary group until Jade adds "attic" to ServiceGroup; keeps these out of the 9-animal grid.
  group: "control",
  animal: "opossum",
  order: 25,
  summary: "A possum in the attic or crawl space: how to tell it from a raccoon, what not to do, and how to keep the next one out.",
  cardImage: images.opossumRemoval4,
  design: "new",
  hero: {
    eyebrow: "OPOSSUMS IN THE ATTIC",
    heading: "Opossums in the Attic in Tampa Bay",
    highlight: "Opossums in the Attic",
    text: p("Shuffling overhead at night and a bad smell? It may be an opossum. Here's how to tell, how to get it out without a fight, and how to keep it out."),
    image: images.opossumRemoval4,
    badges: ["Night shuffling", "Gaps closed with mesh", "Den cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I get a possum out of my attic?",
      text: p(
        "Make sure it's an opossum, wait until it leaves at night, then close the gap with sturdy wire mesh. If it won't leave, it can be live-trapped, checked every 24 hours, and released only on site or on 40+ acres in the same county with written permission. Details on [opossum removal](/services/opossum-removal/), or call (727) 594-7705.",
      ),
      points: ["Mostly out at night", "Close gaps with mesh", "Daylight isn't illness", "Strict release rules"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "What to check",
      heading: "Signs it's an opossum",
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "sunset", title: "Movement at night", text: p("FWC and UF/IFAS describe opossums as mostly nocturnal. Expect shuffling and bumping after dark, and quiet in the day.") },
        { icon: "critter", title: "A gray animal with a bare tail", text: p("FWC describes pale to dark gray fur, a hairless, grasping tail and thumbs that can grip.") },
        { icon: "odor", title: "A foul smell", text: p("A frightened opossum can play dead and give off a foul smell, FWC says. Pets that corner one often come back smelling of it.") },
        { icon: "home", title: "Easy food nearby", text: p("Pet food left out, open trash, bird seed and fallen fruit draw opossums to a house in the first place.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "compare",
      tone: "tint",
      eyebrow: "Opossum or raccoon?",
      heading: "Opossum or raccoon in the attic?",
      body: rich(
        p("Both are out at night and both are medium-sized, so people mix them up."),
        table(
          ["", "Opossum", "Raccoon"],
          ["Size", "About house-cat size", "Most weigh 8 to 15 pounds"],
          ["Active", "Mostly at night", "Dusk through the night"],
          ["When threatened", "Hisses, drools, growls, may play dead", "Don't corner one"],
          ["Rabies", "UF/IFAS: nearly immune", "One of Florida's main wildlife sources"],
          ["Babies", "Mostly born February to June", "Mostly born March and April"],
        ),
        p("If it's a raccoon, read [raccoons in the attic](/services/raccoons-in-attic/), because the release rules and the babies need more care."),
      ),
    },
    {
      _type: "splitSection",
      _key: "dont",
      eyebrow: "What not to do",
      heading: "Don't make these mistakes",
      body: rich(
        ul(
          "**Picking up a 'dead' opossum.** FWC says an opossum that looks dead may be playing dead. Leave it alone, or move it gently with a shovel, and it will most likely leave on its own.",
          "**Sealing it in.** FWC's advice is to close openings only once you're sure all the opossums are out. A motion-activated sprinkler near the entrance can discourage one from going back in while it's out at night.",
          "**Driving it somewhere.** A trapped opossum can only be released on the property, or on 40 acres or more in the same county with the landowner's written permission. Otherwise it must be humanely put down.",
        ),
      ),
      image: images.opossumRemoval4,
      imageSide: "right",
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "Keep them out",
      heading: "Cleanup and keeping the next one out",
      body: p(
        "FWC is direct about it: removing one or more opossums doesn't stop others from using the same spot. The den area gets cleaned, and the house gets closed up.",
      ),
      checklist: [
        "Vents and gaps blocked with wire mesh, screens repaired",
        "Den area cleared of droppings and nesting",
        "Soiled insulation replaced where needed",
        "Trash secured and pet food brought in at night",
        "Fallen fruit and bird seed cleaned up",
        "[PLACEHOLDER: ask the client: is attic or crawl space cleanup after opossums quoted separately?]",
      ],
      image: images.opossumRemoval4,
      imageSide: "left",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Opossums in the attic: common questions",
      items: [
        faq(
          "Why would an opossum be in my attic?",
          "Shelter. UF/IFAS says opossums don't dig their own burrows. They use hollow logs, woodpiles, barns, abandoned buildings and other animals' burrows, so a gap into a quiet attic or crawl space works too.",
        ),
        faq(
          "I saw the opossum in daylight. Is it rabid?",
          "Probably not. FWC says opossums are mostly nocturnal but may be active in the day, which is normal and not by itself a sign of illness. Rabies is also rare in opossums: UF/IFAS calls them nearly immune.",
        ),
        faq(
          "Is it a mother with babies?",
          "Possibly, especially from February to June. FWC says the young ride in the pouch, then on the mother's back from about 80 days, so they usually move with her.",
        ),
        faq(
          "Do opossums do any good?",
          "Yes. FWC says they eat dead animals much like a vulture, eat ticks they find while grooming, and are at least partly immune to snake venom, so they'll eat venomous snakes. Just not in your attic.",
        ),
      ],
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What customers say",
      match: "opossum",
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "More on opossums",
      limit: 3,
      match: "opossum",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Possum in the attic?",
      highlight: "in the attic?",
      text: p("Call (727) 594-7705. We'll get it out and close the gap behind it."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Opossums in the Attic in Tampa Bay: What to Do | Pro Wildlife Removal",
    description:
      "Possum in the attic or crawl space? How to tell it from a raccoon, what not to do, Florida's release rules and how to keep the next one out, in Tampa Bay. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "FWC: Living with Opossums (mostly nocturnal, daytime activity normal; gray fur, hairless prehensile tail, opposable thumbs; hiss, drool, growl, play dead, foul smell; don't pick up; scavenger, ticks, partly immune to venom; secure food; close openings once all are out; motion sprinkler; wire mesh; release rules; removing one doesn't stop others)", url: FLYER },
    { title: "FWC: Raccoon profile (most weigh 8-15 pounds; active late afternoon through the night)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/raccoon/" },
    { title: "FWC: Opossum profile (about house-cat size; young ride on mother's back at about 80 days)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/opossum/" },
    { title: "UF/IFAS EDIS WEC426 (UW471): Virginia Opossum (nocturnal; don't dig burrows, use logs, woodpiles, barns, abandoned buildings, other burrows; most young born February-June; nearly immune to rabies)", url: UW471 },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (births March-April) and Florida DOH Rabies (raccoons a main wildlife source)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
  ],
  clientQuestions: [
    "Is attic or crawl space cleanup after opossums quoted separately?",
    "Real photos: an opossum den in an attic or crawl space, mesh installed over a vent.",
  ],
};
