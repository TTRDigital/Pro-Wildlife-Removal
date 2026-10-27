import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const ICWDM_ROOF = "https://icwdm.org/species/rodents/roof-rats/";
const ICWDM_NORWAY = "https://icwdm.org/species/rodents/norway-rats/";
const CDC_CLEANUP = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";
const CDC_RODENTS = "https://www.cdc.gov/healthy-pets/rodent-control/index.html";
const FWC_SQUIRRELS = "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf";
const FDOH_LEPTO = "https://www.floridahealth.gov/diseases-and-conditions/disease/leptospirosis/";

export const extra_squirrelPoopVsRatPoopHowToSpotTheDifference: PostExtra = {
  slug: "squirrel-poop-vs-rat-poop-how-to-spot-the-difference",
  seoDescription: "Squirrel poop vs rat poop: compare size, shape, color and where droppings turn up, plus health risks and safe cleanup steps for a Central Florida home.",
  more: p(
    "If you are still unsure what left the droppings, compare them with our guides to [what rat poop looks like](/blog/what-does-rat-poop-look-like-a-comprehensive-guide/), [cleaning up rat droppings in a Florida attic](/blog/how-to-clean-up-rat-droppings-florida-attic/) and [working out which animal is in your attic](/blog/what-animal-is-in-my-attic/). For help in Central Florida, read about [rat removal](/services/rat-removal/), [squirrel removal](/services/squirrel-removal/) and [squirrels in the attic](/services/squirrels-in-attic/), or call (844) 264-6254.",
  ),
  faq: [
    faq(
      "What should I compare in pictures of squirrel poop versus rat poop?",
      `Size, ends and spread. In ICWDM's descriptions, roof rat droppings are about 1/2 inch with pointed ends, Norway rat droppings up to 3/4 inch with blunt ends, and rats leave them clumped in small groups ([ICWDM](${ICWDM_NORWAY})). When you match images online against what you found, also note where it was: kitchen and pantry, or attic.`,
    ),
    faq(
      "Do roof rat droppings look different from Norway rat droppings?",
      "Yes. The Internet Center for Wildlife Damage Management (ICWDM) describes roof rat droppings as about 1/2 inch long with pointed ends, while Norway rat scat can be as large as 3/4 inch long with blunt ends. ICWDM places the roof rat along the lower half of the East Coast and throughout the Gulf States, which takes in Florida.",
    ),
    faq(
      "Is it safe to sweep or vacuum droppings in the attic?",
      "No. The CDC says not to vacuum or sweep rodent urine, droppings or nesting material, because doing so can put tiny droplets containing viruses into the air. Its steps are to wear rubber or plastic gloves, spray the droppings with a bleach solution (1 part bleach to 9 parts water) or an EPA-registered disinfectant until very wet, let it soak for 5 minutes, then wipe it up with paper towels.",
    ),
    faq(
      "How can I tell if the droppings mean the animals are still there?",
      "The CDC notes that droppings alone can make it hard to know whether rodents are still active. Its suggestion is to clean the area safely and look again later: droppings that show up after cleaning point to an active rodent presence.",
    ),
    faq(
      "How many droppings does one rat leave in a day?",
      "ICWDM's Norway rat profile says rats deposit about 40 to 50 droppings per day, usually clumped in small groups. The same page notes that other rodents tend to scatter their scat instead.",
    ),
    faq(
      "Can I trap a squirrel that is leaving droppings in my attic?",
      "FWC's Living with Squirrels guide says eastern gray and southern flying squirrels may be taken as nuisance wildlife when they cause property damage, threaten public safety or cause an annoyance in, under or upon a building, under rule 68A-9.010 F.A.C. Big Cypress fox squirrels may not be taken as nuisance wildlife.",
    ),
  ],
  sources: [
    { title: "ICWDM: Roof Rats (droppings about 1/2 inch long with pointed ends; range along the lower East Coast and Gulf States)", url: ICWDM_ROOF },
    { title: "ICWDM: Norway Rats (scat up to 3/4 inch with blunt ends; about 40 to 50 droppings per day, clumped in small groups)", url: ICWDM_NORWAY },
    { title: "CDC: How to Clean Up After Rodents (do not sweep or vacuum; 1 part bleach to 9 parts water; soak 5 minutes)", url: CDC_CLEANUP },
    { title: "CDC: Controlling Wild Rodent Infestations (droppings found after cleaning indicate active rodents)", url: CDC_RODENTS },
    { title: "FWC: Living with Squirrels (nuisance take of gray and flying squirrels under 68A-9.010 F.A.C.; Big Cypress fox squirrel excluded)", url: FWC_SQUIRRELS },
    { title: "Florida Department of Health: Leptospirosis (infection through contact with water, soil, or vegetation contaminated with the urine of infected animals)", url: FDOH_LEPTO },
  ],
};
