import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Dead animal removal in Pinellas County (TTR-738, Rhea). Who handles a dead
 * animal depends on where it is: county roads, state roads, city streets or
 * private property. Facts from county pages, county service requests, two
 * Pinellas cities and FWC.
 */
const LEALMAN = "https://pinellas.gov/lealman-faq-trash-and-recycling-collection/";
const COLLECT = "https://pinellas.gov/collection-trash-and-recycling/";
const DISPOSAL = "https://pinellas.gov/solid-waste-disposal-complex-fee-information/";
const SCF_COUNTY = "https://seeclickfix.com/issues/21962727";
const SCF_STATE = "https://seeclickfix.com/issues/23046062";
const CLEARWATER = "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue";
const SAFETY = "http://www.cityofsafetyharbor.com/m/faq";
const TURTLES = "https://pinellas.gov/news/help-our-sea-turtles-thrive-this-nesting-season/";
const FWCFAQ = "https://myfwc.com/conservation/you-conserve/wildlife/faqs/";
const RODENTS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";

export const deadAnimalRemovalPinellasCounty = servicePlacePage({
  service: "dead-animal-removal",
  animal: "Dead Animal",
  animals: "Dead animals",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Dead Animal Removal in Pinellas County, FL",
  heroText: "A smell coming from the wall, the attic or under the house in Pinellas? We find the dead animal and take it out of the wall, attic or crawl space. Call (727) 594-7705.",
  answerHeading: "Who removes dead animals in Pinellas County?",
  answer:
    "It depends on where the animal is. County Public Works handles county roads, FDOT handles state roads, and cities like Clearwater handle their own streets. On private property, and inside walls or attics, it's the owner's job. Pro Wildlife Removal finds and removes dead animals from Pinellas homes. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County roads: Public Works", "Private property: the owner"],
  localHeading: "Dead animals in Pinellas County",
  localIntro: "Pinellas has 24 cities and a large unincorporated area, so the right call for a dead animal depends on the road, the town and the property.",
  local: [
    { icon: "building", title: "County roads go to Public Works", text: p("When a dead armadillo was reported on Virginia Avenue in Palm Harbor in 2026, Pinellas County Animal Services passed the request to county Public Works, which opened a service request. Public Works takes calls at (727) 464-8900.") },
    { icon: "map-pin", title: "State roads go to FDOT", text: p("When a resident reported a dead cat on Alternate U.S. 19 in Palm Harbor in October 2026, Pinellas Public Works replied that it wasn't county jurisdiction and referred the resident to the Florida Department of Transportation.") },
    { icon: "home", title: "Cities have their own rules", text: p("In Clearwater, city Solid Waste handles dead animals on public roads, rights-of-way and medians, and dead animals on private property are the owner's responsibility. Safety Harbor's Public Works handles city rights-of-way.") },
    { icon: "wrench", title: "Not in the curbside cart", text: p("Pinellas County runs trash pickup only in the Lealman district, and even there, dead animals are on the list of biological waste that curbside service won't collect. Elsewhere, ask your city or private hauler.") },
    { icon: "clock", title: "Landfill by appointment", text: p("The county's Solid Waste Disposal Complex accepts deceased animals only by appointment. Call (727) 464-7500 before bringing one in.") },
    { icon: "drop", title: "Sea turtles and marine mammals", text: p("Pinellas County asks residents to report dead, stranded or wandering sea turtles to FWC at 1-888-404-3922.") },
    { icon: "odor", title: "Why a smell shows up days later", text: p("UF/IFAS Extension Pinellas explains that rats eating anticoagulant poison often feel sick only days later, which is why poisoned rats so often die out of sight inside walls and attics.") },
  ],
  contactsIntro: "Who to call about a dead animal in Pinellas County, from the county's, cities' and FWC's own pages.",
  contacts: [
    { icon: "building", title: "On a county road", text: p("Pinellas County Public Works, (727) 464-8900, or its Report a Problem app.") },
    { icon: "map-pin", title: "On a Clearwater or Safety Harbor street", text: p("Clearwater Solid Waste through the city's dead animal report form, or Safety Harbor Public Works at 724-1550.") },
    { icon: "home", title: "In your wall, attic or yard", text: p("Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Attic cleanup cost", href: "/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/", text: "What goes into cleaning an attic after animals have lived or died there." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County dead animal job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Who picks up a dead animal on the road in Pinellas County?",
      "On a county road, Pinellas County Public Works at (727) 464-8900. On a state road such as Alternate U.S. 19, FDOT. Inside a city, start with the city: Clearwater Solid Waste covers its public roads, for example.",
    ),
    faq(
      "Will the county remove a dead animal from my yard?",
      "Pinellas County's Animal Services pages don't list dead animal pickup, and Clearwater says outright that dead animals on private property are the owner's responsibility. A wildlife company can remove it, including from walls, attics and crawl spaces.",
    ),
    faq(
      "Can I put a dead animal in my trash can in Pinellas?",
      "Not in Lealman, where the county runs collection and excludes dead animals. Other areas depend on the city or hauler. FWC's advice for small carcasses is to use disposable gloves, double-bag the animal in heavy plastic and keep the open end away from your face.",
    ),
    faq(
      "What do I do about a dead sea turtle on a Pinellas beach?",
      "Report it to FWC at 1-888-404-3922, as Pinellas County asks. The same line takes reports of disturbed nests and lost or stranded turtles.",
    ),
    faq(
      "How soon can you remove a dead animal in Pinellas County?",
      "Same-day dead animal removal is often available in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a dead animal call in Pinellas County]",
    ),
  ],
  ctaHeading: "Dead animal smell in your Pinellas home?",
  ctaText: "Pinellas County dead animal calls go to (727) 594-7705.",
  seo: {
    title: "Dead Animal Removal, Pinellas County | Pro Wildlife Removal",
    description:
      "Dead animal removal in Pinellas County, FL: who handles county roads, state roads and city streets, and removal from walls, attics, yards. (727) 594-7705.",
  },
  sources: [
    { title: "Pinellas County: About Pinellas, facts (24 municipalities)", url: "https://pinellas.gov/about-pinellas-facts/" },
    { title: "SeeClickFix #21962727, 1105 Virginia Ave, Palm Harbor, June 12, 2026 (dead armadillo; Animal Services assigned it to Pinellas County Public Works; service request created; (727) 464-8900)", url: SCF_COUNTY },
    { title: "SeeClickFix #23046062, Alternate U.S. 19, Palm Harbor, Oct. 18, 2026 (deceased cat; Pinellas Public Works: not within our jurisdiction, contact the Florida Department of Transportation)", url: SCF_STATE },
    { title: "City of Clearwater: Report an animal issue (Solid Waste Services handles dead animals on public roads, rights of way or medians in city limits; dead animals on private property are the property or animal owner's responsibility)", url: CLEARWATER },
    { title: "City of Safety Harbor: FAQ (dead animals on city rights-of-way: Public Works 724-1550)", url: SAFETY },
    { title: "Pinellas County: Collection, trash and recycling (county provides collection only in the Lealman Solid Waste Collection and Disposal District)", url: COLLECT },
    { title: "Pinellas County: Lealman FAQ, trash and recycling collection (not collected: biological waste such as dead animals)", url: LEALMAN },
    { title: "Pinellas County: Solid Waste Disposal Complex fee information (deceased animals require an appointment; (727) 464-7500)", url: DISPOSAL },
    { title: "Pinellas County: Help our sea turtles thrive this nesting season (report dead, stranded or wandering turtles to FWC, 1-888-404-3922)", url: TURTLES },
    { title: "UF/IFAS Extension Pinellas: Rodent management options in and around the home, July 25, 2022 (rodents that eat anticoagulant rodenticide feel sick days later)", url: RODENTS },
    { title: "FWC: FAQs, where and how is a carcass disposed (avoid bare hands; disposable gloves; heavy plastic bags, double-bagged; keep the open end away from your face; garbage)", url: FWCFAQ },
  ],
  clientQuestions: ["Typical response time for a dead animal call in Pinellas County?", "Does every dead animal job include deodorizing or sanitizing? If so, how?", "A real Google review from a Pinellas County dead animal job (TTR-723), and real Pinellas job photos."],
});
