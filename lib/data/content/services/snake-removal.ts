import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";

/*
 * Snake removal. Target search: "snake removal Tampa".
 * Replaces today's three snake pages (snake-removal, snake-control, snake-removal-tampa);
 * keeps the venomous species list, as the plan asks. Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const FWC_SNAKES = "https://myfwc.com/conservation/you-conserve/wildlife/snakes/";
const UW260 = "https://ask.ifas.ufl.edu/publication/UW260";

export const snakeRemoval: Service = {
  slug: "snake-removal",
  title: "Snake Removal",
  group: "removal",
  animal: "snake",
  order: 5,
  summary: "A snake in the house, garage or pool cage removed safely, the way in found and closed, and the rodents that drew it dealt with.",
  cardImage: images.snakeRemoval3,
  design: "new",
  hero: {
    eyebrow: "SNAKE REMOVAL",
    heading: "Snake Removal in Central Florida",
    highlight: "Snake Removal",
    text: p("A snake in the house, garage or lanai? Keep your distance and call. We remove it safely, find how it got in and close the gap."),
    image: images.snakeRemoval3,
    badges: ["Know the venomous four", "Entry points sealed"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "What should I do about a snake in my house in Florida?",
      text: p(
        "Keep children and pets away, watch where it goes from a safe distance, and don't try to catch or kill it. Only 6 of Florida's 50 snake species are venomous, but a bite from any snake hurts. Call (727) 594-7705 and we'll remove it and close the way in.",
      ),
      points: ["6 of 50 venomous", "Don't catch or kill", "Snakes follow rodents", "Repellents don't work"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Venomous snakes",
      heading: "The venomous snakes you may meet in Central Florida",
      intro: p(
        "FWC's guide to Florida's venomous snakes lists six species. Three are found in every Florida county, and the coral snake lives throughout the state. Learn them, then leave identification of any snake you're unsure about to us.",
      ),
      variant: "icon",
      columns: 2,
      cards: [
        {
          icon: "critter",
          title: "Eastern diamondback rattlesnake",
          text: p("Yellow-bordered diamonds down the back, a rattle and a head much wider than the neck. A large, venomous native snake, found in every county, often in palmetto flatlands, pine woods and brushy fields."),
        },
        {
          icon: "critter",
          title: "Dusky pygmy rattlesnake",
          text: p("Small, stout and gray, also called the ground rattler. Its tiny rattle sounds like a buzzing insect and can only be heard a few feet away. Common in every county."),
        },
        {
          icon: "critter",
          title: "Cottonmouth",
          text: p("A heavy-bodied pit viper with no rattle, olive-brown to black, usually around three feet long. Lives near water: stream banks, swamps, lake edges and marshes. Found in every county."),
        },
        {
          icon: "critter",
          title: "Eastern coral snake",
          text: p("Red, yellow and black rings with a black nose. On a coral snake the red rings touch the yellow; on the harmless scarlet kingsnake, red touches black. Found throughout Florida in leaf litter, logs and brush piles."),
        },
      ],
      outro: p(
        "The other two, the timber (canebrake) rattlesnake and the copperhead, are north Florida snakes. FWC's guide places the canebrake mainly in northern Florida and the copperhead in a few northwest counties.",
      ),
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why snakes come to your house",
      body: rich(
        p(
          "Snakes go where the food is. FWC says seeing snakes often around a house or shed may mean rodents are there, and UF/IFAS notes that rat snakes move into attics, garages and sheds when rodents are present and leave once the rodents are gone.",
        ),
        ul(
          "**Rodents.** Rats in the attic or mice in the garage are a dinner bell. If you keep finding snakes, the real job may be [rat removal](/services/rat-removal/).",
          "**Cover.** Brush piles, stacked lumber, firewood on the ground, overgrown shrubs and clutter give snakes places to hide.",
          "**Water and frogs.** A backyard pond full of frogs draws the snakes that eat them.",
          "**Easy ways in.** UF/IFAS warns some snakes can fit through an opening no bigger than a pencil: gaps under doors, worn garage door seals, pet doors, holes around pipes and open pool-cage drain pipes.",
        ),
        p("Most snakes around Florida homes are harmless and eat pests. FWC's advice is to leave a snake outdoors alone. The problem is one inside the house, the garage or the pool cage."),
      ),
      image: images.snakeRemoval3,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove snakes",
      heading: "What happens when you call",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Tell us what you see", text: p("Where the snake is, how big it looks, its colors, and whether it's still in sight. If you can, take a photo from a safe distance. Keep the door to that room closed.") },
        { number: "2", title: "Safe capture", text: p("The technician identifies the snake and removes it with tools made for the job.", "[PLACEHOLDER: ask the client: describe how you capture snakes, venomous and not]") },
        { number: "3", title: "Release or removal", text: p("Native snakes are released where Florida rules allow. Protected species, like the eastern indigo snake, are left unharmed.", "[PLACEHOLDER: ask the client: where you release snakes, and how you handle venomous ones]") },
        { number: "4", title: "Find the way in", text: p("We look for the gap the snake used, and for what drew it: rodents, a pond or cover next to the house. Then we close the gaps and tell you what else to change.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "Snakes and Florida law",
      body: rich(
        ul(
          "**Some snakes are protected.** The eastern indigo snake, a bluish-black, non-venomous snake that can reach eight feet, is a threatened species under the federal Endangered Species Act and Florida rule 68A-27. It shows no aggression when approached. Leave it be.",
          "**Killing a snake is rarely justified.** FWC says there's no good reason to kill a snake except in the unlikely case of a venomous snake posing immediate danger to people or pets. Snakes usually bite only when they're handled or provoked.",
          "**Keeping a venomous snake needs state approval.** FWC says venomous reptiles may only be possessed with its authorization, so catching one to keep or move is not a do-it-yourself job.",
          "**Snake repellents don't work.** UF/IFAS says plainly that the products sold as snake repellents simply do not work.",
        ),
        p("Read FWC's [Living with Snakes](" + FWC_SNAKES + ") and UF/IFAS's guide to [preventing encounters with snakes](" + UW260 + ")."),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Keep them out",
      heading: "Making the house snake-tight",
      body: p(
        "A snake that got in once tells you where the house is open. These are the fixes UF/IFAS recommends, and the ones we look at on every snake call.",
      ),
      checklist: [
        "Door sweeps and garage door threshold seals replaced where worn",
        "Gaps around pipes, wiring and vents sealed; larger openings covered with hardware cloth",
        "Roof vents and plumbing vent stacks screened",
        "Crawl space openings fitted with secure doors",
        "Pool-cage drains and torn screens checked",
        "Rodent problems found and fixed, so there's nothing to hunt",
      ],
      image: { ...images.snakeRemoval3, alt: "Snake removal in Tampa and Central Florida: close-up image of a patterned python" },
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What snake removal costs depends on",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Urgency and time of day", text: p("A snake loose in the living room at night versus one seen in a shed.") },
        { title: "Where it is", text: p("In plain sight, or hidden in a wall, a cabinet or under an appliance.") },
        { title: "The species", text: p("Venomous snakes take more care and equipment.") },
        { title: "Sealing and rodent work", text: p("Closing the gaps, and dealing with the rodents that drew it.") },
      ],
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Snake removal in 8 counties",
      intro: p("From lakefront homes in Polk to pool cages in Pinellas, we remove snakes across central and west Florida."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "snake",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Snake removal questions",
      items: [
        faq(
          "How many venomous snakes are in Florida?",
          "Six of Florida's 50 snake species are venomous, according to FWC: the eastern diamondback rattlesnake, timber rattlesnake, dusky pygmy rattlesnake, cottonmouth, eastern coral snake and southern copperhead. In Central Florida, the four to know are the diamondback, pygmy rattlesnake, cottonmouth and coral snake.",
        ),
        faq(
          "How do I tell a coral snake from a kingsnake?",
          "Look at where the red is. On the venomous coral snake, the red rings touch the yellow rings, and the nose is black. On the harmless scarlet kingsnake, the red touches black, and the nose is red. If you're not sure, treat it as venomous and keep away.",
        ),
        faq(
          "What do I do if someone is bitten?",
          "Call 911. UF/IFAS's snakebite plan says to get away from the snake, keep the bitten arm or leg still, in a comfortable, neutral position (the CDC's current wording), remove rings and watches, and wash the bite with soap and water. Don't use a tourniquet, ice, cutting or suction, and don't try to catch the snake. You don't need to identify it for treatment. The Poison Control hotline is 1-800-222-1222.",
        ),
        faq(
          "There's a snake in my garage. What do I do?",
          "UF/IFAS suggests closing the door between the garage and the house and opening the outside doors so the snake can leave on its own. Keep pets and children away. If it doesn't leave, or you can't tell what it is, call us.",
        ),
        faq(
          "Why do I keep finding snakes around my house?",
          "Usually food or cover. FWC says frequent snake sightings near a house can mean rodents. Clear brush and debris piles, clean up spilled bird seed and pet food, and check for rats. See [types of animals found under the house](/blog/types-of-animals-found-under-the-house/).",
        ),
        faq(
          "Do snake repellents work?",
          "No. UF/IFAS says the products sold as snake repellents simply do not work. Sealing gaps and removing food and cover does.",
        ),
        faq(
          "Can you come right away for a snake in the house?",
          "Same-day visits are often available for a snake inside. Tell us it's inside and where, and keep the room closed off until we get there.",
        ),
      ],
    },
    {
      _type: "cardsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Related guides",
      variant: "plain",
      columns: 3,
      cards: [
        { title: "Rat removal", href: "/services/rat-removal/", text: p("Snakes follow rodents. Fixing a rat problem removes the reason they visit.") },
        { title: "Common wildlife entry points", href: "/blog/common-wildlife-entry-points/", text: p("Where animals, snakes included, get into homes.") },
        { title: "Wildlife-proofing your home", href: "/blog/wildlife-proofing-your-home/", text: p("How to close the gaps before something finds them.") },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Snake in the house right now?",
      highlight: "right now?",
      text: p("Close the door to that room and call (727) 594-7705."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Snake Removal in Central Florida | Pro Wildlife Removal",
    description:
      "Snake in the house, garage or pool cage? Safe snake removal in Central Florida, sealing the way in, and how to spot venomous snakes. Call (727) 594-7705.",
  },
  sources: [
    { title: "FWC: Living with Snakes (6 of 50 species venomous; leave snakes alone; no good reason to kill except immediate danger; snakes near homes may mean rodents; clear debris and spilled seed; indigo snake protected; venomous reptiles possessed only under license)", url: FWC_SNAKES },
    { title: "FWC: Florida's Venomous Snakes guide (diamondback, pygmy rattlesnake and cottonmouth in every county; coral snake throughout Florida; canebrake mainly northern Florida; copperhead rare in a few northwest counties; ID features; coral vs scarlet kingsnake)", url: "https://myfwc.com/media/3179/guide-to-venomous-snakes-in-fl.pdf" },
    { title: "UF/IFAS EDIS WEC221 (UW260): Dealing with Snakes in Florida's Residential Areas, Preventing Encounters (pencil-size openings; rat snakes follow rodents; door sweeps, garage seals, hardware cloth, vent stacks, crawl space doors; repellents don't work; snake in the garage)", url: UW260 },
    { title: "UF/IFAS EDIS WEC 200 (UW226): Emergency Snakebite Action Plan (call 911; immobilize below the heart; no tourniquet, ice, incision or suction; no need to identify the snake; Poison Control 1-800-222-1222)", url: "https://ask.ifas.ufl.edu/publication/UW226/pdf" },
    { title: "CDC/NIOSH: Venomous snakes (keep the bite in a neutral position of comfort; remove rings and watches; wash with soap and water)", url: "https://www.cdc.gov/niosh/outdoor-workers/about/venomous-snakes.html" },
    { title: "FWC: Eastern indigo snake (bluish-black, up to eight feet, non-venomous, no aggression when approached; threatened under the federal ESA)", url: "https://myfwc.com/wildlifehabitats/profiles/reptiles/snakes/eastern-indigo-snake/" },
  ],
  clientQuestions: [
    "Where do you release snakes, and how do you handle venomous ones?",
    "Is there an emergency or after-hours rate? Can the site show a price range for snake removal?",
    "Real photos: a snake removal from a garage or pool cage, a door sweep or vent screen installed.",
  ],
};
