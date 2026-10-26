import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Land O' Lakes page, rewritten in place at its existing URL (Ben, Oct 26). Checkable local facts only. */
const CONNER_PLAN = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/ConnerPreserve.pdf";
const CYPRESS_PLAN = "https://www.swfwmd.state.fl.us/sites/default/files/medias/documents/CypressCreekPreserve.pdf";

export const landOLakes = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-land-o-lakes",
  name: "Land O' Lakes",
  county: "Pasco",
  order: 16,
  phone: { label: "Call 727-594-7722", href: "tel:+17275947722" },
  eyebrow: "WILDLIFE REMOVAL IN LAND O' LAKES",
  summary: "Wildlife removal in Land O' Lakes, FL: raccoons, rats, squirrels, snakes, armadillos, opossums, bats and more, on the Pasco line.",
  heroText: "Central Pasco neighborhoods built between lakes, cypress swamps and two big water district preserves. Call the Pasco line any hour.",
  answerHeading: "Who removes wildlife in Land O' Lakes?",
  answer:
    "Land O' Lakes isn't a city, so county services apply, and Pasco County Animal Services is based here. Its pages cover pets and strays, not wildlife in your home. For raccoons, rats, squirrels or snakes, call a private company. Pro Wildlife Removal works across Land O' Lakes. Call 727-594-7722, 24/7.",
  points: ["Pasco line 727-594-7722", "Unincorporated Pasco", "Between two big preserves", "Open 24/7"],
  townsHeading: "Land O' Lakes and nearby",
  townsIntro: "Land O' Lakes is an unincorporated community of about 35,900 people, as of the 2020 Census. We cover the central Pasco communities around it.",
  towns: [
    {
      title: "Central Pasco",
      href: "/about-us/service-area/wildlife-removal-in-pasco-county-fl/",
      items: [
        { label: "Odessa", href: "/about-us/service-area/wildlife-removal-odessa-fl/" },
        { label: "Trinity", href: "/about-us/service-area/trinity-wildlife-removal/" },
        { label: "Wesley Chapel" },
        { label: "Lutz (Hillsborough)" },
        { label: "Dade City", href: "/about-us/service-area/wildlife-removal-dade-city/" },
      ],
    },
  ],
  localHeading: "Preserves at the back fence",
  localIntro: "Two Southwest Florida Water Management District preserves sit at the edge of Land O' Lakes neighborhoods. Their management plans say what lives there.",
  local: [
    { icon: "leaf", title: "Cypress Creek Preserve", text: p("This 7,400-acre preserve borders Land O' Lakes subdivisions on its west side. FWC has designated it a Wildlife Refuge, where taking or possessing wildlife is prohibited. Gopher tortoises and wood storks live there.") },
    { icon: "critter", title: "Feral hogs", text: p("The Cypress Creek plan notes the feral hog as the one exotic animal recorded on the property and calls for a trapping program. Hogs rooting up a yard near the preserve are a sign of where they came from.") },
    { icon: "map-pin", title: "Conner Preserve", text: p("Off SR 52, Conner Preserve covers 3,486 acres of sandhill, marsh, cypress and pine flatwoods. The water district says deer, turkey and quail roam it, gopher tortoises forage on its ridges, and wood storks and sandhill cranes nest in its marshes.") },
    { icon: "home", title: "Homes meet the woods", text: p("Conner's management plan expected the preserve to end up next to dense residential areas. Where homes back onto preserve land, raccoons, opossums and snakes have a short trip to a yard or crawl space.") },
  ],
  contactsIntro: "Who to call for what in Land O' Lakes, from the county's and agencies' own pages.",
  contacts: [
    { icon: "users", title: "Pasco County Animal Services", text: p("813-929-1212, on Dogpatch Lane in Land O' Lakes. After 5 pm, (727) 847-8102, option 7, for qualifying emergencies such as a loose animal that has bitten someone.") },
    { icon: "phone", title: "Animal bites: DOH-Pasco", text: p("Report bites to the health department in Pasco at 352-521-1450, option 4.") },
    { icon: "map-pin", title: "Alligators and bears: FWC", text: p("Nuisance alligators: 866-FWC-GATOR. Bears: report conflicts to the FWC Southwest Region office at 863-648-3200.") },
  ],
  servicesIntro: "We offer every service in Land O' Lakes. Tap an animal to learn how we handle it.",
  servicesHeading: "Animals we remove in Land O' Lakes",
  reviewsIntro: "[PLACEHOLDER: reviews from Land O' Lakes customers, matched from the client's Google reviews (TTR-723)]",
  faqs: [
    faq(
      "Does Pasco County Animal Services remove wildlife from Land O' Lakes homes?",
      "Its shelter is in Land O' Lakes, but its pages cover pets and strays, and after-hours help is for emergencies like a loose animal that has bitten someone. For wildlife in your attic, walls or crawl space, call a wildlife removal company.",
    ),
    faq(
      "Can I trap animals in Cypress Creek Preserve?",
      "No. FWC has designated Cypress Creek Preserve a Wildlife Refuge, where taking or possessing wildlife is prohibited. On your own property, Florida's nuisance wildlife rules apply. See our guide to [Florida's trapping rules](/blog/florida-wildlife-trapping-rules/).",
    ),
    faq(
      "Who handles feral hogs in Land O' Lakes?",
      "On Cypress Creek Preserve, the water district's plan calls for its own hog trapping. On private property, FWC says wild hogs may be trapped year-round with the landowner's permission.",
      "[PLACEHOLDER: ask the client: do you handle feral hogs?]",
    ),
    faq(
      "How fast can you get to Land O' Lakes?",
      "The Pasco line is answered 24/7.",
      "[PLACEHOLDER: ask the client: typical response time in Land O' Lakes]",
    ),
  ],
  ctaHeading: "Wildlife problem in Land O' Lakes?",
  ctaText: "Call 727-594-7722, the Pasco line. We pick up 24/7.",
  seo: {
    title: "Wildlife Removal in Land O' Lakes, FL | Call 727-594-7722 | Pro Wildlife Removal",
    description:
      "Wildlife removal in Land O' Lakes, FL: raccoons, rats, squirrels, snakes and armadillos near Cypress Creek and Conner preserves. Who to call for what. Call 24/7: 727-594-7722.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 redistricting file (Land O' Lakes CDP, Pasco County, 35,929)", url: "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip" },
    { title: "SWFWMD: Cypress Creek Preserve (7,400 acres; Land O' Lakes)", url: "https://www.swfwmd.state.fl.us/recreation/cypress-creek-preserve" },
    { title: "SWFWMD: Cypress Creek Preserve land management plan (west boundary is Land O' Lakes residential development; FWC Wildlife Refuge, taking and possession prohibited; gopher tortoise, wood stork; feral hog the only exotic animal noted; hog trapping program)", url: CYPRESS_PLAN },
    { title: "SWFWMD: Conner Preserve (3,486 acres; 22500 SR 52, Land O' Lakes; sandhill, marsh, cypress, pine flatwoods)", url: "https://www.swfwmd.state.fl.us/recreation/conner-preserve" },
    { title: "SWFWMD: Conner Preserve land use and management plan, 2008 (deer, turkey, quail; gopher tortoises; wood storks, sandhill cranes; future dense residential areas adjacent; hog trapping)", url: CONNER_PLAN },
    { title: "Pasco County: Animal Services (19640 Dogpatch Lane, Land O' Lakes; 813-929-1212; after hours (727) 847-8102 option 7, 5 pm to 8 am, qualifying emergencies)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (352-521-1450, option 4)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "FWC: Wild hog (may be trapped and hunted year-round with landowner permission)", url: "https://myfwc.com/hunting/wild-hog/" },
    { title: "FWC: Regional offices and Nuisance Alligator Program", url: "https://myfwc.com/contact/fwc-staff/regional-offices/" },
  ],
  clientQuestions: ["Typical response time in Land O' Lakes?", "Do you handle feral hogs?", "Land O' Lakes reviews (from TTR-723) and real Land O' Lakes job photos."],
});
