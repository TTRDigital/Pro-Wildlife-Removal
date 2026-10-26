import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Palm Harbor (TTR-738, Owen). Palm Harbor facts come from Florida DBPR
 * emergency closure records for 2022 to 2025 (our count of rows where the business
 * city is Palm Harbor and the closure conditions name rodents; businesses not named).
 * Pinellas facts: the county landlord-tenant page and a UF/IFAS Extension Pinellas post.
 */
const DBPR = "https://www2.myfloridalicense.com/hotels-restaurants/reports-statistics/reports-statistics-archive/";
const IFAS = "https://blogs.ifas.ufl.edu/pinellasco/";

export const ratRemovalPalmHarbor = servicePlacePage({
  service: "rat-removal",
  animal: "Rat",
  animals: "Rats",
  place: "palm-harbor-fl",
  placeName: "Palm Harbor",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-palm-harbor",
  county: "Pinellas",
  heroText: "Scratching in a Palm Harbor attic, or droppings in the garage or lanai? We find how the rats get in, close those openings and trap the ones inside. Call (727) 594-7705.",
  answerHeading: "Who can clear rats out of a Palm Harbor house?",
  answer:
    "Rats in a Palm Harbor home are a job for a private company, and in a rental, Pinellas County says the landlord must exterminate rats unless the lease says otherwise. Pro Wildlife Removal finds the gaps rats use around Palm Harbor homes, seals them and traps the rats inside. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rentals: landlords must exterminate rats", "State records: rodent closures on US 19"],
  localHeading: "Rodent records along Palm Harbor's US 19 and Alt 19",
  localIntro: "State restaurant inspection records supply the first Palm Harbor facts below. Pinellas County and UF/IFAS Extension Pinellas supply the rest.",
  local: [
    { icon: "search", title: "21 closures in four years", text: p("Florida DBPR's emergency closure records for 2022 through 2025 list 21 closures of Palm Harbor food businesses where the conditions named rodents, at 12 different businesses. That is our count of the state's files.") },
    { icon: "map-pin", title: "Along US 19 and Alt 19", text: p("Of those 21 Palm Harbor closures, 11 were at addresses on US 19 and six on Alternate 19. The rest were on Tarpon Woods Boulevard, East Lake Road South and Curlew Road.") },
    { icon: "critter", title: "Year by year", text: p("By year, the Palm Harbor rodent closures in the state's files ran four in 2022, five in 2023, five in 2024 and seven in 2025.") },
    { icon: "home", title: "Some came back", text: p("Five of those 12 Palm Harbor businesses were closed for rodent activity more than once in the four years.") },
    { icon: "users", title: "Landlords and rats", text: p("Pinellas County's landlord-tenant page says that unless the lease says otherwise, the landlord is required to exterminate rats, bugs and wood-destroying organisms.") },
    { icon: "leaf", title: "Owls and rat poison", text: p("UF/IFAS Extension Pinellas wrote after the great horned owls at Philippe Park died of rodenticide poisoning. It urged taking away the food, water and shelter rats use, such as garbage, pet food, bird feed and fallen fruits, and using rodenticides only as a last resort.") },
  ],
  contactsHeading: "Palm Harbor rat help for renters and homeowners",
  contactsIntro: "Who to call about rats in Palm Harbor, from each agency's own page.",
  contacts: [
    { icon: "home", title: "Rats in a rental", text: p("Your landlord first. Pinellas County's landlord-tenant page lists exterminating rats among the landlord's duties.") },
    { icon: "users", title: "Rats in your own home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Palm Harbor rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Who pays for rat control in a Palm Harbor rental?",
      "Pinellas County's landlord-tenant page says that, unless the lease says otherwise, the landlord is required to exterminate rats, bugs and wood-destroying organisms.",
    ),
    faq(
      "Have Palm Harbor restaurants been closed for rodents?",
      "Florida DBPR ordered 21 emergency closures of Palm Harbor food businesses for conditions naming rodents from 2022 through 2025, 17 of them along US 19 and Alternate 19. These are restaurant inspection records, not home reports.",
    ),
    faq(
      "Should I use rat poison around my Palm Harbor home?",
      "UF/IFAS Extension Pinellas suggests poison only as a last resort, after removing food, water and shelter, because rodenticides have killed owls in Pinellas County.",
    ),
    faq(
      "Could you check a Palm Harbor house for rats today?",
      "Same-day appointments for rats are often available in Palm Harbor. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Rats in your Palm Harbor home?",
  ctaText: "Rats in a Palm Harbor home off US 19 or Alt 19? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Palm Harbor, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Palm Harbor, FL: entry gaps sealed and the rats trapped inside homes near US 19, Alt 19, East Lake and Lake Tarpon. Call (727) 594-7705.",
  },
  sources: [
    { title: "Florida DBPR, Division of Hotels and Restaurants: emergency closure records, 2022, 2023, 2024 and 2025 (2022-EOS.zip to 2025-EOS.zip; our count of rows with Business City Palm Harbor and Conditions for Closure naming rodents: 21 closures at 12 businesses; 4, 5, 5 and 7 by year; 11 on US 19, 6 on Alt 19)", url: DBPR },
    { title: "Pinellas County: Landlord tenant information (unless the lease says otherwise, the landlord must exterminate rats, bugs and wood-destroying organisms)", url: "https://pinellas.gov/landlord-tenant-information/" },
    { title: "UF/IFAS Extension Pinellas County: Rodent management options in and around the home (July 25, 2022; great horned owls at Philippe Park; remove food, water and shelter sources for rats including garbage, pet food, bird feed and fallen fruits; rodenticides as a last resort)", url: `${IFAS}2022/07/25/management-of-rodents/` },
  ],
  clientQuestions: ["A real Google review from a Palm Harbor rat job (TTR-723), and real Palm Harbor rat job photos."],
});
