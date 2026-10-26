import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Safety Harbor page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const FAQ = "http://www.cityofsafetyharbor.com/m/faq";

export const safetyHarbor = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-safety-harbor",
  name: "Safety Harbor",
  county: "Pinellas",
  order: 24,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "WILDLIFE REMOVAL IN SAFETY HARBOR",
  summary: "Wildlife removal in Safety Harbor, FL: raccoons, rats, squirrels, opossums, snakes, bats and more, on Old Tampa Bay.",
  heroText: "A small city on the northwest edge of Old Tampa Bay, with big shade trees, a nature preserve and Philippe Park. Call (727) 594-7705.",
  answerHeading: "Who handles wildlife in Safety Harbor?",
  answer:
    "Safety Harbor's own Public Works picks up dead animals from city rights-of-way, and FWC handles nuisance alligators. Animals living in your attic, walls or crawl space are a job for a private company. Pro Wildlife Removal works across Safety Harbor. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "City picks up road kill", "FWC handles alligators"],
  townsHeading: "Safety Harbor and nearby",
  townsIntro: "Safety Harbor has about 16,800 residents, on the northwest edge of Old Tampa Bay.",
  towns: [
    {
      title: "Upper Tampa Bay, Pinellas side",
      href: "/about-us/service-area/wildlife-removal-pinellas-county/",
      items: [
        { label: "Clearwater", href: "/about-us/service-area/wildlife-removal-clearwater-fl/" },
        { label: "Dunedin", href: "/about-us/service-area/wildlife-removal-dunedin/" },
        { label: "Oldsmar" },
        { label: "Palm Harbor", href: "/about-us/service-area/wildlife-removal-palm-harbor/" },
      ],
    },
  ],
  localHeading: "Parks and preserves on the bay",
  localIntro: "Safety Harbor packs a county park, a city preserve and a waterfront park into a small area along Old Tampa Bay.",
  local: [
    { icon: "leaf", title: "Philippe Park", text: p("Pinellas County's Philippe Park covers 92 acres on Philippe Parkway, under big shade trees. UF/IFAS Extension in Pinellas reported that great horned owls there died of rat poison.") },
    { icon: "map-pin", title: "Folly Farm Nature Preserve", text: p("The city's nature preserve covers just under 10 acres. Small preserves like this one keep habitat right next to neighborhoods.") },
    { icon: "drop", title: "Waterfront Park", text: p("The city's 7.3-acre Waterfront Park sits on Old Tampa Bay at Veterans Memorial Lane.") },
    { icon: "critter", title: "The city's own wildlife advice", text: p("Safety Harbor asks residents to keep trash bins tightly closed and to pick up pet food, spilled birdseed and fallen fruit. More on the city's rodent advice on our [Safety Harbor rat page](/about-us/service-area/rat-removal-safety-harbor/).") },
  ],
  contactsIntro: "Who to call for what in Safety Harbor, from the city's FAQ and the county's and FWC's pages.",
  contacts: [
    { icon: "home", title: "Dead animal on a city road", text: p("Safety Harbor Public Works, 727-724-1550, picks up dead animals on city rights-of-way.") },
    { icon: "users", title: "Strays and injured wildlife", text: p("The city's FAQ lists the Humane Society of North Pinellas, 727-797-7722, for stray pickup. For sick or injured wildlife, Pinellas County Animal Services offers pickup and transport help: (727) 582-2600, option 4.") },
    { icon: "map-pin", title: "Alligators: FWC", text: p("Nuisance Alligator Hotline, 866-392-4286. The city notes FWC is the only agency in Florida that captures alligators, and that it responds to ones at least 4 feet long.") },
  ],
  servicesIntro: "Every service is available in Safety Harbor. Pick an animal to learn how we handle it.",
  servicesHeading: "Animals we remove in Safety Harbor",
  reviewsIntro: "[PLACEHOLDER: reviews from Safety Harbor customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Who removes a dead animal from a road in Safety Harbor?",
      "The city's Public Works, at 727-724-1550, for city rights-of-way. For one on your own land, our [dead animal removal](/services/dead-animal-removal/) page explains what we do.",
    ),
    faq(
      "Will someone remove a small alligator from my Safety Harbor pond?",
      "FWC runs the Nuisance Alligator Hotline (866-392-4286). The city's FAQ says FWC responds to alligators at least 4 feet long. We don't handle alligators.",
    ),
    faq(
      "Does Safety Harbor have rules about rat poison?",
      "The city's wildlife page warns there's no such thing as a safe rat poison and says never to use glue traps. See [rat removal in Safety Harbor](/about-us/service-area/rat-removal-safety-harbor/).",
    ),
    faq(
      "How fast can you come to Safety Harbor?",
      "Same-day appointments are often available in Safety Harbor. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time in Safety Harbor]",
    ),
  ],
  ctaHeading: "Wildlife problem in Safety Harbor?",
  ctaText: "Safety Harbor homeowners can call (727) 594-7705.",
  seo: {
    title: "Wildlife Removal in Safety Harbor, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Safety Harbor, FL: raccoons, rats, squirrels, opossums and snakes near Philippe Park and Old Tampa Bay. Who to call: (727) 594-7705.",
  },
  sources: [
    { title: "Florida EDR/BEBR: April 1, 2025 estimates, Table 1 (Safety Harbor 16,808)", url: "https://www.edr.state.fl.us/Content/population-demographics/data/Estimates2025.pdf" },
    { title: "City of Safety Harbor: Adopted budget 2019-20 (northwest edge of Old Tampa Bay)", url: "https://www.cityofsafetyharbor.com/DocumentCenter/View/13890/Adopted-Budget-Book-2019-20" },
    { title: "City of Safety Harbor: FAQ (stray pickup, Humane Society of North Pinellas 797-7722; dead animals on city rights-of-way, Public Works 724-1550; Nuisance Alligator Hotline 866-392-4286; FWC only agency that captures alligators; 4 feet or more)", url: FAQ },
    { title: "Pinellas County: Philippe Park (92 acres; 2525 Philippe Parkway, Safety Harbor)", url: "https://pinellas.gov/parks/philippe-park/" },
    { title: "UF/IFAS Extension Pinellas: Management of rodents, July 25, 2022 (great horned owls at Philippe Park died of rodenticide poisoning)", url: "https://blogs.ifas.ufl.edu/pinellasco/2022/07/25/management-of-rodents/" },
    { title: "City of Safety Harbor: Folly Farm Nature Preserve (9.95 acres)", url: "https://cityofsafetyharbor.com/962/Folly-Farm-Nature-Preserve" },
    { title: "City of Safety Harbor: Waterfront Park (7.3 acres; 105 Veterans Memorial Lane)", url: "https://www.cityofsafetyharbor.com/959/Waterfront-Park" },
    { title: "City of Safety Harbor: Protecting our wildlife (keep bins tightly closed; remove pet food, spilled birdseed, fallen fruit; no safe rat poison; never glue traps)", url: "https://www.cityofsafetyharbor.com/948/Protecting-Our-Wildlife" },
    { title: "Pinellas County: Injured or orphaned wildlife ((727) 582-2600 option 4)", url: "https://pinellas.gov/injured-or-orphaned-wildlife/" },
  ],
  clientQuestions: ["Typical response time in Safety Harbor?", "Safety Harbor reviews (from TTR-723) and real Safety Harbor job photos."],
});
