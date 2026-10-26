import { faq, p } from "../../pt.ts";
import { servicePlacePage } from "../build.ts";

/*
 * Armadillo removal in Pinellas County (TTR-738, Rhea). County-wide armadillo
 * facts: Pinellas soils, county natural areas and state parks where armadillos
 * are recorded, tortoise and turtle nest predation, FWC release rules and how a
 * dead armadillo on a county road gets picked up.
 */
const SOIL = "https://soilseries.sc.egov.usda.gov/OSD_Docs/P/PINELLAS.html";
const UW456 = "https://ask.ifas.ufl.edu/publication/UW456";
const JOES = "https://pinellas.gov/joes-creek-management-area/";
const CALADESI = "https://floridadep.gov/sites/default/files/2022%20Approved%20Plan%20-%20Caladesi%20Island.pdf";
const TORTOISE = "https://blogs.ifas.ufl.edu/pinellasco/2025/04/10/gopher-tortoise-day-shell-a-brate-this-keystone-species/";
const FWC = "https://myfwc.com/wildlifehabitats/profiles/mammals/land/armadillo/";
const SCF = "https://seeclickfix.com/issues/21962727";

export const armadilloRemovalPinellasCounty = servicePlacePage({
  service: "armadillo-removal",
  animal: "Armadillo",
  animals: "Armadillos",
  place: "pinellas-county-fl",
  placeName: "Pinellas County",
  placeKind: "county",
  location: "about-us/service-area/wildlife-removal-pinellas-county",
  order: 10,
  heading: "Armadillo Removal in Pinellas County, FL",
  heroText: "Fresh holes in the lawn every morning, or a burrow under the slab or porch of your Pinellas home? We find the armadillo, deal with the burrow and help keep the next one out. Call (727) 594-7705.",
  answerHeading: "How do you get rid of an armadillo in Pinellas County?",
  answer:
    "Under FWC rules, a Pinellas landowner may live-trap a nuisance armadillo, but it must be euthanized, released on site, or moved to 40 or more private acres in the county with permission. Pro Wildlife Removal handles armadillos digging Pinellas lawns or burrowing under homes and sheds. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "Sandy soil, easy digging", "No releases on public land"],
  localHeading: "Armadillos in Pinellas County",
  localIntro: "Armadillos spread into Florida from the west and were also brought in, and FWC now calls them naturalized. Pinellas soil suits them. Here's what the county, the state and the soil scientists say.",
  local: [
    { icon: "search", title: "A soil named for the county", text: p("USDA's Pinellas soil series, Pinellas fine sand, was described from a site about two miles northeast of Pinellas Park. It formed in sandy marine sediments, and UF/IFAS says armadillos favor sandy soils that are easy to dig.") },
    { icon: "leaf", title: "Joe's Creek and other wild land", text: p("Pinellas County lists armadillos among the wildlife at its Joe's Creek Management Area near Seminole, a mix of mangrove, marsh and pine flatwoods.") },
    { icon: "drop", title: "Turtle nests on Caladesi", text: p("At Caladesi Island State Park, where the state says armadillos are established and should be removed when possible, park staff cage sea turtle nests every summer against raccoons and armadillos.") },
    { icon: "critter", title: "Tortoise eggs too", text: p("UF/IFAS Extension Pinellas notes that armadillos, like raccoons, can dig up gopher tortoise eggs. Pinellas still has tortoises in parks such as Fred Howard and Joe's Creek.") },
    { icon: "balance", title: "Where one can't go", text: p("FWC bars releasing nuisance armadillos on publicly owned land, and Pinellas County park rules ban releasing any animal in a county park.") },
    { icon: "building", title: "Roadkill on county streets", text: p("When a dead armadillo was reported on Virginia Avenue in Palm Harbor in June 2026, county Animal Services handed it to Public Works, which logged a service request.") },
  ],
  contactsIntro: "Who to call about armadillos in Pinellas County, from county and state pages.",
  contacts: [
    { icon: "building", title: "Dead armadillo on a county road", text: p("Pinellas County Public Works, (727) 464-8900, or the county's Report a Problem app.") },
    { icon: "search", title: "Advice from the state", text: p("FWC's Wildlife Interaction Reporting Form gives quick technical help with armadillo problems.") },
    { icon: "home", title: "An armadillo under your home", text: p("A private wildlife company. Call us at (727) 594-7705.") },
  ],
  reviewsIntro: "[PLACEHOLDER: a real Google review from a Pinellas County armadillo job, quoted exactly as on Google (TTR-723)]",
  faqs: [
    faq(
      "Why is my Pinellas lawn full of small holes?",
      "Armadillos root for earthworms and insect larvae, and Pinellas' sandy soils dig easily. FWC suggests keeping watering and fertilizing to a minimum, because moist soil and lush turf bring those foods to the surface.",
    ),
    faq(
      "Can I relocate an armadillo to a park in Pinellas County?",
      "No. FWC doesn't allow nuisance armadillos to be released on public land, and county park rules ban releasing animals. The legal choices are release on site, euthanasia, or a private property of 40 acres or more in Pinellas with the owner's written permission.",
    ),
    faq(
      "Do armadillos carry leprosy?",
      "They can. FWC lists leprosy among the diseases armadillos may carry, along with St. Louis encephalitis and leptospires. Wear gloves for any contact, and don't handle one bare-handed.",
    ),
    faq(
      "Will a fence keep armadillos out of my Pinellas garden?",
      "It can for a small area. FWC suggests fencing at least 2 feet high with an apron buried at least 18 inches deep.",
    ),
    faq(
      "How soon can you come out for an armadillo in Pinellas County?",
      "Same-day armadillo inspections are often available in Pinellas County. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for an armadillo call in Pinellas County]",
    ),
  ],
  ctaHeading: "Armadillo digging up your Pinellas yard?",
  ctaText: "For armadillos anywhere in Pinellas, call (727) 594-7705.",
  seo: {
    title: "Armadillo Removal in Pinellas County | Pro Wildlife Removal",
    description:
      "Armadillo removal in Pinellas County, FL: lawn digging and burrows under homes handled, FWC release rules, and why local sand suits them. (727) 594-7705.",
  },
  sources: [
    { title: "USDA NRCS: Official series description, Pinellas series (Pinellas fine sand; type location about 2.0 miles northeast of Pinellas Park; sandy marine sediments over loamy materials)", url: SOIL },
    { title: "UF/IFAS: Nine-banded armadillo fact sheet, UW456 (prefers easy-to-excavate sandy soils)", url: UW456 },
    { title: "Pinellas County: Joe's Creek Management Area (300 acres near Seminole; mangrove swamp, marsh, flatwoods; armadillos, raccoons, gopher tortoises)", url: JOES },
    { title: "Florida DEP: Caladesi Island State Park unit management plan, 2022 (nine-banded armadillos established and should be removed when possible; staff cage sea turtle nests every summer against raccoons and armadillos)", url: CALADESI },
    { title: "UF/IFAS Extension Pinellas: Gopher Tortoise Day, April 10, 2025 (raccoons and armadillos can dig up tortoise eggs)", url: TORTOISE },
    { title: "Pinellas County: Fred Howard Park (gopher tortoises)", url: "https://pinellas.gov/parks/fred-howard-park/" },
    { title: "FWC: Armadillo profile (range expanded into Florida; introductions; naturalized; landowners may live-trap or humanely destroy nuisance armadillos; euthanize, release on-site, or on 40+ acres in the same county with written permission; not publicly owned lands; keep watering and fertilization minimal; fence 2 feet high with an 18-inch buried apron; diseases including leprosy; Wildlife Interaction Reporting Form)", url: FWC },
    { title: "Pinellas County: Park rules, Code Ch. 90 (no release or transplant of any animals)", url: "https://pinellas.gov/park-rules/" },
    { title: "SeeClickFix #21962727, 1105 Virginia Ave, Palm Harbor, June 12, 2026 (dead armadillo; Animal Services assigned it to Pinellas County Public Works; service request created)", url: SCF },
    { title: "Pinellas County Public Works: Report / request / contact us ((727) 464-8900; report a problem online or by app)", url: "https://pinellas.gov/report-request-contact-us/" },
  ],
  clientQuestions: ["Typical response time for an armadillo call in Pinellas County?", "How does the client handle armadillos (trapping, exclusion fencing, burrow work)?", "A real Google review from a Pinellas County armadillo job (TTR-723), and real Pinellas armadillo job photos."],
});
