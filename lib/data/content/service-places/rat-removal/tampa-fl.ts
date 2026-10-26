import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/* Rat removal in Tampa (TTR-738). Tampa has no rat-in-city page, so this is its rat page. Every card is one sourced fact about rats, or the conditions that feed and shelter them, in Tampa or Hillsborough County. */
const LUNGWORM = "https://www.floridamuseum.ufl.edu/science/potentially-lethal-parasite-rat-lungworm-found-throughout-florida/";
const SWEEP = "https://www.tampa.gov/solid-waste/programs/sweep";
const NE = "https://www.tampa.gov/neighborhood-enhancement";
const UTC2021 = "https://www.tampa.gov/sites/default/files/document/2023/tampa-utc-2021-hires.pdf";
const IN1397 = "https://ask.ifas.ufl.edu/publication/IN1397";

export const ratRemovalTampa = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "tampa-fl",
  placeName: "Tampa",
  placeKind: "city",
  location: "about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl",
  county: "Hillsborough",
  order: 2,
  heroText: "Scratching over the ceiling of a Tampa home at night? Our rat removal experts find the gaps roof rats use, seal them and trap the rats left inside. Call (727) 594-7705.",
  answerHeading: "Who clears rats out of a Tampa house?",
  answer:
    "A private company. The City of Tampa sends wildlife on private property to private removal services, and its role with rats is the trash and code rules that keep them from settling in. Pro Wildlife Removal closes the openings, traps what's left in the attic and cleans up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rat lungworm found here", "Yearly S.W.E.E.P. pickup"],
  localHeading: "What to know about rats in Tampa",
  localIntro: "Tampa's trees, trash rules and code enforcement all shape a rat problem. Here's what the city and the University of Florida say.",
  local: [
    { icon: "search", title: "Rat lungworm in Hillsborough", text: p("A 2017 University of Florida study found rat lungworm in rats and snails from Hillsborough County. The study sampled 18 counties statewide, and nearly 23 percent of the rats it examined tested positive. The parasite can cause meningitis in people.") },
    { icon: "leaf", title: "Trees next to the roof", text: p("UF/IFAS says rats use tree limbs that touch or hang over a house as a highway inside. In 2021, 42% of Tampa's tree canopy was on residential properties, so many roofs have a branch close by.") },
    { icon: "home", title: "Clear the clutter for free", text: p("Residential solid waste customers in single-family homes and buildings of four units or fewer get one prescheduled S.W.E.E.P. collection a year at no additional cost, for piles up to 10 cubic yards of furniture, appliances, tree limbs and the like. Old piles in the yard shelter rats.") },
    { icon: "wrench", title: "Report the lot next door", text: p("Tampa's Neighborhood Enhancement division takes complaints about accumulated junk, trash or debris on private property and about overgrown lots or yards, both of which give rats cover.") },
    { icon: "map-pin", title: "What counts as overgrown", text: p("The city defines overgrowth to include shrubs, trees, vines, bushes and weeds. UF/IFAS notes overgrown shrubs and vines shelter pests.") },
    { icon: "critter", title: "Two garbage pickups a week", text: p("Tampa picks up household garbage twice a week for every city utility customer, and wants the cart lid shut with nothing hanging out. A cart that closes is one less meal for roof rats.") },
  ],
  contactsIntro: "Who to call about rats and the conditions behind them in Tampa.",
  contacts: [
    { icon: "wrench", title: "Junk and overgrowth", text: p("Tampa's Neighborhood Enhancement division handles code complaints about accumulated junk and overgrown lots.") },
    { icon: "home", title: "Bulk pickup and trash", text: p("City of Tampa Solid Waste customer service, (813) 274-8811, answers questions on S.W.E.E.P. and trash pickup.") },
    { icon: "users", title: "Rats in the house", text: p("A private company, per the City of Tampa. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Norway rat vs roof rat", href: "/blog/norway-rat-vs-roof-rat-florida/", text: "Which rat you have changes where to look for the way in." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Tampa rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Should I call a rat exterminator in Tampa?",
      "You can call us instead. We're a wildlife removal company, not an exterminator, so the job is finding how rats get into your Tampa home, trapping the ones inside and sealing those entry points, without spraying.",
    ),
    faq(
      "Does the City of Tampa get rid of rats?",
      "Not inside homes. The city's animal services page sends wildlife on private property to private removal services. The city does enforce codes on junk and overgrowth and runs trash and bulk pickup.",
    ),
    faq(
      "Is rat lungworm a risk in Tampa?",
      "A 2017 University of Florida study found it in Hillsborough County rats and snails. The researchers advise washing produce, teaching children not to eat snails, and washing hands after handling snails.",
    ),
    faq(
      "Can I report a neighbor's yard that's attracting rats?",
      "You can report accumulated junk, trash or debris and overgrown lots to Tampa's Neighborhood Enhancement division, which enforces the city's property codes.",
    ),
    faq(
      "How do I get rid of an old couch or brush pile that rats are living in?",
      "Your yearly S.W.E.E.P. collection is prescheduled; call Solid Waste customer service at (813) 274-8811 to check your date. Piles over 10 cubic yards may incur extra disposal fees.",
    ),
    faq(
      "How fast can a Tampa rat problem be looked at?",
      "Same-day appointments for rat inspections are often available in Tampa. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Rats in your Tampa home?",
  ctaText: "Rats in a Tampa attic or the trees by your roof? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Tampa, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Tampa, FL: roof rats sealed out, trapped and cleaned up, plus Tampa's bulk pickup, code rules and rat lungworm findings. (727) 594-7705.",
  },
  sources: [
    { title: "Florida Museum of Natural History (UF): Rat lungworm found throughout Florida, June 28, 2017 (rats and snails in Hillsborough tested positive; 18 counties sampled, rats from 6 of them; nearly 23 percent of rats examined positive; can cause meningitis; wash produce, teach children not to eat snails, wash hands after handling snails)", url: LUNGWORM },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (rats use limbs that touch or overhang the house as a highway; overgrown shrubs and vines make attractive harborages for pests)", url: IN1397 },
    { title: "City of Tampa: Tree Canopy and Urban Forest Analysis 2021, Feb 2023 (42% of citywide canopy acreage on residential properties)", url: UTC2021 },
    { title: "City of Tampa: S.W.E.E.P. (residential customers in single-family homes and buildings of four units or fewer; one prescheduled collection a year at no additional cost; piles up to 10 cubic yards, larger piles may incur fees; appliances, furniture, tree limbs; (813) 274-8811)", url: SWEEP },
    { title: "City of Tampa: Neighborhood Enhancement (complaints: accumulated junk, trash or debris on private property; overgrown lots or yards)", url: NE },
    { title: "City of Tampa: Overgrown lot or yard complaint (overgrowth includes shrubs, trees, vines, bushes and weeds)", url: "https://www.tampa.gov/service/overgrown-lot-or-yard-complaint" },
    { title: "City of Tampa: Residential trash collection (garbage twice per week for all utility customers; lid closed with no garbage extending out)", url: "https://www.tampa.gov/solid-waste/programs/residential-trash-collection" },
    { title: "City of Tampa: Animal services, Hillsborough County (wildlife on private property: use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
  ],
  clientQuestions: ["A real Google review from a Tampa rat job (TTR-723), and real Tampa rat job photos."],
});
