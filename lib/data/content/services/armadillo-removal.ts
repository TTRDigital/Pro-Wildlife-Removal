import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/*
 * Armadillo removal. Target search: "armadillo removal Tampa" (Polk County also searches for it).
 * Replaces today's three armadillo pages (armadillo-removal-2, armadillo-control,
 * armadillo-removal-tampa); those 301 here (lib/service-urls.ts).
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const FLYER = "https://myfwc.com/media/2hshpfdc/living-with-armadillos.pdf";

export const armadilloRemoval: Service = {
  slug: "armadillo-removal",
  title: "Armadillo Removal",
  group: "removal",
  animal: "armadillo",
  order: 7,
  summary: "Armadillos digging up the lawn or burrowing under the patio, driveway or shed, trapped at the burrow and released or handled the way Florida allows.",
  cardImage: images.armadilloRemoval2,
  design: "new",
  hero: {
    eyebrow: "ARMADILLO REMOVAL",
    heading: "Armadillo Removal in Tampa Bay",
    highlight: "Armadillo Removal",
    text: p("Holes all over the lawn, or a burrow under the patio or shed? We trap the armadillo and help you keep the next one from moving in."),
    image: images.armadilloRemoval2,
    badges: ["Burrows and lawn damage", "Trapped at the burrow"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I get rid of an armadillo in my yard in Florida?",
      text: p(
        "Trap it at its active burrow, then make the yard less inviting. Poison baits are illegal, and no repellents or fumigants are registered for armadillos in Florida. A trapped armadillo must be released on site, on 40 or more contiguous acres in the same county with the landowner's written permission, or humanely put down. Call (727) 594-7705.",
      ),
      points: ["Trap at the burrow", "Poison baits illegal", "No registered repellents", "Strict release rules"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have an armadillo",
      intro: p("Armadillos are mostly out at night, digging for insects and grubs with their noses and strong claws. What you find in the morning tells the story."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "search", title: "Small holes all over the lawn", text: p("Shallow holes about 1 to 3 inches deep and 3 to 5 inches wide, where an armadillo rooted for grubs and worms overnight.") },
        { icon: "home", title: "A burrow near the house", text: p("An entrance up to about a foot across, sometimes dug right under a driveway, patio or other structure. FWC says one armadillo can keep several burrows with more than one entrance.") },
        { icon: "leaf", title: "Torn-up flower beds", text: p("Mulch thrown out of the beds and plants uprooted. FWC notes moist, fertilized soil draws the earthworms and larvae armadillos hunt.") },
        { icon: "critter", title: "An armadillo at dusk or after dark", text: p("An armored animal about 15 to 17 inches long, not counting the tail, nosing along the ground. Armadillos see poorly, so they may not notice you.") },
        { icon: "drop", title: "Digging where the soil stays wet", text: p("Fresh holes in the wettest, most-watered parts of the yard, where worms and larvae come up near the surface.") },
        { icon: "wrench", title: "Cracks or settling", text: p("UF/IFAS warns that armadillo burrows under driveways and patios can cause structural damage. A slab that starts to crack or sink near a burrow needs a look.") },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why an armadillo by the house is worth dealing with",
      body: rich(
        p(
          "FWC calls armadillos helpful in one way: they eat large numbers of grubs, spiders, cockroaches and other insects. The trouble is where they dig. UF/IFAS says a single armadillo keeps an average of ten burrows, each up to 7 feet deep and 20 feet long.",
        ),
        ul(
          "**Your slab and driveway.** A burrow under a driveway or patio can undermine it, according to UF/IFAS.",
          "**The lawn and beds.** Night after night of rooting can wreck sod and landscaping.",
          "**Disease, handled with care.** The CDC says some armadillos naturally carry the bacteria that cause leprosy (Hansen's disease), but the risk is very low and most people who come into contact with them are unlikely to get leprosy. As a simple precaution, wear gloves and don't handle armadillos bare-handed.",
        ),
      ),
      image: images.armadilloRemoval2,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove armadillos",
      heading: "How we catch an armadillo",
      intro: p("Armadillos are hard to bait. UF/IFAS research found they only notice food at very close range, and that where a trap sits matters more than what's in it."),
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Find the active burrow", text: p("We look for fresh digging and tracks to find the burrow the armadillo is using now, and its travel routes along fences and walls.") },
        { number: "2", title: "Set traps where it walks", text: p("Live traps go at the burrow entrance or along a fence or wall, with boards or fencing to guide the armadillo in. Traps are checked at least every 24 hours.", "[PLACEHOLDER: ask the client: confirm your trap setup for armadillos and how often a technician checks traps]") },
        { number: "3", title: "Release where the law allows", text: p("A caught armadillo may be released on the property, or on 40 contiguous acres or more in the same county with the landowner's written permission. Otherwise it must be humanely put down.") },
        { number: "4", title: "Close the burrow", text: p("Once the armadillo is gone, the burrow is filled. UF/IFAS and FWC recommend buried fencing or wire to stop the next one digging in.", "[PLACEHOLDER: ask the client: do you install exclusion fencing or wire along foundations?]") },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "Armadillos and Florida law",
      body: rich(
        ul(
          "**Armadillos are treated as native in Florida.** FWC considers them naturalized: they spread here from the southwest. That means they're covered by the nuisance wildlife rule, 68A-9.010.",
          "**Live traps must be checked at least once every 24 hours,** and any other animal caught has to be released on the spot.",
          "**Release only on site, or on 40+ contiguous acres in the same county with written permission.** On public land, you need the land manager's written permission. FWC adds that relocating armadillos is seldom biologically sound.",
          "**No poison, no repellents.** UF/IFAS says poison baits are illegal, and no repellents or fumigants are registered for armadillos in Florida.",
          TRAP_RULES_2026,
        ),
        p("Read FWC's [Living with Armadillos](" + FLYER + ")."),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Keep them out",
      heading: "Keeping armadillos from coming back",
      body: p(
        "FWC is clear that removing one armadillo doesn't stop others from using the same yard. The fixes that last change the yard itself.",
      ),
      checklist: [
        "Fence small areas at least 2 feet high, buried 18 inches deep",
        "Chicken wire laid along the patio, driveway or foundation to stop burrowing",
        "Less watering and fertilizer, and irrigation in the morning so the soil dries",
        "Fallen fruit picked up: FWC says armadillos like fermenting fruit",
        "Old burrows filled once the armadillo is out",
      ],
      image: images.armadilloRemoval2,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What armadillo removal costs depends on",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "How many armadillos", text: p("One animal, or several using the same yard.") },
        { title: "Trapping time", text: p("Armadillos are slow to trap, so the number of visits varies.") },
        { title: "Where the burrow is", text: p("Open yard, or under a slab, shed or A/C pad.") },
        { title: "Prevention work", text: p("[PLACEHOLDER: ask the client: confirm whether you install buried fencing or wire, so this cost factor can stay]") },
      ],
      outro: p("The armadillo inspection is free. We quote the trapping before setting a single trap.", "[PLACEHOLDER: ask the client: can the site show a price range for armadillo removal?]"),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Armadillo removal in 9 counties",
      intro: p("We trap armadillos in all 9 counties, from big Polk County yards to small Pinellas lots."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "armadillo",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Armadillo removal questions",
      items: [
        faq(
          "Can I get leprosy from an armadillo?",
          "It's possible but very unlikely. The CDC says some armadillos naturally carry the bacteria, but the risk is very low and most people who come into contact with armadillos are unlikely to get leprosy. As a simple precaution, wear gloves if you ever have to touch one.",
        ),
        faq(
          "Why is an armadillo digging up my lawn?",
          "It's hunting. Armadillos dig for grubs, earthworms and insect larvae, and FWC says moist soil and lush, fertilized lawns bring those closer to the surface. Water less, water in the morning, and ease off the fertilizer.",
        ),
        faq(
          "Do armadillo repellents work?",
          "UF/IFAS says no chemical repellents or fumigants are registered for armadillos in Florida, and poison baits are illegal and don't work. FWC suggests shining a bright light into the burrow or putting a radio near it, without blocking the exit, to encourage the animal to move on.",
        ),
        faq(
          "Can I trap the armadillo and move it?",
          "Only to land the rules allow. FWC lets a trapped armadillo be released on the property where it was caught, or on 40 contiguous acres or more in the same county with the owner's written permission, and calls relocation seldom biologically sound. Traps must be checked every 24 hours.",
        ),
        faq(
          "Can an armadillo damage my foundation?",
          "UF/IFAS says burrows under driveways and patios can cause structural damage. If a burrow runs under a slab, get the armadillo out and the burrow filled before it settles. Wire laid along the foundation helps stop new digging.",
        ),
        faq(
          "When do armadillos have babies?",
          "UF/IFAS says armadillos breed in summer but don't give birth until spring. FWC adds that a female has identical quadruplets: one egg splits into four young of the same sex.",
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
        { title: "Animals found under the house", href: "/blog/types-of-animals-found-under-the-house/", text: p("Armadillo, opossum or something else under your floor?") },
        { title: "Exclusion vs trapping", href: "/blog/wildlife-exclusion-vs-trapping-differences-for-homeowners/", text: p("When trapping makes sense, and when keeping animals out is better.") },
        { title: "Wildlife-proofing your home", href: "/blog/wildlife-proofing-your-home/", text: p("How to make a yard and house less inviting.") },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Armadillo tearing up the yard?",
      highlight: "the yard?",
      text: p("Call (727) 594-7705. We'll find the burrow and set traps where it walks."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Armadillo Removal in Tampa Bay | Armadillo Trapping | Pro Wildlife Removal",
    description:
      "Armadillo digging up the lawn or burrowing under your patio, driveway or shed? Armadillo trapping and Florida's rules for homeowners in Tampa Bay and 9 counties. Call (727) 594-7705.",
  },
  sources: [
    { title: "FWC: Living with Armadillos flyer, Dec 2025 (naturalized native; several burrows per acre; holes up to a foot across; mostly nocturnal, poor eyesight, eat grubs, spiders, cockroaches; less water and fertilizer, morning irrigation; fence 2 ft high, 18 in deep; fermenting fruit; light or radio at burrow; 68A-9.010; 24-hour checks; release on site or 40+ contiguous acres same county with written permission; removing one doesn't stop others)", url: FLYER },
    { title: "FWC: Armadillo profile (identical quadruplets; relocation seldom biologically sound; public land needs land manager's written permission)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/armadillo/" },
    { title: "UF/IFAS EDIS WEC 76 (UW082): The Nine-Banded Armadillo (burrows under driveways and patios can cause structural damage; foraging holes 1-3 in deep, 3-5 in wide; chicken wire along patio, driveway, foundation; poison baits illegal and ineffective; no repellents or fumigants registered). Note: its line that armadillos are non-native and can't be released is older than FWC's current flyer, which the page follows.", url: "https://ask.ifas.ufl.edu/publication/UW082" },
    { title: "UF/IFAS EDIS WEC411 (UW456): Wildlife of Florida Factsheet, Nine-banded Armadillo (burrows up to 7 ft deep and 20 ft long; about ten burrows; breed in summer, give birth in spring; mostly nocturnal)", url: "https://ask.ifas.ufl.edu/publication/UW456" },
    { title: "UF/IFAS EDIS WEC317 (UW362): Baiting the Nine-Banded Armadillo (very short perceptual distance; trap placement matters more than bait; near burrows, along fences, with guiding boards)", url: "https://ask.ifas.ufl.edu/publication/UW362" },
    { title: "CDC: About leprosy (some armadillos naturally infected; risk very low)", url: "https://www.cdc.gov/leprosy/about/index.html" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "Armadillos: your trap setup and how often traps are checked? Do you install exclusion fencing or wire along foundations? Where are armadillos released?",
    "Can the site show a price range for armadillo removal?",
    "Real photos: a burrow under a slab or shed, a trap set with guide boards, exclusion fencing.",
  ],
};
