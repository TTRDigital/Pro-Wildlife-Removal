import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const CDC_TRAP = "https://www.cdc.gov/healthy-pets/rodent-control/trap-up.html";
const CDC_SEAL = "https://www.cdc.gov/healthy-pets/rodent-control/seal-up.html";
const UC_RATS = "https://ipm.ucanr.edu/home-and-landscape/rats/";
const IFAS_PINELLAS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const ICWDM_ROOF = "https://icwdm.org/species/rodents/roof-rats/";
const ICWDM_NORWAY = "https://icwdm.org/species/rodents/norway-rats/";
const IFAS_SANTA_ROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const IFAS_SARASOTA = "https://blogs.ifas.ufl.edu/sarasotaco/2026/08/12/wondering-about-wildlife-rodents/";

export const extra_effectiveRatControlTips: PostExtra = {
  slug: "effective-rat-control-tips",
  seoDescription: "Ten rat control tips for Central Florida homes: seal entry points, store food tight, cut back limbs, set snap traps by walls and keep poison bait outdoors.",
  more: p(
    "Want to go deeper on any of these tips? Our guide to [rat entry points](/blog/rat-entry-points/) covers where to look and what to seal, [catching a rat in the house](/blog/how-to-catch-a-rat-in-the-house-a-comprehensive-guide-for-florida-homeowners/) walks through trap setup, and [rat bait stations and safety](/blog/rat-bait-stations-and-safety-a-comprehensive-guide/) explains where poison does and doesn't belong. If the activity is overhead, read about [rats in the attic](/services/rats-in-attic/), or see our [rat removal](/services/rat-removal/) service for Central Florida homes. Call (844) 264-6254.",
  ),
  faq: [
    faq(
      "How do you know when the rats are finally gone?",
      "The CDC says to keep trapping until nothing is caught: if no rodents are captured for a week and no new signs show up, the rats are gone. It also advises checking bait weekly and refilling or moving it as needed for at least 15 days.",
    ),
    faq(
      "Why won't rats go near a trap I just set?",
      "Rats are wary of anything unfamiliar. UC IPM notes they often avoid traps and baits for the first several days, and maybe weeks, after placement. The CDC suggests pre-baiting traps without setting them, then setting them once you see the bait being eaten.",
    ),
    faq(
      "How far from the house should firewood and compost bins sit?",
      "The CDC recommends keeping compost bins at least 100 feet from your house and moving woodpiles 100 feet or more away, with the wood raised at least one foot off the ground.",
    ),
    faq(
      "Can rat poison end up hurting owls in Florida?",
      "Yes. UF/IFAS Extension Pinellas County reports that several owls died in local parks and necropsy results confirmed rodenticide poisoning. It recommends rodent proofing, cleanup and trapping first, with poison baits only as a last resort.",
    ),
  ],
  sources: [
    { title: "ICWDM: Roof Rats (droppings about 1/2 inch long with pointed ends)", url: ICWDM_ROOF },
    { title: "ICWDM: Norway Rats (droppings as large as 3/4 inch long with blunt ends)", url: ICWDM_NORWAY },
    { title: "UF/IFAS Extension Santa Rosa County: Controlling Rats and Mice around the Farm (rats squeeze through holes as small as 1/2 inch)", url: IFAS_SANTA_ROSA },
    { title: "UF/IFAS Extension Sarasota County: Wondering About Wildlife: What to Do About Rodents (rodenticides as a last resort, in tamper-resistant bait stations away from children and pets)", url: IFAS_SARASOTA },
    { title: "CDC: How to Trap Up to Remove Rodents (no captures for a week and no new signs means the rats are gone; check bait weekly for at least 15 days; pre-bait traps)", url: CDC_TRAP },
    { title: "CDC: How to Seal Up to Prevent Rodents (compost bins at least 100 feet from the house; woodpiles 100 feet or more away, raised at least one foot)", url: CDC_SEAL },
    { title: "UC IPM Pest Notes: Rats (rats often avoid traps and baits for the first several days, and maybe weeks)", url: UC_RATS },
    { title: "UF/IFAS Extension Pinellas County: Rodent management options in and around the home (owl deaths confirmed as rodenticide poisoning; poison baits as a last resort)", url: IFAS_PINELLAS },
  ],
};
