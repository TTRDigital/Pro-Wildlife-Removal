import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";

/*
 * Squirrels in the attic. Target searches: "squirrels in attic", "squirrel in attic Tampa".
 * Links to the squirrel removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const FLYER = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";

export const squirrelsInAttic: Service = {
  slug: "squirrels-in-attic",
  title: "Squirrels in the Attic",
  // Temporary group until Jade adds "attic" to ServiceGroup; keeps these out of the 9-animal grid.
  group: "control",
  animal: "squirrel",
  order: 24,
  summary: "Running overhead in the daytime? How to confirm squirrels in the attic, when babies are likely, and how the roofline gets repaired.",
  cardImage: images.squirrelRemoval2,
  design: "new",
  hero: {
    eyebrow: "SQUIRRELS IN THE ATTIC",
    heading: "Squirrels in the Attic in Tampa Bay",
    highlight: "Squirrels in the Attic",
    text: p("Scampering in the ceiling while you're having breakfast? Here's how to tell it's squirrels, when to expect a litter and how to keep them out after."),
    image: images.squirrelRemoval2,
    badges: ["Daytime noise", "Spring and fall litters", "Roofline repair"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I know if squirrels are in my attic?",
      text: p(
        "Squirrels are noisy in the daytime, unlike rats. Listen for running in the ceiling after sunrise, look for a chewed opening at the soffit or roof edge, and watch for squirrels using the same spot on the roof. Litters come in spring and autumn. See [squirrel removal](/services/squirrel-removal/) or call (727) 594-7705.",
      ),
      points: ["Noise in daylight", "Chewed roof-edge hole", "Litters spring and fall", "Repair, don't patch"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "What to check",
      heading: "Signs it's squirrels",
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "sunset", title: "Daytime running", text: p("FWC describes gray squirrels as active during the day. Noise overhead in daylight points to them.") },
        { icon: "search", title: "A favorite spot on the roof", text: p("Watch the roof for a while. Squirrels coming and going from the same corner, vent or tile are using it as a door.") },
        { icon: "wrench", title: "Chewing marks outside", text: p("FWC says a squirrel's front teeth grow constantly, so it chews. Fresh gnawing on fascia, soffit or vent edges is a strong clue.") },
        { icon: "leaf", title: "A tree touching the roof", text: p("FWC recommends keeping limbs trimmed well back from the roof. A branch over the house is the usual way up.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "compare",
      tone: "tint",
      eyebrow: "Squirrel or something else?",
      heading: "Gray squirrel, flying squirrel or rat?",
      body: rich(
        table(
          ["", "Gray squirrel", "Southern flying squirrel", "Roof rat"],
          ["When", "Daytime", "Night", "Night"],
          ["Removable as a nuisance", "Yes", "Yes", "Yes (can't be released)"],
          ["Litters", "Spring and autumn", "Spring and autumn", "Up to 6 a year"],
        ),
        p("FWC treats both gray and flying squirrels as nuisance animals when they get into a building. If the noise is light scratching at night, also read about [rats in the attic](/services/rats-in-attic/) and [flying squirrels in Florida](/blog/flying-squirrels-florida/)."),
      ),
    },
    {
      _type: "splitSection",
      _key: "risks",
      eyebrow: "What they're doing up there",
      heading: "What squirrels do to an attic",
      body: rich(
        ul(
          "**Chewed wiring.** FWC lists chewing on wires among the most common squirrel complaints and suggests covering wires and PVC where squirrels reach them.",
          "**Nesting.** FWC notes gray squirrels sometimes nest in attics when they can get in, and the insulation gets flattened and soiled.",
          "**A bigger family.** FWC says Florida squirrels tend to breed twice a year. A winter squatter can be a mother with young by spring.",
          "**An open roof.** Every chewed opening lets in rain and the next animal.",
        ),
      ),
      image: images.squirrelRemoval2,
      imageSide: "right",
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "After they're out",
      heading: "Repairs and cleanup",
      body: p(
        "Once the squirrels are gone, the chewed openings have to be rebuilt stronger than the wood they chewed through, or they'll chew through the patch. Then the attic gets cleaned. The full process is on our [squirrel removal](/services/squirrel-removal/) page.",
      ),
      checklist: [
        "Chewed fascia, soffit and roof edges rebuilt and covered with chew-resistant material",
        "Attic vents and screens checked",
        "Nests and droppings removed",
        "Insulation replaced where needed",
        "Overhanging branches flagged for trimming",
        "[PLACEHOLDER: ask the client: is attic cleanup after squirrels quoted separately from the removal and repairs?]",
      ],
      image: images.squirrelRemoval2,
      imageSide: "left",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Squirrels in the attic: common questions",
      items: [
        faq(
          "Why do squirrels get into attics?",
          "For a dry, protected nest site close to food. FWC says squirrels occur in woodlands and urban areas, especially near pines, oaks and hickories, and sometimes nest in attics when they can get in.",
        ),
        faq(
          "When do squirrels have babies in Florida?",
          "FWC says Florida squirrels tend to breed twice a year, producing litters in spring and autumn. Those are the months to check for young before closing anything.",
        ),
        faq(
          "Will squirrels leave the attic on their own?",
          "They leave every day to feed, then come back. Closing the hole while they're out, without checking for young first, can trap a litter inside.",
        ),
        faq(
          "Can I trap the squirrel myself?",
          "Florida allows cage traps for nuisance gray and flying squirrels, checked at least once every 24 hours. A trapped squirrel can only be released on site, on 40 acres or more in the same county with written permission, or humanely put down. Fox squirrels are protected, and new trapping rules start December 31, 2026.",
        ),
        faq(
          "What if the squirrel is inside the house, not the attic?",
          "FWC's advice: move pets to another room and open an outside door or window so the squirrel can find its own way out.",
        ),
      ],
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What customers say",
      match: "squirrel",
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "More on squirrels",
      limit: 3,
      match: "squirrel",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Squirrels in the ceiling?",
      highlight: "the ceiling?",
      text: p("Call (727) 594-7705. We'll find the way in and check for babies first."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Squirrels in the Attic in Tampa Bay: Signs and Fixes | Pro Wildlife Removal",
    description:
      "Daytime noise in the ceiling? How to confirm squirrels in the attic, Florida's spring and fall litters, trapping rules and roofline repairs in Tampa Bay. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "FWC: Living with Squirrels flyer, June 2026 (gray and flying squirrels as nuisance; breed twice a year, spring and autumn; teeth grow constantly; chewing wires; cover wires and PVC; trim limbs; squirrel in the house; cage traps, 24-hour checks, release rules; Dec 31, 2026 rule change)", url: FLYER },
    { title: "FWC: Squirrel profile (gray squirrel active during the day; sometimes nests in attics; near oaks and hickories)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/" },
    { title: "FWC: Fox squirrel profile (protected from hunting statewide)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (roof rats active at night; up to 6 litters a year)", url: "https://journals.flvc.org/edis/article/view/136514" },
    { title: "FWC: FAQs, nuisance wildlife (non-native animals can't be released)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "UF/IFAS Gardening Solutions: Cavity dwellers (southern flying squirrels are nocturnal, heard in the first hours after sunset)", url: "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/cavity-dwellers/" },
  ],
  clientQuestions: [
    "Is attic cleanup after squirrels quoted separately from the removal and repairs?",
    "Real photos: a chewed roof-edge hole before and after repair.",
  ],
};
