import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Dead animal removal in St. Petersburg (TTR-738, Rhea). St. Pete facts: city
 * Sanitation's dead animal collection and a dated street pickup, the city's
 * line on wildlife, FWC lines for manatees and bats, poisoned rats and trapped
 * bats as causes of smells indoors, and the county landfill.
 */
const SANITATION = "https://www.stpete.org/connect_with_us/directories/sanitation.php";
const SCF_DEAD = "https://seeclickfix.com/issues/16412545";
const SCF = "https://seeclickfix.com/issues/23085918";
const BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const RODENTS = "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/";
const DISPOSAL = "https://pinellas.gov/solid-waste-disposal-complex-fee-information/";
const FWCFAQ = "https://myfwc.com/conservation/you-conserve/wildlife/faqs/";

export const deadAnimalRemovalStPetersburg = servicePlacePage({
  service: "dead-animal-removal",
  animal: "Dead Animal",
  animals: "Dead animals",
  place: "st-petersburg-fl",
  placeName: "St. Petersburg",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  county: "Pinellas",
  order: 12,
  heroText: "A smell in the walls, the attic or under the floor of your St. Pete home that won't go away? We find the dead animal and get it out. Call (727) 594-7705.",
  answerHeading: "Who removes dead animals in St. Petersburg?",
  answer:
    "For a dead animal on a city street, St. Petersburg Sanitation offers dead animal collection through its service line or SeeClickFix St. Pete. Inside your home or on your lot, it's yours to handle. Pro Wildlife Removal finds and removes dead animals from St. Pete walls, attics, crawl spaces and yards. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City streets: Sanitation", "Manatees: FWC"],
  localHeading: "Dead animals in St. Petersburg",
  localIntro: "St. Pete has a clear route for a dead animal in the street. Inside a house, it's a different story. Here's what the city and state say.",
  local: [
    { icon: "building", title: "A Sanitation service", text: p("St. Petersburg's Sanitation directory lists dead animal collection alongside graffiti abatement and shopping cart pickup among its services, at 727-893-7398.") },
    { icon: "clock", title: "One to two business days", text: p("When a dead possum was reported in the road on Colony Drive South in April 2024, Sanitation told the resident removal should occur within one to two business days, and closed the request about a week later.") },
    { icon: "balance", title: "No wildlife department", text: p("The city tells residents that neither St. Petersburg nor Pinellas County has an animal services department for wild animals, so a dead animal on private property isn't something the city sends staff for.") },
    { icon: "drop", title: "Manatees go to FWC", text: p("St. Pete's standard reply also gives FWC's Wildlife Alert line, 1-888-404-FWCC, for any sick, injured, dead or tagged manatee, a real possibility in a city with 244 miles of shoreline.") },
    { icon: "odor", title: "Bats sealed in by mistake", text: p("FWC warns that bats shut inside a building during maternity season die there, and that decaying bats can produce strong odors and draw cockroaches. A bad exclusion often shows up as a smell.") },
    { icon: "search", title: "Poison works slowly", text: p("UF/IFAS Extension Pinellas explains that rats that eat anticoagulant bait can carry on for days before they get sick, which is why they so often die out of reach in walls and ceilings.") },
    { icon: "wrench", title: "Hauling it yourself", text: p("Pinellas County's Solid Waste Disposal Complex, which has a St. Petersburg mailing address, takes deceased animals only by appointment. Call (727) 464-7500 first.") },
  ],
  contactsIntro: "Who to call about a dead animal in St. Petersburg, from the city's, county's and FWC's own pages.",
  contacts: [
    { icon: "building", title: "On a city street", text: p("St. Petersburg Sanitation, 727-893-7398, or SeeClickFix St. Pete.") },
    { icon: "drop", title: "A manatee or sea turtle", text: p("FWC Wildlife Alert, 1-888-404-3922.") },
    { icon: "home", title: "In your house or yard", text: p("Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  extraLink: { label: "Attic cleanup cost", href: "/blog/attic-wildlife-cleanup-cost-in-florida-prices-tips/", text: "Why cleanup after a dead or nesting animal costs what it does in Florida." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a St. Petersburg dead animal job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does St. Petersburg pick up dead animals?",
      "From city streets, yes. Dead animal collection is a Sanitation service; call 727-893-7398 or report it on SeeClickFix St. Pete. In a 2024 case, the city said removal should happen within one to two business days.",
    ),
    faq(
      "Will the city remove a dead animal from my yard or attic?",
      "The city says it has no department for wild animals, and its pickup is for streets. For a dead animal on your property, or one inside the house, call a private company.",
    ),
    faq(
      "Why does my St. Pete house smell like something died?",
      "Often a rat that ate poison, or bats trapped by an exclusion done at the wrong time of year. Both die out of sight in walls and attics. Finding the exact spot is the hard part.",
      "[PLACEHOLDER: ask the client: how you locate and remove animals in walls, and whether you deodorize or sanitize afterward]",
    ),
    faq(
      "How should I handle a small dead animal myself?",
      "FWC says to avoid touching it with bare hands, wear disposable gloves, double-bag it in heavy plastic bags and put it in the garbage. Ask your waste facility first if there's more than one.",
    ),
    faq(
      "How soon can you remove a dead animal in St. Petersburg?",
      "Same-day dead animal removal is often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a dead animal call in St. Petersburg]",
    ),
  ],
  ctaHeading: "Dead animal smell in your St. Pete home?",
  ctaText: "St. Petersburg dead animal calls go to (727) 594-7705.",
  seo: {
    title: "Dead Animal Removal, St. Petersburg | Pro Wildlife Removal",
    description:
      "Dead animal removal in St. Petersburg, FL: what city Sanitation collects, what's yours to handle, and removal from walls and attics. Call (727) 594-7705.",
  },
  sources: [
    { title: "City of St. Petersburg: Sanitation directory (graffiti abatement, shopping cart collection, and dead animal collection; 727-893-7398)", url: SANITATION },
    { title: "SeeClickFix St. Pete #16412545, 6601 Colony Dr S, April 16, 2024 (dead possum in the road; forwarded to Sanitation; removal within 1-2 business days; resolved April 25)", url: SCF_DEAD },
    { title: "City of St. Petersburg reply on SeeClickFix St. Pete #23085918, Oct. 2026 (no city or county animal services department for wild animals; sick, injured, dead or tagged manatees to FWC, 1-888-404-FWCC)", url: SCF },
    { title: "City of St. Petersburg: About St. Pete (244 miles of shoreline)", url: "https://www.stpete.org/visitors/about_st_pete.php" },
    { title: "FWC: Bats in buildings (bats excluded during maternity season can die inside; decaying bats produce strong odors and can attract cockroaches)", url: BATS },
    { title: "UF/IFAS Extension Pinellas: Rodent management options in and around the home, July 25, 2022 (rodents feel sick days after eating anticoagulant rodenticide)", url: RODENTS },
    { title: "Pinellas County: Solid Waste Disposal Complex fee information (deceased animals require an appointment; (727) 464-7500)", url: DISPOSAL },
    { title: "Pinellas County: Bridgeway Acres Landfill (Solid Waste, 3095 114th Ave. N., St. Petersburg)", url: "https://pinellas.gov/bridgeway-acres-landfill/" },
    { title: "FWC: FAQs, where and how is a carcass disposed (avoid bare hands; disposable gloves; double-bag in heavy plastic; garbage; check with the waste facility for multiple carcasses)", url: FWCFAQ },
  ],
  clientQuestions: ["How do you locate and remove animals that die inside walls, and do you deodorize or sanitize afterward?", "Typical response time for a dead animal call in St. Petersburg?", "A real Google review from a St. Petersburg dead animal job (TTR-723), and real St. Pete job photos."],
});
