import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Hernando County (TTR-738, Nia). Every card is one true fact
 * about rats in Hernando: the county's garbage, storage and code rules, each
 * tied to rats through Florida DOH's rodent control guidance.
 */
const GARBAGE = "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/garbage/";
const CODE = "https://www.hernandocounty.us/public-safety/code-compliance/code-violations/";
const YARD = "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/yard-waste/";
const DOH = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";

export const ratRemovalHernandoCounty = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "hernando-county-fl",
  placeName: "Hernando County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-in-hernando-county-fl",
  order: 52,
  heroText: "Gnawing in the walls, droppings in the garage, a rat on the porch rail at night? We look for how rats get into Hernando homes, seal the gaps we find and trap the ones inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Hernando County homes?",
  answer:
    "A private company. Hernando County doesn't collect garbage itself; Coastal Waste serves the unincorporated county and Brooksville runs its own service. For rats in a Hernando attic, wall or garage, Pro Wildlife Removal finds the openings, seals them, traps the rats left inside and cleans up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Lids closed, by county rule", "Grass cut within 100 feet"],
  localHeading: "What to know about rats in Hernando County",
  localIntro: "Hernando's garbage and code rules line up closely with what Florida DOH says keeps rats away. Here is how they fit together.",
  local: [
    { icon: "home", title: "Coastal Waste, twice a week", text: p("Hernando County doesn't pick up garbage. Coastal Waste collects it twice a week in all unincorporated areas, and the City of Brooksville runs its own service. Florida DOH says rodents need food, water, shelter and warmth, and advises keeping garbage in tightly covered containers.") },
    { icon: "wrench", title: "Only what's in the cart", text: p("Only garbage inside the blue cart with the lid closed gets picked up. Hernando says extra trash can be saved for the next collection day or taken to a county drop-off center, and bags saved at home should go in a covered container, as DOH advises.") },
    { icon: "search", title: "Keep the cart area clean", text: p("Hernando's rules say areas where garbage cans are kept must stay clean and sanitary, free of spilled garbage, wastewater and odors. DOH says roof rats nest in garbage, woodpiles and plants.") },
    { icon: "leaf", title: "The 100-foot rules match", text: p("County code makes grass and weeds over 18 inches tall within 100 feet of an improved property a violation, except on parcels zoned agricultural or conservation. Florida DOH gives the same distance, telling homeowners to cut grass, brush and thick bushes within 100 feet of the house.") },
    { icon: "critter", title: "Piles count as violations", text: p("Hernando code also treats an accumulation of trash bags, decaying vegetation or exposed appliances and furniture as a violation. DOH's rodent advice is to get rid of trash, discarded appliances and junk.") },
    { icon: "drop", title: "Brush goes out in bundles", text: p("Curbside yard waste is limited to 15 items a week (containers, bags or tied bundles), and bundles must be under 50 pounds and four feet long. Keep cut limbs that are waiting for pickup away from the house.") },
  ],
  contactsIntro: "Who handles what when rats are the problem in Hernando County, from the county's own pages.",
  contacts: [
    { icon: "home", title: "Garbage service", text: p("Coastal Waste, (352) 540-6457, in unincorporated Hernando. Brooksville residents call the city at (352) 540-3810.") },
    { icon: "search", title: "Code complaints", text: p("Hernando County Code Compliance, through the county's main line, (352) 754-4000.") },
    { icon: "users", title: "Rats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Wildlife removal costs", href: "/blog/how-much-does-wildlife-removal-cost/", text: "What sets the price of a rat job: how many openings, how much damage, how much cleanup." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Hernando County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Who picks up garbage in Hernando County?",
      "Coastal Waste, in all unincorporated areas, twice a week; call (352) 540-6457 to sign up. The City of Brooksville has its own service, at (352) 540-3810. The county itself doesn't collect garbage.",
    ),
    faq(
      "Can I put extra trash bags next to my cart?",
      "They won't be collected. Hernando picks up only garbage inside the blue cart with the lid closed. Save the extra for the next pickup in a covered can, or take it to a county drop-off center.",
    ),
    faq(
      "How small a hole can a rat use?",
      "Florida DOH says a roof rat needs only a hole about the size of a quarter. It advises closing holes with heavy steel wool, galvanized metal or hardware cloth and sealing gaps around pipes and wires.",
    ),
    faq(
      "Will tall grass next door bring rats?",
      "It can give them cover. Hernando code counts grass over 18 inches within 100 feet of improved property as a violation, and Florida DOH advises cutting grass and brush within 100 feet of a home.",
    ),
    faq(
      "How soon can you come out for rats in Hernando County?",
      "Same-day appointments for rats are often available in Hernando County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Hernando County]",
    ),
  ],
  ctaHeading: "Rats in your Hernando County home?",
  ctaText: "For rats anywhere in Hernando, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Hernando County, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Hernando County, FL: rats sealed out of attics and walls and trapped, plus the county's cart, storage, tall grass and yard waste rules.",
  },
  sources: [
    { title: "Hernando County: Garbage (county does not pick up garbage; Coastal Waste in all unincorporated areas, excluding Brooksville; twice-weekly pickup; (352) 540-6457; Brooksville (352) 540-3810; only waste inside the blue cart with the lid closed is collected; excess trash saved for the next collection day or taken to the county drop-off center; storage areas clean and sanitary, free of spilled garbage, wastewater and odors)", url: GARBAGE },
    { title: "Hernando County: Code violations (Sec. 15-163a grass and weeds over 18 inches within 100 feet of improved property, agricultural and conservation zoning excepted; 15-163b accumulation of trash bags, decaying vegetation, exposed appliances or furniture; main line (352) 754-4000)", url: CODE },
    { title: "Hernando County: Yard waste (15 items, any combination of containers, bags or tied bundles; bundles under 50 pounds and four feet long)", url: YARD },
    { title: "Florida DOH Gadsden: Rodent control (rodents need food, water, shelter and warmth; roof rats nest in trees, woodpiles, garbage and plants and need a hole the size of a quarter; cut grass, brush and thick bushes within 100 feet of your home; get rid of trash, discarded appliances and junk; keep garbage in tightly covered containers; close holes with heavy gauge steel wool, galvanized metal, or hardware cloth; seal openings around pipes and wires)", url: DOH },
  ],
  clientQuestions: ["Typical response time for a rat call in Hernando County?", "A real Google review from a Hernando County rat job (TTR-723), and real Hernando rat job photos."],
});
