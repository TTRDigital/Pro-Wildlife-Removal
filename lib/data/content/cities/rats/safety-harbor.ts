import { countyPage, type CountyInput } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Safety Harbor, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: the city's wildlife page and sanitation rules. */
const WILDLIFE = "https://www.cityofsafetyharbor.com/948/Protecting-Our-Wildlife";

export const safetyHarborRatsInput = {
  kind: "rat",
  path: "about-us/service-area/rat-removal-safety-harbor",
  name: "Safety Harbor",
  county: "Pinellas",
  order: 38,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "RAT REMOVAL IN SAFETY HARBOR",
  heading: "Rat Removal in Safety Harbor, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Safety Harbor, FL: rats sealed out and trapped, plus what the city says about rat poison and glue traps.",
  heroText: "Rats in a Safety Harbor attic or wall? We seal the gaps and trap the rats inside. Call (844) 264-6254.",
  answerHeading: "How do you get rid of rats in Safety Harbor?",
  answer:
    "Seal the gaps, remove what feeds them and trap the rats left inside. Safety Harbor says no rat poison is truly safe, warns against anticoagulant baits and says never to use glue traps. Pro Wildlife Removal seals and traps across the city. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "City: no poison is truly safe", "No glue traps"],
  townsHeading: "Rat removal near Safety Harbor",
  townsIntro: "Safety Harbor's neighbors in north Pinellas can call us about rats too. In Safety Harbor itself, we handle every other animal as well.",
  towns: [
    {
      title: "Safety Harbor and neighbors",
      href: "/service-areas/pinellas-county/safety-harbor/",
      items: [
        { label: "All wildlife in Safety Harbor", href: "/service-areas/pinellas-county/safety-harbor/" },
        { label: "Rats in Clearwater", href: "/service-areas/pinellas-county/clearwater/" },
        { label: "Rats in Dunedin", href: "/service-areas/pinellas-county/dunedin/" },
      ],
    },
  ],
  localHeading: "Safety Harbor's take on rats",
  localIntro: "Few cities say as much about rodent control as Safety Harbor does. Its wildlife page reads like a guide to doing it without harming owls and pets.",
  local: [
    { icon: "critter", title: "No such thing as safe poison", text: p("The city says there's no such thing as a safe rat poison, that poisoned rodents get eaten by the predators that help control rats, and that rat poison kills dogs and cats too.") },
    { icon: "search", title: "Never glue traps", text: p("Safety Harbor says never to use glue or sticky traps, which kill songbirds and other wildlife. It suggests snap traps or electronic traps for rodents still indoors.") },
    { icon: "leaf", title: "Let the owls help", text: p("The city suggests an owl nest box, noting a single owl can catch 1,400 rodents a year. UF/IFAS Pinellas reported great horned owls at Philippe Park that died of rat poison.") },
    { icon: "home", title: "Lids that close", text: p("Garbage goes in the city's 90-gallon barrel, collected once a week, and the lid must close. The city also asks residents to pick up pet food, spilled birdseed and fallen fruit.") },
  ],
  contactsHeading: "Safety Harbor Sanitation, and rats inside your home",
  contactsIntro: "The Sanitation Division covers barrels and dead animals on city roads. Rats in the house are a private hire.",
  contacts: [
    { icon: "home", title: "Sanitation Division", text: p("727-724-1550, for barrels, missed pickups and dead animals on city roads.") },
    { icon: "users", title: "Rats inside your home", text: p("The city asks residents who hire help to choose exterminators who don't use anticoagulant rodenticides. Call us at (844) 264-6254.", "[PLACEHOLDER: ask the client: which rodenticides, if any, do you use?]") },
  ],
  servicesIntro: "Rats aside, here's every other animal we take out of Safety Harbor homes.",
  servicesHeading: "Safety Harbor animals we remove besides rats",
  reviewsIntro: "[PLACEHOLDER: reviews from Safety Harbor rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Safety Harbor rat questions",
  faqs: [
    faq(
      "Does Safety Harbor allow rat poison?",
      "The city doesn't ban it, but it says no rat poison is truly safe, warns against anticoagulant baits, and asks residents who hire help to choose exterminators who don't use anticoagulant rodenticides.",
    ),
    faq(
      "Do you use poison to get rid of rats?",
      "We seal entry points and trap the rats inside.",
      "[PLACEHOLDER: ask the client: confirm the methods used for rats (traps only, or any bait), so this answer is accurate]",
    ),
    faq(
      "What can I do today to keep rats away in Safety Harbor?",
      "Follow the city's list: keep trash bins tightly closed, and pick up pet food, spilled birdseed and fallen fruit. See [rats in the attic](/services/rats-in-attic/) for signs to look for.",
    ),
    faq(
      "Could you inspect for rats in Safety Harbor today?",
      "Same-day rat inspections are often available in Safety Harbor. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Rats in your Safety Harbor home?",
  ctaText: "Rats in a Safety Harbor attic, garage or shed? Call (844) 264-6254.",
  seo: {
    title: "Rat Removal in Safety Harbor, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Safety Harbor, FL: rats sealed out and trapped inside, plus what the city says about rat poison, glue traps and owls. Call (844) 264-6254.",
  },
  sources: [
    { title: "City of Safety Harbor: Protecting our wildlife (no safe rat poison; poison increases rodent population long term; kills dogs and cats and predators; never glue or sticky traps; snap traps or electronic zappers; owl nest box, 1,400 rodents a year; keep bins closed, remove pet food, birdseed, fallen fruit; safer rodenticides and preventive measures)", url: WILDLIFE },
    { title: "City of Safety Harbor: Are you poisoning wildlife and pets? (brochure; no such thing as a 'safe' rat poison; anticoagulant rodenticides; hire exterminators who do not use anticoagulant rodenticides)", url: "https://www.cityofsafetyharbor.com/DocumentCenter/View/16140/Are-You-Poisoning-Wildlife-and-Pets" },
    { title: "City of Safety Harbor: Sanitation Division (once a week; 90-gallon barrel; lid must close; 727-724-1550)", url: "https://www.cityofsafetyharbor.com/108/Sanitation-Division" },
    { title: "City of Safety Harbor: FAQ (dead animals on city rights-of-way, 724-1550)", url: "http://www.cityofsafetyharbor.com/m/faq" },
    { title: "UF/IFAS Extension Pinellas: Management of rodents, July 25, 2022 (great horned owls at Philippe Park died of rodenticide poisoning)", url: "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/" },
  ],
  clientQuestions: ["Do you use any rat bait, and if so which kind (anticoagulant or not)? Or traps only?", "Safety Harbor rat job reviews (from TTR-723) and real rat job photos."],
} satisfies CountyInput;

export const safetyHarborRats = countyPage(safetyHarborRatsInput);
