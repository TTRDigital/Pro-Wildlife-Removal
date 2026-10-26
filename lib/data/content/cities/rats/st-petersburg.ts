import { countyPage, type CountyInput } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in St. Petersburg, rewritten in place at its existing URL (Ben, Oct 26). Uses the parts of the city's rodent guide the city page doesn't. */
const RODENTS = "https://www.stpete.org/residents/good_neighbor_guides/rodent_insect_control.php";

export const stPetersburgRatsInput = {
  kind: "rat",
  path: "about-us/service-area/rat-removal-services-st-petersburg-fl",
  name: "St. Petersburg",
  county: "Pinellas",
  order: 40,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN ST. PETERSBURG",
  heading: "Rat Removal in St. Petersburg, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in St. Petersburg, FL: rats sealed out of attics and walls and trapped inside, plus the city's own yard and trash tips.",
  heroText: "Rats in a St. Pete attic or wall? We shut the openings and trap the rats still inside. Call (727) 594-7705.",
  answerHeading: "Who handles rats in St. Petersburg?",
  answer:
    "St. Petersburg's Sanitation Department helps with rats outdoors, but the city says to hire a private company for rodents inside a home, and owners or occupants of houses are responsible for their own pest control. Pro Wildlife Removal seals the openings and traps the rats inside. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: outdoor rats only", "Owners handle pests inside"],
  townsHeading: "Rat removal near St. Petersburg",
  townsIntro: "We take rat calls across south and mid-Pinellas, and handle every other animal in St. Pete too.",
  towns: [
    {
      title: "St. Pete and neighbors",
      href: "/service-areas/pinellas-county/st-petersburg/",
      items: [
        { label: "All wildlife in St. Petersburg", href: "/service-areas/pinellas-county/st-petersburg/" },
        { label: "Wildlife in Pinellas Park", href: "/service-areas/pinellas-county/pinellas-park/" },
        { label: "Rats in Clearwater", href: "/service-areas/pinellas-county/clearwater/" },
      ],
    },
  ],
  localHeading: "St. Pete's yard and trash rules for rats",
  localIntro: "The city's rodent guide goes beyond sealing the house. These are its tips for the yard, the trash and the bird feeder.",
  local: [
    { icon: "home", title: "Firewood off the ground", text: p("The city says to stack firewood on open racks at least 18 inches off the ground and away from the house. A woodpile against the wall is a ready-made rat nest.") },
    { icon: "leaf", title: "Bird feeders", text: p("If you feed birds, St. Pete suggests a squirrel- and rat-deterring feeder, and a pan underneath to catch spilled seed, emptied before sundown.") },
    { icon: "critter", title: "Carts out in the morning", text: p("Garbage goes in closed containers, rolled to the curb only on the morning of collection day. Most single-family homes get one 90-gallon cart and twice-weekly pickup.") },
    { icon: "search", title: "Junk and overgrowth", text: p("City rules say discarded items can't be left in the yard, and owners must keep vegetation trimmed on their property and the city right-of-way. Both cut down on rat cover.") },
  ],
  contactsHeading: "St. Petersburg Sanitation and other rat contacts",
  contactsIntro: "Sanitation inspects for rats outdoors. For rodents inside a home, the city points you to a private company.",
  contacts: [
    { icon: "home", title: "Rats outside: Sanitation", text: p("St. Pete Sanitation, 727-893-7398, for outdoor rodent inspections in neighborhoods.") },
    { icon: "users", title: "Rats inside: a private company", text: p("The city's guide says to hire a private exterminator for rodents inside a home. Call us at (727) 594-7705.") },
  ],
  servicesIntro: "This page is about rats, but we handle every animal below in St. Petersburg.",
  servicesHeading: "St. Pete wildlife we remove besides rats",
  reviewsIntro: "[PLACEHOLDER: reviews from St. Petersburg rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "St. Petersburg rat questions",
  faqs: [
    faq(
      "Should I use rat poison in St. Petersburg?",
      "The city's guide says rodenticide should be considered only after all other methods have been tried, and applied exactly as the label says to protect children, pets and wildlife.",
    ),
    faq(
      "Do bird feeders attract rats?",
      "They can. Spilled seed is food. St. Pete recommends a squirrel- and rat-deterring feeder and a pan to catch spilled seed, emptied before dark.",
    ),
    faq(
      "Who is responsible for rats in a St. Pete rental?",
      "City code requires owners or occupants to eliminate infestations, and occupants of single-family and two-family homes are responsible for their own pest control. Check your lease for who hires the company.",
    ),
    faq(
      "How quickly can you come out for rats in St. Pete?",
      "Same-day rat inspections are often available in St. Petersburg. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for rat calls in St. Petersburg]",
    ),
  ],
  ctaHeading: "Rats in your St. Petersburg home?",
  ctaText: "For rats in St. Pete, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in St. Petersburg, FL | Pro Wildlife Removal",
    description:
      "Rat removal in St. Petersburg, FL: rats sealed out and trapped inside, plus the city's own tips on firewood, bird feeders and trash. Call (727) 594-7705.",
  },
  sources: [
    { title: "City of St. Petersburg: Rodent and insect control (firewood on open racks 18 inches up; rat-deterring feeder and a pan emptied before sundown; closed containers rolled out the morning of collection; rodenticide only after other methods; occupants of single and two-family homes responsible; Sanitation 727-893-7398; private exterminator inside)", url: RODENTS },
    { title: "City of St. Petersburg: Collection schedule (one 90-gallon container; twice-weekly collection; once-weekly option for qualifying homes)", url: "https://www.stpete.org/residents/utilities/residential_trash___recycling/collection_schedule.php" },
    { title: "City of St. Petersburg: Property maintenance (junk and rubbish can't be left in the yard; owners maintain vegetation on property and right of way)", url: "https://www.stpete.org/residents/community/property_maintenance.php" },
  ],
  clientQuestions: ["Typical response time for rat calls in St. Petersburg?", "St. Petersburg rat job reviews (from TTR-723) and real rat job photos."],
} satisfies CountyInput;

export const stPetersburgRats = countyPage(stPetersburgRatsInput);
