import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const UF_SANTA_ROSA = "https://blogs.ifas.ufl.edu/santarosaco/2016/01/29/controlling-rats-and-mice-around-the-farm/";
const ICWDM_ROOF = "https://icwdm.org/species/rodents/roof-rats/";

export const extra_ratsEnteringSoffits: PostExtra = {
  slug: "rats-entering-soffits",
  seoDescription: "Rats entering soffits can use gaps as small as 1/2 inch. Learn signs of soffit entry, what an inspection checks, and sealing options in Central Florida.",
  more: p(
    "For more on roofline entry, read our guides to [soffit damage and wildlife intrusions](/blog/soffit-damage-and-wildlife-intrusions/), [rat entry points around the house](/blog/rat-entry-points/) and [telling Norway rats from roof rats](/blog/norway-rat-vs-roof-rat-florida/). Central Florida homeowners can also learn about [rat removal](/services/rat-removal/) and [rats in the attic](/services/rats-in-attic/). Call (844) 264-6254.",
  ),
  faq: [
    faq(
      "How small a soffit gap can a rat fit through?",
      "UF/IFAS Extension in Santa Rosa County says rats and mice can squeeze through holes just large enough for their heads to pass, as small as 1/2 inch for rats and 1/4 inch for mice. A gap that looks too narrow from the ground can still be an entry point.",
    ),
    faq(
      "What material should be used to close a rat gap in a soffit?",
      "The same UF/IFAS article lists mortar, concrete, sheet metal, or hardware cloth of 19 gauge or heavier with no openings more than 1/4 inch for sealing the places rodents enter buildings.",
    ),
    faq(
      "Can rats reach the roofline without an overhanging tree?",
      "Yes. UF/IFAS notes that rats can climb wires, cables, vines and trees to enter a building, and can jump three feet straight up, so utility lines and vines on walls are routes to check along with tree limbs.",
    ),
    faq(
      "Are roof rats found in Florida?",
      "The Internet Center for Wildlife Damage Management places the roof rat along the lower half of the East Coast and throughout the Gulf States, and says it is more at home in warm climates than the Norway rat.",
    ),
  ],
  sources: [
    { title: "UF/IFAS Extension Santa Rosa County: Controlling Rats and Mice around the Farm (1/2 inch holes for rats; 19-gauge hardware cloth with openings no more than 1/4 inch; rats climb wires, cables, vines and trees)", url: UF_SANTA_ROSA },
    { title: "ICWDM: Roof Rats (range along the lower half of the East Coast and the Gulf States; more at home in warm climates)", url: ICWDM_ROOF },
  ],
};
