import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/* Rat removal in Tampa (TTR-738). Tampa has no rat-in-city page, so this is its rat page. Every card is one sourced fact about rats, or the conditions that feed and shelter them, in Tampa or Hillsborough County. */
const LUNGWORM = "https://www.floridamuseum.ufl.edu/science/potentially-lethal-parasite-rat-lungworm-found-throughout-florida/";
const SWEEP = "https://www.tampa.gov/solid-waste/programs/sweep";
const NE = "https://www.tampa.gov/neighborhood-enhancement";
const UFMP = "https://www.tampa.gov/city-planning/natural-resource-planning/urban-forest-management-plan";
const ENY224 = "https://journals.flvc.org/edis/article/view/136514";

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
  heroText: "Scratching over the ceiling of a Tampa home at night? We find the gaps roof rats use, seal them, trap the rats left inside and clean the attic. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in a Tampa home?",
  answer:
    "A private company. The City of Tampa sends wildlife on private property to private removal services, and its role with rats is the trash and code rules that keep them from settling in. Pro Wildlife Removal closes the openings, traps what's left in the attic and cleans up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rat lungworm found here", "Free yearly bulk pickup"],
  localHeading: "What to know about rats in Tampa",
  localIntro: "Tampa's trees, trash rules and code enforcement all shape a rat problem. Here's what the city and the University of Florida say.",
  local: [
    { icon: "search", title: "Rat lungworm in Hillsborough", text: p("A 2017 University of Florida study found rat lungworm in rats and snails from Hillsborough County. Across 18 counties, nearly 23 percent of rats tested positive. The parasite can cause meningitis in people.") },
    { icon: "leaf", title: "Trees next to the roof", text: p("UF/IFAS says roof rats climb trees and vines to reach a house. In Tampa, half of the city's tree canopy, 13,956 acres, grows on residential lots, so many roofs have a branch close by.") },
    { icon: "home", title: "Clear the clutter for free", text: p("Tampa's S.W.E.E.P. program gives utility customers one scheduled bulk pickup a year at no extra cost, for piles up to 10 cubic yards of furniture, appliances, limbs and the like. Old piles in the yard shelter rats.") },
    { icon: "wrench", title: "Report the lot next door", text: p("Tampa's Neighborhood Enhancement division takes complaints about accumulated junk, trash or debris on private property and about overgrown lots or yards, both of which give rats cover.") },
    { icon: "map-pin", title: "What counts as overgrown", text: p("The city defines overgrowth to include shrubs, trees, vines, bushes and weeds. Vines on a wall are a rat ladder as well as a code problem.") },
    { icon: "critter", title: "Two garbage pickups a week", text: p("Tampa picks up household garbage twice a week for every city utility customer, and wants the cart lid shut with nothing hanging out. A cart that closes is one less meal for roof rats.") },
  ],
  contactsIntro: "Who to call about rats and the conditions behind them in Tampa.",
  contacts: [
    { icon: "wrench", title: "Junk and overgrowth", text: p("Tampa's Neighborhood Enhancement division handles code complaints about accumulated junk and overgrown lots.") },
    { icon: "home", title: "Bulk pickup and trash", text: p("City of Tampa customer service, (813) 274-8811, schedules S.W.E.E.P. and other solid waste service.") },
    { icon: "users", title: "Rats in the house", text: p("A private company, per the City of Tampa. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Norway rat vs roof rat", href: "/blog/norway-rat-vs-roof-rat-florida/", text: "Which rat you have changes where to look for the way in." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Tampa rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does the City of Tampa get rid of rats?",
      "Not inside homes. The city's animal services page sends wildlife on private property to private removal services. The city does enforce codes on junk and overgrowth and runs trash and bulk pickup.",
    ),
    faq(
      "Is rat lungworm a risk in Tampa?",
      "A University of Florida study found it in Hillsborough County rats and snails in 2017. Don't handle rats or slugs bare-handed, wash produce from the garden, and keep children away from droppings.",
    ),
    faq(
      "Can I report a neighbor's yard that's attracting rats?",
      "You can report accumulated junk, trash or debris and overgrown lots to Tampa's Neighborhood Enhancement division, which enforces the city's property codes.",
    ),
    faq(
      "How do I get rid of an old couch or brush pile that rats are living in?",
      "Book your free yearly S.W.E.E.P. pickup through City of Tampa customer service, (813) 274-8811. Piles over 10 cubic yards can cost extra.",
    ),
    faq(
      "How soon can you come out for rats in Tampa?",
      "Same-day appointments for rat inspections are often available in Tampa. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Tampa]",
    ),
  ],
  ctaHeading: "Rats in your Tampa home?",
  ctaText: "Tampa rat calls go to (727) 594-7705.",
  seo: {
    title: "Rat Removal in Tampa, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Tampa, FL: roof rats sealed out, trapped and cleaned up, plus Tampa's bulk pickup, code rules and rat lungworm findings. (727) 594-7705.",
  },
  sources: [
    { title: "Florida Museum of Natural History (UF): Rat lungworm found throughout Florida, June 28, 2017 (rats and snails in Hillsborough tested positive; nearly 23 percent of rats in an 18-county survey; can cause meningitis)", url: LUNGWORM },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (2013, archived; roof rats climb trees, vines, wires and pipes)", url: ENY224 },
    { title: "City of Tampa: Urban forest management plan (13,956 acres or 50% of canopy on residential properties)", url: UFMP },
    { title: "City of Tampa: S.W.E.E.P. (one prescheduled collection a year at no additional cost; piles up to 10 cubic yards; appliances, furniture, tree limbs; (813) 274-8811)", url: SWEEP },
    { title: "City of Tampa: Neighborhood Enhancement (complaints: accumulated junk, trash or debris on private property; overgrown lots or yards)", url: NE },
    { title: "City of Tampa: Overgrown lot or yard complaint (overgrowth includes shrubs, trees, vines, bushes and weeds)", url: "https://www.tampa.gov/service/overgrown-lot-or-yard-complaint" },
    { title: "City of Tampa: Residential trash collection (garbage twice per week for all utility customers; lid closed with no garbage extending out)", url: "https://www.tampa.gov/solid-waste/programs/residential-trash-collection" },
    { title: "City of Tampa: Animal services, Hillsborough County (wildlife on private property: use private removal services)", url: "https://www.tampa.gov/service/animal-services-hillsborough-county" },
  ],
  clientQuestions: ["Typical response time for a rat call in Tampa?", "A real Google review from a Tampa rat job (TTR-723), and real Tampa rat job photos."],
});
