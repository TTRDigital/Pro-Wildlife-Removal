import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Pinellas Park (TTR-738, Owen). Pinellas Park facts come from Florida
 * DBPR emergency closure records for 2022 to 2025 (our count of rows where the business
 * city is Pinellas Park and the closure conditions name rodents; businesses not named).
 * Pinellas facts: the Sixth Circuit's ordinance fine schedule and the county
 * landlord-tenant page.
 */
const DBPR = "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/";
const FINES = "https://www.jud6.org/LegalCommunity/LegalPractice/AOSAndRules/aos/aos2018/2018-068.pdf";

export const ratRemovalPinellasPark = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "pinellas-park-fl",
  placeName: "Pinellas Park",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-pinellas-park",
  county: "Pinellas",
  heroText: "Rats running in a Pinellas Park attic, or droppings in the garage or shed? We find the openings they use, close them, trap the rats inside and clean up. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in a Pinellas Park home?",
  answer:
    "A private company. In a Pinellas Park rental, Pinellas County's landlord-tenant page says the landlord must exterminate rats unless the lease says otherwise. In your own home, Pro Wildlife Removal finds where the rats get in, seals those gaps, traps the rats still inside and cleans up after them. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "State records: 23 rodent closures, 2022-25", "Most on 49th St and 66th St"],
  localHeading: "What to know about rats in Pinellas Park",
  localIntro: "The Pinellas Park facts below come from the state's restaurant inspection records. The others come from the Sixth Judicial Circuit and Pinellas County.",
  local: [
    { icon: "search", title: "23 closures, 14 businesses", text: p("Florida DBPR's emergency closure records for 2022 through 2025 list 23 closures of Pinellas Park food businesses where the conditions named rodents, at 14 different businesses, by our tally of state rows listing Pinellas Park as the city.") },
    { icon: "map-pin", title: "Along the main roads", text: p("Of those 23 closures, eight were at addresses on 49th Street, seven on 66th Street, five on US 19 and three on Park Boulevard.") },
    { icon: "critter", title: "By year", text: p("The Pinellas Park rodent closures in the state's files ran seven in 2022, seven in 2023, eight in 2024 and one in 2025.") },
    { icon: "home", title: "Repeat closures", text: p("Five of those 14 Pinellas Park businesses were closed for conditions naming rodents more than once from 2022 through 2025.") },
    { icon: "users", title: "Rat rules in the fine schedule", text: p("The Sixth Judicial Circuit's uniform fine schedule for county and municipal ordinance violations in Pinellas lists rat offenses, including affording food or harborage for rats and failing to keep poultry and stock feed in rat proof containers or in rat proof buildings.") },
    { icon: "leaf", title: "Rentals and rats", text: p("For Pinellas Park renters, the county's landlord-tenant page lists exterminating rats, bugs and wood-destroying organisms as a landlord duty, unless the lease says otherwise.") },
  ],
  contactsIntro: "Who to call about rats in Pinellas Park, from the county's own page.",
  contacts: [
    { icon: "home", title: "Rats in a rental", text: p("Start with the landlord. Pinellas County lists rat extermination among a landlord's duties unless the lease says otherwise.") },
    { icon: "users", title: "Rats in your own home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas Park rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is a Pinellas Park landlord responsible for rats?",
      "Usually, yes. Unless the lease says otherwise, Pinellas County's landlord-tenant page puts exterminating rats, bugs and wood-destroying organisms on the landlord.",
    ),
    faq(
      "Are there rat rules in Pinellas County?",
      "The Sixth Judicial Circuit's fine schedule for county and municipal ordinance violations in Pinellas lists offenses for affording food or harborage for rats and for buildings not freed of rat harborage.",
    ),
    faq(
      "Do state records show rodents in Pinellas Park?",
      "State records show them at local food businesses. Florida DBPR ordered 23 emergency closures of Pinellas Park food businesses for conditions naming rodents from 2022 through 2025. Those come from restaurant inspections, not from homes.",
    ),
    faq(
      "How soon can you come out for rats in Pinellas Park?",
      "Same-day appointments for rats are often available in Pinellas Park. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Pinellas Park]",
    ),
  ],
  ctaHeading: "Rats in your Pinellas Park home?",
  ctaText: "For rats anywhere in Pinellas Park, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Pinellas Park, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Pinellas Park, FL: entry gaps sealed, rats trapped and cleaned up in homes near Park Blvd, 49th St, 66th St and US 19. Call (727) 594-7705.",
  },
  sources: [
    { title: "Florida DBPR, Division of Hotels and Restaurants: emergency closure records, 2022, 2023, 2024 and 2025 (2022-EOS.zip to 2025-EOS.zip; our count of rows listing Pinellas Park as the Business City and Conditions for Closure naming rodents: 23 closures at 14 businesses; 7, 7, 8 and 1 by year; 8 on 49th St, 7 on 66th St, 5 on US 19, 3 on Park Blvd)", url: DBPR },
    { title: "Sixth Judicial Circuit: Administrative Order 2018-068 PI-CTY, local ordinance violations uniform fine schedule (county and municipal ordinance violations in Pinellas; RATS: affording food or harborage for rats; buildings freed of rat harborage; feed in rat proof containers)", url: FINES },
    { title: "Pinellas County: Landlord tenant information (unless the lease says otherwise, the landlord must exterminate rats, bugs and wood-destroying organisms)", url: "https://pinellas.gov/landlord-tenant-information/" },
  ],
  clientQuestions: ["Typical response time for a rat call in Pinellas Park?", "A real Google review from a Pinellas Park rat job (TTR-723), and real Pinellas Park rat job photos."],
});
