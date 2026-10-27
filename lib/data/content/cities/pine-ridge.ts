import { countyPage } from "../counties/build.ts";
import { faq, p } from "../pt.ts";

/* Pine Ridge page, rewritten in place at its existing URL (Ben, Oct 26). An equestrian community in unincorporated Citrus County; its recorded deed restrictions (July 2026) are the local rules. No residential street names. */
const POA_AMENITIES = "https://pineridgeassn.com/amenities/";
const POA_DEEDS = "https://pineridgeassn.com/deed-restrictions/";
const DEEDS_PDF = "https://pineridgeassn.com/wp-content/uploads/2026/08/2026-07-01-Pine-Ridge-Complete-Recorded-Deed-Restrictions-1.pdf";
const POA_CONTACTS = "https://pineridgeassn.com/important-contact-and-links-for-pine-ridge-residents/";
const SHERIFF = "https://www.sheriffcitrus.org/programs___services/animal_control.php";
const CITRUS_ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-citrus-county-7-23-2026.pdf";
const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const IFAS_FEED = "https://ask.ifas.ufl.edu/publication/IN1397";
const CENSUS_PL = "https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Florida/fl2020.pl.zip";

export const pineRidge = countyPage({
  kind: "city",
  path: "about-us/service-area/wildlife-removal-pine-ridge-fl",
  name: "Pine Ridge",
  county: "Citrus",
  order: 22,
  phone: { label: "Call (844) 264-6254", href: "tel:+18442646254" },
  eyebrow: "WILDLIFE REMOVAL IN PINE RIDGE",
  summary: "Wildlife removal in Pine Ridge, FL: raccoons, rats, bats, squirrels, opossums, snakes and armadillos, in Citrus County's horse country.",
  heroText: "Horse trails, barns and wooded lots, with deed restrictions that cover trash and animals. Call (844) 264-6254.",
  answerHeading: "Who removes wildlife in Pine Ridge, FL?",
  answer:
    "A private company. Pine Ridge is unincorporated Citrus County, and the Sheriff's Animal Control handles domestic animals and livestock and refers nuisance wildlife to a trapper. For raccoons, rats, bats or squirrels in a Pine Ridge home or barn, Pro Wildlife Removal finds the way in, removes them legally and seals the entry points. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "28+ miles of horse trails", "Deed rules on trash"],
  townsHeading: "Pine Ridge and nearby",
  townsIntro: "The 2020 Census counted 11,042 people in the Pine Ridge CDP, west of Beverly Hills. We take calls in Pine Ridge and across Citrus County.",
  towns: [
    {
      title: "Citrus County",
      href: "/service-areas/citrus-county/",
      items: [{ label: "Lecanto", href: "/service-areas/citrus-county/lecanto/" }, { label: "Beverly Hills" }, { label: "Crystal River" }, { label: "Inverness" }],
    },
  ],
  localHeading: "Pine Ridge's deed restrictions and horse country",
  localIntro: "The community's amended deed restrictions, recorded in July 2026, set rules on trash and animals that bear on raccoons and rats.",
  local: [
    { icon: "leaf", title: "Horse country", text: p("The Pine Ridge Property Owners Association says members have more than 28 miles of horse trails and an Equestrian Center with a 17-stall barn.") },
    { icon: "home", title: "Trash cans: 24 hours each way", text: p("The 2026 restrictions say trash, recycling and yard-waste containers can't be stored in front of the house, can go to the street no earlier than 24 hours before pickup, and must be put away within 24 hours after.") },
    { icon: "wrench", title: "Waste in clean containers", text: p("No lot may be used to dump or store rubbish, garbage or yard waste, and waste must be kept in clean, sanitary containers. The association can remove waste left out and bill the owner; composting manure is allowed.") },
    { icon: "critter", title: "Which animals live outside", text: p("The restrictions allow only dogs, cats and horses outside the house or a fully enclosed building, and no poultry anywhere.") },
    { icon: "map-pin", title: "Barns by section", text: p("Horses can be stabled only on lots the restrictions list, and barns aren't allowed in the Country Club section. Where barns are allowed, UF/IFAS advice on keeping limbs off roofs applies to them too.") },
  ],
  contactsHeading: "Pine Ridge contacts",
  contactsIntro: "The association's own contact list covers trash haulers, and the county agencies cover the rest.",
  contacts: [
    { icon: "users", title: "Sheriff's Animal Control", text: p("352-249-2790. Domestic animals and livestock; nuisance wildlife goes to a trapper.") },
    { icon: "home", title: "Trash haulers", text: p("The association lists Waste Pro (352-726-7440), Hook Company (352-793-1359) and Waste Management (866-650-0466).") },
    { icon: "phone", title: "Bites: DOH-Citrus", text: p("352-527-0068, the number in the department's rabies alerts.") },
  ],
  servicesIntro: "We handle every animal below in Pine Ridge, in homes and barns. Choose one to read the signs and the job.",
  reviewsIntro: "[PLACEHOLDER: reviews from Pine Ridge customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Pine Ridge wildlife questions",
  faqs: [
    faq(
      "Will Citrus County animal control remove a raccoon from my house?",
      `No. The Citrus County Sheriff's Office says its Animal Control handles domestic animals and livestock, and it refers nuisance wildlife to a trapper ([Citrus County Sheriff](${SHERIFF})). See [raccoon removal](/services/raccoon-removal/).`,
    ),
    faq(
      "Is rabies present in Citrus County?",
      `Yes. In July 2026, DOH-Citrus issued a rabies alert after a stray kitten captured near Floral City tested positive, and it warned that rabies is present in the wild animal population ([DOH-Citrus](${CITRUS_ALERT})).`,
    ),
    faq(
      "When can bats be excluded from a Pine Ridge home or barn?",
      `Only from August 15 to April 15. FWC says bat exclusion is illegal during maternity season, April 16 to August 14 ([FWC](${FWC_BATS})). See [bat removal](/services/bat-removal/).`,
    ),
    faq(
      "How early can my trash go to the street in Pine Ridge?",
      `No earlier than 24 hours before pickup, under the community's recorded 2026 deed restrictions, and back in storage within 24 hours after ([Pine Ridge POA](${POA_DEEDS})).`,
    ),
    faq(
      "Can someone reach Pine Ridge today?",
      "Same-day appointments are often available in Pine Ridge. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Wildlife in your Pine Ridge home or barn?",
  ctaText: "Anywhere in Pine Ridge, call (844) 264-6254.",
  seo: {
    title: "Wildlife Removal in Pine Ridge, FL | Pro Wildlife Removal",
    description:
      "Wildlife removal in Pine Ridge, FL: raccoons, rats, bats and squirrels in homes and barns, plus the community's trash rules and contacts. (844) 264-6254.",
  },
  sources: [
    { title: "U.S. Census Bureau: 2020 Census redistricting data, Florida (Pine Ridge CDP, Citrus County: 11,042 people)", url: CENSUS_PL },
    { title: "Pine Ridge Property Owners Association: Amenities (more than 28 miles of horse trails; Equestrian Center with a 17-stall barn)", url: POA_AMENITIES },
    { title: "Pine Ridge Property Owners Association: Deed restrictions (amended and restated, signed July 1, 2026, recorded July 20, 2026)", url: POA_DEEDS },
    { title: "Pine Ridge recorded deed restrictions, 2026 (4.01 E: containers not stored in front, to the street no earlier than 24 hours before pickup, back within 24 hours; 4.05: only dogs, cats and equines outside, no poultry; Addendum B: horses stabled only on listed lots; 3.02 item 5: no barns in the Country Club section; 4.07: no dumping, waste in clean sanitary containers, association may remove and bill, composting manure exempt)", url: DEEDS_PDF },
    { title: "Pine Ridge Property Owners Association: Important contacts (Waste Pro 352-726-7440; Hook Company 352-793-1359; Waste Management 866-650-0466)", url: POA_CONTACTS },
    { title: "UF/IFAS EDIS IN1397: Landscaping methods to prevent pests from entering your home (limbs as a highway onto a roof)", url: IFAS_FEED },
    { title: "Citrus County Sheriff's Office: Animal Control (352-249-2790; domestic animals and livestock only; nuisance wildlife referred to a nuisance trapper)", url: SHERIFF },
    { title: "DOH-Citrus: Rabies alert, July 23, 2026 (unvaccinated stray kitten captured in the Floral City area; rabies present in the wild animal population; 352-527-0068)", url: CITRUS_ALERT },
    { title: "FWC: Bats in buildings (exclusion illegal during maternity season, April 16 to August 14)", url: FWC_BATS },
  ],
  clientQuestions: ["Reviews and real job photos from Pine Ridge customers."],
});
