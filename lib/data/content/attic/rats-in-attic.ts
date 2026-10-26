import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";

/*
 * Rats in the attic. Target searches: "rats in attic Tampa", "rats in attic".
 * Links to the rat removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const ENY224 = "https://journals.flvc.org/edis/article/view/136514";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const SANTAROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const IRDOH = "https://indianriver.floridahealth.gov/wp-content/uploads/sites/32/2025/05/Rodent_Control_Booklet.pdf";

export const ratsInAttic: Service = {
  slug: "rats-in-attic",
  title: "Rats in the Attic",
  group: "attic",
  animal: "rat",
  order: 21,
  summary: "Scratching overhead at night? How to tell it's rats in the attic, what they damage, and how they get out.",
  cardImage: images.ratRemoval2,
  design: "new",
  hero: {
    eyebrow: "RATS IN THE ATTIC",
    heading: "Rats in the Attic in Central Florida",
    highlight: "Rats in the Attic",
    text: p("Scratching in the ceiling after dark is the classic sign. Here's how to be sure it's rats, what they're doing up there, and what it takes to fix."),
    image: images.ratRemoval2,
    badges: ["Night noises", "Droppings and rub marks", "Entry points"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I know if I have rats in my attic?",
      text: p(
        "Listen at night and look in the attic. Scratching and scurrying after dark, half-inch pointed droppings, greasy smudges on rafters and chewed wires mean rats, usually roof rats, which Florida DOH says like high places such as attics. The fix is sealing every gap, then trapping: see [rat removal](/services/rat-removal/). Call (727) 594-7705.",
      ),
      points: ["Noise after dark", "Half-inch droppings", "Greasy rub marks", "Seal, then trap"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "What to check",
      heading: "Five things to check in your attic",
      intro: p("Take a flashlight, wear gloves and a mask, and don't touch anything with bare hands. These are the signs UF/IFAS and Florida DOH list for rats."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "droppings", title: "Droppings on the insulation", text: p("Roof rat droppings are up to half an inch long and spindle-shaped. Shiny black means fresh; gray and crumbly means old.") },
        { icon: "drop", title: "Smudges on the rafters", text: p("Dark, greasy marks where rats brush the same beam or top plate every night. Roof rats can leave curved swing marks on rafters.") },
        { icon: "wrench", title: "Chewed wire and wood", text: p("Light-colored, splintery gnawing is fresh. Look closely at wiring, the edges of beams and the vent screens.") },
        { icon: "search", title: "Paths through the insulation", text: p("UF/IFAS says rats use the same paths every night, usually along walls. In an attic, look for worn trails through the insulation along the edges.") },
        { icon: "home", title: "A nest, and squeaking", text: p("Shredded insulation and debris piled in a protected spot. UF/IFAS notes young rats often squeak in the nest.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "compare",
      tone: "tint",
      eyebrow: "Rats or something else?",
      heading: "Is it rats, or squirrels?",
      body: rich(
        p("Rats and squirrels are easy to confuse from below, and the timing usually settles it."),
        table(
          ["", "Roof rats", "Gray squirrels"],
          ["When you hear them", "At night, most in the hour after sunset and the hour before dawn", "In the day"],
          ["Way in", "A gap as small as 1/2 inch", "Damaged soffits, vents, roof tiles"],
          ["Breeding", "6 to 8 young, up to 8 litters a year", "1 to 4 young, spring and autumn"],
        ),
        p("If the noise is in the day, read about [squirrels in the attic](/services/squirrels-in-attic/). If it's a heavy thump at night, it may be [raccoons](/services/raccoons-in-attic/)."),
      ),
    },
    {
      _type: "cardsSection",
      _key: "sounds",
      eyebrow: "Listen",
      heading: "What you hear, and when",
      intro: p("UF/IFAS says rats are most active at night, and a Florida DOH guide calls rodents secretive. The pattern of the noise tells you a lot."),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Soon after dark", text: p("Florida DOH says roof rats are most active in the hour after sunset and the hour before dawn. Scratching and quick runs across the ceiling after you turn in are the classic start.") },
        { title: "Late at night", text: p("Gnawing, a steady scratch in one spot, and the odd scuffle. UF/IFAS notes rodents moving at night often scratch, gnaw and fight.") },
        { title: "Squeaking from one place", text: p("High squeaks from the same corner, night after night, usually mean a nest of young.") },
        { title: "Noise in the daytime", text: p("Rats out in daylight usually means a large population, food running short, or sick or poisoned rats. That's a reason to act now, not later.") },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      eyebrow: "What they're doing up there",
      heading: "What rats do to an attic",
      body: rich(
        ul(
          "**Wiring.** Rats gnaw to keep their ever-growing teeth short, and a Florida DOH guide warns they can cause fires by chewing the insulation on electrical wires.",
          "**Insulation.** They tunnel through it, nest in it and soil it with droppings and urine, which ruins what keeps your house cool.",
          "**Your health.** The CDC says rodents spread disease through droppings, urine, saliva and bites, and warns against sweeping or vacuuming droppings.",
          "**More rats.** Florida DOH says young roof rats become sexually active 2 to 3 months after birth, so a few rats in the fall can be many by spring.",
        ),
      ),
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "urgent",
      tone: "tint",
      eyebrow: "When it can't wait",
      heading: "Call right away if you notice",
      variant: "icon",
      columns: 2,
      cards: [
        { icon: "critter", title: "A rat in the living space", text: p("A rat in the kitchen, a bedroom or a cabinet means they've found a way down from the attic or walls. Close the room off and call.") },
        { icon: "wrench", title: "Chewed wiring", text: p("Bare or chewed wires in the attic are a fire risk, according to Florida DOH. Have an electrician check the circuit, and get the rats out.") },
        { icon: "odor", title: "A dead smell", text: p("A rat that dies in a wall or attic leaves a strong smell. Our [dead animal removal](/services/dead-animal-removal/) page covers finding it.") },
        { icon: "droppings", title: "Droppings near food", text: p("UF/IFAS Extension advises throwing out food you think rodents have touched, and keeping young children, pregnant people and anyone with a weak immune system away from soiled areas.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "Getting them out",
      heading: "How to get rats out of an attic and keep them out",
      intro: p("The full process is on our [rat removal](/services/rat-removal/) page. In short:"),
      variant: "numbered",
      columns: 3,
      cards: [
        { number: "1", title: "Close every gap", text: p("UF/IFAS says rat-proofing only works if it blocks every possible entry: roof returns, vents, plumbing stacks, A/C lines.") },
        { number: "2", title: "Trap those inside", text: p("The rats shut in by the sealing are trapped along their runways until the activity stops.") },
        { number: "3", title: "Show you the attic", text: p("Droppings, nests and soiled insulation are pointed out, along with chewed wiring.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "timeline",
      eyebrow: "What it usually takes",
      heading: "A typical rats-in-the-attic job, start to finish",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Inspection", text: p("The roof, attic and outside walls are checked for every gap and the extent of the droppings.") },
        { number: "2", title: "Sealing", text: p("Openings are closed with rodent-resistant materials, all of them, so no new rats get in.") },
        { number: "3", title: "Trapping and checks", text: p("Rats shut inside are trapped. UF/IFAS warns rats probe new seals in the first two weeks, so the work is checked often then.") },
        { number: "4", title: "Final check", text: p("When the activity stops, the seals get a last look.", "[PLACEHOLDER: ask the client: how long a typical rat job takes, start to finish]") },
      ],
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "After the rats",
      heading: "Cleaning an attic after rats: the CDC steps",
      body: p(
        "The CDC's steps for rodent droppings start with airing the space out for 30 minutes and putting on rubber or plastic gloves. Don't sweep or vacuum: soak the droppings and nesting in disinfectant or 1 part bleach to 9 parts water, wait five minutes, wipe up with paper towels, then disinfect the surfaces and wash your hands. That works for a garage shelf. An attic is a bigger job: heat, tight spaces and droppings spread through inches of insulation, which can't be wiped clean. Soiled insulation is bagged and removed, and the attic floor and framing are cleaned and disinfected.",
      ),
      checklist: [
        "Soiled insulation noted in the inspection",
        "Droppings and nests located on the attic floor and eaves",
        "Chewed wiring flagged for an electrician",
      ],
      imageSide: "left",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Rats in the attic: common questions",
      items: [
        faq(
          "Why are rats in my attic?",
          "Shelter, close to food and water. Florida DOH says roof rats nest in trees and plants but generally like high places such as attics. UF/IFAS says rats climb wires, pipes, vines and trees to get into a building. Fruit trees, pet food and bird seed nearby help.",
        ),
        faq(
          "How long can rats live in an attic?",
          "As long as the way in stays open. UF/IFAS gives a roof rat's life span as about a year, but the colony keeps going as young rats grow up. See [how long rats can live in an attic](/blog/how-long-can-rats-live-in-an-attic/).",
        ),
        faq(
          "Will the rats leave on their own?",
          "Not while the attic gives them shelter and the gap stays open. The attic has to be sealed and the rats inside removed.",
        ),
        faq(
          "Are rats in the attic dangerous?",
          "They can be. Florida DOH links chewed wiring to fires, and the CDC links rodent droppings and urine to disease. Don't sweep or vacuum droppings, and keep children out of the attic.",
        ),
        faq(
          "Can rats get from the attic into the house?",
          "Yes. UF/IFAS says rats climb wires, pipes and rough walls, squeeze through cracks half an inch wide, and can even come up through toilets. A rat seen indoors means the attic problem has spread.",
        ),
        faq(
          "Is it safe to sleep with rats in the attic?",
          "The main risks are chewed wiring, droppings and, less often, bites; UF/IFAS notes rats sometimes bite sleeping children. Florida DOH warns chewed wires can start fires, and the CDC links rodent droppings and urine to disease. Get it dealt with soon, and keep the attic hatch closed meanwhile.",
        ),
        faq(
          "How much does attic cleanup after rats cost?",
          "It depends on how much insulation is soiled and how big the attic is. See [attic wildlife cleanup costs in Florida](/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/) for what drives the price.",
        ),
        faq(
          "Can I just put poison in the attic?",
          "UF/IFAS Extension calls rodenticides a last resort, to be used only in tamper-resistant bait stations. Poison does nothing about the gap the rats use, and more will come.",
        ),
      ],
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What customers say",
      match: "rat",
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "More on rats in the attic",
      limit: 3,
      match: "attic",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Hearing rats overhead?",
      highlight: "overhead?",
      text: p("Call (727) 594-7705. We'll find the gaps and get your attic back."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Rats in the Attic: Signs and Removal | Pro Wildlife Removal",
    description:
      "Scratching in the ceiling at night? How to tell it's rats in the attic, what they damage, and how sealing and trapping get them out. Call (727) 594-7705.",
  },
  sources: [
    { title: "Florida DOH Gadsden: Rodent control (roof rats like high places such as attics, nest in trees and plants; most active one hour after sunset and one hour before dawn; up to 8 litters a year of 6-8 young; sexually active 2-3 months after birth; signs: gnawing, droppings, grease stains from fur; Norway rats out by day when numbers are high or food is threatened)", url: GADSDEN },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (most active at night; rodents seen repeatedly by day mean an established population; holes as small as 1/2 inch for rats; climb pipes, wires, vines and trees; rodent-proofing must block all possible entry points)", url: SANTAROSA },
    { title: "Florida DOH Indian River: Rodent control booklet (rev. 2008; rodents are secretive and active at night; dark, greasy rub marks on beams; fires from chewing the insulation on electrical wires)", url: IRDOH },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (2013, archived; roof rat droppings up to 1/2 inch, spindle-shaped; fresh vs old droppings and gnawing; rafter swing marks; same paths along walls; young squeak in the nest; rodents scratch, gnaw and fight at night; sick or poisoned rats out by day; seals probed in the first 2 weeks; roof rats live about 1 year; climb rough walls, come up through toilets; bite sleeping children)", url: ENY224 },
    { title: "FWC: Squirrel profile and Living with Squirrels (gray squirrels active by day; litters of 1 to 4, spring and autumn)", url: "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf" },
    { title: "CDC: Controlling wild rodent infestations (diseases via droppings, urine, saliva, bites)", url: "https://www.cdc.gov/healthy-pets/rodent-control/index.html" },
    { title: "CDC: How to clean up after rodents (ventilate, gloves, bleach 1:9, 5 minutes, paper towels, no sweeping or vacuuming)", url: "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html" },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (rodenticides last resort, tamper-resistant stations)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (discard possibly contaminated food; keep vulnerable people away from contaminated areas)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
  ],
  clientQuestions: [
    "How long does a typical rat job take, from inspection to cleanup?",
    "Can the site show a price range for attic cleanup?",
    "What insulation do you install after an attic cleanup, and is attic restoration quoted separately?",
    "Real photos: rat droppings and runways in a client attic, a cleaned and re-insulated attic.",
  ],
};
