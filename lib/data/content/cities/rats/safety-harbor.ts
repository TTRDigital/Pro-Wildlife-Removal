import { countyPage } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Safety Harbor, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: the city's wildlife page and sanitation rules. */
const WILDLIFE = "https://www.cityofsafetyharbor.com/948/Protecting-Our-Wildlife";

export const safetyHarborRats = countyPage({
  kind: "rat",
  path: "about-us/service-area/rat-removal-safety-harbor",
  name: "Safety Harbor",
  county: "Pinellas",
  order: 38,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN SAFETY HARBOR",
  heading: "Rat Removal in Safety Harbor, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Safety Harbor, FL: rats sealed out and trapped without poison, in line with the city's own advice on protecting wildlife.",
  heroText: "Rats in a Safety Harbor attic or wall? We seal the gaps and trap the rats inside, without rat poison. Call (727) 594-7705.",
  answerHeading: "How do you get rid of rats in Safety Harbor?",
  answer:
    "Seal the gaps, remove what feeds them and trap the rats left inside. Safety Harbor's own wildlife page warns against rat poison and glue traps because they kill owls, pets and songbirds. Pro Wildlife Removal works this way across the city. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City: no safe rat poison", "No glue traps"],
  townsHeading: "Rat removal near Safety Harbor",
  townsIntro: "We take rat calls across north Pinellas, and handle every other animal in Safety Harbor too.",
  towns: [
    {
      title: "Safety Harbor and neighbors",
      href: "/about-us/service-area/wildlife-removal-safety-harbor/",
      items: [
        { label: "All wildlife in Safety Harbor", href: "/about-us/service-area/wildlife-removal-safety-harbor/" },
        { label: "Rats in Clearwater", href: "/about-us/service-area/rat-removal-services-clearwater-fl/" },
        { label: "Rats in Dunedin", href: "/about-us/service-area/rat-removal-services-dunedin-fl/" },
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
  contactsHeading: "Who to call about rats in Safety Harbor",
  contactsIntro: "Who to call about rats and trash in Safety Harbor.",
  contacts: [
    { icon: "home", title: "Sanitation Division", text: p("727-724-1550, for barrels, missed pickups and dead animals on city roads.") },
    { icon: "users", title: "Rats inside your home", text: p("A private company that doesn't rely on anticoagulant poison, as the city recommends. Call us at (727) 594-7705.") },
  ],
  servicesIntro: "This page is about rats, but we remove every animal below in Safety Harbor.",
  servicesHeading: "Rats, and the other animals we remove in Safety Harbor",
  reviewsIntro: "[PLACEHOLDER: reviews from Safety Harbor rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Safety Harbor rat questions",
  faqs: [
    faq(
      "Does Safety Harbor allow rat poison?",
      "The city doesn't ban it on this page, but it strongly advises against it. It says poison can increase rodent numbers over time by killing their predators, and asks residents to hire exterminators who don't use anticoagulant rodenticides.",
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
      "How soon can you come out for rats in Safety Harbor?",
      "Rat calls from Safety Harbor to (727) 594-7705 are answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time for rat calls in Safety Harbor]",
    ),
  ],
  ctaHeading: "Rats in your Safety Harbor home?",
  ctaText: "For rats in Safety Harbor, call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Safety Harbor, FL | Call (727) 594-7705 | Pro Wildlife Removal",
    description:
      "Rat removal in Safety Harbor, FL: rats sealed out and trapped without poison or glue traps, as the city recommends to protect owls and pets. Call (727) 594-7705.",
  },
  sources: [
    { title: "City of Safety Harbor: Protecting our wildlife (no safe rat poison; poison increases rodent population long term; kills dogs and cats and predators; never glue or sticky traps; snap traps or electronic zappers; owl nest box, 1,400 rodents a year; keep bins closed, remove pet food, birdseed, fallen fruit; hire exterminators who don't use anticoagulant rodenticides)", url: WILDLIFE },
    { title: "City of Safety Harbor: Sanitation Division (once a week; 90-gallon barrel; lid must close; 727-724-1550)", url: "https://www.cityofsafetyharbor.com/108/Sanitation-Division" },
    { title: "City of Safety Harbor: FAQ (dead animals on city rights-of-way, 724-1550)", url: "http://www.cityofsafetyharbor.com/m/faq" },
    { title: "UF/IFAS Extension Pinellas: Management of rodents, July 25, 2022 (great horned owls at Philippe Park died of rodenticide poisoning)", url: "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/" },
  ],
  clientQuestions: ["Typical response time for rat calls in Safety Harbor?", "Do you use any rat bait, or traps only? (The page leans on the city's no-poison advice.)", "Safety Harbor rat job reviews (from TTR-723) and real rat job photos."],
});
