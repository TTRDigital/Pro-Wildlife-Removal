import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in Clearwater (TTR-738, Rhea). Clearwater raccoon facts: the
 * city's own park pages, trash rules and pest tips, the city's split of animal
 * issues, plus the Pinellas feeding rule and rabies table that apply here.
 */
const MOCCASIN = "https://www.myclearwater.com/Neighborhood-Map-Locations/Parks-Trails-and-Recreation-Centers/Moccasin-Lake-Nature-Park";
const KAPOK = "https://www.myclearwater.com/Neighborhood-Map-Locations/Parks-Trails-and-Recreation-Centers/Kapok-Park";
const CLIFF = "https://www.myclearwater.com/Neighborhood-Map-Locations/Parks-Trails-and-Recreation-Centers/Cliff-Stephens-Park";
const TRASH = "https://www.myclearwater.com/Trash-Recycling/Residential-Trash-Collection-Information";
const TIPS = "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Rodent-Control-Tips";
const ISSUE = "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue";
const DOH2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";

export const raccoonRemovalClearwater = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "clearwater-fl",
  placeName: "Clearwater",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-clearwater-fl",
  county: "Pinellas",
  order: 11,
  heroText: "Something heavy walking the ceiling at night, or a soffit pulled loose on your Clearwater house? We track down the raccoon's entry, check for kits, remove the animals and repair the opening. Call (727) 594-7705.",
  answerHeading: "Who handles a raccoon in a Clearwater home?",
  answer:
    "Not the city. Clearwater sends wildlife issues to FWC and Pinellas County, and the county's wildlife help is for sick or injured animals. Pro Wildlife Removal takes raccoons out of Clearwater attics, soffits and crawl spaces, looks for kits before anything is sealed, and repairs the way in. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Trash picked up weekly", "City parks: don't feed wildlife"],
  localHeading: "Raccoons in Clearwater",
  localIntro: "Clearwater's oak-shaded preserves and restored wetlands sit right next to neighborhoods. These are the city and county facts that shape a raccoon job here.",
  local: [
    { icon: "leaf", title: "Named at Moccasin Lake", text: p("The City of Clearwater lists raccoons, gopher tortoises and many birds among the wildlife at Moccasin Lake Nature Park, a 54-acre preserve under mature oaks off Park Trail Lane.") },
    { icon: "balance", title: "Two parks, one rule", text: p("Both Kapok Park and the 44-acre Cliff Stephens Park carry the same instruction on the city's pages: do not feed wildlife. A fed raccoon learns to look for food near people.") },
    { icon: "home", title: "A week between pickups", text: p("Clearwater collects household trash once a week and asks residents to close the cart lid. Rolling the cart out at 7 p.m. the night before, the earliest the city allows, still leaves it at the curb through the night, when raccoons forage.") },
    { icon: "wrench", title: "The city's own pest advice", text: p("Clearwater's pest tips tell residents to use tight-fitting lids on garbage cans and not to leave pet food outside. Both are on every list of raccoon attractants.") },
    { icon: "balance", title: "County nuisance rule applies", text: p("Pinellas County Code Sec. 14-30(4) names raccoons when it makes food or garbage set out to attract wildlife a public nuisance.") },
    { icon: "search", title: "Rabies in Pinellas, 2025", text: p("The state health department's 2025 county table listed a single rabid raccoon for Pinellas. Never handle a raccoon, even one that looks friendly.") },
    { icon: "map-pin", title: "Dead raccoon on the road", text: p("Clearwater Solid Waste handles dead animals on public roads, rights-of-way and medians inside city limits. If a raccoon dies on your property, removing it falls to the property owner.") },
  ],
  contactsIntro: "Who handles which raccoon problem in Clearwater, from the city's and agencies' own pages.",
  contacts: [
    { icon: "building", title: "Dead raccoon on a city street", text: p("Clearwater Solid Waste, (727) 562-4920, or the city's dead animal report form.") },
    { icon: "phone", title: "A bite or scratch", text: p("See a doctor, then call DOH-Pinellas at 727-824-6932.") },
    { icon: "home", title: "A raccoon in your house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "The state's trap, check and release rules, explained for homeowners." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Clearwater raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does the City of Clearwater remove raccoons?",
      "No. The city's animal issue page sends wildlife matters to FWC and pets to Pinellas County Animal Services. A raccoon living in a Clearwater house calls for a private wildlife company.",
    ),
    faq(
      "Are there raccoons in Clearwater parks?",
      "Yes. The city names raccoons among the wildlife at Moccasin Lake Nature Park, and parks such as Kapok and Cliff Stephens ask visitors not to feed wildlife.",
    ),
    faq(
      "How do I stop raccoons getting into my Clearwater trash?",
      "Keep the lid closed, as the city asks, and don't roll the cart out before 7 p.m. the night before pickup. Bring pet food in, too: Clearwater's own pest tips warn against leaving it outside.",
    ),
    faq(
      "Who removes a dead raccoon in Clearwater?",
      "On a public road, right-of-way or median, Clearwater Solid Waste. On private property, the owner is responsible, and a wildlife company can handle it for you.",
    ),
    faq(
      "How soon can you get to a raccoon in Clearwater?",
      "Same-day raccoon appointments are often available in Clearwater. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a raccoon call in Clearwater]",
    ),
  ],
  ctaHeading: "Raccoon in your Clearwater home?",
  ctaText: "Clearwater raccoon calls go to (727) 594-7705.",
  seo: {
    title: "Raccoon Removal in Clearwater, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in Clearwater, FL: raccoons out of attics and soffits, kits checked, entries repaired, plus city trash and park rules. (727) 594-7705.",
  },
  sources: [
    { title: "City of Clearwater: Moccasin Lake Nature Park (54-acre nature preserve under a canopy of mature oaks; gopher tortoises, raccoons and many birds; 2750 Park Trail Ln.)", url: MOCCASIN },
    { title: "City of Clearwater: Kapok Park (do not feed wildlife)", url: KAPOK },
    { title: "City of Clearwater: Cliff Stephens Park (44 acres; do not feed wildlife)", url: CLIFF },
    { title: "City of Clearwater: Residential trash collection (once a week; close the lid; curb no earlier than 7 p.m. the night before, removed by 7 a.m. the day after; Solid Waste (727) 562-4920)", url: TRASH },
    { title: "City of Clearwater: Rodent control tips (tight-fitting lids on garbage cans; avoid leaving pet food outside)", url: TIPS },
    { title: "City of Clearwater: Report an animal issue (Pinellas County Animal Services and FWC manage animal-related issues; Solid Waste handles dead animals on public roads, rights of way or medians; dead animals on private property are the owner's responsibility)", url: ISSUE },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30(4): food or garbage that attracts cats, dogs, raccoons, coyotes or other wildlife is a public nuisance)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (Pinellas: 1 raccoon)", url: DOH2025 },
    { title: "Pinellas County: Injured or orphaned wildlife (Animal Services wildlife pickup/transport assistance for sick or injured wildlife)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "DOH-Pinellas: Rabies information (report a possible rabies exposure at 727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
  ],
  clientQuestions: ["Typical response time for a raccoon call in Clearwater?", "A real Google review from a Clearwater raccoon job (TTR-723), and real Clearwater raccoon job photos."],
});
