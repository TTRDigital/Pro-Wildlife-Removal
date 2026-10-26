import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";

/*
 * Bee removal. Target searches: "bee removal Tampa", "honey bee removal Hillsborough".
 * Replaces today's three bee pages (bee-removal, bee-control, bee-removal-tampa).
 * IMPORTANT: Florida rules decide who may remove honey bees alive (a registered beekeeper)
 * and who may kill them (a licensed pest control operator). How the client does bee jobs
 * is a client question; the method text stays a placeholder until they answer.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const IN1205 = "https://ask.ifas.ufl.edu/publication/IN1205";
const IN741 = "https://ask.ifas.ufl.edu/publication/in741";
const IN778 = "https://ask.ifas.ufl.edu/publication/in778";
const NESTING = "https://gardeningsolutions.ifas.ufl.edu/design/gardening-with-wildlife/nesting-bees/";

export const beeRemoval: Service = {
  slug: "bee-removal",
  title: "Bee Removal",
  group: "removal",
  animal: "bee",
  order: 8,
  summary: "Honey bees in a wall, soffit, shed or meter box: what Florida law allows, why the comb matters, and what to do until help arrives.",
  cardImage: images.beeRemoval,
  design: "new",
  hero: {
    eyebrow: "BEE REMOVAL",
    heading: "Bee Removal in Tampa Bay",
    highlight: "Bee Removal",
    text: p("Bees going in and out of a wall, soffit or shed? Keep people and pets back, leave the opening alone, and call."),
    image: images.beeRemoval,
    badges: ["Walls, soffits and sheds", "Don't seal the hole"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "What should I do about bees in my wall in Florida?",
      text: p(
        "Don't spray them and don't seal the hole: blocking it drives the bees deeper into the house. In Florida, a colony should be removed alive by a registered beekeeper or eradicated by a licensed pest control operator, and the comb taken out. Keep people and pets away and call (727) 594-7705.",
      ),
      points: ["Don't seal the hole", "Don't spray", "Comb must come out", "Swarms move on"],
    },
    {
      _type: "cardsSection",
      _key: "types",
      eyebrow: "Which bee is it?",
      heading: "The bees you're most likely to find at home",
      intro: p("Not every bee around the house is a problem, and each kind nests differently. Look from a safe distance before you do anything."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "bug", title: "Honey bees", text: p("Live in large colonies inside cavities: walls, soffits, sheds, water meters. In Tampa Bay these can be European, African or a mix, and a colony in a structure needs a professional.") },
        { icon: "wrench", title: "Carpenter bees", text: p("Look like bumble bees but have a shiny, greenish-black abdomen. UF/IFAS says they drill clean, half-inch holes into trim, railings and siding and tunnel 3 to 6 inches into the wood.") },
        { icon: "leaf", title: "Bumble bees", text: p("Fuzzy all over. UF/IFAS says Florida's five species nest at or below ground, often in old rodent burrows, dense grass or crevices by a foundation, and the colony dies off by early winter.") },
      ],
      outro: p("[PLACEHOLDER: ask the client: which stinging insects you handle (honey bees, carpenter bees, bumble bees, wasps or yellow jackets)]"),
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Swarm or colony? How to tell",
      intro: p("UF/IFAS draws a clear line between the two, and it changes what needs to happen."),
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "critter", title: "A swarm: a ball of bees in the open", text: p("A cluster hanging on a branch, fence or eave. UF/IFAS says swarms are temporary, staying a few hours to a few days, and are usually calm because they have no nest to defend.") },
        { icon: "home", title: "A colony: bees flying in and out of a hole", text: p("A steady line of bees going into a gap in a wall, soffit, roof edge or shed. That means comb, honey and young inside, and bees that will defend them.") },
        { icon: "sound", title: "Humming in a wall", text: p("A buzz you can hear through drywall, or a warm spot on an inside wall, can mean comb behind it.") },
        { icon: "drop", title: "Stains or honey seeping", text: p("Dark stains or sticky honey on a wall or ceiling. UF/IFAS notes comb left in a wall can melt into the structure and stain it.") },
        { icon: "search", title: "Bees in odd places", text: p("UF/IFAS lists water meters, gutter downspouts, pipes, holes in siding, cinderblocks, under sheds and under playground equipment as common nest sites.") },
        { icon: "sunset", title: "Comb in a cluster", text: p("If a cluster in the open is building wax comb, UF/IFAS warns it's the start of a colony, not a passing swarm.") },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why Florida bee colonies need care",
      body: rich(
        p(
          "Honey bees matter, and a swarm passing through is usually better left alone. A colony living in your house or next to where people walk is different, especially in Tampa Bay.",
        ),
        ul(
          "**African honey bees are here.** UF/IFAS says African bees were first documented in Florida in 2001 near the Port of Tampa and have spread through the southern half of the state, mixing with European honey bees.",
          "**They defend hard.** UF/IFAS says an African colony may send out hundreds or thousands of bees in response to a disturbance and chase an intruder 400 yards or more.",
          "**Sealing the hole backfires.** UF/IFAS warns that closing an active opening forces bees further into the wall and possibly into the living space.",
          "**Comb left behind causes damage.** Honey, wax and dead brood left in a wall can melt, stain, smell and draw wax moths, beetles and other pests, according to UF/IFAS.",
        ),
      ),
      image: images.beeRemoval,
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "found-nest",
      eyebrow: "Found a nest?",
      heading: "What to do when you find bees",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Back away", text: p("Move people and pets away from the area. UF/IFAS says untrained people should never disturb a colony.") },
        { number: "2", title: "Watch from a distance", text: p("Note where the bees go in and out, and whether it's a loose cluster in the open or a steady stream into a hole.") },
        { number: "3", title: "Don't spray or plug it", text: p("Spraying or blocking the entrance can push the colony deeper into the wall. Leave the opening alone.") },
        { number: "4", title: "Call for removal", text: p("Tell us where the bees are, how high, and whether anyone has been stung.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How bee jobs work",
      heading: "From the first call to a sealed wall",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Look and listen", text: p("We find where the bees go in, whether it's a swarm or a colony, and where the comb sits. In a wall, that can mean feeling for warmth and listening for the hum, as UF/IFAS describes.") },
        { number: "2", title: "Agree the plan with you", text: p("Live removal or eradication, how the wall or soffit will be opened, and how it gets closed again, all settled before work starts.", "[PLACEHOLDER: ask the client: how you handle bees (live removal by a registered beekeeper, eradication, or both) and who does the work; this decides what the page can say]") },
        { number: "3", title: "The colony and the comb", text: p("UF/IFAS says a job isn't finished until the entire nest is out: bees, comb, honey and brood. Leaving it in the wall invites the next problem.", "[PLACEHOLDER: ask the client: who removes the colony and comb, and how]") },
        { number: "4", title: "Bee-proof the gap", text: p("Once the cavity is empty, UF/IFAS advises sealing the opening so a new swarm can't move into the same space.", "[PLACEHOLDER: ask the client: do you seal and repair the opening after a bee job?]") },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "Who can remove bees in Florida",
      body: rich(
        ul(
          "**Live removal by a registered beekeeper.** A beekeeper registered with the Florida Department of Agriculture and Consumer Services (FDACS) may remove and relocate bees alive without a pest control license (Rule 5E-14.151, F.A.C.). UF/IFAS lists a registered beekeeper or a trained pest control operator for live removal.",
          "**Everything else is pest control.** Anyone else removing bees, and anyone killing them, is doing pest control, which needs a licensed pest control company (Chapter 482, Florida Statutes).",
          "**The property owner is responsible.** UF/IFAS says dealing with an unwanted swarm or colony is up to the owner of the property.",
          "**Neither is required to kill or save.** There's no Florida law that forces either a live removal or an eradication. Colonies that are defensive, near people or animals, or have stung someone may be better eradicated, UF/IFAS says.",
        ),
        p(
          "The Florida Department of Agriculture keeps a county-by-county Bee Removal or Eradication List. Read UF/IFAS's [Living with the African Honey Bee](" + IN1205 + ") and [Nesting Bees and What You Should Do](" + NESTING + ").",
        ),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Bee-proofing",
      heading: "Keeping the next swarm out",
      body: p(
        "UF/IFAS says Florida's swarm season runs from March to July, when swarms are out looking for a cavity with a small opening. These are the fixes it recommends.",
      ),
      checklist: [
        "Gaps of 1/8 inch or more caulked with 100% silicone",
        "Vents, drains, downspouts and plumbing covered with 1/8-inch hardware cloth or insect screen",
        "Water meter covers and holes in siding closed",
        "Old comb removed so it can't melt or draw pests",
        "A weekly look around the house from March to July",
        "[PLACEHOLDER: ask the client: do you repair the wall or soffit you open, or does the owner arrange the repair?]",
      ],
      image: images.beeRemoval,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What bee removal costs depends on",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Swarm or colony", text: p("A swarm in a tree is a short job. A colony in a wall means finding and removing comb.") },
        { title: "Where the comb is", text: p("A shed or meter box, or high in a soffit or deep inside a wall.") },
        { title: "Opening and closing", text: p("Cutting into drywall, soffit or siding, and closing it again.") },
        { title: "Size of the colony", text: p("An established colony can fill a wall cavity with comb.") },
      ],
      outro: p("[PLACEHOLDER: ask the client: can the site show a price range for bee removal?]"),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Bee removal in 9 counties",
      intro: p("African honey bees were first documented in Florida in 2001 near the Port of Tampa. We take bee calls across the bay area and the counties around it."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "bee",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Bee removal questions",
      items: [
        faq(
          "There's a swarm of bees on my tree. Will it leave?",
          "Often, yes. UF/IFAS says swarms are temporary and stay a few hours to a few days, and they're usually calm. Keep people and pets away and don't disturb it. If it starts building comb or is still there after a few days, it's becoming a colony: call us.",
        ),
        faq(
          "Can I spray the bees myself?",
          "UF/IFAS says untrained people should never disturb a colony. Killing a colony counts as pest control in Florida and has to be done by a licensed pest control operator. Leave it to a professional.",
        ),
        faq(
          "Can I just seal the hole the bees use?",
          "No. UF/IFAS warns that sealing an active opening forces the bees further into the wall and possibly into your home. The colony and comb have to come out first.",
        ),
        faq(
          "What do I do if bees attack?",
          "UF/IFAS says run in a straight line to shelter, cover your face as you go, and get inside a house, shed or car. Don't jump into water, don't hide in bushes and don't swat. Call 911 if someone is being attacked. Pull stingers out as fast as you can: the method doesn't matter.",
        ),
        faq(
          "Are the bees at my house African honey bees?",
          "Assume they could be. UF/IFAS says African bees have been in Florida since 2001 and hybridize with European honey bees, and the hybrids show an unpredictable mix of both kinds of behavior. Treat any colony in Tampa Bay with care.",
        ),
        faq(
          "Why does the honeycomb have to come out?",
          "UF/IFAS says comb left in a wall can melt and stain it, the honey ferments and the brood rots, and wax moths and beetles move in. Removing the whole nest is part of the job.",
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
        { title: "Living with the African honey bee", href: IN1205, text: p("UF/IFAS's guide to African bees in Florida.") },
        { title: "Bee-proofing for Florida homes", href: IN741, text: p("UF/IFAS's checklist for closing the gaps bees use.") },
        { title: "Common wildlife entry points", href: "/blog/common-wildlife-entry-points/", text: p("Where animals and insects get into homes.") },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Bees in a wall or soffit?",
      highlight: "wall or soffit?",
      text: p("Keep everyone back and call (727) 594-7705."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Bee Removal in Tampa Bay | Pro Wildlife Removal",
    description:
      "Honey bees in a wall, soffit or shed? What Florida law allows, why the comb must come out and what to do until help arrives in Tampa Bay. (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS EDIS ENY-170 (IN1205): Living with the African Honey Bee (first found 2001 near the Port of Tampa; spread through southern half of Florida; hundreds or thousands of defenders, chase 400+ yards; nest sites; attack advice; who removes colonies; owner responsible; beekeepers can't use pesticides)", url: IN1205 },
    { title: "UF/IFAS EDIS ENY-143 (IN741): Bee-Proofing for Florida Citizens (1/8-inch gaps, silicone, 1/8-inch hardware cloth; nest sites; don't seal an active opening; swarm season March to July)", url: IN741 },
    { title: "UF/IFAS EDIS ENY-145 (IN778): Eradication of Swarms and Colonies for Pest Control Operators (comb melts and stains; brood and honey attract pests and smell; not complete until the entire nest is removed; swarm vs colony; locating comb)", url: IN778 },
    { title: "UF/IFAS Gardening Solutions: Nesting Bees and What You Should Do (swarms stay a few hours to a few days; registered beekeepers remove alive without pest control devices; eradication by licensed PCO; FDACS Bee Removal or Eradication List; defensive colonies may be better eradicated)", url: NESTING },
    { title: "UF/IFAS EDIS ENY-266 (IG119): Powderpost Beetles and Other Wood-Infesting Insects (carpenter bees resemble bumble bees, shiny metallic abdomen, 1/2-inch drilled holes, tunnels 3-6 inches in weather boarding, railings, trim; replace infested wood)", url: "https://ask.ifas.ufl.edu/publication/IG119" },
    { title: "UF/IFAS EDIS EENY-050 (IN207): Bumble Bees of Florida (five species nest at or below ground; old rodent burrows, crevices by foundations, dense grass; colony cycle late winter to early winter)", url: "https://ask.ifas.ufl.edu/publication/IN207" },
    { title: "UF/IFAS EDIS ENY-145 (IN778): registered beekeepers remove colonies alive under Rule 5E-14.151, F.A.C.; eradication by a licensed PCO", url: "https://ask.ifas.ufl.edu/publication/in778" },
    { title: "Florida Statutes Chapter 482, Structural Pest Control Act (482.071: unlawful to operate an unlicensed pest control business; 482.021 defines pests to include arthropods)", url: "https://www.flsenate.gov/Laws/Statutes/2025/Chapter482/All" },
  ],
  clientQuestions: [
    "Who removes the bee colony and comb, and how? Do you seal and repair the opening after a bee job?",
    "Which stinging insects do you handle: honey bees, carpenter bees, bumble bees, wasps or yellow jackets?",
    "IMPORTANT: How do you handle bees? Live removal (by a registered beekeeper on staff or a partner), eradication (by a licensed pest control operator), or both? Florida's beekeeping and pest control rules decide who may do which. The page can't describe your method until we know, and per the brief it won't show license details either way.",
    "Do you repair the wall or soffit you open, or does the homeowner arrange it?",
    "Can the site show a price range for bee removal?",
    "Real photos: comb removed from a wall or soffit, a sealed entry.",
  ],
};
