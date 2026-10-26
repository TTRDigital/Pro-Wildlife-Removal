import type { PostExtra } from "./index.ts";
import { faq, p } from "../pt.ts";

const FWC_FEEDING = "https://myfwc.com/conservation/you-conserve/wildlife/feeding/";
const FWC_NUISANCE = "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/";
const FDOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html";
const FWC_RACCOON = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/raccoon/";
const FWC_ROUNDWORM = "https://myfwc.com/research/wildlife/health/raccoon-roundworm/";

export const extra_whatToDoAboutRaccoons: PostExtra = {
  slug: "what-to-do-about-raccoons",
  seoDescription: "What to do about raccoons in Central Florida: signs of a raccoon problem, the health and property risks, Florida feeding and release rules, and next steps.",
  more: p(
    "To dig deeper, see our guides to [signs of raccoons in your home](/blog/signs-of-raccoons-in-your-home/), [how raccoons get into houses](/blog/how-raccoons-enter-homes/), [raccoon trapping rules in Florida](/blog/raccoon-trapping-florida/) and [what to do if you find a baby raccoon](/blog/found-a-baby-raccoon-florida/). You can also learn about [raccoon removal](/services/raccoon-removal/) and [raccoons in the attic](/services/raccoons-in-attic/) across Central Florida, or call (727) 594-7705.",
  ),
  faq: [
    faq(
      "Is it against the law to feed raccoons in Florida?",
      "FWC says Florida Administrative Code rule 68A-4.001 prohibits placing food in a manner that attracts black bears, coyotes, foxes and raccoons. The agency also warns that wildlife fed by people can lose its natural fear of humans, which leads to conflicts such as property damage.",
    ),
    faq(
      "Can I release a raccoon I trapped somewhere else?",
      "Raccoons are native, so FWC rules let a live-caught nuisance raccoon be released on the same contiguous property where it was trapped, or off-site on at least 40 contiguous acres in the same county with the landowner's written permission. A rabies alert or quarantine from the county health department or animal control can rule out transporting it.",
    ),
    faq(
      "Are raccoons a rabies concern in Florida?",
      "Yes. The Florida Department of Health names raccoons and bats as the main wildlife sources of rabies in the state and says infected animals typically expose people and pets through bites. It also warns that the virus can spread to unvaccinated pets.",
    ),
    faq(
      "What time of day are raccoons active?",
      "FWC's raccoon profile says they usually become active in the late afternoon and stay active through the night, though they may shift that pattern depending on where food is available.",
    ),
  ],
  sources: [
    { title: "FWC: Feeding Wildlife (68A-4.001 F.A.C. prohibits placing food in a manner that attracts raccoons; fed wildlife loses fear of people)", url: FWC_FEEDING },
    { title: "FWC: FAQs: Nuisance Wildlife (release of native nuisance wildlife on the capture property or 40+ contiguous acres in the same county with written permission; rabies alerts)", url: FWC_NUISANCE },
    { title: "Florida Department of Health: Rabies (nearly 100% fatal illness in humans; raccoons and bats are the main wildlife sources of rabies in Florida)", url: FDOH_RABIES },
    { title: "FWC: Raccoon Roundworm (people may ingest eggs after working or playing where raccoon feces are present; can damage the central nervous system)", url: FWC_ROUNDWORM },
    { title: "FWC: Raccoon profile (active from late afternoon through the night, varying with food availability)", url: FWC_RACCOON },
  ],
};
