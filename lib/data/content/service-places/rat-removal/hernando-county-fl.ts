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
  localIntro: "Roof rats are an old problem in Hernando, according to the county's own health department. Here is what it found in Spring Hill, and the county rules that bear on it.",
  local: [
    { icon: "critter", title: "Roof rats across Spring Hill", text: p("In August 1999, the Tampa Bay Times reported that several Spring Hill neighborhoods had roof rat infestations, citing Al Gray, environmental manager for the Hernando County Health Department.") },
    { icon: "leaf", title: "About 90 rats in one oak", text: p("Near Tipton Lane and Skyline Court in 1999, a county health department specialist climbed a large oak to a nest the rats had taken over. He stopped counting at 30 and estimated three times that many.") },
    { icon: "home", title: "30 to 40 rats from one house", text: p("Exterminators took 30 to 40 rats from one Liberator Court home, the Times reported in 1999. The rats had eaten attic duct work, damaged a couch and torn through blinds.") },
    { icon: "search", title: "What drew them", text: p("In that 1999 story, the health department pointed to debris piles, a shed full of cardboard and old rugs, garbage in uncovered containers, leaky faucets, dog food left outside and extra bird feed: the shelter, water and food rats need.") },
    { icon: "map-pin", title: "Not a new problem", text: p("Spring Hill has had a recurring problem with roof rats, the county's specialist said in 1999, with complaints also from Chase Street and Fireside Street. He called it an ongoing problem for years.") },
    { icon: "phone", title: "Rats and rabies", text: p("DOH-Hernando's rabies page says rats and other rodents are rarely found to be infected and have not been known to cause human rabies in Florida. Bites still need washing and a call to your doctor.") },
    { icon: "wrench", title: "Debris piles break county code", text: p("Hernando code treats an accumulation of trash bags, decaying vegetation or exposed appliances and furniture as a violation, the same kind of debris the health department linked to the Spring Hill rats.") },
    { icon: "drop", title: "Lids closed, by county rule", text: p("Hernando's garbage rules say cart lids must be closed to prevent scavenging of animals, and only garbage inside the closed blue cart is collected. Uncovered garbage was one of the 1999 rat draws.") },
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
    { title: "Tampa Bay Times (archive), Aug. 13, 1999: Rats raid Spring Hill residents (Hernando County Health Department: several Spring Hill neighborhoods with roof rat infestations; Tipton Lane and Skyline Court; specialist stopped counting at 30 in an oak nest, estimated three times that; 30 to 40 rats from a Liberator Court home; debris, uncovered garbage, leaky faucets, dog food, bird feed; recurring problem; complaints from Chase Street and Fireside Street)", url: "https://www.tampabay.com/archive/1999/08/13/rats-raid-spring-hill-residents/" },
    { title: "DOH-Hernando: Rabies surveillance (rats and other rodents rarely found to be infected; not known to cause human rabies in Florida)", url: "https://hernando.floridahealth.gov/programs-and-services/environmental-public-health/rabies-surveillance/" },
    { title: "Florida DOH Gadsden: Rodent control (rodents need food, water, shelter and warmth; roof rats nest in trees, woodpiles, garbage and plants and need a hole the size of a quarter; cut grass, brush and thick bushes within 100 feet of your home; get rid of trash, discarded appliances and junk; keep garbage in tightly covered containers; close holes with heavy gauge steel wool, galvanized metal, or hardware cloth; seal openings around pipes and wires)", url: DOH },
  ],
  clientQuestions: ["Typical response time for a rat call in Hernando County?", "A real Google review from a Hernando County rat job (TTR-723), and real Hernando rat job photos."],
});
