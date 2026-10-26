import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Rat removal in Palm Harbor (TTR-738, Owen). Palm Harbor facts come from Florida DBPR
 * emergency closure records for 2022 to 2025 (our count of rows where the business
 * city is Palm Harbor and the closure conditions name rodents; businesses not named).
 * Pinellas facts: the county landlord-tenant page and two UF/IFAS Extension Pinellas posts.
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
  heroText: "Scratching in a Palm Harbor attic, or droppings in the garage or lanai? We find how the rats get in, close those openings, trap the ones inside and clean up after them. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in a Palm Harbor home?",
  answer:
    "Rats in a Palm Harbor home are a job for a private company, and in a rental, Pinellas County says the landlord must exterminate rats unless the lease says otherwise. Pro Wildlife Removal finds the gaps rats use around Palm Harbor homes, seals them, traps the rats inside and cleans up. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Rentals: landlords must exterminate rats", "State records: rodent closures on US 19"],
  localHeading: "What to know about rats in Palm Harbor",
  localIntro: "The Palm Harbor facts below come from the state's restaurant inspection records. The rest come from Pinellas County and UF/IFAS Extension Pinellas.",
  local: [
    { icon: "search", title: "21 closures in four years", text: p("Florida DBPR's emergency closure records for 2022 through 2025 list 21 closures of Palm Harbor food businesses where the conditions named rodents, at 12 different businesses. That is our count of the state's files.") },
    { icon: "map-pin", title: "Mostly along US 19 and Alt 19", text: p("Of those 21 Palm Harbor closures, 11 were at addresses on US 19 and six on Alternate 19. The rest were on Tarpon Woods Boulevard, East Lake Road South and Curlew Road.") },
    { icon: "critter", title: "Year by year", text: p("By year, the Palm Harbor rodent closures in the state's files ran four in 2022, five in 2023, five in 2024 and seven in 2025.") },
    { icon: "home", title: "Some came back", text: p("One Alternate 19 restaurant in Palm Harbor was closed for rodent activity four times between July 2023 and May 2025, and a US 19 restaurant four times between August 2023 and January 2024.") },
    { icon: "users", title: "Landlords and rats", text: p("Pinellas County's landlord-tenant page says that unless the lease says otherwise, the landlord is required to exterminate rats, bugs and wood-destroying organisms.") },
    { icon: "leaf", title: "Owls and rat poison", text: p("UF/IFAS Extension Pinellas wrote after the great horned owls at Philippe Park died of rodenticide poisoning, and urged taking away the food, water and shelter rats use, such as garbage, pet food, bird seed and fallen fruit.") },
    { icon: "drop", title: "Poison as a last resort", text: p("A UF/IFAS Extension Pinellas podcast post recommends integrated pest management and rat poison only as a last resort, to limit harm to owls, hawks and pets.") },
  ],
  contactsIntro: "Who to call about rats in Palm Harbor, from each agency's own page.",
  contacts: [
    { icon: "home", title: "Rats in a rental", text: p("Your landlord first. Pinellas County's landlord-tenant page lists exterminating rats among the landlord's duties.") },
    { icon: "users", title: "Rats in your own home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  attic: { slug: "rats-in-attic", label: "Rats in the attic" },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Palm Harbor rat job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Is my landlord responsible for rats in a Palm Harbor rental?",
      "Pinellas County's landlord-tenant page says that, unless the lease says otherwise, the landlord is required to exterminate rats, bugs and wood-destroying organisms.",
    ),
    faq(
      "Are rats a problem in Palm Harbor?",
      "Florida DBPR ordered 21 emergency closures of Palm Harbor food businesses for conditions naming rodents from 2022 through 2025, most along US 19 and Alternate 19.",
    ),
    faq(
      "Should I use rat poison around my Palm Harbor home?",
      "UF/IFAS Extension Pinellas suggests poison only as a last resort, after removing food, water and shelter, because rodenticides have killed owls in Pinellas County.",
    ),
    faq(
      "How soon can you come out for rats in Palm Harbor?",
      "Same-day appointments for rats are often available in Palm Harbor. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a rat call in Palm Harbor]",
    ),
  ],
  ctaHeading: "Rats in your Palm Harbor home?",
  ctaText: "For rats anywhere in Palm Harbor, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Palm Harbor, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Palm Harbor, FL: entry gaps sealed, rats trapped and cleaned up in homes near US 19, Alt 19, East Lake and Lake Tarpon. Call (727) 594-7705.",
  },
  sources: [
    { title: "Florida DBPR, Division of Hotels and Restaurants: emergency closure records, 2022, 2023, 2024 and 2025 (2022-EOS.zip to 2025-EOS.zip; our count of rows with Business City Palm Harbor and Conditions for Closure naming rodents: 21 closures at 12 businesses; 4, 5, 5 and 7 by year; 11 on US 19, 6 on Alt 19)", url: DBPR },
    { title: "Pinellas County: Landlord tenant information (unless the lease says otherwise, the landlord must exterminate rats, bugs and wood-destroying organisms)", url: "https://pinellas.gov/landlord-tenant-information/" },
    { title: "UF/IFAS Extension Pinellas County: Rodent management options in and around the home (July 25, 2022; great horned owls at Philippe Park; remove food, water and shelter sources for rats)", url: `${IFAS}2022/07/25/management-of-rodents/` },
    { title: "UF/IFAS Extension Pinellas County: Naturally Florida, Rat poisons and wildlife (July 18, 2022; rat poisons only as a last resort; owls, hawks, pets)", url: `${IFAS}2022/07/18/new-episode-from-naturally-florida-rat-poison-and-wildlife-whats-the-big-deal/` },
  ],
  clientQuestions: ["Typical response time for a rat call in Palm Harbor?", "A real Google review from a Palm Harbor rat job (TTR-723), and real Palm Harbor rat job photos."],
});
