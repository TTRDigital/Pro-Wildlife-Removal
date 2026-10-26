import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Dunedin page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const BUDGET = "https://www.dunedin.gov/files/assets/city/v/1/finance/documents/budget/fy-2022-adopted-operating-and-capital-budget.pdf";

export const dunedin = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-dunedin",
  name: "Dunedin",
  county: "Pinellas",
  order: 12,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN DUNEDIN",
  summary: "Wildlife removal in Dunedin, FL: raccoons, rats, squirrels, opossums, snakes, bats and more, on the Gulf coast of Pinellas.",
  heroText: "A Gulf coast city with a 90-acre hammock inside its limits and two barrier island state parks offshore. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife problems in Dunedin?",
  answer:
    "Dunedin doesn't list an animal control service of its own. Pinellas County Animal Services helps with strays and sick or injured wildlife, and FWC handles alligators and sea turtles. Animals living in your home are a job for a private company. Pro Wildlife Removal works across Dunedin. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County: strays, injured wildlife", "Gulf coast, two island parks"],
  townsHeading: "Dunedin and nearby",
  townsIntro: "Dunedin, home to about 35,700 people, is bordered by Palm Harbor to the north, Clearwater to the south and east, and the Gulf to the west.",
  towns: [
    {
      title: "North Pinellas",
      href: "/about-us/service-area/wildlife-removal-pinellas-county/",
      items: [
        { label: "Palm Harbor", href: "/about-us/service-area/wildlife-removal-palm-harbor/" },
        { label: "Clearwater", href: "/about-us/service-area/wildlife-removal-clearwater-fl/" },
        { label: "Safety Harbor", href: "/about-us/service-area/wildlife-removal-safety-harbor/" },
        { label: "Ozona" },
        { label: "Tarpon Springs" },
      ],
    },
  ],
  localHeading: "Hammock, islands and the Gulf",
  localIntro: "For a city of its size, Dunedin has a lot of wild land, from a hardwood hammock in town to two barrier islands offshore.",
  local: [
    { icon: "leaf", title: "Hammock Park", text: p("The city's 90-acre natural park on San Mateo Drive. FWC's Great Florida Birding Trail describes bayheads and hydric hammock, with wading birds, ospreys and barred owls all year, and gopher tortoises.") },
    { icon: "map-pin", title: "Honeymoon and Caladesi islands", text: p("Honeymoon Island State Park (2,824 acres) starts at the end of the Dunedin Causeway, where snowy and Wilson's plovers nest on the beach. Caladesi Island (2,420 acres) has gopher tortoises and Florida box turtles.") },
    { icon: "drop", title: "Sea turtle season", text: p("The city tells residents to call FWC at 1-888-404-3922 about dead or stranded sea turtles. Lights out on the beach side helps hatchlings find the water.") },
    { icon: "critter", title: "Feeding is a nuisance", text: p("Under Pinellas County code, leaving food or garbage out so it attracts raccoons, coyotes or other wildlife, and creates a nuisance, is a public nuisance.") },
  ],
  contactsIntro: "Who to call for what in Dunedin, from the city's, county's and FWC's own pages.",
  contacts: [
    { icon: "users", title: "Pinellas County Animal Services", text: p("(727) 582-2600, option 4. The county lists wildlife pickup and transport help, and support for sick or injured wildlife.") },
    { icon: "map-pin", title: "Sea turtles, bears, alligators", text: p("FWC Wildlife Alert, 888-404-3922, for sea turtles, manatees and bears. Nuisance alligators: 866-392-4286.") },
    { icon: "phone", title: "Animal bites", text: p("If an animal bites someone in Dunedin, report it to the health department in Pinellas: 727-824-6932.") },
  ],
  servicesIntro: "We handle every animal below in Dunedin. Tap one for the details.",
  servicesHeading: "Animals we remove in Dunedin",
  reviewsIntro: "[PLACEHOLDER: reviews from Dunedin customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does the City of Dunedin remove wildlife?",
      "The city doesn't list a wildlife or animal control service. Pinellas County Animal Services helps with strays and sick or injured wildlife. For a healthy animal in your attic or walls, call a wildlife removal company.",
    ),
    faq(
      "Who do I call about a sea turtle on a Dunedin beach?",
      "FWC, at 1-888-404-3922. The city points residents there for dead or stranded sea turtles.",
    ),
    faq(
      "Do you handle rats in Dunedin?",
      "Yes. See [rat removal in Dunedin](/about-us/service-area/rat-removal-services-dunedin-fl/) for the local details.",
    ),
    faq(
      "How soon can you get to Dunedin?",
      "We answer Dunedin calls to (727) 594-7705 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Dunedin]",
    ),
  ],
  ctaHeading: "Wildlife problem in Dunedin?",
  ctaText: "Dunedin homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Dunedin, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Dunedin, FL: raccoons, rats, squirrels, opossums and snakes near Hammock Park and Honeymoon Island, and who to call. (727) 594-7705.",
  },
  sources: [
    { title: "Florida EDR/BEBR: April 1, 2025 estimates, Table 1 (Dunedin 35,742)", url: "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf" },
    { title: "City of Dunedin: FY2022 adopted budget (bordered by Palm Harbor to the north, Clearwater to the south and east, the Gulf to the west)", url: BUDGET },
    { title: "City of Dunedin: Hammock Park (90-acre natural park; 1900 San Mateo Dr.)", url: "https://www.dunedin.gov/Community/Parks-Recreation/Parks-Playgrounds/Hammock-Park" },
    { title: "FWC Great Florida Birding Trail: Hammock Park (bayheads and hydric hammock; wading birds, osprey, barred owl; gopher tortoises)", url: "https://floridabirdingtrail.com/site/hammock-park/" },
    { title: "FWC Great Florida Birding Trail: Honeymoon Island State Park (2,824 acres; snowy and Wilson's plovers nest)", url: "https://floridabirdingtrail.com/site/honeymoon-island-state-park/" },
    { title: "FWC Great Florida Birding Trail: Caladesi Island State Park (2,420 acres; gopher tortoise, Florida box turtle)", url: "https://floridabirdingtrail.com/site/caladesi-island-state-park/" },
    { title: "City of Dunedin: What to know during sea turtle nesting season (FWC 1-888-404-3922)", url: "https://www.dunedin.gov/Your-Government/Learn-and-Engage/Dunedin-insights/City-Information-Resources/What-to-Know-During-Sea-Turtle-Nesting-Season" },
    { title: "Pinellas County: Animal Services enforcement (Sec. 14-30(4) feeding nuisance)", url: "https://pinellas.gov/animal-services-enforcement/" },
    { title: "Pinellas County: Injured or orphaned wildlife (Animal Services wildlife pickup/transport assistance; (727) 582-2600 option 4; FWC numbers)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "DOH-Pinellas: Rabies information (727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
  ],
  clientQuestions: ["Typical response time in Dunedin?", "Dunedin reviews (from TTR-723) and real Dunedin job photos."],
});
