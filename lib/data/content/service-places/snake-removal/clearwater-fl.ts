import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Snake removal in Clearwater (TTR-738, Rhea). Clearwater snake facts: snakes at
 * Moccasin Lake, the city's pest tips and code on yard debris, where the city
 * sends wildlife reports, plus county flood and Extension bite advice.
 */
const FOX13 = "https://www.fox13news.com/news/the-unexpected-beauty-of-clearwaters-moccasin-lake-nature-park";
const TIPS = "https://www.myclearwater.com/My-Neighborhood-and-Community-Programs/Rodent-Control-Tips";
const GUIDE = "https://www.myclearwater.com/My-Government/0-City-Departments/Planning-Development/Code-Compliance/Citizens-Guide-to-Code-Compliance";
const ISSUE = "https://www.myclearwater.com/Report-a-Problem/Report-an-Animal-Issue";
const FWC = "https://myfwc.com/conservation/you-conserve/wildlife/snakes/";
const VENOM = "https://blogs.ifas.ufl.edu/pinellasco/2024/02/12/new-episode-from-naturally-florida-podcast-floridas-venomous-snakes/";

export const snakeRemovalClearwater = servicePlacePage({
  service: "snake-removal",
  animal: "Snake",
  animals: "Snakes",
  place: "clearwater-fl",
  placeName: "Clearwater",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-clearwater-fl",
  county: "Pinellas",
  order: 11,
  heroText: "A snake in the garage, the lanai or the laundry room of a Clearwater home? Step back, keep pets away and let us identify and remove it. Call (727) 594-7705.",
  answerHeading: "Who removes a snake from a Clearwater home?",
  answer:
    "A private wildlife company. The City of Clearwater refers wildlife reports to FWC rather than sending staff, and most snakes in Clearwater yards are harmless. Pro Wildlife Removal identifies the snake, removes it and shows you what drew it in. If anyone is bitten, call 911. For removal, call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Bitten? Call 911 first", "Debris piles draw them in"],
  localHeading: "Snakes in Clearwater",
  localIntro: "Clearwater's nature parks, wetlands and older wooded lots give snakes plenty of room. Here's what the city and county say about living alongside them.",
  local: [
    { icon: "leaf", title: "Snakes at Moccasin Lake", text: p("A city recreation programmer at Moccasin Lake Nature Park told FOX 13 in 2019 that visitors \"can expect to see alligators and different types of snakes\" at the preserve.") },
    { icon: "critter", title: "The city counts them as allies", text: p("Clearwater's own pest control tips tell residents to \"encourage natural predators like owls, hawks, and snakes\" as part of keeping rodents down.") },
    { icon: "wrench", title: "Clear the hiding spots", text: p("The same city page asks residents to remove debris, piles of wood and tall grass where rodents nest. FWC adds that snakes seen often around a house may point to rodents, and clearing that clutter discourages both.") },
    { icon: "balance", title: "Code covers reptile cover", text: p("Under Clearwater's Community Development Code, accumulated debris that holds, or is likely to hold, rodents, reptiles or other vermin is a code violation, and so is grass taller than 12 inches.") },
    { icon: "map-pin", title: "Wildlife reports go to FWC", text: p("The \"Report a Wildlife or Marine Animal Issue\" link on Clearwater's website sends residents to FWC's incident reporting page, not to a city department.") },
    { icon: "home", title: "Look twice after a storm", text: p("Pinellas County's flood tips warn that snakes may move into an evacuated home seeking dry shelter. After high water, check closets, cabinets and the garage before reaching in.") },
    { icon: "phone", title: "Bites are a 911 call", text: p("UF/IFAS Extension Pinellas says to call 911 for a bite from a venomous snake or from any snake you can't identify, without waiting for symptoms.") },
  ],
  contactsIntro: "Who to call about a snake in Clearwater, from the city's, county's and state's own pages.",
  contacts: [
    { icon: "phone", title: "A snakebite", text: p("Call 911 right away.") },
    { icon: "balance", title: "Debris or overgrowth next door", text: p("Clearwater Code Compliance, (727) 562-4720.") },
    { icon: "home", title: "A snake in your house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Clearwater snake job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Will the City of Clearwater remove a snake from my yard?",
      "No. Clearwater's animal issue page sends wildlife matters to FWC and Pinellas County, and its wildlife link goes to FWC's reporting page. For a snake in or near your home, call a private wildlife company.",
    ),
    faq(
      "Are snakes in Clearwater venomous?",
      "Most aren't. FWC says only six of Florida's 50 snake species are venomous, and UF/IFAS Extension Pinellas says the vast majority of snakes people see are harmless. Treat any snake you can't identify as dangerous and keep back.",
    ),
    faq(
      "Why do I keep seeing snakes around my Clearwater house?",
      "Often it's rodents. FWC says frequent snake sightings near a home may mean rats or mice are nearby. Clearing wood piles, debris and tall grass, as Clearwater's tips advise, removes cover for both.",
    ),
    faq(
      "Can I report a neighbor's overgrown lot for snakes?",
      "You can report the overgrowth. Clearwater's code treats debris likely to hold reptiles or rodents, and grass over 12 inches, as violations. Call Code Compliance at (727) 562-4720.",
    ),
    faq(
      "How soon can you remove a snake in Clearwater?",
      "Same-day snake appointments are often available in Clearwater. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a snake call in Clearwater]",
    ),
  ],
  ctaHeading: "Snake at your Clearwater home?",
  ctaText: "Keep your distance and call (727) 594-7705.",
  seo: {
    title: "Snake Removal in Clearwater, FL | Pro Wildlife Removal",
    description:
      "Snake removal in Clearwater, FL: snakes identified and removed, what the city says about yard debris, and what to do after a snakebite. (727) 594-7705.",
  },
  sources: [
    { title: "FOX 13: The unexpected beauty of Clearwater's Moccasin Lake Nature Park, Nov. 18, 2019 (recreation programmer Lloyd Simmons: visitors can expect to see alligators and different types of snakes)", url: FOX13 },
    { title: "City of Clearwater: Rodent control tips (encourage natural predators like owls, hawks, and snakes; remove debris, piles of wood and tall grass where rodents might nest)", url: TIPS },
    { title: "City of Clearwater: Citizens guide to code compliance (Community Development Code Sec. 3-1503.B: debris that contains or is likely to contain rodents, reptiles or other vermin; grass over 12 inches; Code Compliance (727) 562-4720)", url: GUIDE },
    { title: "City of Clearwater: Report an animal issue (Pinellas County Animal Services and FWC manage animal-related issues; wildlife link redirects to FWC incident reporting)", url: ISSUE },
    { title: "FWC: Living with snakes (only six of Florida's 50 snake species are venomous; frequent sightings near dwellings may indicate rodents; removing brush and debris discourages rodents and snakes)", url: FWC },
    { title: "Pinellas County: Safety tips before, during and after a flood (snakes may move into an evacuated home)", url: "https://pinellas.gov/safety-tips-before-during-and-after-a-flood/" },
    { title: "UF/IFAS Extension Pinellas: Florida's venomous snakes, Feb. 12, 2024 (vast majority of Florida snakes non-venomous; call 911 for a bite from a venomous or unidentified snake)", url: VENOM },
  ],
  clientQuestions: ["Typical response time for a snake call in Clearwater?", "A real Google review from a Clearwater snake job (TTR-723), and real Clearwater snake job photos."],
});
