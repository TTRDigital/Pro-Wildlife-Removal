import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";
import { newPortRicheyRatsInput } from "./rats/new-port-richey.ts";

/* New Port Richey page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const CONSERVATION = "https://www.cityofnewportrichey.org/files/assets/city/v/1/development/documents/planning/conservation-element-effective-march-212c-2016.pdf";

export const newPortRichey = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-new-port-richey",
  name: "New Port Richey",
  county: "Pasco",
  order: 18,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN NEW PORT RICHEY",
  summary: "Wildlife removal in New Port Richey, FL: raccoons, armadillos, opossums, squirrels, snakes, rats, bats and more.",
  heroText: "A riverfront city on the Cotee, where the city's own planners list raccoons, armadillos, opossums, snakes and squirrels as everyday neighbors. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife in New Port Richey?",
  answer:
    "The City of New Port Richey says Pasco County handles all animal control concerns. The county's own pages focus on pets and stray domestic animals. For raccoons, opossums, squirrels or rats in your home, call a private company. Pro Wildlife Removal works across New Port Richey. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County handles animal control", "On the Cotee River"],
  townsHeading: "New Port Richey and nearby",
  townsIntro: "New Port Richey has about 17,000 residents. The city's planning documents note Port Richey sits immediately to the north.",
  towns: [
    {
      title: "West Pasco",
      href: "/about-us/service-area/wildlife-removal-in-pasco-county-fl/",
      items: [
        { label: "Port Richey" },
        { label: "Holiday", href: "/about-us/service-area/wildlife-removal-holiday-fl/" },
        { label: "Trinity", href: "/about-us/service-area/trinity-wildlife-removal/" },
        { label: "Hudson", href: "/about-us/service-area/hudson-wildlife-removal/" },
        { label: "Odessa", href: "/about-us/service-area/wildlife-removal-odessa-fl/" },
      ],
    },
  ],
  localHeading: "What lives in New Port Richey",
  localIntro: "The city's own conservation plan is candid: with this much development, the wildlife in and around town is the kind that tolerates people.",
  local: [
    { icon: "critter", title: "The usual suspects", text: p("New Port Richey's Comprehensive Plan lists raccoons, armadillos, opossums, lizards, snakes, squirrels and rabbits as the species expected in and around the city.") },
    { icon: "leaf", title: "James E. Grey Preserve", text: p("The city's 80-acre preserve is on the Great Florida Birding Trail and, per the city, home to 140 bird species along with deer, wild boar, turtles and manatees.") },
    { icon: "map-pin", title: "Life on the Cotee", text: p("The city says dolphins and manatees are a common sight on the Pithlachascotee River. Riverfront yards also see more of the shoreline wildlife that comes with it.") },
    { icon: "search", title: "Rabies in Pasco", text: p("Pasco County Animal Services reports 24 animals that tested positive for rabies from 2013 to 2023: 17 raccoons, 6 cats and 1 bat. Keep pets vaccinated and leave raccoons alone.") },
  ],
  rats: { heading: newPortRicheyRatsInput.localHeading, intro: newPortRicheyRatsInput.localIntro, cards: [...newPortRicheyRatsInput.local, ...(newPortRicheyRatsInput.contacts ?? [])], link: { label: "rat removal across Pasco County", href: "/services/rat-removal/pasco-county-fl/" } },
  contactsHeading: "Pasco and FWC numbers New Port Richey uses",
  contactsIntro: "Here's who to call for what in New Port Richey, from the city's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Pasco County Animal Services", text: p("813-929-1212, Land O' Lakes. Emergencies outside office hours: (727) 847-8102, option 7. The city's FAQ says Pasco County handles all animal control concerns.") },
    { icon: "phone", title: "Animal bites: DOH-Pasco", text: p("352-521-1450, option 4, the reporting line DOH-Pasco gives in its 2026 rabies advisory.") },
    { icon: "map-pin", title: "Alligators and bears: FWC", text: p("Nuisance alligators: 866-FWC-GATOR. Bears: FWC Southwest Region office, 863-648-3200.") },
  ],
  servicesIntro: "Every service is available in New Port Richey. Pick an animal to see how we deal with it.",
  servicesHeading: "Animals we remove in New Port Richey",
  reviewsIntro: "[PLACEHOLDER: reviews from New Port Richey customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does the City of New Port Richey have animal control?",
      "No. The city's FAQ says Pasco County handles all animal control concerns: 813-929-1212. For wildlife in or under your home, call a wildlife removal company.",
    ),
    faq(
      "Why do I keep seeing armadillos and opossums in New Port Richey?",
      "They're among the species the city's own plan expects in an urban area like this, along with raccoons, snakes and squirrels. Food, water and shelter keep them around. See [armadillo removal](/services/armadillo-removal/) and [opossum removal](/services/opossum-removal/).",
    ),
    faq(
      "Is rabies found in Pasco County?",
      "Yes. Pasco County Animal Services counted 24 rabies-positive animals from 2013 to 2023, most of them raccoons. Report any bite to DOH-Pasco at 352-521-1450, option 4.",
    ),
    faq(
      "How fast can you reach New Port Richey?",
      "Same-day appointments are often available in New Port Richey. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in New Port Richey]",
    ),
  ],
  ctaHeading: "Wildlife problem in New Port Richey?",
  ctaText: "New Port Richey homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in New Port Richey | Pro Wildlife Removal",
    description:
      "Wildlife removal in New Port Richey, FL: raccoons, armadillos, opossums, squirrels, snakes and rats, and who to call in the city. Call (727) 594-7705.",
  },
  sources: [
    S.edr,
    { title: "City of New Port Richey: FAQ, animal control (Pasco County handles all animal control concerns)", url: "https://www.cityofnewportrichey.org/Residents/Services/FAQs/Animal-Control" },
    { title: "City of New Port Richey: Comprehensive Plan Conservation Element, 2016 (wildlife limited to species tolerant of people: raccoons, armadillos, opossums, lizards, snakes, squirrels, rabbits; Port Richey immediately north)", url: CONSERVATION },
    { title: "City of New Port Richey: Parks and facilities (James E. Grey Preserve, 80 acres, Great Florida Birding Trail, 140 bird species, deer, wild boar, turtles, manatees; dolphins and manatees on the Cotee)", url: "https://www.cityofnewportrichey.org/Residents/Amenities/Parks-and-Facilities" },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat)", url: "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php" },
    { title: "Pasco County: Animal Services (813-929-1212; after hours (727) 847-8102 option 7; emergency care for domestic strays)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Regional offices and Nuisance Alligator Program", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    ...newPortRicheyRatsInput.sources,
  ],
  clientQuestions: ["Typical response time in New Port Richey?", "New Port Richey reviews (from TTR-723) and real New Port Richey job photos."],
});
