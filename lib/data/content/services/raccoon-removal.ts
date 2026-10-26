import { images } from "../../images.ts";
import type { Service } from "../../../types";
import { faq, p, rich, ul } from "../pt.ts";
import { countyGroups } from "../areas.ts";
import { TRAP_RULES_2026, TRAP_RULES_SOURCE } from "../notes.ts";

/*
 * Raccoon removal. Target search: "raccoon removal Tampa" (position 11 today).
 * Replaces today's three raccoon pages (raccoon-removal, raccoon-control,
 * raccoon-removal-tampa); Wade decides which URLs redirect here.
 */

const CALL = { label: "Call (727) 594-7705", href: "tel:+17275947705" };

export const raccoonRemoval: Service = {
  slug: "raccoon-removal",
  title: "Raccoon Removal",
  group: "removal",
  animal: "raccoon",
  order: 3,
  summary: "Raccoons out of the attic, soffit or crawl space, mothers and young kept together, then the entry sealed.",
  cardImage: images.raccoonRemoval,
  design: "new",
  hero: {
    eyebrow: "RACCOON REMOVAL",
    heading: "Raccoon Removal in Central Florida",
    highlight: "Raccoon Removal",
    text: p("Thumping in the attic or a torn soffit? We get the raccoons out, babies included, and seal the way in."),
    image: images.raccoonRemoval,
    badges: ["Babies checked for first", "Entry sealed"],
  },
  sections: [
    {
      _type: "answerSection",
      _key: "answer",
      heading: "How do you get a raccoon out of the attic in Florida?",
      text: p(
        "Find out whether there are babies, remove the raccoons by live trap, one-way door or by hand, keeping mother and young together, then seal the entry. In spring, assume a mother with kits. A trapped raccoon may only be released on site or on 40+ contiguous acres in the same county with written permission. Call (727) 594-7705.",
      ),
      points: ["Check for babies", "Births March to April", "Strict release rules", "Entry sealed"],
    },
    {
      _type: "cardsSection",
      _key: "signs",
      eyebrow: "Signs",
      heading: "Signs you have raccoons",
      intro: p("Raccoons are big, strong and not subtle. If one is living in your house, you'll usually know. More on [raccoons in the attic](/services/raccoons-in-attic/)."),
      variant: "icon",
      columns: 3,
      cards: [
        {
          icon: "sound",
          title: "Heavy thumping overhead",
          text: p("Raccoons are far heavier than rats, and it shows: slow, heavy steps and thumps rather than a light scurry. In spring, listen for the calls of kits too."),
        },
        {
          icon: "wrench",
          title: "A torn soffit or roof vent",
          text: p("UF/IFAS says raccoons get into attics where an entry point isn't maintained or repaired. A rotted or loose soffit, a damaged roof vent or a gap at the roof edge with bent or torn material around it is a strong clue."),
        },
        {
          icon: "home",
          title: "Something living in the chimney",
          text: p("UF/IFAS lists open chimneys among the common ways raccoons get into a house. Scratching and calling from the fireplace in spring often means a den with young."),
        },
        {
          icon: "droppings",
          title: "A pile of droppings in one spot",
          text: p("Raccoons share toilet spots called latrines. FWC says in suburbs they turn up under trees, in sandboxes and on decks and patios. Droppings piled together in one place point to raccoons."),
        },
        {
          icon: "critter",
          title: "Raided trash and pet food",
          text: p("Knocked-over garbage cans and empty pet bowls in the morning mean raccoons are feeding nearby, and a den is often close."),
        },
        {
          icon: "search",
          title: "Under the house or deck",
          text: p("UF/IFAS notes raccoons also move in under mobile homes and decks. Look for gaps in the skirting and lattice."),
        },
      ],
    },
    {
      _type: "splitSection",
      _key: "risks",
      tone: "tint",
      eyebrow: "Why it matters",
      heading: "Why raccoons in the house need to go",
      body: rich(
        p("Raccoons aren't out to hurt anyone, but an attic den brings real problems."),
        ul(
          "**Rabies.** Along with bats, raccoons are one of the two main wildlife carriers of rabies in Florida, according to the state Department of Health. UF/IFAS puts the share of wild raccoons exposed to rabies at fewer than 1 in 200: low, but not a risk to ignore. Never corner or handle one.",
          "**Raccoon roundworm.** The CDC says people can be infected by swallowing the parasite's eggs from raccoon droppings, usually by accident, and that most cases are in children. FWC says the roundworm appears widespread in Florida but at low levels. Infections are rare and can be severe.",
          "**Damage.** Torn soffits, vents and roof edges, crushed and soiled insulation, and rain getting in through the hole they made.",
        ),
      ),
      imageSide: "right",
    },
    {
      _type: "cardsSection",
      _key: "process",
      eyebrow: "How we remove raccoons",
      heading: "Our raccoon removal process",
      intro: p("Most raccoons in Florida are born in March and April, according to UF/IFAS. From late winter into summer, the first question on any raccoon job is: are there babies?"),
      variant: "numbered",
      columns: 4,
      cards: [
        {
          number: "1",
          title: "Inspect and look for kits",
          text: p("We find the entry hole, any other weak spots, and the den. If there are young, we locate them before anything else happens. Wildlife agencies warn against sealing an entry while young are inside, because they'd be cut off from their mother."),
        },
        {
          number: "2",
          title: "Remove the family together",
          text: p(
            "Depending on the house and the season, the adult is caught in a live trap checked at least every 24 hours, or leaves through a one-way door. Kits are taken out by hand so mother and young stay together.",
            "[PLACEHOLDER: ask the client: confirm how you handle a mother with kits (reuniting, use of a heated box, etc.)]",
          ),
        },
        {
          number: "3",
          title: "Follow the release rules",
          text: p(
            "Florida allows three outcomes for a trapped raccoon: release on the property where it was caught, release on at least 40 contiguous acres in the same county with the landowner's written permission, or humane euthanasia. FWC's roundworm guidance also says not to relocate raccoons.",
            "[PLACEHOLDER: ask the client: what you do with trapped raccoons (release on site, release on permitted land, or euthanasia)]",
          ),
        },
        {
          number: "4",
          title: "Seal the way in",
          text: p("The entry hole is sealed with materials a raccoon can't pull apart, and other weak spots are closed. We show you any latrine or soiled insulation we found."),
        },
      ],
    },
    {
      _type: "proseSection",
      _key: "rules",
      tone: "tint",
      eyebrow: "Florida rules",
      heading: "Florida's raccoon rules, in plain words",
      body: rich(
        ul(
          "**A trap can't sit for days.** Florida requires every trap to be inspected at least once every 24 hours, and an animal caught alive has to be released legally or humanely put down within 24 hours of capture or inspection.",
          "**Three legal outcomes, and only three.** Under Florida's nuisance wildlife rule (68A-9.010), a trapped raccoon may be released on the same property, released on at least 40 contiguous acres in the same county with the landowner's written permission, or humanely put down.",
          "**No park drop-offs.** Letting a raccoon go in a park, or on any land without the owner's written permission, is illegal. FWC's roundworm page goes further and says not to relocate raccoons at all.",
          TRAP_RULES_2026,
          "**Don't feed them.** Florida rule 68A-4.001 bans putting out food or garbage in a way that attracts raccoons and creates, or is likely to create, a public nuisance. Pet food left out at night draws raccoons in.",
        ),
        p(
          "FWC's [nuisance wildlife FAQs](https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/) cover the trapping rules in full. For the season, read [raccoon mating season in Florida](/blog/raccoon-mating-season-in-florida/).",
        ),
      ),
    },
    {
      _type: "splitSection",
      _key: "sealing",
      eyebrow: "Sealing",
      heading: "Closing what the raccoons opened",
      body: p(
        "Purdue Extension notes a raccoon will likely try to get back into a den it knows. The hole it made, and the soft spots next to it, have to be closed with material it can't tear open. If the soffit or vent itself is broken, the owner arranges that repair with a contractor. Raccoons also leave droppings where they den, and the CDC advises removing raccoon droppings promptly, before the roundworm eggs in them become infectious.",
      ),
      checklist: [
        "Entry hole sealed and reinforced",
        "Other weak soffits, vents and roof edges closed",
        "Chimney capped where raccoons used it",
        "Latrine, nesting and soiled insulation pointed out in the inspection",
        "[PLACEHOLDER: ask the client: is there a warranty on raccoon sealing work, and how long?]",
      ],
      image: images.raccoonRemoval,
      imageSide: "left",
    },
    {
      _type: "cardsSection",
      _key: "cost",
      tone: "tint",
      eyebrow: "Cost",
      heading: "What raccoon removal costs depends on",
      intro: p(
        "We quote after seeing the house. A raccoon under a deck is a smaller job than a mother and four kits in a second-story attic. For damage the owner may need a contractor to repair, see [raccoon roof damage and cleanup costs](/blog/raccoon-roof-damage-complete-cleanup-costs/).",
      ),
      variant: "plain",
      columns: 2,
      cards: [
        { title: "How many raccoons, and whether there are kits", text: p("Kits mean finding and removing them by hand.") },
        { title: "Where they are", text: p("An attic, a chimney, a wall, a crawl space or under a deck.") },
        { title: "Sealing the entry", text: p("How many openings need closing, and how big they are.") },
        { title: "Den size", text: p("A small den under a deck, or an attic the family has used for months.") },
      ],
      outro: p("Inspecting for a raccoon costs nothing. You get the price for your home before we start."),
    },
    {
      _type: "areasSection",
      _key: "areas",
      eyebrow: "Areas served",
      heading: "Raccoon removal across Central Florida",
      intro: p("Tampa, St. Petersburg, Clearwater and every town on the list below, in 8 counties. One number covers them all: (727) 594-7705."),
      groups: countyGroups,
    },
    {
      _type: "reviewsSection",
      _key: "reviews",
      match: "raccoon",
      eyebrow: "Reviews",
      heading: "What customers say",
    },
    {
      _type: "faqSection",
      _key: "faq",
      eyebrow: "FAQ",
      heading: "Raccoon removal questions",
      items: [
        faq(
          "Do I need a raccoon exterminator?",
          "No. A raccoon in the attic is a wildlife job, not an exterminator's. It's removed under FWC's rules, babies included, and the hole it used is sealed. That's the work we do, with no spraying involved.",
        ),
        faq(
          "When do raccoons have babies in Florida?",
          "UF/IFAS says births in Florida generally happen in March and April, with an average litter of 3 to 4 young and as many as 7. That's why spring is the busiest time for raccoons in attics.",
        ),
        faq(
          "Can I trap the raccoon and take it somewhere else?",
          "Not just anywhere. Florida allows release on the property where it was caught, or on at least 40 contiguous acres in the same county with the landowner's written permission. Releasing it anywhere else, like a park, is illegal, and a set trap has to be checked at least once every 24 hours.",
        ),
        faq(
          "Why not just close the hole while the raccoon is out at night?",
          "If there are kits inside, they're cut off from their mother. Even without kits, Purdue Extension notes a raccoon will likely try to get back into an attic it treats as its den, and you have to be absolutely sure it's out before you close anything. Check first.",
        ),
        faq(
          "Are raccoons dangerous?",
          "They usually avoid people, but they're wild animals that bite and scratch when cornered. Raccoons are one of the main wildlife sources of rabies in Florida, and their droppings can carry roundworm. Keep pets and children away and let us handle it.",
        ),
        faq(
          "How do I clean up raccoon droppings in my yard?",
          "FWC and the CDC both advise wearing gloves, removing the droppings promptly and burning or burying them, or bagging them for the landfill. The CDC suggests boiling water or a propane flame-gun on decks and patios. Wash your hands afterwards. For an attic latrine, call us.",
        ),
        faq(
          "How do I keep raccoons from coming back?",
          "Close the entry with strong materials, cap the chimney, trim branches back from the roof, and don't leave pet food or unsecured trash out at night. Florida law prohibits placing food in a way that attracts raccoons. See [what to do about raccoons](/blog/what-to-do-about-raccoons/).",
        ),
        faq(
          "Can you come out at night for a raccoon in the house?",
          "Same-day visits are often available for a raccoon loose in the house. If it's inside the living space, tell us when you call.",
          "[PLACEHOLDER: ask the client: night and weekend response for a raccoon loose in the living space]",
        ),
      ],
    },
    {
      _type: "postsSection",
      _key: "related",
      eyebrow: "Read more",
      heading: "Raccoon guides",
      limit: 3,
      match: "raccoon",
    },
    {
      _type: "ctaSection",
      _key: "cta",
      heading: "Raccoon in the attic?",
      highlight: "attic?",
      text: p("Call (727) 594-7705. We'll check for babies before anything else."),
      ctas: [CALL],
    },
  ],
  seo: {
    title: "Raccoon Removal in Central Florida | Pro Wildlife Removal",
    description:
      "Raccoon in the attic or soffit? Humane removal with mother and young kept together, plus every entry sealed, anywhere in Central Florida. (727) 594-7705.",
  },
  sources: [
    { title: "UF/IFAS EDIS WEC-34 (UW033): Northern Raccoon (births in Florida generally March and April; litters 3-4, up to 7; dens in attics, crawl spaces, under mobile homes and decks; open chimneys are common entry points; fewer than 1 in 200 wild raccoons exposed to rabies)", url: "https://ask.ifas.ufl.edu/publication/UW033" },
    { title: "FWC: FAQs, nuisance wildlife (24-hour trap checks; release or euthanize within 24 hours; release on same property or 40+ contiguous acres in same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
    { title: "FWC: Furbearers (transporting live wild-caught raccoons within, into or from the state requires FWC authorization)", url: "https://myfwc.com/hunting/furbearers/" },
    { title: "FWC: Detriments to feeding wildlife (68A-4.001 prohibits placing food in a manner that attracts raccoons)", url: "https://myfwc.com/conservation/you-conserve/wildlife/feeding/" },
    { title: "FWC: Raccoon roundworm (widespread but low prevalence in Florida; latrines; gloves, burn or bury feces)", url: "https://myfwc.com/research/wildlife/health/raccoon-roundworm/" },
    { title: "CDC: About Baylisascaris (eggs swallowed by accident; most cases in children; remove feces promptly; boiling water or flame-gun on decks)", url: "https://www.cdc.gov/baylisascaris/about/index.html" },
    { title: "Florida Department of Health: Rabies (raccoons and bats are the main wildlife sources)", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/index.html" },
    { title: "Purdue Extension: How do I properly relocate raccoons from my attic? (be absolutely sure the raccoon is out before excluding; it will likely try to get back in)", url: "https://www.purdue.edu/fnr/extension/question-how-do-i-properly-relocate-raccoons-in-my-attic/" },
    { title: "Washington Dept. of Fish and Wildlife: Evicting animals from buildings (don't seal if young are present; they will be separated from their mother)", url: "https://wdfw.wa.gov/species-habitats/living/nuisance-wildlife/evicting" },
    TRAP_RULES_SOURCE,
  ],
  clientQuestions: [
    "How do you handle a mother raccoon with kits (reunite by hand, heated box, one-way door, live trap)? Where do you release raccoons, and do you have written permission for any 40+ acre release sites?",
    "Is there a warranty on raccoon repairs and sealing, and for how long?",
    "Can the site show a price range for raccoon removal?",
    "Night and weekend response for a raccoon loose in the living space?",
    "Real photos: a torn soffit before and after repair, kits being removed, a chimney cap.",
  ],
};
