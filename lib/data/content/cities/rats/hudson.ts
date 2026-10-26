import { countyPage, type CountyInput } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Hudson, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: unincorporated Pasco garbage and code rules. */
export const hudsonRatsInput = {
  kind: "rat",
  path: "about-us/service-area/rat-removal-services-hudson-fl",
  name: "Hudson",
  county: "Pasco",
  order: 35,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN HUDSON",
  heading: "Rat Removal in Hudson, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Hudson, FL: rats sealed out of attics and walls and trapped inside, plus how garbage and code rules work in unincorporated Pasco.",
  heroText: "Rats in a Hudson attic, garage or boathouse? We close the gaps and trap the rats still inside. Call (727) 594-7705.",
  answerHeading: "Who handles rats in Hudson?",
  answer:
    "Hudson has no city government of its own. It's unincorporated Pasco County, which doesn't take rats out of homes. Garbage service is through a licensed hauler you sign up with yourself. For rats in the attic or walls, call a private company. We close off how they get in and trap the rest. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Sign up for your own hauler", "No garbage dumps in yards"],
  townsHeading: "Rat removal near Hudson",
  townsIntro: "We take rat calls along the north Pasco coast, and handle every other animal in Hudson too.",
  towns: [
    {
      title: "Hudson and the Pasco coast",
      href: "/service-areas/pasco-county/hudson/",
      items: [
        { label: "All wildlife in Hudson", href: "/service-areas/pasco-county/hudson/" },
        { label: "Rats in New Port Richey", href: "/service-areas/pasco-county/new-port-richey/" },
        { label: "Rats in Spring Hill", href: "/service-areas/hernando-county/spring-hill/" },
      ],
    },
  ],
  localHeading: "Pasco's rules, and what they mean for rats",
  localIntro: "Unincorporated Pasco works differently from a city. You choose your hauler, and the county's code limits what can pile up in a yard.",
  local: [
    { icon: "home", title: "No hauler, no pickup", text: p("Pasco says you must sign up with a licensed hauler to get curbside garbage and recycling service. With a hauler, pickup is twice a week. Without one, garbage stacks up, and so do rats.") },
    { icon: "search", title: "Yards aren't storage", text: p("County code bars using a yard to store junk cars, appliances or other nuisance items, and says no lot can be used as a garbage dump. Clutter like that is prime rat shelter.") },
    { icon: "critter", title: "Overgrown lots next door", text: p("Pasco only takes overgrowth complaints from an affected party: someone who owns or lives on land touching or surrounding the lot.") },
    { icon: "wrench", title: "Near the water", text: p("Docks, boathouses and seawalls give rats cover close to homes. Check where lines and pipes enter outbuildings, and keep bait and fish scraps sealed.") },
  ],
  contactsHeading: "Pasco's code line, and rat help for Hudson homes",
  contactsIntro: "An overgrown lot goes to Pasco County Customer Service. Rats indoors are a private job.",
  contacts: [
    { icon: "home", title: "Code complaints", text: p("Pasco County Customer Service, 727-847-2411, to file a code violation in Hudson.") },
    { icon: "users", title: "Rats inside your home", text: p("A private company. Call us at (727) 594-7705.") },
  ],
  servicesIntro: "Boathouse and shed rats are only part of it. Here are the other animals we remove in Hudson.",
  servicesHeading: "Other Hudson wildlife we handle besides rats",
  reviewsIntro: "[PLACEHOLDER: reviews from Hudson rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Hudson rat questions",
  faqs: [
    faq(
      "Does Pasco County pick up garbage in Hudson?",
      "Not directly. Pasco says residents must sign up with a licensed hauler, which collects twice a week, with recycling once a week.",
    ),
    faq(
      "Can I complain about an overgrown lot next to my Hudson home?",
      "Yes, if your land touches or surrounds it. Pasco treats owners and occupants of abutting land as affected parties. Call 727-847-2411.",
    ),
    faq(
      "Do you remove rats from boathouses and sheds?",
      "Yes. Outbuildings get the same treatment as a house: close the gaps, then trap the rats inside. See [rat removal](/services/rat-removal/).",
    ),
    faq(
      "Can you check for rats at my Hudson house today?",
      "Same-day rat inspections are often available in Hudson. Call (727) 594-7705.",
    ),
  ],
  ctaHeading: "Rats in your Hudson home?",
  ctaText: "Rats in a Hudson home, shed or boathouse? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Hudson, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Hudson, FL: rats sealed out and trapped in homes, garages and boathouses, and how garbage and code rules work in Pasco. Call (727) 594-7705.",
  },
  sources: [
    { title: "Pasco County: Garbage and recycling (must sign up with a licensed hauler; curbside twice a week, recycling once a week)", url: "https://www.pascocountyfl.gov/services/utilities/garbage_and_recycling/index.php" },
    { title: "Pasco County: Code compliance (yards not for junk storage; no lot used as a garbage dump; overgrowth complaints by an affected party owning or occupying abutting land; Customer Service 727-847-2411)", url: "https://www.pascocountyfl.gov/services/code_compliance/index.php" },
  ],
  clientQuestions: ["Hudson rat job reviews (from TTR-723) and real rat job photos."],
} satisfies CountyInput;

export const hudsonRats = countyPage(hudsonRatsInput);
