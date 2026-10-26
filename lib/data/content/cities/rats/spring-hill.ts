import { countyPage } from "../../counties/build.ts";
import { faq, p } from "../../pt.ts";

/* Rat removal in Spring Hill, rewritten in place at its existing URL (Ben, Oct 26). Local rat facts only: Hernando garbage and code rules. */
export const springHillRats = countyPage({
  kind: "rat",
  path: "about-us/service-area/rat-removal-services-spring-hill-fl",
  name: "Spring Hill",
  county: "Hernando",
  order: 39,
  phone: { label: "Call (727) 594-7705", href: "tel:+17275947705" },
  eyebrow: "RAT REMOVAL IN SPRING HILL",
  heading: "Rat Removal in Spring Hill, FL",
  highlight: "Rat Removal",
  summary: "Rat removal in Spring Hill, FL: roof rats sealed out and trapped, plus Hernando County's garbage and yard rules that keep rats away.",
  heroText: "Rats in a Spring Hill attic or garage? We seal the way in, trap the rats inside and clean up after them. Call (727) 594-7705.",
  answerHeading: "Will Hernando County remove rats from a Spring Hill house?",
  answer:
    "Spring Hill is unincorporated Hernando County, and the county doesn't remove rats from homes. That's a job for a private company. Pro Wildlife Removal seals the openings rats use, traps the ones inside and cleans up. Hernando's garbage rules help keep them from coming back. Call (727) 594-7705.",
  points: ["Call (727) 594-7705", "County: lids closed", "Grass limit 18 inches"],
  townsHeading: "Rat removal near Spring Hill",
  townsIntro: "We take rat calls across Hernando County, and handle every other animal in Spring Hill too.",
  towns: [
    {
      title: "Spring Hill and Hernando",
      href: "/about-us/service-area/wildlife-removal-spring-hill-fl/",
      items: [
        { label: "All wildlife in Spring Hill", href: "/about-us/service-area/wildlife-removal-spring-hill-fl/" },
        { label: "Rats in Brooksville", href: "/about-us/service-area/expert-rat-removal-in-brooksville-fl/" },
        { label: "Rats in Hudson", href: "/about-us/service-area/rat-removal-services-hudson-fl/" },
      ],
    },
  ],
  localHeading: "Hernando's rules that starve rats",
  localIntro: "Hernando County's garbage and code pages read like a rat-prevention checklist. Here's what they require.",
  local: [
    { icon: "home", title: "Lids closed, trash bagged", text: p("Hernando says cart lids must be closed to prevent scavenging by animals, and all trash should be bagged before it goes in the cart. Only waste inside the cart with the lid closed gets collected.") },
    { icon: "critter", title: "Not out too early", text: p("Carts can go to the curb no earlier than 6 p.m. the night before pickup. Any loose trash scattered during collection is the homeowner's to clean up.") },
    { icon: "leaf", title: "Yard waste limits", text: p("Yard waste is picked up once a week, up to 15 items, with branches no thicker than 4 inches. Whole trees and trunks aren't taken curbside, and a brush pile left for weeks makes good rat cover.") },
    { icon: "search", title: "Code limits", text: p("County code treats grass and weeds over 18 inches within 100 feet of improved property, and piles of trash bags, rotting vegetation or old appliances, as violations.") },
  ],
  contactsHeading: "Hernando bulk pickup and code numbers for Spring Hill",
  contactsIntro: "Get old furniture hauled off through Coastal Waste, or report a junk pile through Hernando County.",
  contacts: [
    { icon: "home", title: "Bulk pickup", text: p("Coastal Waste & Recycling, (352) 540-6457, schedules bulk pickups: six a year, up to 10 items each. Old furniture left outside is a rat shelter.") },
    { icon: "users", title: "Code complaints", text: p("Hernando County's main line, (352) 754-4000, is the contact on the county's code compliance page.") },
  ],
  servicesIntro: "Need help with something other than rats in Spring Hill? We remove every animal below.",
  servicesHeading: "Spring Hill wildlife jobs beyond rats",
  reviewsIntro: "[PLACEHOLDER: reviews from Spring Hill rat removal customers, matched from the client's Google reviews (TTR-723)]",
  faqHeading: "Spring Hill rat questions",
  faqs: [
    faq(
      "Does Hernando County get rid of rats?",
      "No. Hernando's garbage and code rules help prevent rats, but removing them from a home is up to the owner. See [rats in the attic](/services/rats-in-attic/).",
    ),
    faq(
      "Can my Spring Hill neighbor's junk pile attract rats?",
      "It can, and county code treats piles of trash bags, decaying vegetation and exposed appliances or furniture as violations. Hernando County's main line, (352) 754-4000, is the contact on the county's code compliance page.",
    ),
    faq(
      "Why does the county care if my cart lid is closed?",
      "Hernando says closed lids prevent animals from scavenging and stop garbage spilling during pickup. An open cart is a buffet for rats and raccoons.",
    ),
    faq(
      "Can you get to a Spring Hill rat problem the same day?",
      "Same-day rat inspections are often available in Spring Hill. Call (727) 594-7705.",
      "[PLACEHOLDER: ask the client: typical response time for rat calls in Spring Hill]",
    ),
  ],
  ctaHeading: "Rats in your Spring Hill home?",
  ctaText: "Hearing rats overhead in Spring Hill? Call (727) 594-7705.",
  seo: {
    title: "Rat Removal in Spring Hill, FL | Pro Wildlife Removal",
    description:
      "Rat removal in Spring Hill, FL: roof rats sealed out, trapped and cleaned up, plus Hernando County's lid, yard waste and code rules. Call (727) 594-7705.",
  },
  sources: [
    { title: "Hernando County: Garbage (cart lids must be closed to prevent scavenging of animals; bag all trash; curbside no earlier than 6 p.m. the day before; scattered loose trash is the customer's responsibility)", url: "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/garbage/" },
    { title: "Hernando County: Yard waste (once per week; 15 items; branches up to 4 inches; no whole trees or trunks curbside)", url: "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/yard-waste/" },
    { title: "Hernando County: Bulk waste (six collections, up to 10 items; Coastal Waste & Recycling (352) 540-6457)", url: "https://www.hernandocounty.us/living-here/garbage-recycling/residential-collection/bulk-waste/" },
    { title: "Hernando County: Code violations (Sec. 15-163a grass over 18 inches within 100 feet of improved property; 15-163b accumulation of trash bags, decaying vegetation, exposed appliances or furniture; main line (352) 754-4000)", url: "https://www.hernandocounty.us/public-safety/code-compliance/code-violations/" },
  ],
  clientQuestions: ["Typical response time for rat calls in Spring Hill?", "Spring Hill rat job reviews (from TTR-723) and real rat job photos."],
});
