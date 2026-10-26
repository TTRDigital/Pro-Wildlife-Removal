import { countyPage, type CountyInput } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Dunedin, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: Dunedin solid waste rules and UF/IFAS Pinellas. */
const TRASH = "https://www.dunedin.gov/City-Services/Garbage-Recycling/Residential-Trash-Yard-Bulk-Waste";

export const dunedinRatsInput = {
  kind: "rat",
  path: "about-us/service-area/rat-removal-services-dunedin-fl",
  name: "Dunedin",
  county: "Pinellas",
  order: 34,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN DUNEDIN",
  heading: "Rat Removal in Dunedin, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Dunedin, FL: rats sealed out and trapped, plus Dunedin's own garbage advice for keeping rodents away.",
  heroText: "Rats in a Dunedin attic or wall? We find how they get in, close it off and trap the ones inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Dunedin?",
  answer:
    "The City of Dunedin doesn't list a rat removal service, so rats inside a home are a job for a private company. The city's own trash rules are written with rodents in mind. We close up the entry points and trap the rats still inside the house. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: bag your garbage", "Pickup once a week"],
  townsHeading: "Rat removal near Dunedin",
  townsIntro: "Rat calls from Dunedin's north Pinellas neighbors come to us as well, and so does every other animal in Dunedin.",
  towns: [
    {
      title: "Dunedin and neighbors",
      href: "/service-areas/pinellas-county/dunedin/",
      items: [
        { label: "All wildlife in Dunedin", href: "/service-areas/pinellas-county/dunedin/" },
        { label: "Rats in Clearwater", href: "/service-areas/pinellas-county/clearwater/" },
        { label: "Rats in Safety Harbor", href: "/service-areas/pinellas-county/safety-harbor/" },
      ],
    },
  ],
  localHeading: "Dunedin's trash rules, written for rodents",
  localIntro: "Dunedin's Solid Waste page is one of the few city pages that names rodents outright.",
  local: [
    { icon: "home", title: "Bag it first", text: p("\"To avoid attraction and infestation of bugs and rodents,\" Dunedin asks residents to bag household garbage before it goes in the cart.") },
    { icon: "critter", title: "A week between pickups", text: p("Dunedin collects trash, recycling and yard waste once a week. Loose food waste in a cart for seven days in Florida heat draws rats.") },
    { icon: "wrench", title: "Carts back by 7 a.m.", text: p("The city asks that carts come off the curb by 7 a.m. the day after collection. A cart left out is easier for animals to tip.") },
    { icon: "leaf", title: "Poison has a cost", text: p("UF/IFAS Extension in Pinellas puts sealing, sanitation and traps first, and poison bait last. It cites great horned owls in a local park that died of rodenticide poisoning.") },
  ],
  contactsHeading: "Dunedin Solid Waste, and help with rats indoors",
  contactsIntro: "Carts, bagging and bulk waste go through Dunedin Solid Waste; rats in the house come to us.",
  contacts: [
    { icon: "home", title: "Dunedin Solid Waste", text: p("(727) 298-3215, for missed pickups, carts and bulk waste.") },
    { icon: "users", title: "Rats inside your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  servicesIntro: "Rats are one job. These are the other animals we take out of Dunedin homes.",
  servicesHeading: "More than rats: animals we remove around Dunedin",
  reviewsIntro: "[PLACEHOLDER: reviews from Dunedin rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Dunedin rat questions",
  faqs: [
    faq(
      "Does the City of Dunedin remove rats?",
      "No. Dunedin's Solid Waste rules help prevent rats, but removing them from a home is up to the owner. See [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "Why does Dunedin ask me to bag my garbage?",
      "The city says bagging garbage before it goes in the cart helps avoid attracting bugs and rodents.",
    ),
    faq(
      "Is rat poison safe to use around Dunedin's parks and preserves?",
      "UF/IFAS Extension in Pinellas calls poison bait a last resort, after sealing, sanitation and traps, because rodenticide has killed owls in local parks.",
    ),
    faq(
      "Can someone look at our Dunedin rat problem today?",
      "Same-day rat inspections are often available in Dunedin. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Rats in your Dunedin home?",
  ctaText: "Rats in a Dunedin attic or garage? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Dunedin, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Dunedin, FL: rats sealed out of attics and walls and trapped inside, plus Dunedin's own garbage advice to keep rodents away. (727) 594-7705.",
  },
  sources: [
    { title: "City of Dunedin: Residential trash, yard and bulk waste (once a week; bag household garbage to avoid attracting bugs and rodents; carts off the curb by 7 a.m. the day after; Solid Waste (727) 298-3215)", url: TRASH },
    { title: "UF/IFAS Extension Pinellas: Management of rodents, July 25, 2022 (exclusion, sanitation, trapping; poison bait as a last resort; great horned owls at Philippe Park died of rodenticide poisoning)", url: "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/" },
  ],
  clientQuestions: ["Dunedin rat job reviews (from TTR-723) and real rat job photos."],
} satisfies CountyInput;

export const dunedinRats = countyPage(dunedinRatsInput);
