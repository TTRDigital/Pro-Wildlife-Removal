import { countyPage, type CountyInput } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Clearwater, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: Clearwater code and trash rules. */
const GUIDE = "https://www.myclearwater.com/My-Government/0-City-Departments/Planning-Development/Code-Compliance/Citizens-Guide-to-Code-Compliance";
const TRASH = "https://www.myclearwater.com/Trash-Recycling/Residential-Trash-Collection-Information";

export const clearwaterRatsInput = {
  kind: "rat",
  path: "about-us/service-area/rat-removal-services-clearwater-fl",
  name: "Clearwater",
  county: "Pinellas",
  order: 32,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN CLEARWATER",
  heading: "Rat Removal in Clearwater, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Clearwater, FL: roof rats sealed out and trapped, plus what Clearwater's code says about rat harborage.",
  heroText: "Rats in a Clearwater attic, wall or garage? We seal the gaps and trap the rats still inside. Call (727) 594-7705.",
  answerHeading: "Who gets rid of rats in Clearwater?",
  answer:
    "In Clearwater, rats on private property are the owner's problem to solve, and the city's code makes letting garbage or debris feed or shelter rats a violation. Pro Wildlife Removal seals the openings and traps the rats still inside. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City code bans rat harborage", "Trash pickup once a week"],
  townsHeading: "Rat removal near Clearwater",
  townsIntro: "We also handle rats in the towns around Clearwater, and every other animal in Clearwater itself.",
  towns: [
    {
      title: "Clearwater and neighbors",
      href: "/service-areas/pinellas-county/clearwater/",
      items: [
        { label: "All wildlife in Clearwater", href: "/service-areas/pinellas-county/clearwater/" },
        { label: "Rats in Dunedin", href: "/service-areas/pinellas-county/dunedin/" },
        { label: "Rats in Safety Harbor", href: "/service-areas/pinellas-county/safety-harbor/" },
        { label: "Rats in St. Petersburg", href: "/service-areas/pinellas-county/st-petersburg/" },
      ],
    },
  ],
  localHeading: "What Clearwater's rules say about rats",
  localIntro: "Clearwater's code compliance guide and trash rules are unusually direct about rats. Here's what they say.",
  local: [
    { icon: "home", title: "Harborage is illegal", text: p("City ordinance makes it unlawful to let garbage, rubbish, dead animals or food waste build up on a property \"so that rats may be afforded food or harborage.\"") },
    { icon: "search", title: "Debris that hides vermin", text: p("Under Clearwater's Community Development Code, piles of debris are a violation when they contain, or are likely to contain, rodents, reptiles or other vermin. Grass and weeds over 12 inches are a violation too.") },
    { icon: "critter", title: "One pickup a week", text: p("Clearwater collects household trash once a week. With a week between pickups, a closed lid matters. The city asks residents to put garbage in the container and close the lid.") },
    { icon: "wrench", title: "Curb timing", text: p("Carts go out no earlier than 7 p.m. the night before and come back in by 7 a.m. the day after. Yard waste and bulk debris shouldn't sit at the curb more than 24 hours before pickup.") },
  ],
  contactsHeading: "Clearwater Code Compliance, and rats inside the house",
  contactsIntro: "Debris or overgrowth next door goes to the city. Rats already in your walls are a private job.",
  contacts: [
    { icon: "home", title: "Report harborage next door", text: p("Clearwater Code Compliance, (727) 562-4720, takes reports of debris, overgrowth and other code violations.") },
    { icon: "users", title: "Rats inside your home", text: p("That's a job for a private company. Call us at (727) 594-7705.") },
  ],
  servicesIntro: "Rats are this page's focus, but we remove every animal below in Clearwater too.",
  servicesHeading: "Beyond rats: every Clearwater animal we handle",
  reviewsIntro: "[PLACEHOLDER: reviews from Clearwater rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Clearwater rat questions",
  faqs: [
    faq(
      "Can I report a neighbor's property for attracting rats in Clearwater?",
      "Yes. Clearwater's code bans letting garbage or debris give rats food or shelter. Call Code Compliance at (727) 562-4720.",
    ),
    faq(
      "Does the City of Clearwater remove rats?",
      "No. Clearwater doesn't list a rat removal service. For rats inside your home, hire a private company. See [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "How do I keep rats out of my Clearwater trash?",
      "Bag it, close the lid and follow the city's set-out times. Clearwater picks up once a week, so a cart with a broken lid feeds rats for days.",
    ),
    faq(
      "Can someone check our Clearwater rat problem today?",
      "Same-day rat inspections are often available in Clearwater. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for rat calls in Clearwater]",
    ),
  ],
  ctaHeading: "Rats in your Clearwater home?",
  ctaText: "Rats in a Clearwater attic, wall or garage? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Clearwater, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Clearwater, FL: roof rats sealed out and trapped inside the home, plus what Clearwater's code says about rat harborage. Call (727) 594-7705.",
  },
  sources: [
    { title: "City of Clearwater: Citizens Guide to Code Compliance (CO 24.27 & 32.283: garbage or debris so that rats may be afforded food or harborage; Clearwater Community Development Code Sec. 3-1503.B.5–B.8: debris likely to contain rodents, reptiles or other vermin; grass over 12 inches; Code Compliance (727) 562-4720)", url: GUIDE },
    { title: "City of Clearwater: Residential trash collection (once a week; close the lid; curb no earlier than 7 p.m. the night before, removed by 7 a.m. the day after; yard waste and bulk no more than 24 hours early)", url: TRASH },
  ],
  clientQuestions: ["Typical response time for rat calls in Clearwater?", "Clearwater rat job reviews (from TTR-723) and real rat job photos."],
} satisfies CountyInput;

export const clearwaterRats = countyPage(clearwaterRatsInput);
