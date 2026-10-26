import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Pinellas Park page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
export const pinellasPark = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-pinellas-park",
  name: "Pinellas Park",
  county: "Pinellas",
  order: 23,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN PINELLAS PARK",
  summary: "Wildlife removal in Pinellas Park, FL: rats, raccoons, squirrels, opossums, snakes, bats and more, in mid-Pinellas.",
  heroText: "A mid-Pinellas city of neighborhood parks and ponds, with Sawgrass Lake Park nearby. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife in Pinellas Park?",
  answer:
    "Pinellas Park doesn't list its own animal control. Pinellas County Animal Services helps with strays and sick or injured wildlife, and animals living in your attic or walls are a job for a private company. Pro Wildlife Removal works across Pinellas Park. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County: strays, injured wildlife", "Garbage twice a week"],
  townsHeading: "Pinellas Park and nearby",
  townsIntro: "Pinellas Park, with about 55,100 residents, is in the middle of the county. We cover its neighbors too.",
  towns: [
    {
      title: "Mid-Pinellas",
      href: "/service-areas/pinellas-county/",
      items: [
        { label: "St. Petersburg", href: "/service-areas/pinellas-county/st-petersburg/" },
        { label: "Largo" },
        { label: "Seminole" },
        { label: "Lealman" },
        { label: "Kenneth City" },
      ],
    },
  ],
  localHeading: "Ponds, parks and a nearby swamp",
  localIntro: "Pinellas Park is built up, but its city parks and ponds hold more wildlife than you might expect.",
  local: [
    { icon: "drop", title: "Tingler Park", text: p("In an equestrian neighborhood on 62nd Street, this 6.5-acre city park has, in the city's words, a large turtle population, several birds and even an occasional otter.") },
    { icon: "leaf", title: "Ed Taylor and Sunshine Lake", text: p("The city says visitors to the Ed Taylor preserve can spot squirrels, birds and other small wildlife, and points to herons at Sunshine Lake Park.") },
    { icon: "map-pin", title: "Sawgrass Lake Park", text: p("Nearby, Pinellas County's 400-acre Sawgrass Lake Park is in unincorporated Lealman, with a St. Petersburg address. The county's photos show alligators and turtles.") },
    { icon: "home", title: "Lids on, twice a week", text: p("Pinellas Park collects household garbage on Tuesdays and Fridays and asks for 35-gallon cans with lids, or tied bags, at the curb by 7 a.m. Tight lids take away an easy meal for rats and raccoons.") },
  ],
  contactsHeading: "Pinellas Park numbers for strays, bites and gators",
  contactsIntro: "Pinellas Park relies on county Animal Services and DOH-Pinellas, plus FWC for the odd pond alligator.",
  contacts: [
    { icon: "users", title: "Strays and injured wildlife", text: p("Pinellas County Animal Services, (727) 582-2600, option 4, serves Pinellas Park residents.") },
    { icon: "phone", title: "Animal bites", text: p("DOH-Pinellas takes bite reports at 727-824-6932.") },
    { icon: "map-pin", title: "Alligators: FWC", text: p("Ponds and canals mean the odd alligator. FWC's Nuisance Alligator Hotline is 866-392-4286.") },
  ],
  servicesIntro: "Every service is available in Pinellas Park. Tap an animal to read more.",
  servicesHeading: "Animals we remove in Pinellas Park",
  reviewsIntro: "[PLACEHOLDER: reviews from Pinellas Park customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does Pinellas Park have animal control?",
      "The city doesn't list one. Pinellas County Animal Services handles strays and helps with sick or injured wildlife. For a healthy animal living in your home, call a wildlife removal company.",
    ),
    faq(
      "Is Sawgrass Lake Park in Pinellas Park?",
      "No. Pinellas County says Sawgrass Lake Park is in the unincorporated Lealman community, with a St. Petersburg address.",
    ),
    faq(
      "What day is garbage pickup in Pinellas Park?",
      "Tuesday and Friday for household garbage, and Wednesday for recycling, per the city's Solid Waste page.",
    ),
    faq(
      "Can someone come to Pinellas Park the same day?",
      "Same-day appointments are often available in Pinellas Park. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Wildlife problem in Pinellas Park?",
  ctaText: "Pinellas Park homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Pinellas Park, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Pinellas Park, FL: rats, raccoons, squirrels, opossums and snakes, who to call for what, garbage days and local parks. (727) 594-7705.",
  },
  sources: [
    { title: "Florida EDR/BEBR: April 1, 2025 estimates, Table 1 (Pinellas Park 55,055)", url: "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf" },
    { title: "City of Pinellas Park: Tingler Park (about 6.5 acres; equestrian neighborhood; 8780 62nd Street; turtles, birds, an occasional otter)", url: "https://www.pinellaspark.gov/facilities/facility/details/Tingler-Park-20" },
    { title: "City of Pinellas Park: Ed Taylor Passive Preserve (squirrels, birds and other small wildlife)", url: "https://www.pinellaspark.gov/Facilities/Facility/Details/Ed-Taylor-Nature-Park-35" },
    { title: "City of Pinellas Park: Sunshine Lake Park (herons and other birds)", url: "https://www.pinellaspark.gov/Facilities/Facility/Details/Sunshine-Lake-Park-37" },
    { title: "Pinellas County: Sawgrass Lake Park (400 acres; Lealman, unincorporated; 7400 25th Street North, St. Petersburg)", url: "https://pinellas.gov/parks/sawgrass-lake-park/" },
    { title: "City of Pinellas Park: Solid waste pickup (Tuesday and Friday; recycling Wednesday; 35-gallon cans with lids or tied bags; curbside by 7 a.m.)", url: "https://www.pinellaspark.gov/356/Solid-Waste-Pickup" },
    { title: "Pinellas County: Injured or orphaned wildlife ((727) 582-2600 option 4; Nuisance Alligator Hotline 866-392-4286)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
    { title: "DOH-Pinellas: Rabies information (727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
  ],
  clientQuestions: ["Pinellas Park reviews (from TTR-723) and real Pinellas Park job photos."],
});
