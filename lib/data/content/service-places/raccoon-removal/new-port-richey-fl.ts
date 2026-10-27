import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Raccoon removal in New Port Richey (TTR-738, Nia). Every card is one true fact
 * about raccoons in New Port Richey: DOH-Pasco alerts for the city's area, the
 * city's own trash, animal control and parks pages, and Pasco's rabies record.
 */
const ALERT2015 = "https://newsroomarchive.floridahealth.gov/pasco/2015/11/rabies-alerrt.html";
const TRASH = "https://cityofnewportrichey.org/Residents/Services/City-Trash-Services";
const FAQ = "https://www.cityofnewportrichey.org/Residents/Services/FAQs/Animal-Control";
const PARKS = "https://www.cityofnewportrichey.org/Residents/Amenities/Parks-and-Facilities";
const RABIES = "https://www.pascocountyfl.gov/services/animal_services/programs/rabies_awareness.php";

export const raccoonRemovalNewPortRichey = servicePlacePage({
  service: "raccoon-removal",
  animal: "Raccoon",
  animals: "Raccoons",
  place: "new-port-richey-fl",
  placeName: "New Port Richey",
  placeKind: "city",
  location: "about-us/service-area/wildlife-removal-new-port-richey",
  county: "Pasco",
  order: 24,
  heroText: "A raccoon in a New Port Richey attic, under a river house or tipping the trash cart? We get it out, look for young and seal the way in. Call (844) 264-6254.",
  answerHeading: "Who takes care of raccoons in New Port Richey?",
  answer:
    "New Port Richey sends all animal control matters to Pasco County, and the county's emergency service is for stray pets and dangerous animals. A raccoon living in your attic, chimney or crawl space is a job for a private company. Pro Wildlife Removal removes it, checks for kits and fixes the opening. Call (844) 264-6254.",
  points: ["Call (844) 264-6254", "Trash Mondays and Thursdays", "Rabid raccoons in 2015"],
  localHeading: "Raccoon records and rules along the Cotee River",
  localIntro: "New Port Richey sits on the Cotee River a few miles from the Gulf. These are the local records and rules behind a raccoon call here.",
  local: [
    { icon: "critter", title: "Two rabid raccoons in a week", text: p("In November 2015, DOH-Pasco put the New Port Richey Estates area under a 60-day rabies alert. A person had been exposed to one rabid raccoon, and a vaccinated dog to a different one, within a week.") },
    { icon: "map-pin", title: "Where that alert reached", text: p("The 2015 alert ran from the Gulf east to US 19, between Gulf Trace Boulevard on the south and Hammock and Ranch Road on the north.") },
    { icon: "home", title: "One hauler, two pickups", text: p("Waste Pro, doing business as J.D. Parker & Sons, is New Port Richey's single hauler, collecting residential garbage on Mondays and Thursdays. The less time a full cart sits, the less there is for a raccoon to find.") },
    { icon: "users", title: "The county handles it", text: p("The city's animal control FAQ says Pasco County handles all animal control concerns. That makes Pasco County Animal Services, at 813-929-1212, the agency for stray pets and for an unconfined, aggressive animal that threatens public safety.") },
    { icon: "leaf", title: "A river town near the Gulf", text: p("Around abundant food, UF/IFAS says, raccoon numbers can hit 100 per square mile, with coastal and wetland habitats standing out. In New Port Richey, DEP says, the riverfront overlooks both the Pithlachascotee River and the Gulf.") },
    { icon: "drop", title: "Raccoon country, countywide", text: p("Seventeen of the 24 rabid animals Pasco County recorded from 2013 to 2023 were raccoons, the county says. New Port Richey residents report bites to DOH-Pasco at 352-521-1450, option 4.") },
  ],
  contactsHeading: "New Port Richey contacts for trash, strays and raccoons indoors",
  contactsIntro: "In New Port Richey, missed pickups go to the city's hauler and animals outside to Pasco County Animal Services, per their own pages.",
  contacts: [
    { icon: "home", title: "Missed trash pickup", text: p("J.D. Parker & Sons, (727) 841-4260.") },
    { icon: "users", title: "Aggressive or stray animal outside", text: p("Pasco County Animal Services, 813-929-1212, which handles animal control for the city.") },
    { icon: "phone", title: "A raccoon in your home", text: p("A private wildlife company. Call us at (844) 264-6254.") },
  ],
  attic: { slug: "raccoons-in-attic", label: "Raccoons in the attic" },
  extraLink: { label: "Raccoon trapping in Florida", href: "/blog/raccoon-trapping-florida/", text: "Before you rent a trap: what Florida law allows and where a raccoon can go." },
  reviewsIntro: "[PLACEHOLDER: a real Google review from a New Port Richey raccoon job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Does the City of New Port Richey remove raccoons?",
      "No. New Port Richey leaves animal control to Pasco County, per its FAQ page. For a raccoon in or under your home, you'll need a private wildlife company.",
    ),
    faq(
      "Have raccoons in New Port Richey had rabies?",
      "Yes. In 2015, two rabid raccoons in the New Port Richey Estates area led DOH-Pasco to issue a 60-day alert. Keep pets vaccinated and never try to handle a raccoon, however tame it seems.",
    ),
    faq(
      "What day is trash picked up in New Port Richey?",
      "Mondays and Thursdays, between 6 a.m. and 7 p.m., per the city. Missed pickups go to J.D. Parker & Sons at (727) 841-4260.",
    ),
    faq(
      "Can I release a trapped raccoon at the Grey Preserve?",
      "Not without written permission from the land manager. FWC doesn't allow public parks as relocation sites otherwise, and any release has to be on your own land or 40-plus acres in Pasco with the owner's written permission.",
    ),
    faq(
      "Can a New Port Richey raccoon call be seen today?",
      "Same-day appointments for raccoons are often available in New Port Richey. Call (844) 264-6254.",
    ),
  ],
  ctaHeading: "Raccoon in your New Port Richey home?",
  ctaText: "Raccoons in a New Port Richey attic or under a porch? Call (844) 264-6254.",
  seo: {
    title: "Raccoon Removal New Port Richey, FL | Pro Wildlife Removal",
    description:
      "Raccoon removal in New Port Richey, FL: raccoons out of attics and crawl spaces, kits checked first, holes fixed, plus area rabies alerts and trash days.",
  },
  sources: [
    { title: "DOH-Pasco: Rabies alert, Nov. 10, 2015 (New Port Richey Estates area; a person exposed to a rabid raccoon and a vaccinated dog to a different rabid raccoon within one week; 60 days; Gulf of Mexico, Gulf Trace Blvd., US 19, Hammock/Ranch Road)", url: ALERT2015 },
    { title: "City of New Port Richey: City trash services (Waste Pro dba JD Parker & Sons single hauler; residential collection Mondays and Thursdays, 6 a.m. to 7 p.m.; (727) 841-4260)", url: TRASH },
    { title: "City of New Port Richey: FAQ, animal control (Pasco County handles all animal control concerns)", url: FAQ },
    { title: "Pasco County: Animal Services (813-929-1212; after-hours emergencies: seriously injured domestic strays, unconfined aggressive animals posing an immediate threat)", url: "https://www.pascocountyfl.gov/services/animal_services/index.php" },
    { title: "City of New Port Richey: Parks and facilities (James E. Grey Preserve, 80 acres of natural wilderness; 140 bird species, deer, wild boar, turtles, manatees)", url: PARKS },
    { title: "Florida DEP: Coastal access guide, Pasco County (New Port Richey's riverfront overlooks the Pithlachascotee River and the Gulf)", url: "https://floridadep.gov/rcp/coastal-access-guide/content/pasco-county" },
    { title: "FWC: Relocating nuisance wildlife (own property or 40+ contiguous acres in the county with written permission; public parks need the land manager's written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/relocate/" },
    { title: "Pasco County: Rabies awareness (24 positive animals 2013-2023: 17 raccoons, 6 cats, 1 bat)", url: RABIES },
    { title: "DOH-Pasco: Rabies advisory, July 30, 2026 (report bites and scratches, 352-521-1450, option 4; Animal Services 813-929-1212)", url: "https://pasco.floridahealth.gov/2026/07/30/doh-pasco-issues-rabies-advisory/" },
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern raccoon (densities of 100 per square mile around abundant food, especially coastal and wetland habitats; litters generally March and April in Florida)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
  ],
  clientQuestions: ["A real Google review from a New Port Richey raccoon job (TTR-723), and real New Port Richey raccoon job photos."],
});
