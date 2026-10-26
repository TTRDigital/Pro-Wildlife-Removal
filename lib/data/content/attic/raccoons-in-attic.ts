import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/*
 * Raccoons in the attic. Target searches: "raccoon in attic", "raccoons in attic Tampa".
 * Links to the raccoon removal service page in the first 150 words and back.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };
const UW033 = "https://ask.ifas.ufl.edu/publication/UW033";

export const raccoonsInAttic: Service = {
  slug: "raccoons-in-attic",
  title: "Raccoons in the Attic",
  group: "attic",
  animal: "raccoon",
  order: 23,
  summary: "A raccoon in the attic: how to tell, why spring means babies, what not to do, and how the latrine gets cleaned.",
  cardImage: images.raccoonRemoval,
  design: "new",
  hero: {
    eyebrow: "RACCOONS IN THE ATTIC",
    heading: "Raccoons in the Attic in Tampa Bay",
    highlight: "Raccoons in the Attic",
    text: p("Heavy steps overhead in the evening, a torn soffit, a smell from one corner. Here's how to confirm a raccoon and why the order of the fix matters."),
    badges: ["Evening thumping", "Spring babies", "Latrine cleanup"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do I know if a raccoon is in my attic?",
      text: p(
        "Heavy thumping from dusk through the night, a torn soffit or vent, and a pile of large droppings in one spot point to a raccoon. In March and April, assume a mother with kits. Don't seal the hole while it's inside. See [raccoon removal](/services/raccoon-removal/) or call (727) 594-7705.",
      ),
      points: ["Heavy evening thumps", "Torn soffit or vent", "Babies in spring", "Don't seal it in"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "What to check",
      heading: "Signs it's a raccoon up there",
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "sunset", title: "Noise from dusk on", text: p("UF/IFAS says raccoons usually leave their dens soon after dusk and stay active until morning, so the attic gets loud in the evening and again near dawn.") },
        { icon: "wrench", title: "A torn way in", text: p("UF/IFAS lists torn screens, soffits, open chimneys and broken windows as common raccoon entry points. Look for bent or ripped material at the roofline.") },
        { icon: "droppings", title: "Dog-sized droppings in one place", text: p("UF/IFAS says raccoon droppings are roughly dog-sized and that raccoons use the same toilet spots, called latrines.") },
        { icon: "sound", title: "Chirping in spring", text: p("UF/IFAS says Florida raccoons are mostly born in March and April. Calls from one spot in the attic in spring usually mean kits.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "sounds",
      eyebrow: "Listen",
      heading: "A raccoon's night, as heard from below",
      variant: "plain",
      columns: 2,
      cards: [
        { title: "Late afternoon to dusk", text: p("FWC says raccoons usually become active in the late afternoon. Heavy steps toward the entry and a scramble at the roofline as one heads out.") },
        { title: "Through the night", text: p("Quieter while the adults are out foraging, unless there are kits in the attic waiting for their mother.") },
        { title: "Toward morning", text: p("UF/IFAS says raccoons stay active until morning. A return trip, more thumping, and settling into the den.") },
        { title: "Spring, any hour", text: p("Chirping, whimpering and chattering from one spot: kits. Most Florida raccoons are born in March and April.") },
      ],
    },
    {
      _type: "proseSection",
      _key: "compare",
      tone: "tint",
      eyebrow: "Raccoon or something else?",
      heading: "Raccoon, rat or squirrel?",
      body: rich(
        table(
          ["", "Raccoon", "Roof rat", "Gray squirrel"],
          ["When", "Dusk through the night", "Night, most in the first half", "Daytime"],
          ["Sound", "Heavy steps and thumps", "Light scratching and scurrying", "Running and scratching"],
          ["Size", "8 to 15 pounds", "Under a pound", "17 to 20 inches long, tail included"],
          ["Way in", "Torn soffit, vent, chimney", "Gaps as small as 1/2 inch", "Damaged soffits, vents, roof tiles"],
        ),
        p("Light scratching at night is more likely [rats in the attic](/services/rats-in-attic/). Daytime running is more likely [squirrels](/services/squirrels-in-attic/)."),
      ),
    },
    {
      _type: "splitSection",
      _key: "damage",
      tone: "tint",
      eyebrow: "What they do up there",
      heading: "What a raccoon does to an attic",
      body: rich(
        ul(
          "**The way in.** UF/IFAS lists torn screens, soffits and open chimneys among common raccoon entries. A hole a raccoon made lets rain into the roof and other animals into the attic.",
          "**Insulation.** An 8 to 15 pound animal walking, nesting and raising young crushes insulation flat and soils it, which cuts how well it keeps the heat out.",
          "**The latrine.** Raccoons go in the same spot again and again. FWC says raccoon roundworm appears widespread in Florida at low levels, and the CDC says people can be infected by swallowing the eggs by accident.",
          "**Rabies.** Florida's Department of Health names raccoons as one of the two main wildlife sources of rabies in the state. UF/IFAS puts exposure in wild raccoons at fewer than 1 in 200. Never corner one.",
        ),
      ),
      image: images.raccoonRemoval,
      imageSide: "right",
    },
    {
      _type: "splitSection",
      _key: "dont",
      eyebrow: "What not to do",
      heading: "Three mistakes that make it worse",
      body: rich(
        ul(
          "**Sealing the hole while the raccoon is inside.** UF/IFAS says chasing a raccoon out and sealing the entry frequently causes even more damage because the raccoon often returns. With kits inside, it also separates the family.",
          "**Moving it yourself.** A trapped raccoon may only be released on the same property, or on at least 40 contiguous acres in the same county with the landowner's written permission. FWC's roundworm guidance says not to relocate raccoons at all.",
          TRAP_RULES_2026,
          "**Cleaning the latrine bare-handed.** Raccoon droppings can carry roundworm eggs. FWC advises gloves. FWC and the CDC both say to burn or bury the droppings, and the CDC adds sending them to a landfill.",
        ),
      ),
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "urgent",
      eyebrow: "When it can't wait",
      heading: "Call right away if",
      variant: "icon",
      columns: 3,
      cards: [
        { icon: "critter", title: "A raccoon is in the living space", text: p("Get people and pets out of the room, close the door and open an outside door if it's safe. Don't try to corner it.") },
        { icon: "sound", title: "Kits are crying", text: p("Kits crying with no sign of their mother need help fast. Don't climb up to handle them yourself.") },
        { icon: "odor", title: "A smell from one spot", text: p("A strong smell from one area can be the latrine, or an animal that died in the attic. Either way, it needs to come out.") },
      ],
    },
    {
      _type: "cardsSection",
      _key: "timeline",
      tone: "tint",
      eyebrow: "What it usually takes",
      heading: "How a raccoon-in-the-attic job runs",
      variant: "numbered",
      columns: 4,
      cards: [
        { number: "1", title: "Inspect for kits", text: p("Find the entry, the den and whether young are there before anything else.") },
        { number: "2", title: "Get the family out", text: p("Adults and young removed together, by the method that fits the house and the season.", "[PLACEHOLDER: ask the client: confirm how you remove a raccoon family]") },
        { number: "3", title: "Rebuild the entry", text: p("The torn soffit, vent or roof edge is rebuilt stronger, and the chimney capped if needed.") },
        { number: "4", title: "Clean the attic", text: p("Latrine first, then soiled insulation, then treatment and new insulation.", "[PLACEHOLDER: ask the client: how long a typical raccoon job takes, start to finish]") },
      ],
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "Attic cleanup",
      heading: "Cleaning up after raccoons",
      body: p(
        "With the raccoons out and the entry rebuilt, the attic needs cleaning. The CDC says raccoon roundworm eggs aren't infectious the moment they're passed, and advises removing droppings promptly, before they become infectious. So the latrine comes out first. FWC's advice for a latrine is gloves, and burning or burying the droppings. In an attic, that means bagging the droppings and the soiled insulation around them, treating the area, and only then putting in new insulation.",
      ),
      checklist: [
        "Latrine removed first [PLACEHOLDER: ask the client: confirm your protective gear and latrine cleanup method]",
        "Crushed and soiled insulation bagged and taken out",
        "Attic treated and deodorized",
        "Insulation replaced where it had to go",
        "Entry hole rebuilt, and the chimney capped if they used it",
        "[PLACEHOLDER: ask the client: how you treat a raccoon latrine and replace insulation, and whether it's quoted separately]",
      ],
      image: images.raccoonRemoval,
      imageSide: "left",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Raccoons in the attic: common questions",
      items: [
        faq(
          "Why is a raccoon in my attic?",
          "UF/IFAS says raccoons usually den in hollow trees, and where cavities are scarce they use attics and crawl spaces. They get in where an entry point hasn't been kept up or repaired.",
        ),
        faq(
          "Will the raccoon leave on its own?",
          "Sometimes, but a mother with kits stays until they're older, and UF/IFAS notes a raccoon often comes back to a den it knows. Get it out properly and close the way in.",
        ),
        faq(
          "Can I scare it out?",
          "UF/IFAS describes one-way devices for raccoons without young, and for a mother with kits, putting cloth soaked in male raccoon or predator urine near the den so she moves them. These need the family out before anything is sealed. If you're unsure, call us.",
        ),
        faq(
          "The mother is gone and the babies are still up there. What now?",
          "Don't seal anything, and don't handle the kits yourself. Call us. Young left alone in an attic need to be found and taken care of quickly and carefully.",
        ),
        faq(
          "Can I clean up the raccoon droppings myself?",
          "In a yard, FWC and the CDC advise gloves, prompt removal, and burning or burying the droppings or bagging them for the landfill, then washing your hands. In an attic, with insulation and tight spaces, it's safer to have it done.",
        ),
        faq(
          "How do I keep raccoons out of the attic?",
          "Rebuild the entry with strong materials, cap the chimney and keep branches off the roof. Don't put out food or garbage in a way that draws them: Florida rule 68A-4.001 bans doing that when it creates a nuisance. See [raccoon removal](/services/raccoon-removal/).",
        ),
        faq(
          "Is a raccoon in the attic dangerous?",
          "Raccoons usually avoid people, but they bite when cornered, and Florida's Department of Health names raccoons as a main wildlife source of rabies. Don't go up into the attic to look for it.",
        ),
      ],
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      eyebrow: "Reviews",
      heading: "What customers say",
      match: "raccoon",
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "More on raccoons in homes",
      limit: 3,
      match: "raccoon",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Something big in the attic?",
      highlight: "in the attic?",
      text: p("Call (727) 594-7705. In spring, ask about kits when you call."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Raccoons in the Attic: Next Steps | Pro Wildlife Removal",
    description:
      "Raccoon in the attic? How to tell, why spring means babies, mistakes that make it worse, Florida's release rules and latrine cleanup. Call (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (active mostly in the evening, leave dens soon after dusk; entry points: torn screens, soffits, open chimneys, broken windows; dog-sized droppings; latrines; births March-April; attics and crawl spaces where cavities are scarce; chasing out and sealing frequently causes more damage; one-way devices without young; urine-soaked cloth for a mother with kits)", url: UW033 },
    { title: "FWC: Raccoon profile (most weigh 8-15 pounds; active late afternoon through the night)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/raccoon/" },
    { title: "FWC: FAQs, nuisance wildlife (release on same property or 40+ contiguous acres in same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "FWC: Raccoon roundworm (do not relocate raccoons; gloves, burn or bury feces)", url: "https://myfwc.com/research/wildlife/health/raccoon-roundworm/" },
    { title: "CDC: About Baylisascaris (remove feces promptly, before eggs become infectious)", url: "https://www.cdc.gov/baylisascaris/about/index.html" },
    { title: "UF/IFAS EDIS ENY-224 (roof rats: under a pound; night activity; half-inch gaps) and FWC squirrel profile (gray squirrel 17-20 inches; active by day)", url: "https://journals.flvc.org/edis/article/view/136514" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
    { title: "FWC: Detriments to feeding wildlife (68A-4.001)", url: "https://myfwc.com/conservation/you-conserve/wildlife/feeding/" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "How do you remove a raccoon family, and what protective gear and latrine cleanup method do you use?",
    "How long does a typical raccoon job take, start to finish?",
    "How do you treat a raccoon latrine and replace insulation, and is it quoted separately?",
    "Real photos: a raccoon-torn soffit, kits in an attic, a rebuilt entry.",
  ],
};
