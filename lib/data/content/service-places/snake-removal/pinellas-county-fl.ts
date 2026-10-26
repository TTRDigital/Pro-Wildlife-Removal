import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Snake removal in Pinellas County (TTR-738, Rhea). County-wide snake facts:
 * venomous species recorded at Brooker Creek Preserve and Honeymoon Island,
 * county natural areas that list snakes, flood guidance, and UF/IFAS Extension
 * Pinellas advice on bites and common yard snakes.
 */
const BROOKER = "https://friendsofbrookercreekpreserve.org/FOBCP/2015SeptOctNewsletter.pdf";
const HONEYMOON = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Honeymoon%20Island.pdf";
const VENOM = "https://blogs.ifas.ufl.edu/pinellasco/2024/02/12/new-episode-from-naturally-florida-podcast-floridas-venomous-snakes/";
const COMMON = "https://blogs.ifas.ufl.edu/pinellasco/2023/05/24/new-episode-from-naturally-florida-three-common-snakes-in-residential-areas/";
const FLOOD = "https://pinellas.gov/safety-tips-before-during-and-after-a-flood/";

export const snakeRemovalPinellasCounty = servicePlacePage({
  service: "snake-removal",
  animal: "Snake",
  animals: "Snakes",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Snake Removal in Pinellas County, FL",
  heroText: "A snake in the garage, the pool cage or the house somewhere in Pinellas? Keep your distance and keep pets back. We'll identify it and remove it. Call (727) 594-7705.",
  answerHeading: "Who removes snakes in Pinellas County?",
  answer:
    "For a snake in or around a Pinellas County home, call a private wildlife company. Most snakes here are harmless, but rattlesnakes and cottonmouths live in the county's preserves. Pro Wildlife Removal identifies the snake, removes it and points out the gaps that let it in. If someone is bitten, call 911 first. Otherwise call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Bitten? Call 911", "Most local snakes are harmless"],
  localHeading: "Snakes in Pinellas County",
  localIntro: "Pinellas is built up from end to end, but its preserves, marshes and barrier islands still hold plenty of snakes, venomous ones included.",
  local: [
    { icon: "leaf", title: "Four venomous species at Brooker Creek", text: p("Writing for the Friends of Brooker Creek Preserve, ecologist Craig Huegel said all four venomous snakes of peninsular Florida, the diamondback and pygmy rattlesnakes, the water moccasin and the coral snake, are rather common in the 8,700-acre preserve.") },
    { icon: "map-pin", title: "Diamondbacks on Honeymoon Island", text: p("The state's 2022 management plan for Honeymoon Island State Park, off Dunedin, says the park \"is noted for a population of eastern diamondback rattlesnakes.\"") },
    { icon: "drop", title: "Marsh and swamp habitat", text: p("Pinellas County lists snakes among the wildlife at Lake Tarpon West Management Area near Palm Harbor and at Joe's Creek Management Area near Seminole, along with alligators, raccoons and gopher tortoises.") },
    { icon: "home", title: "Check the house after a flood", text: p("The county's flood guidance tells residents returning to an evacuated home to watch for snakes, raccoons and possums that came in to escape the water.") },
    { icon: "search", title: "Three yard regulars", text: p("UF/IFAS Extension Pinellas points to three harmless snakes common in Florida neighborhoods: the red cornsnake, the black racer and the ring-necked snake.") },
    { icon: "phone", title: "Your phone is the bite kit", text: p("The Pinellas Extension office says to skip snakebite kits. If a venomous snake, or one you can't identify, bites someone, call 911 right away rather than waiting for symptoms.") },
  ],
  contactsIntro: "Who to call about a snake in Pinellas County, from the county's and the Extension office's own pages.",
  contacts: [
    { icon: "phone", title: "Someone was bitten", text: p("Call 911. Don't wait to see if symptoms start.") },
    { icon: "users", title: "Injured snake", text: p("The county's rehabilitator list includes Tampa Bay Wildlife Rehabilitation, (727) 725-1691, for reptiles.") },
    { icon: "home", title: "A snake in the house", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County snake job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Which venomous snakes live in Pinellas County?",
      "The four found across peninsular Florida: the eastern diamondback rattlesnake, the dusky pygmy rattlesnake, the cottonmouth (water moccasin) and the coral snake. Brooker Creek Preserve has all four, and Honeymoon Island is known for its diamondbacks.",
    ),
    faq(
      "Are most snakes in Pinellas yards dangerous?",
      "No. UF/IFAS Extension Pinellas says the vast majority of Florida snakes aren't venomous. Corn snakes, black racers and ring-necked snakes are the ones homeowners see most. If you can't tell, keep back and take a photo from a safe distance.",
    ),
    faq(
      "What should I do if a snake bites someone in Pinellas?",
      "Call 911 at once, as the county Extension office advises, even if the person feels fine. Don't try to catch or kill the snake. A photo from a safe distance is enough to help identify it.",
    ),
    faq(
      "Why are there snakes in my house after a storm?",
      "Rising water pushes them to dry ground. Pinellas County warns that snakes, raccoons and possums may move into an evacuated home. Check garages, closets and low cabinets before reaching in.",
    ),
    faq(
      "How soon can you remove a snake in Pinellas County?",
      "Same-day snake calls are often possible in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for a snake call in Pinellas County]",
    ),
  ],
  ctaHeading: "Snake at your Pinellas home?",
  ctaText: "Keep back, keep pets inside, and call (727) 594-7705.",
  seo: {
    title: "Snake Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Snake removal in Pinellas County, FL: which venomous snakes live here, the harmless ones you see more often, and what to do after a bite. (727) 594-7705.",
  },
  sources: [
    { title: "Friends of Brooker Creek Preserve newsletter, Sept./Oct. 2015: Venomous Snakes, by Craig Huegel (four venomous species in peninsular Florida, all rather common in Brooker Creek Preserve; pygmy and diamondback rattlesnakes and water moccasin are pit vipers)", url: BROOKER },
    { title: "Pinellas County: Brooker Creek Preserve (about 8,700 acres in the northeastern corner of the county)", url: "https://pinellas.gov/parks/brooker-creek-preserve/" },
    { title: "Florida DEP: Honeymoon Island State Park unit management plan, 2022 (\"noted for a population of eastern diamondback rattlesnakes\"; dusky pigmy rattlesnake in the dunes)", url: HONEYMOON },
    { title: "Pinellas County: Lake Tarpon West Management Area (near Palm Harbor; frogs, snakes, alligators, raccoon, river otter)", url: "https://pinellas.gov/lake-tarpon-west-management-area/" },
    { title: "Pinellas County: Joe's Creek Management Area (near Seminole; coyotes, raccoons, armadillos, marsh rabbits, snakes, gopher tortoises)", url: "https://pinellas.gov/joes-creek-management-area/" },
    { title: "Pinellas County: Safety tips before, during and after a flood (snakes, raccoons, possums may move into an evacuated home)", url: FLOOD },
    { title: "UF/IFAS Extension Pinellas: Three common snakes in residential areas, May 24, 2023 (red cornsnake, black racer, ring-necked snake)", url: COMMON },
    { title: "UF/IFAS Extension Pinellas: Florida's venomous snakes, Feb. 12, 2024 (vast majority of Florida snakes non-venomous; avoid snakebite kits; call 911 if bitten by a venomous or unidentified snake)", url: VENOM },
    { title: "Pinellas County: Injured or orphaned wildlife (Tampa Bay Wildlife Rehabilitation (727) 725-1691: mammals, birds of prey, reptiles)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
  ],
  clientQuestions: ["Typical response time for a snake call in Pinellas County?", "A real Google review from a Pinellas County snake job (TTR-723), and real Pinellas snake job photos."],
});
