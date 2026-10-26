import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Palm Harbor page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const CENSUS = "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip";

export const palmHarbor = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-palm-harbor",
  name: "Palm Harbor",
  county: "Pinellas",
  order: 21,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN PALM HARBOR",
  summary: "Wildlife removal in Palm Harbor, FL: raccoons, rats, squirrels, opossums, snakes, armadillos, bats and more, in north Pinellas.",
  heroText: "An unincorporated north Pinellas community with Lake Tarpon on its eastern side. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife in Palm Harbor?",
  answer:
    "Palm Harbor isn't a city, so Pinellas County services apply. County Animal Services helps with strays and sick or injured wildlife, not animals living in your home. A raccoon in the attic or rats in the walls need a private company. Pro Wildlife Removal works throughout Palm Harbor. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Unincorporated Pinellas", "Next to Lake Tarpon"],
  townsHeading: "Palm Harbor and nearby",
  townsIntro: "Palm Harbor counted about 61,400 people at the 2020 Census. Dunedin borders it to the south.",
  towns: [
    {
      title: "North Pinellas",
      href: "/about-us/service-area/wildlife-removal-pinellas-county/",
      items: [
        { label: "Dunedin", href: "/about-us/service-area/wildlife-removal-dunedin/" },
        { label: "Ozona" },
        { label: "Tarpon Springs" },
        { label: "East Lake" },
        { label: "Clearwater", href: "/about-us/service-area/wildlife-removal-clearwater-fl/" },
      ],
    },
  ],
  localHeading: "Big county parks on both sides",
  localIntro: "Two large county parks are in Palm Harbor, one beside Lake Tarpon, with a big preserve just to the east.",
  local: [
    { icon: "leaf", title: "John Chesnut Sr. Park", text: p("This 255-acre county park on East Lake Road sits next to Lake Tarpon, with nature trails and, in the county's words, a variety of wildlife.") },
    { icon: "map-pin", title: "Wall Springs Park", text: p("Wall Springs Park covers 210 acres on Desoto Boulevard and connects to the Pinellas Trail.") },
    { icon: "drop", title: "Brooker Creek Preserve", text: p("East of Palm Harbor, near Tarpon Springs, Pinellas County's Brooker Creek Preserve protects about 8,700 acres.") },
    { icon: "critter", title: "Coyotes, too", text: p("FWC says coyotes are found in all 67 Florida counties and that feeding them is illegal. Secure garbage and pick up pet food and fallen fruit.") },
  ],
  contactsIntro: "Who to call for what in Palm Harbor, from the county's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Pinellas County Animal Services", text: p("(727) 582-2600, option 4, at 12450 Ulmerton Road in Largo. Strays, and help with sick or injured wildlife.") },
    { icon: "home", title: "Garbage service", text: p("Unincorporated Palm Harbor has no county garbage pickup. Pinellas County says property owners choose their own hauling company.") },
    { icon: "map-pin", title: "Bears, alligators and tortoises: FWC", text: p("Wildlife Alert 888-404-3922 for bears and injured sea life. Nuisance alligators 866-392-4286. Sick or injured gopher tortoises 850-921-1030 on weekdays.") },
  ],
  servicesIntro: "We handle every animal below in Palm Harbor. Choose one for the details.",
  servicesHeading: "Animals we remove in Palm Harbor",
  reviewsIntro: "[PLACEHOLDER: reviews from Palm Harbor customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Is Palm Harbor a city?",
      "No. Palm Harbor is unincorporated Pinellas County, so the county provides animal services. Garbage pickup is through a hauler each owner chooses.",
    ),
    faq(
      "Who helps with an injured animal in Palm Harbor?",
      "Pinellas County Animal Services, (727) 582-2600, option 4, offers wildlife pickup and transport help and support for sick or injured wildlife. For bears, sea turtles or manatees, call FWC at 888-404-3922.",
    ),
    faq(
      "Do you handle rats in Palm Harbor?",
      "Yes. See [rat removal in Palm Harbor](/about-us/service-area/rat-removal-palm-harbor/) for the local details.",
    ),
    faq(
      "How quickly can you get to Palm Harbor?",
      "Palm Harbor calls to (727) 594-7705 are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Palm Harbor]",
    ),
  ],
  ctaHeading: "Wildlife problem in Palm Harbor?",
  ctaText: "Palm Harbor homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Palm Harbor, FL | Call (727) 594-7705 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Palm Harbor, FL: raccoons, rats, squirrels, opossums and snakes near Lake Tarpon. Who to call for what in Palm Harbor. Call (727) 594-7705.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 redistricting file (Palm Harbor CDP, 61,366)", url: CENSUS },
    { title: "City of Dunedin: FY2022 adopted budget (bordered on the north by Palm Harbor)", url: "https://www.dunedin.gov/files/assets/city/v/1/finance/documents/budget/fy-2022-adopted-operating-and-capital-budget.pdf" },
    { title: "Pinellas County: John Chesnut Sr. Park (255 acres; 2200 East Lake Road South, Palm Harbor; adjacent to Lake Tarpon; a variety of wildlife)", url: "https://pinellas.gov/parks/john-chesnut-sr-park/" },
    { title: "Pinellas County: Wall Springs Park (210 acres; connects to the Pinellas Trail in Palm Harbor; 3725 Desoto Boulevard)", url: "https://pinellas.gov/parks/wall-springs-park/" },
    { title: "Pinellas County: Brooker Creek Preserve (about 8,700 acres; Tarpon Springs address)", url: "https://pinellas.gov/parks/brooker-creek-preserve/" },
    { title: "FWC: Coyotes (all 67 counties; feeding coyotes is illegal; secure garbage, pet food, fallen fruit)", url: "https://myfwc.com/conservation/you-conserve/wildlife/coyotes/" },
    { title: "Pinellas County: Injured or orphaned wildlife (Animal Services, 12450 Ulmerton Road, Largo; (727) 582-2600 option 4; FWC and gopher tortoise numbers)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "Pinellas County: Trash and recycling collection (unincorporated owners choose a hauling company)", url: "https://pinellas.gov/collection-trash-and-recycling/" },
  ],
  clientQuestions: ["Typical response time in Palm Harbor?", "Palm Harbor reviews (from TTR-723) and real Palm Harbor job photos."],
});
