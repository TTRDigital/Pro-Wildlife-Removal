import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";
import { dadeCityRatsInput } from "./rats/dade-city.ts";

/* Dade City page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
export const dadeCity = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-dade-city",
  name: "Dade City",
  county: "Pasco",
  order: 11,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN DADE CITY",
  summary: "Wildlife removal in Dade City, FL: raccoons, rats, squirrels, opossums, armadillos, snakes, bats and more, in east Pasco.",
  heroText: "The Pasco County seat, in east Pasco near the Withlacoochee River and the Green Swamp. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife problems in Dade City?",
  answer:
    "Dade City's own pages don't list an animal control service. Pasco County Animal Services handles pets and strays, and animals living in your home are a job for a private company. Pro Wildlife Removal works in Dade City and east Pasco. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Pasco County seat", "Near the Green Swamp"],
  townsHeading: "Dade City and nearby",
  townsIntro: "Dade City is the Pasco County seat, with about 10,200 residents in 2025. We also cover the east Pasco communities around it.",
  towns: [
    {
      title: "East Pasco",
      href: "/about-us/service-area/wildlife-removal-in-pasco-county-fl/",
      items: [
        { label: "Zephyrhills" },
        { label: "San Antonio" },
        { label: "Pasadena Hills" },
        { label: "Wesley Chapel" },
        { label: "Land O' Lakes", href: "/about-us/service-area/wildlife-removal-land-o-lakes/" },
      ],
    },
  ],
  localHeading: "River, swamp and bears",
  localIntro: "East Pasco is wilder than the coast. The Withlacoochee River and the Green Swamp are both a short drive from downtown.",
  local: [
    { icon: "leaf", title: "Green Swamp", text: p("FWC's Great Florida Birding Trail says the 560,000-acre Green Swamp spans four counties, and that Florida black bears live on its 36,649-acre West Tract, off Ranch Road in Dade City.") },
    { icon: "map-pin", title: "Withlacoochee River Park", text: p("Pasco County describes this wilderness park as 406 acres on Withlacoochee Boulevard. The Birding Trail lists sandhill cranes, swallow-tailed kites, limpkins, and barred and great horned owls.") },
    { icon: "critter", title: "Rabies alerts nearby", text: p("In February 2026, DOH-Pasco issued a rabies alert for the Zephyrhills area after a rabid raccoon was found there. In July, it advised of two more rabid raccoons in east Pasco.") },
    { icon: "home", title: "Overgrown lots", text: p("Dade City code enforcement handles complaints about excessive trash or debris. If an overgrown lot isn't cleaned up, the city says it will do the work and place a lien on the property.") },
  ],
  rats: { heading: dadeCityRatsInput.localHeading, intro: dadeCityRatsInput.localIntro, cards: [...dadeCityRatsInput.local, ...(dadeCityRatsInput.contacts ?? [])], link: { label: "rat removal across Pasco County", href: "/services/rat-removal/pasco-county-fl/" } },
  contactsHeading: "Dade City code enforcement and Pasco contacts",
  contactsIntro: "Trash and debris complaints go to the city on Meridian Avenue, strays to Pasco County. Here's who covers what in Dade City.",
  contacts: [
    { icon: "home", title: "Dade City Code Enforcement", text: p("(352) 523-5050, 38020 Meridian Avenue, for trash, debris, junk cars and other nuisance complaints inside city limits.") },
    { icon: "users", title: "Pasco County Animal Services", text: p("813-929-1212 for stray and lost pets in Dade City and across the county.") },
    { icon: "phone", title: "Bears and bites", text: p("Bears: FWC Southwest Region, 863-648-3200. Bites and scratches: DOH-Pasco, 352-521-1450, option 4.") },
  ],
  servicesIntro: "Every service is available in Dade City. Tap an animal to see how we handle it.",
  servicesHeading: "Animals we remove in Dade City",
  reviewsIntro: "[PLACEHOLDER: reviews from Dade City customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Are there bears near Dade City?",
      "Yes. The Great Florida Birding Trail says Florida black bears live on the Green Swamp's West Tract, which has a Dade City address. Report bear conflicts to FWC, 863-648-3200, and keep trash and pet food secured.",
    ),
    faq(
      "Does Dade City have animal control?",
      "Not its own. Pasco County Animal Services covers pets and strays (813-929-1212). Wildlife in your attic or walls needs a private wildlife company.",
    ),
    faq(
      "Do you handle rats in Dade City?",
      "Yes. The rats section above has the city-specific details.",
    ),
    faq(
      "Will you drive out to Dade City the same day?",
      "Same-day appointments are often available in Dade City. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Dade City]",
    ),
  ],
  ctaHeading: "Wildlife problem in Dade City?",
  ctaText: "Dade City homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Dade City, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Dade City, FL: raccoons, rats, squirrels, opossums and snakes near the Green Swamp, and who to call for what in town. (727) 594-7705.",
  },
  sources: [
    S.edr,
    S.seats,
    { title: "City of Dade City: Code enforcement ((352) 523-5050; 38020 Meridian Ave; excessive trash or debris; overgrown lots remedied with a lien)", url: "https://www.dadecityfl.com/business_development/code_enforcement/index.php" },
    { title: "FWC Great Florida Birding Trail: Green Swamp Wilderness Preserve, West Tract (36,649 acres; 13347 Ranch Rd., Dade City; 560,000-acre Green Swamp spans four counties; Florida black bear)", url: "https://floridabirdingtrail.com/site/green-swamp-wilderness-preserve-west-tract/" },
    { title: "Pasco County: Withlacoochee River Park (406 acres; 12449 Withlacoochee Blvd, Dade City)", url: "https://www.pascocountyfl.gov/_T22_R84.php" },
    { title: "FWC Great Florida Birding Trail: Withlacoochee River Park (sandhill crane, swallow-tailed kite, limpkin, barred and great horned owls)", url: "https://floridabirdingtrail.com/site/withlacoochee-river-park/" },
    { title: "Florida DOH: DOH-Pasco rabies alert, Feb 6, 2026 (rabid raccoon, Zephyrhills area)", url: "https://www.floridahealth.gov/wp-content/uploads/2026/02/alert-pascoe-02-05-26.pdf" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (two rabid raccoons, east Pasco; 352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "Pasco County: Animal Services (813-929-1212)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "FWC: Regional offices (Southwest 863-648-3200)", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
    ...dadeCityRatsInput.sources,
  ],
  clientQuestions: ["Typical response time in Dade City?", "Dade City reviews (from TTR-723) and real Dade City job photos."],
});
