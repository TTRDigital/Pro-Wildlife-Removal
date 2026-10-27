import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Pasco County (TTR-738, Nia). Every card is one true fact about
 * rats in Pasco, from the county's own trash, hen and code pages, FL DEP's
 * Pasco coastal guide and UF/IFAS rat publications, all sourced below.
 */
const TRASH = "https://www.pascocountyfl.gov/services/utilities/garbage_and_recycling/index.php";
const HENS = "https://www.pascocountyfl.gov/services/code_compliance/backyard_chicken_ordinance.php";
const CODE = "https://www.pascocountyfl.gov/services/code_compliance/index.php";
const DEP = "https://floridadep.gov/rcp/coastal-access-guide/content/pasco-county";
const ENY224 = "https://journals.flvc.org/edis/article/download/136514/141097/263288";
const GADSDEN = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";
const UW120 = "https://journals.flvc.org/edis/article/download/143373/149064";

export const ratRemovalPascoCounty = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "pasco-county-fl",
  placeName: "Pasco County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-pasco-county-fl",
  order: 20,
  heroText: "Scratching in a Pasco attic at night, or chewed fruit under the orange tree? We find where rats get in, seal it and trap the ones left inside. Call (844) 264-6254.",
  answerHeading: "Who takes care of rats in a Pasco County house?",
  answer:
    "A private wildlife company. Pasco County doesn't pick up household trash; homes sign up with a licensed hauler or haul it themselves. For rats in a Pasco attic, wall or garage, Pro Wildlife Removal finds the gaps they use, seals them and traps the rats still inside. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Feed in rat-proof bins", "Roof rats love citrus"],
  localHeading: "Rats in Pasco, from the Gulf coast to the citrus groves",
  localIntro: "Pasco runs from Gulf shoreline to citrus country, and rats do well in both. These local rules and facts shape a rat job here.",
  local: [
    { icon: "home", title: "Your hauler, not the county", text: p("Pasco County says it does not pick up trash: you must sign up with a licensed hauler for curbside service, offered twice a week. Florida DOH says Norway rats nest wherever food, water and shelter are present, garbage dumps included, so a missed pickup is worth a call to your hauler.") },
    { icon: "wrench", title: "Bags waiting for a trip", text: p("Homes without a hauler may haul up to 8 bags of household garbage a day, free, to the West Pasco Resource Recovery Facility or the East Pasco Transfer Station. Bags that sit by the garage until the next trip are an easy rat meal.") },
    { icon: "critter", title: "Hen feed must be rat-proof", text: p("Pasco's backyard hen ordinance, adopted in November 2025, lets homeowners in most residential zoning districts keep up to four hens. It requires all feed to be kept in rodent- and predator-proof containers and coops to be kept up so rodents don't move in.") },
    { icon: "search", title: "No junk piles in the yard", text: p("County code bars using a yard to store junk, appliances or other nuisance items, or as a garbage dump. Those piles are exactly what Florida DOH tells homeowners to get rid of to control rodents.") },
    { icon: "drop", title: "A Gulf coast county", text: p("Florida DEP counts 20 miles of Pasco shoreline. UF/IFAS says Norway rats in Florida live along sea coasts and canals, and Florida DOH says they burrow beneath concrete slabs and in garbage dumps.") },
    { icon: "leaf", title: "Citrus season is rat season", text: p("DEP describes Pasco as known for its citrus groves. UF/IFAS has said roof-rat damage to fruit, hollowed-out citrus, shows up from September through March, as the fruit ripens.") },
  ],
  contactsHeading: "Pasco contacts for trash, junk piles and rats indoors",
  contactsIntro: "Who handles what when rats are the problem in Pasco, from the county's own pages.",
  contacts: [
    { icon: "home", title: "Trash and missed pickups", text: p("Your own hauler. For county drop-off sites and questions, Pasco County Solid Waste: 727-847-2411.") },
    { icon: "search", title: "Junk piles and overgrown lots", text: p("Pasco Customer Service, 727-847-2411, to file a code compliance complaint.") },
    { icon: "users", title: "Rats in your home", text: p("A private company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Wildlife removal costs", href: "/blog/how-much-does-wildlife-removal-cost/", text: "What drives the price of a removal and exclusion job in Florida." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pasco County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Pasco County pick up my trash?",
      "No. Pasco's garbage page says the county doesn't pick up trash. You must sign up with a licensed hauler for curbside service, offered twice a week, with recycling once a week.",
    ),
    faq(
      "I keep backyard hens in Pasco. How do I avoid rats?",
      "Do what the county's hen ordinance already requires: store all feed in rodent-proof containers and keep the coop clean. Florida DOH adds that pet food and grain belong in galvanized cans with tight-fitting lids.",
    ),
    faq(
      "Why do I see rats in my orange tree?",
      "That's usually a roof rat. Florida DOH says roof rats are known for hollowing out citrus fruit in trees or on the ground, and UF/IFAS says rats use limbs that touch or overhang a house as a highway inside. Trimming limbs back from the house helps.",
    ),
    faq(
      "Can I report a neighbor's junk pile in Pasco?",
      "Yes, through Customer Service at 727-847-2411. Pasco requires your name and address, and for overgrown lots only owners or occupants of land next to the parcel can file.",
    ),
    faq(
      "Can a Pasco County rat inspection happen the day I call?",
      "Same-day appointments for rats are often available in Pasco County. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Rats in your Pasco County home?",
  ctaText: "Rats in a Pasco home, on the coast or in citrus country? Call (844) 264-6254.",
  seo: {
    title: "Rat Removal in Pasco County, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Pasco County, FL: roof rats sealed out of attics and trapped, plus the county's trash, hen feed and junk pile rules that help keep rats out.",
  },
  sources: [
    { title: "Pasco County: Garbage and recycling (county does not pick up trash; sign up with a hauler for curbside service, twice a week, recycling once; up to 8 bags a day free at West Pasco Resource Recovery or East Pasco Transfer Station; Solid Waste 727-847-2411)", url: TRASH },
    { title: "Pasco County: Backyard chicken ordinance (Ordinances 25-44 and 25-45, November 2025; up to four hens; all feed in rodent- and predator-proof containers; coops maintained to prevent rodents, vermin and disease)", url: HENS },
    { title: "Pasco County: Code compliance (no yard used to store junk or as a garbage dump; overgrown complaints only by an affected party owning or occupying abutting or surrounding land; Customer Service 727-847-2411; name and address required)", url: CODE },
    { title: "Florida DEP: Coastal access guide, Pasco County (known for its citrus groves; 20 miles of shoreline)", url: DEP },
    { title: "Florida DOH Gadsden: Rodent control (Norway rats burrow beneath concrete slabs, in garbage dumps and wherever food, water and shelter are present; roof rats hollow out citrus fruit in trees or on the ground; get rid of trash, discarded appliances and junk; store pet foods and grains in galvanized cans with tight-fitting lids)", url: GADSDEN },
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (2013, archived; Norway rats along sea coasts and canals)", url: ENY224 },
    { title: "UF/IFAS EDIS SSWEC120: Control of Roof Rats in Fruit Trees (archived; hollowed-out fruit through the citrus season, September through March)", url: UW120 },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (rats use limbs that touch or overhang the house as a highway; prune overhanging limbs)", url: "https://ask.ifas.ufl.edu/publication/IN1397" },
  ],
  clientQuestions: ["A real Google review from a Pasco County rat job (TTR-723), and real Pasco rat job photos."],
});
