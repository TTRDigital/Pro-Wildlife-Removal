import { images } from "../../images.ts";
import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (TTR-738 rats and bats): rats in your car engine. No soy-wire claim (no primary source). Existing post rat-damage-electrical-wiring-prevention covers house wiring; this one is about vehicles. */
const UC = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const UCANR = "https://ucanr.edu/blog/pests-urban-landscape/article/your-rat-management-questions-answered";
const ILL = "https://extension.illinois.edu/blogs/illinois-wildside/2026-02-19-mouse-house";
const PINELLAS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";
const SARASOTA = "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/";

export const ratsInCarEngine: Post = {
  slug: "rats-in-car-engine-florida",
  title: "Rats in Your Car Engine in Florida: Signs and Prevention",
  excerpt:
    "Rats chew engine wiring and nest under the hood, especially in cars that sit. Here are the signs, why it happens, and what university experts say works to keep them out.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  image: images.ratRemoval2,
  body: rich(
    p(
      "**The short answer:** rats nest in engine bays and chew the insulation on wires, which can cause costly breakdowns. Look for droppings, nesting material and chewed wires under the hood. Drive the car often, park away from food and clutter, and deal with the rats living near where you park. Call (727) 594-7705 if they're coming from the house.",
    ),
    h3("Signs rats are in your car"),
    ul(
      "**Droppings** on top of the engine, the battery or the air filter housing.",
      "**Nesting material** such as leaves, insulation, paper or fabric packed into corners of the engine bay or the air filter box.",
      "**Chewed wires, hoses or tubes,** and warning lights or electrical problems that come out of nowhere.",
      "**A bad smell** from the vents when the fan or heat is on.",
    ),
    p(
      `University of Illinois Extension lists the same signs and notes rodents can damage wires, tubes and upholstery and fill vital parts with nest material ([Illinois Extension](${ILL})). The University of California's IPM program says rats commonly gnaw the insulation on engine wires, leading to malfunctions and expensive repairs ([UC IPM](${UC})).`,
    ),
    h3("Why Florida cars get them"),
    p(
      `A parked car offers warmth, cover and nesting material close to food. UF/IFAS Extension in Florida says rodents gnaw structural, mechanical and electrical parts. Around Florida homes, roof rats find plenty of shelter: UF/IFAS notes that a skirt of dead leaves on a palm creates rodent habitat, and that roof rats can jump three feet up and more than four feet across ([UF/IFAS](${IN1397})). A car parked under a palm or beside a woodpile is an easy target.`,
    ),
    h3("What works"),
    ul(
      `**Drive it.** Illinois Extension's first tip is to use your car often. A car that sits for days is a quiet shelter.`,
      `**Park away from food and nesting material,** such as garbage cans, bird feeders, fruit trees, cardboard and stored paper, and in a closed garage if you can ([Illinois Extension](${ILL})).`,
      `**Remove what feeds them.** UF/IFAS Extension in Pinellas County says to remove garbage, pet food, bird feed and fallen fruit ([UF/IFAS](${PINELLAS})).`,
      `**Trim palm skirts and limbs** near the house and the parking spot, as UF/IFAS advises.`,
      `**Trap near the car.** UF/IFAS Extension in Sarasota calls spring-loaded snap traps the recommended method for homeowners ([UF/IFAS](${SARASOTA})). Set them where children and pets can't reach.`,
      `**Use a cover that seals.** UC IPM says a weighted car cover only works if it touches the ground all the way around ([UC IPM](${UC})).`,
    ),
    h3("What doesn't"),
    p(
      `Smells and sounds sold as repellents haven't held up. University of California experts say no plants have been proven to keep rats away and that high-frequency ultrasonic devices aren't effective in homes and gardens ([UC ANR](${UCANR})). Illinois Extension says it's unclear how well repellents work. Rats can also chew through plastic and foam, so stuffing gaps under the hood isn't a fix.`,
    ),
    h3("Fix the source"),
    p(
      `If rats keep coming back, they're probably living nearby, often in your attic or garage. UC IPM says lasting control usually takes work across the property and the neighborhood ([UC IPM](${UC})). See [rat removal](/services/rat-removal/), [rats in the attic](/services/rats-in-attic/) and our post on [rat damage to electrical wiring](/blog/rat-damage-electrical-wiring-prevention/) in the house.`,
    ),
  ),
  faq: [
    faq(
      "How do I know if a rat is living in my car?",
      "Look under the hood for droppings, a nest of leaves, paper or insulation, and chewed wires or hoses. A musty smell from the vents is another clue.",
    ),
    faq(
      "Does peppermint oil keep rats out of a car?",
      "University of California experts say no plants have been proven to keep rats away. Driving the car often, parking away from food and trapping nearby work better.",
    ),
    faq(
      "Will an ultrasonic device under the hood work?",
      "University experts say high-frequency ultrasonic devices aren't effective against rats in homes and gardens, and there's no good evidence they work in cars either.",
    ),
    faq(
      "Why do the rats keep coming back to my car?",
      "Usually because they live close by, in the attic, garage, a woodpile or a palm. Removing the nearby population and its food is what stops it.",
    ),
  ],
  seo: {
    title: "Rats in Your Car Engine in Florida | Pro Wildlife Removal",
    description:
      "Rats in your car engine? The signs, why Florida cars attract them, what university experts say keeps rats out from under the hood, and what doesn't work.",
  },
  sources: [
    { title: "University of California IPM: Rats (gnaw engine wire insulation causing malfunctions and expensive repairs; weighted car cover must touch the ground; chew plastic and foam; neighborhood-wide management)", url: UC },
    { title: "UC ANR: Your rat management questions answered (no plants proven to deter rats; high-frequency ultrasonic devices not effective)", url: UCANR },
    { title: "University of Illinois Extension: Mouse house, Feb 19, 2026 (vehicles: chewed wires and tubes, upholstery, nesting material; droppings, odor; use your car often; park away from food and nesting material; repellents unclear)", url: ILL },
    { title: "UF/IFAS Extension Pinellas: Management of rodents (remove garbage, pet food, bird feed, fallen fruit)", url: PINELLAS },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (a skirt of dead palm leaves makes rodent habitat; roof rats jump three feet up and more than four feet across; prune limbs away from the house)", url: IN1397 },
    { title: "UF/IFAS Extension Santa Rosa: Controlling rats and mice around the farm (gnaw structural, mechanical and electrical components)", url: "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/" },
    { title: "UF/IFAS Extension Sarasota: Wondering about wildlife: rodents, Aug 2026 (snap traps recommended for homeowners)", url: SARASOTA },
  ],
  clientQuestions: ["Do you handle rats nesting in vehicles or garages, or only in the house?"],
};
