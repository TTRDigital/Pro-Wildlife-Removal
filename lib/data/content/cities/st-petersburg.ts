import { countyPage, S } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* St. Petersburg page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const RODENTS = "https://www.stpete.org/residents/good_neighbor_guides/rodent_insect_control.php";

export const stPetersburg = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-services-saint-petersburg-fl",
  name: "St. Petersburg",
  county: "Pinellas",
  order: 25,
  phone: { label: "Call 727-594-7704", href: "tel:+17275947704" },
  eyebrow: "WILDLIFE REMOVAL IN ST. PETERSBURG",
  summary: "Wildlife removal in St. Petersburg, FL: roof rats, raccoons, squirrels, bats, opossums, snakes and more. Call 727-594-7704.",
  heroText: "Pinellas County's largest city, on Tampa Bay, with nature preserves in the north and south of town. Call 727-594-7704 any hour.",
  answerHeading: "Who handles wildlife and rats in St. Petersburg?",
  answer:
    "Pinellas County handles strays and injured wildlife in St. Petersburg. The city helps with rats outdoors, but for rodents inside a home it says to call a private company. Pro Wildlife Removal removes rats, raccoons, squirrels, bats and more across St. Pete. Call 727-594-7704, 24/7.",
  points: ["Call 727-594-7704", "County: strays, injured wildlife", "Inside rats: private company"],
  townsHeading: "St. Petersburg and nearby",
  townsIntro: "St. Petersburg, home to about 266,200 people, is the largest city in Pinellas County. We cover its neighbors too.",
  towns: [
    {
      title: "South Pinellas",
      href: "/about-us/service-area/wildlife-removal-pinellas-county/",
      items: [
        { label: "Pinellas Park", href: "/about-us/service-area/wildlife-removal-pinellas-park/" },
        { label: "Gulfport" },
        { label: "Seminole" },
        { label: "Largo" },
        { label: "Clearwater", href: "/about-us/service-area/wildlife-removal-clearwater-fl/" },
      ],
    },
  ],
  localHeading: "Rats, raccoons and preserves in St. Pete",
  localIntro: "The city's own rodent guide is unusually specific about how rats get into St. Pete homes. Its preserves explain the rest.",
  local: [
    { icon: "home", title: "Where rats get in", text: p("St. Petersburg's rodent guide names the two most common rat entry points: where A/C lines go through the wall, and where a flat roof meets a pitched roof. The city recommends quarter-inch hardware cloth over spray foam, which rats chew through.") },
    { icon: "leaf", title: "Trees as rat highways", text: p("The same guide warns that trees and landscaping touching the house become highways for rats. It also says to pick up fallen fruit and not to overfeed outdoor pets: what your pet doesn't eat, rats will.") },
    { icon: "map-pin", title: "Weedon Island Preserve", text: p("Pinellas County's 3,000-acre Weedon Island Preserve in north St. Petersburg is mostly marine habitat on Tampa Bay, with some uplands.") },
    { icon: "critter", title: "Boyd Hill Nature Preserve", text: p("On Lake Maggiore, Boyd Hill has hammock, pine flatwoods, scrub, swamp and marsh. FWC's Great Florida Birding Trail lists gopher tortoises, eastern indigo snakes and young alligators in the lake shallows.") },
  ],
  contactsIntro: "Who handles what in St. Petersburg, from the city's, county's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Strays and injured wildlife", text: p("St. Pete points residents to Pinellas County Animal Services for stray and community cats, lost animals and injured wildlife: (727) 582-2600, option 4.") },
    { icon: "home", title: "Rats outdoors: city Sanitation", text: p("727-893-7398. The city's Rodent Control Technicians inspect, give prevention advice and can set outdoor bait stations at no cost when needed. For rats inside, the city says to hire a private company.") },
    { icon: "phone", title: "Animal bites: DOH-Pinellas", text: p("Call DOH-Pinellas, 727-824-6932, to report an animal bite in St. Petersburg.") },
  ],
  servicesIntro: "We offer every service in St. Petersburg. Choose an animal for the details.",
  servicesHeading: "Animals we remove in St. Petersburg",
  reviewsIntro: "[PLACEHOLDER: reviews from St. Petersburg customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Will the City of St. Petersburg get rid of rats in my house?",
      "Not inside. The city's Sanitation Department helps with rats outside properties and in neighborhoods (727-893-7398), but for rodents inside a home the city says to call a private company. See [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "Who do I call about injured wildlife in St. Pete?",
      "The city sends injured wildlife and stray animal concerns to Pinellas County Animal Services, (727) 582-2600, option 4. For a healthy animal living in your attic or walls, call a wildlife removal company.",
    ),
    faq(
      "Am I responsible for rats on my St. Petersburg property?",
      "Yes. St. Petersburg's code requires owners or occupants to eliminate rodent infestations, and occupants of single-family and two-family homes are responsible for their own pest control.",
    ),
    faq(
      "Should I seal the holes before the rats are gone?",
      "No. The city's guide says to seal gaps only after the rats inside are gone. Otherwise they're shut in. Our [rat removal](/services/rat-removal/) page covers how we handle it.",
    ),
    faq(
      "How fast can you get to St. Petersburg?",
      "Our St. Pete number, 727-594-7704, is answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in St. Petersburg]",
    ),
  ],
  ctaHeading: "Wildlife problem in St. Petersburg?",
  ctaText: "Call 727-594-7704. Someone picks up 24/7.",
  seo: {
    title: "Wildlife Removal in St. Petersburg, FL | Call 727-594-7704 | Pro Wildlife Removal",
    description:
      "Wildlife removal in St. Petersburg, FL: roof rats, raccoons, squirrels, bats and opossums. Who handles what in St. Pete, and the city's own rat tips. Call 24/7: 727-594-7704.",
  },
  sources: [
    S.edr,
    { title: "Pinellas County: About Pinellas (St. Petersburg is the largest city)", url: "https://pinellas.gov/about-pinellas-facts/" },
    { title: "City of St. Petersburg: Rodent and insect control (code requires owners or occupants to eliminate infestations; occupants of single and two-family homes responsible; A/C lines and flat-to-pitched roof joints most common entry points; 1/4-inch hardware cloth; spray foam chewed; seal only after rodents are gone; trees as highways; fallen fruit; pet food; Sanitation 727-893-7398; technicians and free outdoor bait stations; private exterminator inside)", url: RODENTS },
    { title: "City of St. Petersburg: Improve your neighborhood (Pinellas County handles community cats, tethered or lost animals, injured wildlife; city assists with rats outside properties)", url: "https://www.stpete.org/residents/community/improve_your_neighborhood.php" },
    { title: "Pinellas County: Weedon Island Preserve (3,000 acres; north St. Petersburg; marine ecosystems with some uplands)", url: "https://pinellas.gov/parks/weedon-island-preserve/" },
    { title: "FWC Great Florida Birding Trail: Boyd Hill Nature Preserve (habitats; gopher tortoise, Florida box turtle, eastern indigo snake; young alligators; Lake Maggiore aviary)", url: "https://floridabirdingtrail.com/site/boyd-hill-nature-preserve/" },
    { title: "Pinellas County: Animal Services contact ((727) 582-2600, option 4)", url: "https://pinellas.gov/services/animal-services-contact-us-form/" },
    { title: "DOH-Pinellas: Rabies information (727-824-6932)", url: "https://pinellas.floridahealth.gov/programs-and-services/infectious-diseases/epidemiology/rabies-information/" },
  ],
  clientQuestions: ["Typical response time in St. Petersburg?", "St. Petersburg reviews (from TTR-723) and real St. Petersburg job photos."],
});
