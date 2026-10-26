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
  heroText: "Scratching in a Pasco attic at night, or chewed fruit under the orange tree? We find where rats get in, seal it and trap the ones left inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Pasco County homes?",
  answer:
    "A private wildlife company. Pasco County doesn't even collect household trash; each home hires its own hauler. For rats in a Pasco attic, wall or garage, Pro Wildlife Removal finds the gaps they use, seals them, traps the rats still inside and cleans up after them. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Feed in rat-proof bins", "Roof rats love citrus"],
  localHeading: "What to know about rats in Pasco County",
  localIntro: "Pasco runs from Gulf shoreline to citrus country, and rats do well in both. These local rules and facts shape a rat job here.",
  local: [
    { icon: "home", title: "Your hauler, not the county", text: p("Pasco County says it does not pick up trash. In unincorporated Pasco you hire a private hauler for curbside service, which runs twice a week, so a missed pickup is a call to your hauler.") },
    { icon: "wrench", title: "Bags waiting for a trip", text: p("Homes without a hauler may haul up to 8 bags of household garbage a day, free, to the West Pasco Resource Recovery Facility or the East Pasco Transfer Station. Bags that sit by the garage until the next trip are an easy rat meal.") },
    { icon: "critter", title: "Hen feed must be rat-proof", text: p("Pasco's backyard hen ordinance, adopted in November 2025, allows up to four hens at most homes. It requires all feed to be kept in rodent- and predator-proof containers and coops to be kept up so rodents don't move in.") },
    { icon: "search", title: "No junk piles in the yard", text: p("County code bars using a yard to store junk, appliances or other nuisance items, or as a garbage dump. Those piles are exactly the cover UF/IFAS tells homeowners to clear away to keep rats from nesting.") },
    { icon: "drop", title: "A Gulf coast county", text: p("Florida DEP counts 20 miles of Pasco shoreline. UF/IFAS says Norway rats in Florida are most common along sea coasts and canals, where they burrow under slabs and in rubbish.") },
    { icon: "leaf", title: "Citrus season is rat season", text: p("DEP describes Pasco as known for its citrus groves. UF/IFAS calls the roof rat the worst rodent pest in Florida, and says hollowed-out fruit shows up from September through March, as citrus ripens.") },
    { icon: "map-pin", title: "Overgrown lot next door", text: p("Only a neighbor who owns or lives on land touching an overgrown parcel can file a complaint about it, under Pasco's Land Development Code. Complaints go to Customer Service, 727-847-2411, with your name and address.") },
  ],
  contactsIntro: "Who handles what when rats are the problem in Pasco, from the county's own pages.",
  contacts: [
    { icon: "home", title: "Trash and missed pickups", text: p("Your own hauler. For county drop-off sites and questions, Pasco County Solid Waste: 727-847-2411.") },
    { icon: "search", title: "Junk piles and overgrown lots", text: p("Pasco Customer Service, 727-847-2411, to file a code compliance complaint.") },
    { icon: "users", title: "Rats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Wildlife removal costs", href: "/blog/how-much-does-wildlife-removal-cost/", text: "What drives the price of a removal and repair job in Florida." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pasco County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Pasco County pick up my trash?",
      "No. Pasco's garbage page says the county doesn't pick up trash. In unincorporated areas you sign up with a private hauler, and curbside service runs twice a week, with recycling once a week.",
    ),
    faq(
      "I keep backyard hens in Pasco. How do I avoid rats?",
      "Do what the county's hen ordinance already requires: store all feed in rodent-proof containers and keep the coop clean. UF/IFAS adds that pet food and bird seed belong in rat-proof containers too.",
    ),
    faq(
      "Why do I see rats in my orange tree?",
      "That's usually a roof rat. UF/IFAS says roof rats live in citrus trees and gnaw the fruit, and they travel along branches and utility lines to reach roofs. Trimming limbs back from the house helps.",
    ),
    faq(
      "Can I report a neighbor's junk pile in Pasco?",
      "Yes, through Customer Service at 727-847-2411. Pasco requires your name and address, and for overgrown lots only owners or occupants of land next to the parcel can file.",
    ),
    faq(
      "How soon can you come out for rats in Pasco County?",
      "Same-day rat inspections are often available in Pasco County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Pasco County]",
    ),
  ],
  ctaHeading: "Rats in your Pasco County home?",
  ctaText: "For rats anywhere in Pasco, call (727) 594-7705.",
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
    { title: "UF/IFAS EDIS ENY-224: Rat and Mouse Control (Norway rats most common along sea coasts and canals; burrow under slabs and in rubbish; roof rats in citrus trees; remove piles of rubbish; pet food and bird seed in rat-proof containers)", url: ENY224 },
    { title: "UF/IFAS EDIS SSWEC120: Control of Roof Rats in Fruit Trees (worst rodent pest in Florida; hollowed-out fruit through the citrus season, September through March; travel on utility lines and branches)", url: UW120 },
  ],
  clientQuestions: ["Typical response time for a rat call in Pasco County?", "A real Google review from a Pasco County rat job (TTR-723), and real Pasco rat job photos."],
});
