import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";

/*
 * Dead animal removal. Target search: "dead animal removal Tampa".
 * The old dead-animal-tampla-fl URL 301s here (lib/service-urls.ts).
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const CDC_DISPOSAL = "https://www.cdc.gov/natural-disasters/safety/safety-guidelines-disposing-dead-animals-after-a-disaster.html";
const FL_DOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html";

export const deadAnimalRemoval: Service = {
  slug: "dead-animal-removal",
  title: "Dead Animal Removal",
  group: "removal",
  animal: "dead-animal",
  order: 9,
  summary: "A dead animal found and removed from the wall, attic, crawl space, chimney or engine bay, the area cleaned and deodorized.",
  cardImage: images.deadAnimalRemoval,
  design: "new",
  hero: {
    eyebrow: "DEAD ANIMAL REMOVAL",
    heading: "Dead Animal Removal in Tampa Bay",
    highlight: "Dead Animal Removal",
    text: p("A smell you can't place, or an animal that died in a wall, attic, crawl space or engine bay? We find it, remove it and treat the area."),
    image: images.deadAnimalRemoval,
    badges: ["Walls, attics, crawl spaces", "Odor treatment"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do you get rid of a dead animal smell in the house?",
      text: p(
        "Find the animal and remove it. Air fresheners only cover the smell, and in Florida heat it gets worse fast. The source is usually in a wall, attic, crawl space or vent. We locate it, bag and remove it, clean and deodorize the spot, and find how the animal got in. Call (727) 594-7705.",
      ),
      points: ["Find the source", "Gloves and bags", "Clean and deodorize", "Find the way in"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs of a dead animal in your house",
      intro: p("Most people never see the animal. They notice everything around it."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "odor", title: "A smell that's strongest in one spot", text: p("A sweet, rotten smell that's worse in one room, closet or along one wall, and doesn't go away with cleaning.") },
        { icon: "bug", title: "Flies indoors", text: p("Flies gathering at a window, a light or a vent, when doors and windows have been closed.") },
        { icon: "drop", title: "A stain on a wall or ceiling", text: p("A damp or dark spot on drywall or a ceiling below the attic.") },
        { icon: "sound", title: "Noises that stopped", text: p("Scratching in the attic or walls that went quiet a few days before the smell started.") },
        { icon: "home", title: "Smell from vents", text: p("An odor that comes out when the A/C runs can point to an animal in or near the ductwork.") },
        { icon: "wrench", title: "Smell from the car", text: p("FWC notes squirrels nest in and chew wiring in cars that sit unused. A smell from the vents or under the hood is worth checking.") },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why a dead animal shouldn't be left to dry out",
      body: rich(
        p("Waiting it out is tempting. In a hot Florida attic or wall, it means weeks of smell and a stained, contaminated spot when it's done."),
        ul(
          "**Health.** The CDC says the risk from animal carcasses is low if proper precautions are taken: gloves, bagging the remains and washing up. In an attic or crawl space, that work comes with insulation, droppings and tight spaces.",
          "**Rabies questions.** If the animal is a bat or raccoon and someone may have had contact with it, Florida's Department of Health says to report it so it can be tested, and to avoid damaging the head.",
          "**A sign of a bigger problem.** An animal that died inside got in somewhere. Where there was one rat or squirrel, there are often others, and the gap is still open.",
        ),
      ),
      image: images.deadAnimalRemoval,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we do it",
      heading: "Our dead animal removal process",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Follow the smell", text: p("We trace the odor, flies and stains to the spot, then check the attic, crawl space, walls and vents near it.") },
        { number: "2", title: "Remove the animal", text: p("Gloved, bagged and sealed, as the CDC recommends. If it's inside a finished wall, we make the smallest opening that gets it out, and tell you before cutting.", "[PLACEHOLDER: ask the client: do you cut and patch drywall yourselves, or does the owner arrange the repair?]") },
        { number: "3", title: "Clean and deodorize", text: p("The spot is cleaned and sanitized, soiled insulation removed, and the area treated for odor.") },
        { number: "4", title: "Find the way in", text: p("We look for how the animal got inside, so you're not doing this again next month. If it's a rat, squirrel or bat problem, we tell you and quote the fix.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Doing it yourself",
      heading: "If you find a dead animal in the open",
      body: rich(
        p("For a small animal in the yard or garage, you can do it yourself safely. The CDC's steps:"),
        ul(
          "Put on gloves. Don't touch the animal with bare hands.",
          "Cover your gloved hand with a plastic trash bag, pick up the remains, turn the bag over them and seal it. Use a shovel for larger animals, then rinse it.",
          "Call your local animal control for pickup instructions.",
          "Wash your hands.",
        ),
        p(
          "If it's a bat, a raccoon, or any animal a person or pet may have touched, stop and call your county health department first. Florida's Department of Health asks that the animal be kept for testing without damaging the head. See the [CDC's guidance](" + CDC_DISPOSAL + ") and the [Florida Department of Health rabies page](" + FL_DOH_RABIES + ").",
        ),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "After removal",
      heading: "Clean, fresh and closed up",
      body: p(
        "Removing the animal is the main job, and the rest is making sure the smell and the cause are gone too.",
      ),
      checklist: [
        "Remains bagged and removed from the property",
        "Fluids and soiled insulation cleaned up",
        "Area sanitized and treated for odor",
        "Entry point found and the fix explained",
        "[PLACEHOLDER: ask the client: what odor treatment you use, and do you return if the smell lingers?]",
      ],
      image: images.deadAnimalRemoval,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What dead animal removal costs depends on",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Where it is", text: p("Open crawl space, attic, chimney, engine bay, or inside a finished wall.") },
        { title: "Finding it", text: p("A clear smell to follow, or a search through several spaces.") },
        { title: "Size of the animal", text: p("A rat, an opossum or something larger.") },
        { title: "Cleanup and odor work", text: p("A quick wipe-down, or insulation removal and treatment.") },
      ],
      outro: p("[PLACEHOLDER: ask the client: can the site show a price range for dead animal removal?]"),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Dead animal removal in 9 counties",
      intro: p("Homes, businesses and rentals across Tampa Bay and the counties around it."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Dead animal removal questions",
      items: [
        faq(
          "How long does a dead animal smell last?",
          "It depends on the animal's size, where it is and the heat. A larger animal in a hot attic lasts far longer than a mouse in a cool crawl space. Removing it is the only way to end it quickly.",
        ),
        faq(
          "Can you find an animal inside a wall?",
          "Usually, yes. We trace the smell, flies and staining to the spot, then open the smallest area needed. We'll tell you before any cutting.",
        ),
        faq(
          "Is it dangerous to be around a dead animal?",
          "The CDC says the risk from animal carcasses is low if you take proper precautions: gloves, bagging the remains and washing your hands. Don't touch one bare-handed, and keep children and pets away.",
        ),
        faq(
          "What if it's a bat?",
          "Don't throw it away if anyone may have touched it or woken up with it nearby. Florida's Department of Health asks that the animal be reported to the county health department or animal control for rabies testing, without damaging the head.",
        ),
        faq(
          "Do you remove dead animals from under the house or in the yard?",
          "Yes: crawl spaces, under decks and sheds, attics, walls and vents. If it's on a public road, call your city or county instead.",
        ),
        faq(
          "Will you find out why it died in my house?",
          "We'll find how it got in. Animals that die in attics and walls are often rats, squirrels or bats that were living there, so we check for others and for the open gap.",
        ),
      ],
    },
    {
      _type: "cardsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Related services",
      variant: "plain",
      columns: 3,
      cards: [
        { title: "Rat removal", href: "/services/rat-removal/", text: p("If the animal was a rat, there are probably others.") },
        { title: "Squirrel removal", href: "/services/squirrel-removal/", text: p("Squirrels that get into attics sometimes don't get out.") },
        { title: "Dangers of ignoring attic wildlife", href: "/blog/the-dangers-of-ignoring-wildlife-in-your-attic/", text: p("What happens when animals in the attic are left alone.") },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Smell something you can't find?",
      highlight: "can't find?",
      text: p("Call (727) 594-7705, 24/7. We'll find it and get it out."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Dead Animal Removal in Tampa Bay | Odor Removal | Pro Wildlife Removal",
    description:
      "Dead animal smell in a wall, attic, crawl space or vent? We find and remove it, clean and deodorize, and find how it got in. Tampa Bay and 9 Florida counties. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "CDC: Safety guidelines for disposing of dead animals (gloves; bag over hand, turn and seal; shovel for larger animals; call animal control; wash hands; risk from carcasses low with proper precautions)", url: CDC_DISPOSAL },
    { title: "CDC: Wildlife (always wear gloves when handling dead animals; don't touch with bare hands)", url: "https://www.cdc.gov/healthy-pets/about/wildlife.html" },
    { title: "FWC: Living with Squirrels (keep unused vehicles in a garage or move them to prevent nesting and chewing on wires)", url: "https://myfwc.com/media/tydhegay/livingwithsquirrels.pdf" },
    { title: "Florida Department of Health: Rabies (report the animal for testing; if dead, don't damage the head and avoid further contact)", url: FL_DOH_RABIES },
  ],
  clientQuestions: [
    "Do you cut and patch drywall to reach an animal in a wall, or does the owner arrange the repair?",
    "What odor treatment do you use, and do you return if the smell lingers?",
    "Do you remove dead animals from engine bays, pools and yards? (A review mentions a cat removed from an engine.)",
    "Can the site show a price range for dead animal removal?",
  ],
};
