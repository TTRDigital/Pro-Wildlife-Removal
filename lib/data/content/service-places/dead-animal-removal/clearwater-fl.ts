import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Dead animal removal in Clearwater (TTR-738, Rhea). Clearwater's own split
 * (Solid Waste on public roads, owners on private property), the city's report
 * form, the county landfill, and FWC's lines for dead bats, birds and sea turtles.
 */
const ISSUE = "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue";
const FORM = "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue/Report-a-Dead-Animal";
const TRASH = "https://www.myclearwater.com/Trash-Recycling/Residential-Trash-Collection-Information";
const DISPOSAL = "https://pinellas.gov/solid-waste-disposal-complex-fee-information/";
const FWCREPORT = "https://myfwc.com/contact/incident-reporting/";
const SANDKEY = "https://pinellas.gov/parks/sand-key-park/";
const TURTLES = "https://pinellas.gov/news/help-our-sea-turtles-thrive-this-nesting-season/";
const FWCFAQ = "https://myfwc.com/conservation/you-conserve/wildlife/faqs/";

export const deadAnimalRemovalClearwater = servicePlacePage({
  service: "dead-animal-removal",
  animal: "Dead Animal",
  animals: "Dead animals",
  place: "clearwater-fl",
  placeName: "Clearwater",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-clearwater-fl",
  county: "Pinellas",
  order: 11,
  heroText: "A sour smell that gets worse every day in a Clearwater wall, attic or crawl space? We locate the dead animal and remove it. Call (727) 594-7705.",
  answerHeading: "Who removes a dead animal in Clearwater?",
  answer:
    "On a public road, right-of-way or median inside Clearwater, city Solid Waste picks it up. On private property, the city says the dead animal is the owner's responsibility. Pro Wildlife Removal finds and removes dead animals from Clearwater homes, including inside walls, attics and crawl spaces. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City roads: Solid Waste", "Your property: your call"],
  localHeading: "Dead animals in Clearwater",
  localIntro: "Clearwater spells out who handles a dead animal more clearly than most cities. Here's the city's split, plus the county and state lines for special cases.",
  local: [
    { icon: "building", title: "Public roads: Solid Waste", text: p("Clearwater Solid Waste Services handles dead animals that need disposal on public roads, rights-of-way and medians within city limits.") },
    { icon: "home", title: "Private property: the owner", text: p("The same city page says dead animals on private property are the responsibility of the property owner or the animal's owner.") },
    { icon: "search", title: "An online report form", text: p("Clearwater's Report a Problem page has a link to report a dead animal on a public road, right-of-way or median, which opens the city's online reporting portal.") },
    { icon: "clock", title: "Landfill by appointment", text: p("If you're hauling a carcass yourself, Pinellas County's Solid Waste Disposal Complex takes deceased animals only by appointment, at (727) 464-7500.") },
    { icon: "critter", title: "Dead bats get reported", text: p("Clearwater's wildlife link leads to FWC's incident page, which asks residents to report sick, unusually behaving or dead bats through its Bat Mortality Monitoring line, 888-404-FWCC.") },
    { icon: "drop", title: "Turtles on Sand Key", text: p("Sea turtles nest at the county's Sand Key Park in Clearwater from April to October. Pinellas County asks anyone who finds a dead or stranded turtle to call FWC at 1-888-404-3922.") },
    { icon: "map-pin", title: "Bird die-offs too", text: p("FWC's reporting page also takes reports of wild bird die-offs online, with a link to its bird flu information. Don't pick up several dead birds bare-handed.") },
  ],
  contactsIntro: "Who to call about a dead animal in Clearwater, from the city's, county's and FWC's own pages.",
  contacts: [
    { icon: "building", title: "On a city street", text: p("Clearwater Solid Waste, (727) 562-4920, or the city's online dead animal form.") },
    { icon: "drop", title: "A sea turtle, bat or bird die-off", text: p("FWC, 888-404-3922.") },
    { icon: "home", title: "In your walls, attic or yard", text: p("Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Attic cleanup cost", href: "/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/", text: "What it takes to clean up an attic once an animal has died or nested there." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Clearwater dead animal job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will Clearwater pick up a dead animal from my yard?",
      "No. The city's page says dead animals on private property are the property owner's or animal owner's responsibility. Solid Waste only handles public roads, rights-of-way and medians.",
    ),
    faq(
      "How do I report a dead animal on a Clearwater road?",
      "Use the city's Report a Dead Animal link on its Report a Problem page, or call Solid Waste at (727) 562-4920.",
    ),
    faq(
      "Can I bag a dead animal and put it in my Clearwater trash cart?",
      "For a small animal, FWC's advice is to avoid bare hands, use disposable gloves, double-bag it in heavy plastic and put it in the garbage. For several carcasses, it suggests checking with your waste facility first.",
    ),
    faq(
      "What if the smell is coming from inside my wall?",
      "Inside a house it's private property, so under the city's rule it's the owner's to handle. A wildlife company can track down where the animal is and get it out.",
      "[PLACEHOLDER: ask the client: how you locate and remove animals in walls, and whether you deodorize or sanitize afterward]",
    ),
    faq(
      "How soon can you remove a dead animal in Clearwater?",
      "Same-day dead animal removal is often available in Clearwater. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a dead animal call in Clearwater]",
    ),
  ],
  ctaHeading: "Dead animal smell in your Clearwater home?",
  ctaText: "Clearwater dead animal calls go to (727) 594-7705.",
  seo: {
    title: "Dead Animal Removal in Clearwater, FL | Pro Wildlife Removal",
    description:
      "Dead animal removal in Clearwater, FL: what city Solid Waste picks up, what owners must handle, and removal from walls, attics and yards. (727) 594-7705.",
  },
  sources: [
    { title: "City of Clearwater: Report an animal issue (Solid Waste Services handles dead animals on public roads, rights of way or medians in city limits; dead animals on private property are the property or animal owner's responsibility)", url: ISSUE },
    { title: "City of Clearwater: Report a dead animal on a public road, right of way or median (redirects to the city's SeeClickFix reporting portal)", url: FORM },
    { title: "City of Clearwater: Residential trash collection (Solid Waste (727) 562-4920)", url: TRASH },
    { title: "Pinellas County: Solid Waste Disposal Complex fee information (deceased animals require an appointment; (727) 464-7500)", url: DISPOSAL },
    { title: "FWC: Report fish kills, wildlife emergencies, sightings (Bat Mortality Monitoring: report sick, unusually behaving or dead bats, 888-404-FWCC; report wild bird die-offs online)", url: FWCREPORT },
    { title: "Pinellas County: Sand Key Park (95 acres in Clearwater; sea turtles nest April to October)", url: SANDKEY },
    { title: "Pinellas County: Help our sea turtles thrive this nesting season (report turtles that are dead, lost, stranded or wandering to FWC, 1-888-404-3922)", url: TURTLES },
    { title: "FWC: FAQs, where and how is a carcass disposed (avoid bare hands; disposable gloves; double-bag in heavy plastic; garbage; multiple carcasses: check with the local waste facility)", url: FWCFAQ },
  ],
  clientQuestions: ["How do you locate and remove animals that die inside walls, and do you deodorize or sanitize afterward?", "Typical response time for a dead animal call in Clearwater?", "A real Google review from a Clearwater dead animal job (TTR-723), and real Clearwater job photos."],
});
