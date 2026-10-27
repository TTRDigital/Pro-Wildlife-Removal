import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const CDC_TRAP = "https://www.cdc.gov/healthy-pets/rodent-control/trap-up.html";
const CDC_SEAL = "https://www.cdc.gov/healthy-pets/rodent-control/seal-up.html";
const CDC_CLEAN = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";
const UC_RATS = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const ICWDM_ROOF = "https://icwdm.org/species/rodents/roof-rats/";
const ICWDM_NORWAY = "https://icwdm.org/species/rodents/norway-rats/";
const IFAS_SANTA_ROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";

export const extra_howToGetRidOfRatsInTheHouse: PostExtra = {
  slug: "how-to-get-rid-of-rats-in-the-house",
  more: p(
    "Knowing which rat you have changes where the traps go, so start with our [Norway rat vs roof rat](/blog/norway-rat-vs-roof-rat-florida/) guide. If you hear them behind drywall, read [rats in the walls](/blog/rats-in-the-walls-florida/), and before you clean up, see [how to clean up rat droppings](/blog/how-to-clean-up-rat-droppings-florida-attic/) safely. You can also learn about [rats in the attic](/services/rats-in-attic/), [dead animal removal](/services/dead-animal-removal/) when a smell turns up, and our Central Florida [rat removal](/services/rat-removal/) service. Call (844) 264-6254.",
  ),
  faq: [
    faq(
      "Is steel wool enough to plug a rat hole?",
      "The CDC says to fill small holes with steel wool and put caulk around it to hold it in place, or use spray foam. For larger holes it lists lath screen, metal, cement, hardware cloth or metal sheeting. UC IPM adds that rats can chew through plastic, foam, wood and caulk on their own.",
    ),
    faq(
      "How many traps does a house with rats need?",
      "More than most people expect. UC IPM says a dozen or more traps might be necessary for a heavily infested home, placed about 10 to 20 feet apart, so the trapping period stays short.",
    ),
    faq(
      "Where should traps go if roof rats are the problem?",
      "Up high as well as on the floor. UC IPM says roof rat traps often need to go aboveground on ledges, shelves, branches, fences, pipes or overhead beams, secured to the surface if possible.",
    ),
    faq(
      "Can I vacuum up rat droppings?",
      "No. The CDC warns that vacuuming or sweeping rodent urine, droppings or nests can put tiny droplets containing viruses into the air. Instead, wear rubber or plastic gloves, spray the mess with disinfectant or a bleach solution (1.5 cups of bleach per gallon of water) until very wet, let it soak 5 minutes, then wipe it up with paper towels.",
    ),
  ],
  sources: [
    { title: "ICWDM: Roof Rats (droppings about 1/2 inch long with pointed ends)", url: ICWDM_ROOF },
    { title: "ICWDM: Norway Rats (droppings as large as 3/4 inch long with blunt ends)", url: ICWDM_NORWAY },
    { title: "UF/IFAS Extension Santa Rosa County: Controlling Rats and Mice around the Farm (rats squeeze through holes as small as 1/2 inch)", url: IFAS_SANTA_ROSA },
    { title: "CDC: How to Trap Up to Remove Rodents (snap traps recommended; do not use glue traps and live traps, which can scare rodents into urinating and increase the chance of getting sick)", url: CDC_TRAP },
    { title: "CDC: How to Seal Up to Prevent Rodents (fill small holes with steel wool and caulk around it or use spray foam; lath screen, metal, cement, hardware cloth or metal sheeting for larger holes)", url: CDC_SEAL },
    { title: "CDC: How to Clean Up After Rodents (don't vacuum or sweep; 1.5 cups bleach in 1 gallon of water; soak 5 minutes; wear rubber or plastic gloves)", url: CDC_CLEAN },
    { title: "UC IPM Pest Notes: Rats (rats chew through plastic, foam, wood and caulk; a dozen or more traps, 10 to 20 feet apart; roof rat traps on ledges, shelves, branches, fences, pipes or beams; electrocution traps need frequent checks and prebaiting; set traps at right angles to the wall with the trigger end nearly touching it, or in pairs if parallel; use disposable gloves for dead rodents and wash thoroughly after handling traps)", url: UC_RATS },
  ],
};
