import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, table, ul } from "../pt.ts";

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
    image: images.post1776984844429,
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
      _key: "dont",
      eyebrow: "What not to do",
      heading: "Three mistakes that make it worse",
      body: rich(
        ul(
          "**Sealing the hole while the raccoon is inside.** UF/IFAS says chasing a raccoon out and sealing the entry frequently causes even more damage because the raccoon often returns. With kits inside, it also separates the family.",
          "**Moving it yourself.** A trapped raccoon may only be released on the same property, or on at least 40 contiguous acres in the same county with the landowner's written permission. FWC's roundworm guidance says not to relocate raccoons at all.",
          "**Cleaning the latrine bare-handed.** Raccoon droppings can carry roundworm eggs. FWC and the CDC both advise gloves and burning or burying the droppings, or bagging them for the landfill.",
        ),
      ),
      image: images.post1776984844429,
      imageSide: "right",
    },
    {
      _type: "splitSection",
      _key: "cleanup",
      tone: "tint",
      eyebrow: "Attic cleanup",
      heading: "Cleaning up after raccoons",
      body: p(
        "With the raccoons out and the entry rebuilt, the attic needs cleaning. The CDC advises removing raccoon droppings promptly, before the roundworm eggs in them become infectious, so the latrine comes out first.",
      ),
      checklist: [
        "Latrine removed by technicians in protective gear",
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
      text: p("Call (727) 594-7705. We'll check for kits first and plan the removal around them."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Raccoons in the Attic in Tampa Bay: Signs and Next Steps | Pro Wildlife Removal",
    description:
      "Raccoon in the attic? How to tell, why spring means babies, the mistakes that make it worse, Florida's release rules and attic latrine cleanup in Tampa Bay. Call 24/7: (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (active mostly in the evening, leave dens soon after dusk; entry points: torn screens, soffits, open chimneys, broken windows; dog-sized droppings; latrines; births March-April; attics and crawl spaces where cavities are scarce; chasing out and sealing frequently causes more damage; one-way devices without young; urine-soaked cloth for a mother with kits)", url: UW033 },
    { title: "FWC: Raccoon profile (most weigh 8-15 pounds; active late afternoon through the night)", url: "https://myfwc.com/wildlifehabitats/profiles/mammals/land/raccoon/" },
    { title: "FWC: FAQs, nuisance wildlife (release on same property or 40+ contiguous acres in same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "FWC: Raccoon roundworm (do not relocate raccoons; gloves, burn or bury feces)", url: "https://myfwc.com/research/wildlife/health/raccoon-roundworm/" },
    { title: "CDC: About Baylisascaris (remove feces promptly, before eggs become infectious)", url: "https://www.cdc.gov/baylisascaris/about/index.html" },
    { title: "UF/IFAS EDIS ENY-224 (roof rats: under a pound; night activity; half-inch gaps) and FWC squirrel profile (gray squirrel 17-20 inches; active by day)", url: "https://journals.flvc.org/edis/article/view/136514" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
  ],
  clientQuestions: [
    "How do you treat a raccoon latrine and replace insulation, and is it quoted separately?",
    "Real photos: a raccoon-torn soffit, kits in an attic, a rebuilt entry.",
  ],
};
