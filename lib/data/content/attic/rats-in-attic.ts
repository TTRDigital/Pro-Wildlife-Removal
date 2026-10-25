import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";

/*
 * Rats in the attic. Target searches: "rats in attic Tampa", "rats in attic".
 * Links to the rat removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const ENY224 = "https://journals.flvc.org/edis/article/view/136514";

export const ratsInAttic: Service = {
  slug: "rats-in-attic",
  title: "Rats in the Attic",
  group: "attic",
  animal: "rat",
  order: 21,
  summary: "Scratching overhead at night? How to tell it's rats in the attic, what they damage, and how the attic gets cleaned up.",
  cardImage: images.ratRemoval2,
  design: "new",
  hero: {
    eyebrow: "RATS IN THE ATTIC",
    heading: "Rats in the Attic in Tampa Bay",
    highlight: "Rats in the Attic",
    text: p("Scratching in the ceiling after dark is the classic sign. Here's how to be sure it's rats, what they're doing up there, and what it takes to fix."),
    image: images.ratRemoval2,
    badges: ["Night noises", "Droppings and rub marks", "Attic cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I know if I have rats in my attic?",
      text: p(
        "Listen at night and look in the attic. Scratching and scurrying after dark, half-inch pointed droppings, greasy smudges on rafters and chewed wires mean rats, almost always roof rats in Florida. The fix is sealing every gap, then trapping: see [rat removal](/services/rat-removal/). Call (727) 594-7705.",
      ),
      points: ["Noise after dark", "Half-inch droppings", "Greasy rub marks", "Seal, then trap"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "What to check",
      heading: "Five things to check in your attic",
      intro: p("Take a flashlight, wear gloves and a mask, and don't touch anything with bare hands. These are the signs UF/IFAS lists for rats."),
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
        p("Rats and squirrels are the two most common attic noises, and the timing usually settles it."),
        table(
          ["", "Roof rats", "Gray squirrels"],
          ["When you hear them", "At night, most in the first half of the night", "In the day"],
          ["Way in", "A gap as small as 1/2 inch", "A chewed hole in the soffit, fascia or roof edge"],
          ["Breeding", "6 to 8 young, up to 6 litters a year", "1 to 4 young, spring and autumn"],
        ),
        p("If the noise is in the day, read about [squirrels in the attic](/services/squirrels-in-attic/). If it's a heavy thump at night, it may be [raccoons](/services/raccoons-in-attic/)."),
      ),
    },
    {
      _type: "splitSection",
      _key: "risks",
      eyebrow: "What they're doing up there",
      heading: "What rats do to an attic",
      body: rich(
        ul(
          "**Wiring.** Rats gnaw every day to keep their teeth short, and UF/IFAS warns they can start fires by chewing electrical wires.",
          "**Insulation.** They tunnel through it, nest in it and soil it with droppings and urine, which ruins what keeps your house cool.",
          "**Your health.** The CDC says rodents spread disease through droppings, urine, saliva and bites, and warns against sweeping or vacuuming droppings.",
          "**More rats.** UF/IFAS says young roof rats can breed at 3 to 5 months, so a few rats in the fall can be many by spring.",
        ),
      ),
      image: images.post1776984146059,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "Getting them out",
      heading: "How rats get out of an attic for good",
      intro: p("The full process is on our [rat removal](/services/rat-removal/) page. In short:"),
      variant: "numbered",
      columns: 3,
      cards: [
        { number: "1", title: "Close every gap", text: p("UF/IFAS says rat-proofing only works if it blocks every possible entry: roof returns, vents, plumbing stacks, A/C lines.") },
        { number: "2", title: "Trap those inside", text: p("The rats shut in by the sealing are trapped along their runways until the activity stops.") },
        { number: "3", title: "Clean and restore", text: p("Droppings, nests and soiled insulation come out, the attic is disinfected, and insulation is replaced where needed.") },
      ],
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "Attic cleanup",
      heading: "Cleaning an attic after rats",
      body: p(
        "For a few droppings in a garage, the CDC's steps work: air the space out, glove up, soak the droppings in disinfectant or 1 part bleach to 9 parts water, wait five minutes and wipe up with paper towels. An attic is a bigger job: heat, tight spaces, and droppings spread through inches of insulation.",
      ),
      checklist: [
        "Soiled insulation bagged and removed",
        "Droppings and nests cleared from the attic floor and eaves",
        "Surfaces disinfected",
        "New insulation installed where the old had to go",
        "Chewed wiring flagged for an electrician",
        "[PLACEHOLDER: ask the client: what insulation you install after cleanup, and whether attic restoration is quoted separately]",
      ],
      image: images.post1776984146059,
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
          "Shelter, close to food and water. UF/IFAS says roof rats thrive in attics, roof spaces and palm trees, prefer to nest off the ground, and climb wires, pipes and trees to get there. Fruit trees, pet food and bird seed nearby help.",
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
          "They can be. UF/IFAS links chewed wiring to house fires, and the CDC links rodent droppings and urine to disease. Don't sweep or vacuum droppings, and keep children out of the attic.",
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
      text: p("Call (727) 594-7705, any time. We'll find the gaps and get your attic back."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Rats in the Attic in Tampa Bay: Signs and Removal | Pro Wildlife Removal",
    description:
      "Scratching in the ceiling at night? How to tell it's rats in the attic, what they damage, and how sealing, trapping and attic cleanup work in Tampa Bay. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (roof rats thrive in attics, nest off the ground, climb wires and pipes; droppings up to 1/2 inch, spindle-shaped; fresh vs old droppings and gnawing; rub marks and rafter swing marks; runways; most active first half of the night; 6-8 young, up to 6 litters; maturity 3-5 months; live about 1 year; wires and fires; half-inch cracks; block every entry)", url: ENY224 },
    { title: "FWC: Squirrel profile and Living with Squirrels (gray squirrels active by day; litters of 1 to 4, spring and autumn)", url: "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf" },
    { title: "CDC: Controlling wild rodent infestations (diseases via droppings, urine, saliva, bites)", url: "https://www.cdc.gov/healthy-pets/rodent-control/index.html" },
    { title: "CDC: How to clean up after rodents (ventilate, gloves, bleach 1:9, 5 minutes, paper towels, no sweeping or vacuuming)", url: "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html" },
    { title: "UF/IFAS Extension Sarasota County: What to do about rodents (rodenticides last resort, tamper-resistant stations)", url: "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/" },
  ],
  clientQuestions: [
    "What insulation do you install after an attic cleanup, and is attic restoration quoted separately?",
    "Real photos: rat droppings and runways in a client attic, a cleaned and re-insulated attic.",
  ],
};
