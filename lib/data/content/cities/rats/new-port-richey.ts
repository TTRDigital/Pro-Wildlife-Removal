import { countyPage } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in New Port Richey, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: the city's trash service. */
const TRASH = "https://cityofnewportrichey.org/Residents/Services/City-Trash-Services";

export const newPortRicheyRats = countyPage({
  kind: "rat",
  path: "rat-removal-new-port-richey",
  name: "New Port Richey",
  county: "Pasco",
  order: 36,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN NEW PORT RICHEY",
  heading: "Rat Removal in New Port Richey, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in New Port Richey, FL: rats sealed out and trapped, plus how the city's twice-weekly trash service works.",
  heroText: "Rats in a New Port Richey attic, wall or riverfront shed? We find the entry points, block them and trap what's left inside. Call (727) 594-7705.",
  answerHeading: "Who handles rats in New Port Richey?",
  answer:
    "The City of New Port Richey doesn't remove rats from homes, so that's a job for a private company. The city does run trash service through one hauler, twice a week. Pro Wildlife Removal blocks the entry points and traps the rats left in the house. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Trash Mondays and Thursdays", "One city hauler"],
  townsHeading: "Rat removal near New Port Richey",
  townsIntro: "We take rat calls along the west Pasco coast, and handle every other animal in New Port Richey too.",
  towns: [
    {
      title: "New Port Richey and neighbors",
      href: "/about-us/service-area/wildlife-removal-new-port-richey/",
      items: [
        { label: "All wildlife in New Port Richey", href: "/about-us/service-area/wildlife-removal-new-port-richey/" },
        { label: "Rats in Hudson", href: "/about-us/service-area/rat-removal-services-hudson-fl/" },
        { label: "Wildlife in Holiday", href: "/about-us/service-area/wildlife-removal-holiday-fl/" },
      ],
    },
  ],
  localHeading: "Trash service in New Port Richey",
  localIntro: "Unlike the unincorporated areas around it, New Port Richey has one hauler for every home and business in the city.",
  local: [
    { icon: "home", title: "One hauler for the city", text: p("Waste Pro, doing business as J.D. Parker & Sons, is the single hauler for all residents and businesses in New Port Richey.") },
    { icon: "critter", title: "Mondays and Thursdays", text: p("Residential garbage is collected twice a week, on Mondays and Thursdays, between 6 a.m. and 7 p.m. Food waste that misses a pickup sits for days.") },
    { icon: "wrench", title: "Carts and locks", text: p("The city lists 96-gallon trash carts, and lock bars as an extra service. A lid that latches keeps rats and raccoons out of the cart.") },
    { icon: "leaf", title: "On the river", text: p("Homes along the Pithlachascotee River often have docks, boathouses and seawalls, which give rats cover close to the house. Check where pipes and lines enter outbuildings.") },
  ],
  contactsHeading: "Who to call about rats in New Port Richey",
  contactsIntro: "Who to call about rats and trash in New Port Richey.",
  contacts: [
    { icon: "home", title: "Missed pickups", text: p("J.D. Parker & Sons, (727) 841-4260, for missed pickups and trash questions.") },
    { icon: "users", title: "Rats inside your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  servicesIntro: "This page is about rats, but we remove every animal below in New Port Richey.",
  servicesHeading: "Rats, and the other animals we remove in New Port Richey",
  reviewsIntro: "[PLACEHOLDER: reviews from New Port Richey rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "New Port Richey rat questions",
  faqs: [
    faq(
      "What days is trash picked up in New Port Richey?",
      "Mondays and Thursdays for homes, per the city's trash services page. J.D. Parker & Sons handles missed pickups: (727) 841-4260.",
    ),
    faq(
      "Does the city remove rats?",
      "No. New Port Richey's services cover trash, not rats in homes. See [rats in the attic](/services/rats-in-attic/) for the signs and what we do.",
    ),
    faq(
      "Can I get a lock for my trash cart?",
      "The city lists lock bars as an extra monthly service. Ask the city or J.D. Parker & Sons for details.",
    ),
    faq(
      "How soon can you come out for rats in New Port Richey?",
      "Rat calls from New Port Richey to (727) 594-7705 are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time for rat calls in New Port Richey]",
    ),
  ],
  ctaHeading: "Rats in your New Port Richey home?",
  ctaText: "For rats in New Port Richey, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in New Port Richey, FL | Call (727) 594-7705 | Pro Wildlife Removal",
    description:
      "Rat removal in New Port Richey, FL: rats sealed out and trapped in homes, garages and boathouses, plus how the city's trash service works. Call (727) 594-7705.",
  },
  sources: [
    { title: "City of New Port Richey: City trash services (Waste Pro dba J.D. Parker & Sons is the single hauler; residential collection Mondays and Thursdays, 6 a.m. to 7 p.m., twice a week; 96-gallon carts; lock bars as an extra service; (727) 841-4260)", url: TRASH },
    { title: "City of New Port Richey: Parks and facilities (the Cotee, or Pithlachascotee, River)", url: "https://www.cityofnewportrichey.org/Residents/Amenities/Parks-and-Facilities" },
  ],
  clientQuestions: ["Typical response time for rat calls in New Port Richey?", "New Port Richey rat job reviews (from TTR-723) and real rat job photos."],
});
