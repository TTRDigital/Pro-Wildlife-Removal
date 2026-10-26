import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Sumter County (TTR-738, Nia). Every card is one true fact about
 * rats and trash in Sumter: the county's solid waste page, The Villages district
 * sanitation FAQ, Wildwood's collection page and the county's nuisance wildlife
 * page, each tied to rats through Florida DOH's rodent control advice.
 */
const SW = "https://www.sumtercountyfl.gov/222/Solid-Waste";
const VILLAGES = "https://www.districtgov.org/how-to/faqs/";
const WILDWOOD = "https://www.wildwood-fl.gov/318/Solid-Waste-Collection-Rates---Residenti";
const NUISANCE = "https://www.sumtercountyfl.gov/1180/Nuisance-Wildlife";
const DOH = "https://gadsden.floridahealth.gov/programs-and-services/environmental-health/rodent-control/";

export const ratRemovalSumterCounty = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "sumter-county-fl",
  placeName: "Sumter County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-sumter-county-fl",
  order: 71,
  heroText: "Droppings in the garage, gnawed wires or scratching in the attic of a Sumter County home? We find how rats are getting in, seal those gaps and trap the rats inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Sumter County homes?",
  answer:
    "A private company. Sumter County doesn't pick up trash at all, and its Animal Services generally deals only with domestic animals. For rats in a Sumter attic, wall or garage, Pro Wildlife Removal finds the openings, seals them, traps the rats still inside and cleans up after them. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "No county trash pickup", "Bags only in parts of The Villages"],
  localHeading: "What to know about rats in Sumter County",
  localIntro: "Who collects your trash in Sumter depends on where you live, and so do the rules about how it sits at the curb. Here is how those rules line up with Florida DOH's rodent advice.",
  local: [
    { icon: "home", title: "No county pickup", text: p("Sumter County says it does not provide any trash or recycling pickup. Florida DOH says rodents need food, water, shelter and warmth, so knowing who hauls your garbage, and when, matters.") },
    { icon: "map-pin", title: "Who does collect it", text: p("The county points residents to The Villages, Wildwood, Coleman, Bushnell, Webster or Center Hill for service, and to a private hauler anywhere none of them serve.") },
    { icon: "wrench", title: "Bags, not cans, in The Villages", text: p("In The Villages' Districts 1 through 11, household waste must go out in sealed tall kitchen or 20 to 30 gallon trash bags, under 40 pounds each, and garbage cans aren't allowed. DOH advises keeping garbage in tightly covered containers, so bags should go out close to pickup time.") },
    { icon: "search", title: "Wildwood bags its food waste", text: p("Wildwood's Waste Management service asks residents to bag food waste before it goes in the cart, and allows overflow in a sealed bag beside the cart, up to 50 pounds. Florida DOH likewise advises keeping garbage tightly covered.") },
    { icon: "drop", title: "A county drop-off site", text: p("Sumter's Citizen's Drop-Off Area on County Road 529 in Lake Panasoffkee takes household garbage, so trash doesn't have to wait in a garage or shed between pickups.") },
    { icon: "users", title: "Animal Services and wildlife", text: p("Sumter County's nuisance wildlife page says Animal Services generally deals only with domestic animals and refers most nuisance wildlife reports to private trappers. Rats inside a home are a job for a private company.") },
  ],
  contactsIntro: "Who handles what when rats are the problem in Sumter County, from the county's and cities' own pages.",
  contacts: [
    { icon: "home", title: "Trash service", text: p("The Villages CDD Customer Service, 352-753-4508; Wildwood, 352-330-1330; Bushnell, 352-793-2591; county Solid Waste, 352-689-4400.") },
    { icon: "phone", title: "Bites and exposure", text: p("Sumter County Health Department, 352-569-3131.") },
    { icon: "users", title: "Rats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Wildlife removal costs", href: "/blog/how-much-does-wildlife-removal-cost/", text: "The things that drive the price of a rat job, from the number of entry points to cleanup." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Sumter County rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does Sumter County pick up trash?",
      "No. The county says it doesn't provide trash or recycling pickup. Depending on where you live, service comes from The Villages, a city such as Wildwood or Bushnell, or a private hauler.",
    ),
    faq(
      "Why can't I use a trash can in The Villages?",
      "In Districts 1 through 11, the district's FAQ says household waste must go out in sealed bags, and cans or bins will be thrown away with the trash. Put bags out close to collection time so they don't sit overnight.",
    ),
    faq(
      "How do I keep rats out of my Sumter County garage?",
      "Florida DOH's advice: store pet food and grains in galvanized cans with tight lids, keep garbage covered, seal gaps around pipes and wires, and close holes with heavy steel wool, galvanized metal or hardware cloth.",
    ),
    faq(
      "Will the county's Animal Services remove rats?",
      "No. Sumter County says Animal Services generally deals only with domestic animals. For rats in your home, call a private company.",
    ),
    faq(
      "How soon can you come out for rats in Sumter County?",
      "Same-day appointments for rats are often available in Sumter County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Sumter County]",
    ),
  ],
  ctaHeading: "Rats in your Sumter County home?",
  ctaText: "For rats anywhere in Sumter, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Sumter County, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Sumter County, FL: rats sealed out of attics, walls and garages and trapped, plus who collects your trash and the bag rules in The Villages.",
  },
  sources: [
    { title: "Sumter County: Solid waste (county does not provide any trash or recycling pickup; The Villages CDD 352-753-4508, Wildwood 352-330-1330, Coleman, Bushnell 352-793-2591, Webster, Center Hill, or private haulers; Citizen's Drop-Off Area, 819 CR 529, Lake Panasoffkee, accepts household garbage; Solid Waste 352-689-4400)", url: SW },
    { title: "The Villages District Government: FAQs (Districts 1-11: household waste in sealed tall kitchen or 20-30 gallon trash bags, under 40 pounds each; no garbage cans or bins allowed)", url: VILLAGES },
    { title: "City of Wildwood: Solid waste collection (Waste Management; 64- and 96-gallon carts; food waste bagged before going in the cart; overage in a sealed bag beside the cart, under 50 lbs.)", url: WILDWOOD },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals; referrals to private trappers; bites to the Health Department, 352-569-3131)", url: NUISANCE },
    { title: "Florida DOH Gadsden: Rodent control (rodents need food, water, shelter and warmth; keep garbage in tightly covered containers; store pet foods and grains in galvanized cans with tight-fitting lids; seal openings around pipes and wires; close holes with heavy gauge steel wool, galvanized metal or hardware cloth)", url: DOH },
  ],
  clientQuestions: ["Typical response time for a rat call in Sumter County?", "A real Google review from a Sumter County rat job (TTR-723), and real Sumter rat job photos."],
});
