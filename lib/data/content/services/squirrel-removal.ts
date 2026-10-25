import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/*
 * Squirrel removal. Target searches: "squirrel removal Tampa" (position 24 today), "squirrels in attic".
 * Replaces today's three squirrel pages (squirrel-removal, squirrel-control,
 * tampa-squirrel-removal); Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const FLYER = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";

export const squirrelRemoval: Service = {
  slug: "squirrel-removal",
  title: "Squirrel Removal",
  group: "removal",
  animal: "squirrel",
  order: 4,
  summary: "Squirrels out of the attic, babies checked for first, the chewed entry repaired and the roofline sealed.",
  cardImage: images.squirrelRemoval2,
  design: "new",
  hero: {
    eyebrow: "SQUIRREL REMOVAL",
    heading: "Squirrel Removal in Tampa Bay",
    highlight: "Squirrel Removal",
    text: p("Running and gnawing in the attic in the morning? We get the squirrels out, repair the hole they chewed and close the roofline so they stay out."),
    image: images.squirrelRemoval2,
    badges: ["Chewed entries repaired", "Babies checked for first"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do you get squirrels out of the attic in Florida?",
      text: p(
        "Check for a nest of young first, then get the squirrels out with a one-way door or cage traps, and repair every gap along the roofline. Florida squirrels have litters in spring and autumn. A trapped squirrel can only be released on site or on approved land in the same county. Call (727) 594-7705.",
      ),
      points: ["Daytime noise", "Litters spring and fall", "Gray and flying only", "Roofline repaired"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have squirrels",
      intro: p("Squirrels keep daylight hours, which is the easiest way to tell them from rats in the attic. More on [squirrels in the attic](/services/squirrels-in-attic/)."),
      variant: "icon",
      columns: 3,
      cards: [
        {
          icon: "sunset",
          title: "Noise in the morning and afternoon",
          text: p("Gray squirrels keep daylight hours, so running and scratching overhead during the day points to them. Noise after dark points to rats, or to flying squirrels, which come out at night."),
        },
        {
          icon: "wrench",
          title: "A chewed hole at the roofline",
          text: p("A gnawed opening in a soffit, fascia board or roof edge, with fresh, light-colored wood showing around it."),
        },
        {
          icon: "search",
          title: "Squirrels on the roof",
          text: p("Squirrels running along the roof, or jumping onto it from an oak or a branch that hangs over the house, and then disappearing at the same spot."),
        },
        {
          icon: "home",
          title: "A nest in the insulation",
          text: p("FWC notes gray squirrels sometimes nest in attics when they can get in. Look for leaves and shredded material piled in the eaves or the insulation."),
        },
        {
          icon: "sound",
          title: "Activity in spring or fall",
          text: p("Florida squirrels tend to have their young in spring and autumn. Steady activity from one spot in those months can mean a litter."),
        },
        {
          icon: "critter",
          title: "Chewed wires",
          text: p("FWC says squirrels' front teeth never stop growing, so they chew constantly. Wires and PVC in the attic, and in parked cars, are common targets."),
        },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why squirrels in the attic are more than a noise",
      body: rich(
        p(
          "A squirrel has to chew. FWC explains that its front teeth grow constantly and chewing keeps them filed down. Outside, that's bark and nuts. Inside your attic, it's whatever is there.",
        ),
        ul(
          "**Wiring and pipes.** FWC lists chewed wires among the most common squirrel complaints and suggests covering PVC and electrical wires where squirrels can reach them.",
          "**The roof.** A chewed opening lets in rain, and it's a ready-made door for the next animal.",
          "**More squirrels.** FWC says Florida squirrels tend to breed twice a year, with litters averaging one to four young. A pair in the attic in winter can be a family by spring.",
        ),
      ),
      image: images.squirrelRemoval2,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove squirrels",
      heading: "How a squirrel job works",
      intro: p("Remove, seal, clean: three jobs, done in that order, after a careful look for babies."),
      variant: "numbered",
      columns: 4,
      cards: [
        {
          number: "1",
          title: "Inspect and check for babies",
          text: p(
            "We find the main hole and every weak spot, using FWC's list of common squirrel entries: damaged soffits, broken screens, roof tiles, gaps where the roof meets the wall, and attic vents. In spring and autumn, we look for a litter before anything is closed.",
          ),
        },
        {
          number: "2",
          title: "Remove the squirrels",
          text: p(
            "Usually a one-way door on the main hole lets the squirrels leave and not return. Where that won't work, cage traps are set and checked at least every 24 hours.",
            "[PLACEHOLDER: ask the client: confirm your usual method (one-way doors, cage traps or both) and how often traps are checked]",
          ),
        },
        {
          number: "3",
          title: "Seal every entry",
          text: p("With the attic empty, chewed openings are rebuilt and covered with metal or other material squirrels can't gnaw, and branches touching the roof get flagged for trimming."),
        },
        {
          number: "4",
          title: "Clean up",
          text: p("Nests, droppings and flattened or soiled insulation come out, so nothing is left to draw the next squirrel."),
        },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "What Florida allows for squirrels",
      body: rich(
        ul(
          "**Only gray and flying squirrels can be removed as nuisance animals,** when they're damaging property or causing a problem in, under or on a building (rule 68A-9.010).",
          "**Cage traps are allowed, and must be checked at least every 24 hours.** Any other animal caught by mistake has to be let go on the spot.",
          "**A trapped squirrel has three legal outcomes:** released on the same property, released on land of 40 acres or more in the same county with the owner's written permission, or humanely put down.",
          "**Fox squirrels are different.** These big, often black-faced squirrels are protected from hunting statewide, and the Big Cypress fox squirrel, a state-threatened subspecies, can't be trapped or removed without a permit. If you think yours is a fox squirrel, tell us when you call.",
          TRAP_RULES_2026,
        ),
        p("Read FWC's [Living with Squirrels](" + FLYER + ") flyer, and our post on [why squirrels return after removal](/blog/why-squirrels-return-after-removal/)."),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Repairs and cleanup",
      heading: "Closing the roof for good",
      body: p(
        "Squirrels that lived in an attic know the way back, and a patch of wood is just something new to chew. The repair has to be stronger than the material they chewed through, and it has to cover the other weak spots too, or they'll open the next one.",
      ),
      checklist: [
        "Chewed fascia, soffit and roof edges rebuilt",
        "Openings covered with metal or other chew-resistant material",
        "Attic vents and gable screens checked and reinforced",
        "Nest material and droppings removed from the attic",
        "Insulation the squirrels flattened or soiled replaced where needed",
        "[PLACEHOLDER: ask the client: is there a warranty on squirrel repairs, and how long?]",
      ],
      image: images.squirrelRemoval2,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What squirrel removal costs depends on",
      intro: p("The price is set after the inspection. Most of the difference between jobs is in the repairs."),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "How many holes", text: p("One chewed corner, or a roof with several entries and weak vents.") },
        { title: "The repair work", text: p("Patching a soffit corner versus rebuilding a run of rotted fascia.") },
        { title: "Removal method", text: p("A one-way door, or traps that need return visits.") },
        { title: "Attic cleanup", text: p("Removing nests and droppings, and replacing insulation if needed.") },
      ],
      outro: p("[PLACEHOLDER: ask the client: is the inspection free, and can the site show a price range for squirrel removal?]"),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Squirrel removal in 9 counties",
      intro: p("Oak-shaded neighborhoods from Tampa to Brooksville to Lakeland are squirrel country. We cover all of them."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "squirrel",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Squirrel removal questions",
      items: [
        faq(
          "How do I know it's squirrels and not rats?",
          "Timing is the easiest clue. Gray squirrels keep daylight hours. Noise after dark points to rats, or to flying squirrels, which come out at night. See [squirrel insulation damage](/blog/squirrel-insulation-damage/) for what they do inside.",
        ),
        faq(
          "When do squirrels have babies in Florida?",
          "FWC says Florida's squirrels tend to breed twice a year, with litters in spring and autumn. Litters average one to four young.",
        ),
        faq(
          "A squirrel got into my house. What do I do?",
          "FWC's advice: move your pets to another part of the house, then open an outside door or window in that room so the squirrel can find its own way out.",
        ),
        faq(
          "Can I trap the squirrel and release it at a park?",
          "No. Florida allows release only on the property where it was caught, or on 40 acres or more in the same county with the landowner's written permission. Releasing it somewhere else isn't legal.",
        ),
        faq(
          "Why do squirrels keep coming back after removal?",
          "Because the roof still has a way in. Squirrels chew through soft patches and find the next weak spot. The fix is a proper repair of every opening. Read [why squirrels return after removal](/blog/why-squirrels-return-after-removal/).",
        ),
        faq(
          "Will trimming my trees help?",
          "Yes. FWC recommends keeping tree limbs trimmed well back from the roof so squirrels can't step straight onto it. It won't stop a squirrel that's already inside, but it helps keep the next one off.",
        ),
        faq(
          "Do you remove flying squirrels too?",
          "Yes. The southern flying squirrel is one of Florida's three native squirrels, and it's also treated as a nuisance animal when it gets into a building. Read about [flying squirrels in Florida](/blog/flying-squirrels-florida/).",
        ),
      ],
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Squirrel guides",
      limit: 3,
      match: "squirrel",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Squirrels running in the attic?",
      highlight: "in the attic?",
      text: p("Call (727) 594-7705 any time, day or night. We'll find the hole and close it properly."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Squirrel Removal in Tampa Bay | Squirrels in the Attic | Pro Wildlife Removal",
    description:
      "Squirrels in the attic? We check for babies, remove the squirrels the way Florida law allows, repair the chewed entry and seal the roofline. 9 counties. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "FWC: Living with Squirrels flyer, June 2026 (three native species; breed twice a year, spring and autumn; teeth grow constantly; common entry points; trim limbs; squirrel in the house; 68A-9.010 nuisance take of gray and flying squirrels; cage traps; 24-hour checks; release on site or 40+ acres same county with written permission, or euthanize; Big Cypress fox squirrel needs a permit; Dec 31, 2026 rule change)", url: FLYER },
    { title: "FWC: Squirrel profile (gray squirrel active by day; breeding up to twice a year; litters average one to four; sometimes nest in attics)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/" },
    { title: "FWC: Fox squirrel profile (protected from hunting throughout the state; black faces, white noses and ears)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "FWC: Trap types and trapping rules (24-hour inspections; from Dec 31, 2026: remote-monitored traps physically checked within 12 hours of notification, no animal in a trap longer than 24 hours, relocate or kill within 12 hours of inspection, free Wildlife Trapping Permit after trapping education)", url: "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/trap-types/" },
    { title: "UF/IFAS Gardening Solutions: Cavity dwellers (southern flying squirrels are nocturnal, heard in the first hours after sunset)", url: "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/cavity-dwellers/" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "Squirrels: one-way doors, cage traps or both? How often are traps checked? Where are squirrels released?",
    "Is there a warranty on squirrel repairs, and for how long?",
    "Is the inspection free? Can the site show a price range for squirrel removal?",
    "Real photos: a chewed soffit corner before and after, a one-way door installed.",
  ],
};
