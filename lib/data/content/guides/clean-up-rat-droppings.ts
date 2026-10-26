import type { Post } from "../../../types";
import { faq, h3, p, rich, ul } from "../pt.ts";

/* Guide (Ben, Oct 26): cleaning up rat droppings and nesting in a Florida attic. Queries: "clean rat poop", "dried rat poop", "does rat poop smell". Carcass removal lives in dead-animal-smell; identification in what-does-rat-poop-look-like. No fresh-vs-old or insulation replace-vs-clean claims: no official source gives them. */
const CDC_CLEAN = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";
const CDC_RODENTS = "https://www.cdc.gov/healthy-pets/rodent-control/index.html";
const CDC_HANTA = "https://www.cdc.gov/hantavirus/prevention/index.html";
const DOH_HPS = "https://www.floridahealth.gov/diseases-and-conditions/disease/hantavirus-pulmonary-syndrome/";
const DOH_LEPTO = "https://www.floridahealth.gov/diseases-and-conditions/disease/leptospirosis/";

export const cleanUpRatDroppings: Post = {
  slug: "how-to-clean-up-rat-droppings-florida-attic",
  title: "How to Clean Up Rat Droppings and Nesting in a Florida Attic",
  excerpt:
    "Rat droppings and nests can carry disease, and sweeping them up is the one thing health officials say not to do. Here are the CDC's steps, what to do with soiled insulation, and when to bring in help.",
  date: "2026-10-26T00:00:00+00:00",
  modified: "2026-10-26T00:00:00+00:00",
  author: "Josh Holmberg",
  body: rich(
    p(
      "**The short answer:** air the space out, put on gloves, and soak droppings, urine and nesting material with disinfectant or a bleach mix before you touch them. Wipe them up with paper towels, bag the waste, then mop. Never sweep or vacuum. For a heavy infestation, full protective gear is needed. Call (727) 594-7705 for help.",
    ),
    h3("Why you can't just sweep it up"),
    p(
      `The CDC says rodent diseases mainly reach people through the air they breathe, and that sweeping or vacuuming droppings, urine or nests can put tiny droplets carrying viruses into the air ([CDC](${CDC_CLEAN})). Florida DOH gives the same warning about hantavirus: keep the area well ventilated and avoid anything that raises dust, including sweeping and vacuuming ([Florida DOH](${DOH_HPS})).`,
    ),
    h3("Before you start"),
    ul(
      `**Find out what you're dealing with.** The CDC says rodent droppings are pointed at one end and often contain hair ([CDC](${CDC_RODENTS})). Our guide to [what rat poop looks like](/blog/what-does-rat-poop-look-like-a-comprehensive-guide/) helps tell rats from other animals.`,
      "**Make sure the rats are gone,** or you'll be cleaning again next month. Seal the entry points and trap any rats still inside first.",
      "**Air it out.** For homes and sheds, the CDC says to open doors and windows for half an hour and stay out while it airs.",
      "**Gear up:** rubber or plastic gloves at a minimum, and old clothes you can wash right after.",
    ),
    h3("Step by step"),
    ul(
      `**Mix fresh bleach solution:** 1½ cups of household bleach in a gallon of water, which the CDC gives as 1 part bleach to 9 parts water. A household cleaner labeled "disinfectant" also works ([CDC](${CDC_CLEAN})).`,
      "**Spray until everything is very wet** and leave it for 5 minutes, or as long as the label says.",
      "**Pick it up with paper towels,** not a broom, and drop them in a covered trash can that gets emptied often.",
      "**Nests:** soak the nesting material the same way, then seal it in a plastic bag inside a second bag.",
      "**Mop or sponge the area** with disinfectant once the droppings are gone.",
      "**Wash your gloved hands** with soap and water or disinfectant before taking the gloves off, then wash your bare hands with warm water and soap.",
    ),
    h3("Insulation, ducts and fabrics"),
    p(
      `The CDC's advice on insulation is short: if exposed insulation is soiled with urine and droppings, bag it for removal. If rats have been in your heating and cooling system, it says to bring in a professional rodent service. Soiled bedding and clothes go in hot water with detergent, and rugs and upholstery can be shampooed with a commercial disinfectant or steam cleaner ([CDC](${CDC_CLEAN})).`,
    ),
    p(
      "How much insulation has to come out depends on how far the nesting and droppings have spread. Our [attic cleanup cost guide](/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/) explains what drives the size of the job.",
    ),
    h3("When it's too big to do yourself"),
    p(
      `The CDC calls for extra precautions in homes with a heavy rodent infestation: coveralls, rubber boots or shoe covers, gloves, goggles, and a respirator. It names a half-mask air-purifying respirator with a HEPA filter, or a powered one with HEPA filters ([CDC](${CDC_CLEAN})). A packed attic in Florida heat, in that gear, is hard work. That's usually the point to call for help.`,
    ),
    h3("The health risks in Florida"),
    ul(
      `**Hantavirus:** the CDC says the virus can get into the air when fresh urine, droppings or nesting material from an infected rodent is stirred up ([CDC](${CDC_HANTA})). Florida DOH says it has been found in cotton rats in Florida, though most human cases have been in the western U.S. ([Florida DOH](${DOH_HPS})).`,
      `**Leptospirosis:** Florida DOH says people catch it through water, soil or plants contaminated with the urine of infected animals, or by touching an infected animal's body fluids ([Florida DOH](${DOH_LEPTO})).`,
      "**Food:** the CDC warns that rodent waste can spread disease when it gets into food, so throw out anything in the pantry the rats reached.",
    ),
    p(
      "If you get sick with fever and aches in the weeks after a cleanup, tell your doctor about the rodent exposure. See also [rats in the attic](/services/rats-in-attic/) and [rat removal](/services/rat-removal/), and if the smell is a dead rat, our [dead animal smell guide](/blog/dead-animal-smell-in-wall-or-attic-florida/).",
    ),
  ),
  faq: [
    faq(
      "Can I vacuum rat droppings?",
      "No. The CDC and Florida DOH both say not to sweep or vacuum droppings, urine or nests, because it puts virus particles into the air. Soak them with disinfectant and wipe them up instead.",
    ),
    faq(
      "Is dried rat poop safe to touch?",
      "Don't assume so. Treat old droppings the same as new ones: gloves, a thorough soak with disinfectant, paper towels and a sealed bag. No health agency says dried droppings are safe.",
    ),
    faq(
      "Do I have to replace insulation with rat droppings in it?",
      "The CDC says soiled exposed insulation should be bagged for removal. How much of an attic needs it depends on how far the nesting and droppings have spread.",
    ),
    faq(
      "Why does my attic smell after rats?",
      "Urine and droppings build up where rats nest and travel, and a rat that died in the attic smells far worse. Cleaning up the waste and finding any carcass usually deals with it.",
    ),
  ],
  seo: {
    title: "How to Clean Up Rat Droppings in a Florida Attic",
    description:
      "How to clean up rat droppings and nests safely, with the CDC's steps: why not to sweep or vacuum, the bleach mix, soiled insulation, and when to get help.",
  },
  sources: [
    { title: "CDC: How to clean up after rodents, Apr 2024 (ventilate 30 minutes; gloves; disinfectant or 1.5 cups bleach per gallon, 1:9; soak 5 minutes; paper towels; covered garbage can; mop; don't sweep or vacuum; nests double-bagged; bag soiled insulation; professional service for ducts; launder and shampoo; heavy infestation: coveralls, boots, gloves, goggles, HEPA respirator)", url: CDC_CLEAN },
    { title: "CDC: Controlling wild rodent infestations, Apr 2024 (droppings pointed at one end, often with hair; disease through contaminated air or food)", url: CDC_RODENTS },
    { title: "CDC: Hantavirus prevention, May 2024 (virus gets into the air when fresh urine, droppings or nesting materials are stirred up)", url: CDC_HANTA },
    { title: "Florida DOH: Hantavirus pulmonary syndrome (found in cotton rats in Florida; most cases in the western U.S.; ventilate; avoid sweeping or vacuuming)", url: DOH_HPS },
    { title: "Florida DOH: Leptospirosis (contact with water, soil or vegetation contaminated with urine of infected animals, or their body fluids)", url: DOH_LEPTO },
  ],
  clientQuestions: ["Do you remove and replace attic insulation after rats, or refer it out?"],
};
