import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const UC_RATS = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const IFAS_SANTA_ROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const IFAS_SARASOTA = "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/";
const IFAS_PINELLAS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";

export const extra_whatKeepsRatsAway: PostExtra = {
  slug: "what-keeps-rats-away",
  seoDescription: "What keeps rats away from a Florida home? Sealed gaps, food in tight bins, trimmed limbs and fixed leaks, plus a look at peppermint and other remedies.",
  more: p(
    "Keeping rats away mostly comes down to closing the gaps they use. To learn more, see [how big of a hole a rat needs](/blog/how-big-of-a-hole-does-a-rat-need/), how [rat exclusion](/blog/rat-exclusion-prevent-reinfestation-and-damage/) keeps them from moving back in, and how to recognize [Florida roof rats](/blog/florida-roof-rats-identification-control-costs/). If they have already settled in overhead, read about [rats in the attic](/services/rats-in-attic/) or our [rat removal](/services/rat-removal/) service in Central Florida. Call (727) 594-7705.",
  ),
  faq: [
    faq(
      "Do ultrasonic rat repellers actually work?",
      "Not for long. UC IPM says rats are startled by unfamiliar noises but quickly get used to repeated sounds, which makes high frequency and ultrasonic devices ineffective for controlling rats in homes and gardens.",
    ),
    faq(
      "How far can a rat jump from a tree onto a roof?",
      "UF/IFAS Extension Santa Rosa County says rats can jump three feet straight up and four feet across, and climb wires, cables, vines and trees to reach a building. That is why trimming limbs back from the roofline matters.",
    ),
    faq(
      "Is chicken wire strong enough to cover vents against rats?",
      "No. UC IPM says never to use lightweight chicken wire because rats can pass through its openings. For vent covers it calls for galvanized expanded metal or galvanized wire cloth with 1/2-inch mesh.",
    ),
    faq(
      "Can a dripping hose or wet lawn draw rats to a yard?",
      "It can. UF/IFAS Extension Sarasota County notes that rodents can get by on as little as a bottle cap full of water, and that over-irrigating leaves standing water that may attract them. Fixing leaks and watering less both help.",
    ),
    faq(
      "How many rodents can barn owls eat?",
      "A lot. UF/IFAS Extension Pinellas County says a nesting pair of barn owls has been documented eating over 3,000 rodents in one year.",
    ),
  ],
  sources: [
    { title: "UC IPM Pest Notes: Rats (rats get used to repeated sounds, so ultrasonic devices are ineffective; never use lightweight chicken wire; 1/2-inch galvanized mesh for vent covers; no repellents have solved a rat problem for more than a very short time; glue traps not generally recommended for nonprofessional use; pea-sized bait of nuts, dried fruit, bacon, dry pet food or peanut butter)", url: UC_RATS },
    { title: "UF/IFAS Extension Santa Rosa County: Controlling Rats and Mice around the Farm (rats jump vertically three feet and horizontally four feet; climb wires, cables, vines and trees)", url: IFAS_SANTA_ROSA },
    { title: "UF/IFAS Extension Sarasota County: Wondering About Wildlife: What to Do About Rodents (rodents can use as little as a bottle cap full of water; over-irrigating creates standing water)", url: IFAS_SARASOTA },
    { title: "UF/IFAS Extension Pinellas County: Rodent management options in and around the home (a nesting pair of barn owls can consume over 3,000 rodents in one year)", url: IFAS_PINELLAS },
  ],
};
