import { countyPage, type CountyInput } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Dade City, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: Dade City garbage and code enforcement. */
const TRASH = "https://www.dadecityfl.com/city_services/garbage_recycle_services.php";

export const dadeCityRatsInput = {
  kind: "rat",
  path: "about-us/service-area/rat-removal-dade",
  name: "Dade City",
  county: "Pasco",
  order: 33,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "RAT REMOVAL IN DADE CITY",
  heading: "Rat Removal in Dade City, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Dade City, FL: rats sealed out and trapped, plus Dade City's animal-proof container rule and code enforcement.",
  heroText: "Rats in a Dade City attic, barn or shed? We find the way in, close it and trap the rats inside. Call (844) 264-6254.",
  answerHeading: "Who handles rats in Dade City?",
  answer:
    "Dade City doesn't remove rats from homes, so that's a job for a private company. The city does ask that garbage containers be animal proof with tight-fitting lids. Pro Wildlife Removal seals the gaps and traps the rats that are still inside. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "City: animal-proof lids", "Code covers trash and debris"],
  townsHeading: "Rat removal near Dade City",
  townsIntro: "We take rat calls across east Pasco, and handle every other animal in Dade City too.",
  towns: [
    {
      title: "Dade City and east Pasco",
      href: "/service-areas/pasco-county/dade-city/",
      items: [
        { label: "All wildlife in Dade City", href: "/service-areas/pasco-county/dade-city/" },
        { label: "Rats in Hudson", href: "/service-areas/pasco-county/hudson/" },
        { label: "Rats in New Port Richey", href: "/service-areas/pasco-county/new-port-richey/" },
      ],
    },
  ],
  localHeading: "Dade City's rules that help with rats",
  localIntro: "Dade City's garbage page and code enforcement office both bear on rats, even where they don't name them.",
  local: [
    { icon: "home", title: "Animal-proof containers", text: p("Dade City asks residents to make sure their garbage container is animal proof, with a tight-fitting lid. Containers should be 35 gallons or less and under 50 pounds.") },
    { icon: "leaf", title: "Yard waste sized right", text: p("Limbs and branches must be under 4 feet long and 6 inches thick for pickup. Brush that's too big to collect tends to sit, and rats move in.") },
    { icon: "search", title: "Trash and debris complaints", text: p("Dade City code enforcement handles complaints about excessive trash or debris, junk cars and other nuisances inside city limits.") },
    { icon: "critter", title: "Barns and feed", text: p("On larger east Pasco lots, feed rooms and barns draw rats as surely as kitchens do. Store feed in metal bins with tight lids and keep stored hay off the ground.") },
  ],
  contactsHeading: "Dade City garbage and code numbers for rat trouble",
  contactsIntro: "Waste Pro and the city's office on Meridian Avenue cover the trash side of a rat problem.",
  contacts: [
    { icon: "home", title: "Garbage in city limits", text: p("Waste Pro collects for Dade City homes: 352-523-5051. Public Works, (352) 523-5050, takes pickup questions.") },
    { icon: "users", title: "Code enforcement", text: p("(352) 523-5050, 38020 Meridian Avenue, for trash, debris and nuisance complaints.") },
  ],
  servicesIntro: "From feed-room rats to everything listed below, these are the animals we take on in Dade City.",
  servicesHeading: "Other Dade City animal jobs besides rats",
  reviewsIntro: "[PLACEHOLDER: reviews from Dade City rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Dade City rat questions",
  faqs: [
    faq(
      "What kind of garbage can does Dade City require?",
      "The city asks for animal-proof containers with tight-fitting lids, no larger than 35 gallons and no heavier than 50 pounds, placed within 4 feet of the curb.",
    ),
    faq(
      "Who picks up garbage in Dade City?",
      "Waste Pro collects for homes inside city limits (352-523-5051). Recycling goes out every Wednesday.",
    ),
    faq(
      "Can you get rats out of a barn or feed room?",
      "Yes. We close the gaps in the building and trap the rats inside. See [rat removal](/services/rat-removal/) for how it works.",
    ),
    faq(
      "Is a same-day rat visit possible in Dade City?",
      "Same-day rat inspections are often available in Dade City. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Rats in your Dade City home?",
  ctaText: "Rats in an east Pasco barn, shed or attic around Dade City? Call (844) 264-6254.",
  seo: {
    title: "Rat Removal in Dade City, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Dade City, FL: rats sealed out of homes, barns and sheds and trapped inside, plus Dade City's animal-proof container rule. (844) 264-6254.",
  },
  sources: [
    { title: "City of Dade City: Garbage and recycle services (Waste Pro collects within city limits; animal proof containers with tight fitting lids; 35 gallons and 50 pounds max; within 4 feet of the curb; recycling Wednesdays; limbs under 4 feet and 6 inches; Public Works (352) 523-5050; Waste Pro 352-523-5051)", url: TRASH },
    { title: "City of Dade City: Code enforcement ((352) 523-5050; 38020 Meridian Ave; excessive trash or debris, junk cars, nuisance violations)", url: "https://www.dadecityfl.com/business_development/code_enforcement/index.php" },
  ],
  clientQuestions: ["Dade City rat job reviews (from TTR-723) and real rat job photos."],
} satisfies CountyInput;

export const dadeCityRats = countyPage(dadeCityRatsInput);
