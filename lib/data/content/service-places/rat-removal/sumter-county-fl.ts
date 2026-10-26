import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Sumter County (TTR-738, Nia). Every card is one true fact about
 * rats in Sumter: rat problems in the Sumter part of The Villages (news reports,
 * named as such), Sumter County's advice and code case, and the county's trash rules.
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
  location: "about-us/service-area/wildlife-removal-the-villages",
  locationName: "The Villages",
  order: 71,
  heroText: "Droppings in the garage, gnawed wires or scratching in the attic of a Sumter County home? We find how rats are getting in, seal those gaps and trap the rats inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Sumter County homes?",
  answer:
    "A private company. Sumter County doesn't pick up trash at all, and its Animal Services generally deals only with domestic animals. For rats in a Sumter attic, wall or garage, Pro Wildlife Removal finds the openings, seals them and traps the rats still inside. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rat problems in The Villages", "County: hire a company"],
  localHeading: "What to know about rats in Sumter County",
  localIntro: "Sumter has had several reported rat problems in The Villages, from 2015 to 2025. Here is what happened, what the county told residents and how its trash rules bear on rats.",
  local: [
    { icon: "critter", title: "Rats after rain and a demolition", text: p("In June 2015, Villages-News reported a resident's complaint to the Community Development District 2 board that rats had moved into her and her neighbors' homes after the El Santiago Club was torn down. The district's property manager said heavy rain had driven rats out.") },
    { icon: "wrench", title: "Traps only on district land", text: p("In that 2015 report, the district had set baited traps on its own property, the property manager said, but can't put traps on private property. The board chairman suggested the resident call Sumter County Animal Control.") },
    { icon: "users", title: "Sumter's advice: hire a company", text: p("When rats got into homes in the Village of Santiago in May 2016, News 6 reported, Sumter County said any residents of The Villages with a rat problem should call a commercial company to remove them.") },
    { icon: "home", title: "A burned house draws rats", text: p("In July 2025, Lynnhaven residents told the District 5 board that a fire-damaged home on Due West Drive was attracting rats and buzzards. Sumter County had opened a code enforcement case on the home.") },
    { icon: "drop", title: "Bags, not cans", text: p("In The Villages' Districts 1 through 11, household trash goes out in sealed bags under 40 pounds each, and garbage cans aren't allowed. Florida DOH advises keeping garbage tightly covered, so put bags out close to pickup time.") },
    { icon: "map-pin", title: "No county pickup", text: p("Sumter County provides no trash pickup of its own. It points residents to The Villages, its cities or a private hauler, and its Citizen's Drop-Off Area in Lake Panasoffkee takes household garbage.") },
  ],
  contactsIntro: "Who handles what when rats are the problem in Sumter County, from the county's and cities' own pages.",
  contacts: [
    { icon: "home", title: "Trash service", text: p("The Villages CDD Customer Service, 352-753-4508; Wildwood, 352-330-1330; Bushnell, 352-793-2591; county Solid Waste, 352-689-4400.") },
    { icon: "phone", title: "Bites and exposure", text: p("Florida Department of Health in Sumter County, 352-569-3102.") },
    { icon: "users", title: "Rats in your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Wildlife removal costs", href: "/blog/how-much-does-wildlife-removal-cost/", text: "The things that drive the price of a rat job, from the number of entry points to roof height." },
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
      "Will Sumter County remove rats from my house?",
      "No. In 2016, Sumter County said residents of The Villages with rats should call a commercial company, and its nuisance wildlife page says Animal Services generally deals only with domestic animals.",
    ),
    faq(
      "How soon can you come out for rats in Sumter County?",
      "Same-day appointments for rats are often available in Sumter County. Call (727) 594-7705.",
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
    { title: "Villages-News, June 12, 2015: Villages official says heavy rain driving rats from their homes (CDD 2; El Santiago Club demolition; baited traps on District property only; resident referred to Sumter County Animal Control)", url: "https://www.villages-news.com/2015/06/12/villages-official-says-heavy-rain-driving-rats-from-their-homes/" },
    { title: "News 6 (ClickOrlando), May 25, 2016: Squirrel-sized rats invade homes in The Villages (Villages of Santiago, Sumter County; Sumter County said residents should call a commercial company to remove them)", url: "https://www.clickorlando.com/news/2016/05/26/squirrel-sized-rats-invade-homes-in-the-villages/" },
    { title: "Villages-News, July 18, 2025: Villagers upset that site of fatal fire attracting rats and buzzards (Due West Drive, Village of Lynnhaven; CDD 5; Sumter County code enforcement case)", url: "https://www.villages-news.com/2025/07/18/villagers-upset-that-site-of-fatal-fire-attracting-rats-and-buzzards/" },
    { title: "Sumter County: Solid waste (county does not provide any trash or recycling pickup; The Villages CDD 352-753-4508, Wildwood 352-330-1330, Coleman, Bushnell 352-793-2591, Webster, Center Hill, or private haulers; Citizen's Drop-Off Area, 819 CR 529, Lake Panasoffkee, accepts household garbage; Solid Waste 352-689-4400)", url: SW },
    { title: "The Villages District Government: FAQs (Districts 1-11: household waste in sealed tall kitchen or 20-30 gallon trash bags, under 40 pounds each; no garbage cans or bins allowed)", url: VILLAGES },
    { title: "Florida DOH: DOH-Sumter rabies alert, June 26, 2026 (report bites and scratches to the Florida Department of Health in Sumter County, 352-569-3102)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/06/rabies-alert-sumter-county-6-26-2026.pdf" },
    { title: "City of Wildwood: Solid waste collection (Waste Management; 64- and 96-gallon carts; food waste bagged before going in the cart; overage in a sealed bag beside the cart, under 50 lbs.)", url: WILDWOOD },
    { title: "Sumter County: Nuisance wildlife (Animal Services generally deals only with domestic animals; referrals to private trappers; bites to the Health Department)", url: NUISANCE },
    { title: "Florida DOH Gadsden: Rodent control (rodents need food, water, shelter and warmth; keep garbage in tightly covered containers; store pet foods and grains in galvanized cans with tight-fitting lids; seal openings around pipes and wires; close holes with heavy gauge steel wool, galvanized metal or hardware cloth)", url: DOH },
  ],
  clientQuestions: ["A real Google review from a Sumter County rat job (TTR-723), and real Sumter rat job photos."],
});
