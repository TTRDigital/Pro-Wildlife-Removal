import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const CDC_BAYLIS = "https://www.cdc.gov/baylisascaris/about/index.html";
const DOH_LEPTO = "https://www.floridahealth.gov/diseases-and-conditions/disease/leptospirosis/";
const CDC_TYPHUS = "https://www.cdc.gov/typhus/about/index.html";
const CDC_HISTO = "https://www.cdc.gov/histoplasmosis/about/index.html";

export const extra_tampaWildlifeInfestationDangers: PostExtra = {
  slug: "tampa-wildlife-infestation-dangers",
  seoDescription: "How a wildlife problem grows in a Florida home: entry points, breeding, chewed wires and droppings, and diseases raccoon waste, urine and fleas can spread.",
  more: p(
    "A small problem grows fastest when nobody finds the way in. To learn more, see [common wildlife entry points](/blog/common-wildlife-entry-points/), [how fast rats reproduce](/blog/how-fast-do-rats-reproduce/) in Florida, and the [signs of wildlife damage that need repair](/blog/wildlife-damage-repair-12-signs-you-need-repairs-now/). For specific animals, read about [raccoons in the attic](/services/raccoons-in-attic/), [raccoon removal](/services/raccoon-removal/) and [rat removal](/services/rat-removal/) in Central Florida. Call (844) 264-6254.",
  ),
  faq: [
    faq(
      "Can raccoon droppings make people sick?",
      "They can. The CDC says Baylisascaris infection comes from a roundworm found in raccoons, and people are infected by swallowing its eggs, most often children who put dirt or animal waste in their mouths by mistake. The eggs in raccoon feces are not infectious right away; the CDC says they take 2 to 4 weeks in the environment to become infectious.",
    ),
    faq(
      "Can you get sick from animal urine around your house?",
      "Yes. The Florida Department of Health says leptospirosis is caught through contact with water, soil or plants contaminated by the urine of infected animals, or by touching an infected animal's body fluids directly. It adds that the risk often rises after a hurricane or flood, and that yardwork and outdoor cleaning are among the activities that raise it.",
    ),
    faq(
      "Can fleas from rats spread disease to people?",
      "Yes. The CDC says flea-borne (murine) typhus is caused by the bacteria Rickettsia typhi and spreads to people through contact with infected fleas, naming the Oriental rat flea and the cat flea.",
    ),
  ],
  sources: [
    { title: "CDC: About Baylisascaris (roundworm found in raccoons; people infected by consuming eggs; most infections in children; eggs take 2 to 4 weeks in the environment to become infectious)", url: CDC_BAYLIS },
    { title: "Florida Department of Health: Leptospirosis (contact with water, soil or vegetation contaminated with urine of infected animals; risk often increases after a hurricane or flood; yardwork and outdoor cleaning)", url: DOH_LEPTO },
    { title: "CDC: About typhus fevers (flea-borne or murine typhus caused by Rickettsia typhi; spread through contact with infected fleas; Oriental rat flea and cat flea)", url: CDC_TYPHUS },
    { title: "CDC: About histoplasmosis (Histoplasma fungus lives in soil and spreads in bird and bat droppings that mix in soil)", url: CDC_HISTO },
  ],
};
