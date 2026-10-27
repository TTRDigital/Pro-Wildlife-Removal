import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/*
 * Squirrels in the attic. Target searches: "squirrels in attic", "squirrel in attic Tampa".
 * Links to the squirrel removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (844) 264-6254", href: "tel:+18442646254" };
const FLYER = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";

export const squirrelsInAttic: Service = {
  slug: "squirrels-in-attic",
  title: "Squirrels in the Attic",
  group: "attic",
  animal: "squirrel",
  order: 24,
  summary: "Running overhead in the daytime? How to confirm squirrels in the attic, when babies are likely, and how the roofline gets sealed.",
  cardImage: images.squirrelRemoval2,
  design: "new",
  hero: {
    eyebrow: "SQUIRRELS IN THE ATTIC",
    heading: "Squirrels in the Attic in Central Florida",
    highlight: "Squirrels in the Attic",
    text: p("Scampering in the ceiling while you're having breakfast? Here's how to tell it's squirrels, when to expect a litter and how to keep them out after."),
    image: images.squirrelRemoval2,
    badges: ["Daytime noise", "Spring and fall litters", "Roofline sealing"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I know if squirrels are in my attic?",
      text: p(
        "Squirrels are noisy in the daytime, unlike rats. Listen for running in the ceiling after sunrise, look for a chewed opening at the soffit or roof edge, and watch for squirrels using the same spot on the roof. Litters come in spring and autumn. See [squirrel removal](/services/squirrel-removal/) or call (844) 264-6254.",
      ),
      points: ["Noise in daylight", "Chewed roof-edge hole", "Litters spring and fall", "Seal it to last"],
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
      _type: "cardsSection",
      _key: "sounds",
      eyebrow: "Listen",
      heading: "When squirrels make noise",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Early morning", text: p("Gray squirrels are active by day, so the attic often wakes up with you: running, scratching and the thump of a squirrel landing on the roof.") },
        { title: "Midday and afternoon", text: p("More trips in and out, and gnawing. FWC says a squirrel's front teeth grow constantly, so chewing never really stops.") },
        { title: "After dark", text: p("Gray squirrels are usually settled for the night. Light activity at night points to rats or flying squirrels, which UF/IFAS describes as nocturnal.") },
        { title: "Spring and autumn", text: p("FWC says those are litter seasons. Steady activity from one spot in those months can mean a nest of young.") },
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
          ["Litters", "Spring and autumn", "Spring and autumn", "Up to 8 a year"],
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
          "**Chewed wiring.** FWC lists chewing damage, from plants to vehicle wires, among frequent squirrel complaints, and suggests covering wires and PVC where squirrels reach them.",
          "**Nesting.** FWC notes gray squirrels sometimes nest in attics when they can get in, and the insulation gets flattened and soiled.",
          "**A bigger family.** FWC says Florida squirrels tend to breed twice a year. A winter squatter can be a mother with young by spring.",
          "**An open roof.** Every chewed opening lets in rain and the next animal.",
        ),
      ),
      image: images.squirrelRemoval2,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "urgent",
      tone: "tint",
      eyebrow: "When it can't wait",
      heading: "Call right away if",
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "critter", title: "A squirrel is loose indoors", text: p("Move pets to another room, close the inside doors and open an outside door or window so it can find its own way out, as FWC suggests. Then find out how it got in.") },
        { icon: "wrench", title: "Wires are chewed", text: p("Exposed wiring in the attic needs an electrician's eye, and the squirrels need to go before they chew more.") },
        { icon: "sound", title: "Babies are crying", text: p("Young left in the attic after the mother is shut out will die there. Don't close the hole until you know.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      eyebrow: "Florida rules",
      heading: "The rules if you're thinking of trapping",
      body: ul(
        "**Gray and flying squirrels can be taken as nuisance animals.** Fox squirrels can't be hunted in Florida, and the threatened Big Cypress fox squirrel can't be trapped or removed without a permit.",
        "**Cage traps must be checked at least once every 24 hours.**",
        "**A trapped squirrel can be released on site, on 40+ acres in the same county with the landowner's written permission, or humanely put down.** Releasing it at a park isn't allowed.",
        TRAP_RULES_2026,
      ),
    },
    {
      _type: "cardsSection",
      _key: "timeline",
      tone: "tint",
      eyebrow: "What it usually takes",
      heading: "Squirrels out, roof closed: the usual order",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Inspection", text: p("Find every chewed hole and weak vent, and check for young.") },
        { number: "2", title: "Removal", text: p("A one-way door or cage traps until no squirrels are left inside.") },
        { number: "3", title: "Sealing", text: p("Chewed holes covered with material that can't be chewed again.") },
        { number: "4", title: "Walk-through", text: p("Nests, droppings and soiled insulation shown to you.", "[PLACEHOLDER: ask the client: how long a typical squirrel job takes]") },
      ],
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "After they're out",
      heading: "Sealing the attic",
      body: p(
        "Once the squirrels are gone, the chewed openings have to be sealed with something stronger than the wood they chewed through, or they'll chew through it again. Rotted wood is a repair the owner arranges with a contractor. Squirrel nests, droppings and urine soak into insulation, and the CDC's advice for rodent waste applies to anyone handling it: don't sweep or vacuum it dry, wet it with disinfectant first, and wear gloves. The full process is on our [squirrel removal](/services/squirrel-removal/) page.",
      ),
      checklist: [
        "Chewed fascia, soffit and roof-edge holes sealed [PLACEHOLDER: ask the client: what material you use to seal squirrel entry points]",
        "Attic vents and screens checked",
        "Overhanging branches flagged for trimming",
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
          "Can squirrels chew through wiring?",
          "Yes. FWC names chewing on everything from plants to vehicle wires as a common squirrel complaint, and suggests covering wires and PVC pipe where squirrels can reach them. If you see bare wire in the attic, have it checked. See [squirrels chewing wires](/blog/squirrels-chewing-wires-expert-guide/).",
        ),
        faq(
          "Do squirrels carry diseases?",
          "The CDC lists squirrels among the rodents that can spread rat-bite fever through bites, scratches, or contact with saliva or urine. Don't handle squirrels or their nests bare-handed.",
        ),
        faq(
          "How do I keep squirrels off my roof?",
          "Trim branches well back from the roof, as FWC recommends, and close damaged soffits, vents, loose tiles and gaps where the roof meets the wall.",
        ),
        faq(
          "Can I trap the squirrel myself?",
          "Florida allows cage traps for nuisance gray and flying squirrels, checked at least once every 24 hours. A trapped squirrel can only be released on site, on 40 acres or more in the same county with written permission, or humanely put down. Fox squirrels can't be hunted, and the threatened Big Cypress fox squirrel can't be trapped without a permit. See the rules above.",
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
      text: p("Call (844) 264-6254. Mention the season, so babies are part of the plan."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Squirrels in the Attic: Signs, Fixes | Pro Wildlife Removal",
    description:
      "Daytime noise in the ceiling? How to confirm squirrels in the attic, Florida's spring and fall litters, trapping rules and roof sealing. (844) 264-6254.",
  },
  sources: [
    { title: "FWC: Living with Squirrels flyer, June 2026 (gray and flying squirrels as nuisance; breed twice a year, spring and autumn; teeth grow constantly; chewing wires; cover wires and PVC; trim limbs; squirrel in the house; cage traps, 24-hour checks, release rules; Dec 31, 2026 rule change)", url: FLYER },
    { title: "FWC: Squirrel profile (gray squirrel active during the day; sometimes nests in attics; near oaks and hickories)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/squirrels/" },
    { title: "FWC: Fox squirrel profile (protected from hunting statewide)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/fox-squirrel/" },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (rats and mice most active at night)", url: "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/" },
    { title: "Florida DOH Gadsden: Rodent control (roof rats most active one hour after sunset and one hour before dawn; up to 8 litters a year)", url: "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/" },
    { title: "FWC: FAQs, nuisance wildlife (non-native animals can't be released)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "UF/IFAS Gardening Solutions: Cavity dwellers (southern flying squirrels are nocturnal, heard in the first hours after sunset)", url: "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/cavity-dwellers/" },
    TRAP_RULES_SOURCE,
    { title: "CDC: How to clean up after rodents (wet with disinfectant, gloves, no sweeping or vacuuming)", url: "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html" },
    { title: "CDC: About rat bite fever (squirrels among carriers; bites, scratches, saliva or urine)", url: "https://www.cdc.gov/rat-bite-fever/about/index.html" },
  ],
  clientQuestions: [
    "How long does a typical squirrel job take?",
    "Is attic cleanup after squirrels quoted separately from the removal and sealing?",
    "Real photos: a chewed roof-edge hole before and after repair.",
  ],
};
