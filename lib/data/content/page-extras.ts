import type { Location, PageContent, Section, Source } from "../../types";
import { faq, p } from "./pt.ts";

/*
 * Additions to migrated pages (Ben's audit, Oct 26): FAQ blocks and in-text links.
 * Company facts come only from the site and the client; wildlife facts are sourced.
 */
type Extra = { sections: Section[]; sources?: Source[]; seoTitle?: string; seoDescription?: string };

const FWC_BATS = "https://myfwc.com/conservation/you-conserve/wildlife/bats/bats-in-buildings/";
const FWC_TRAP = "https://myfwc.com/wildlifehabitats/wildlife/trapping-rules/trap-types/";
const CDC_CLEANUP = "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html";
const DOH_RABIES = "https://www.floridahealth.gov/diseases-and-conditions/disease/rabies/";
const DOH_2024 = "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf";
const DOH_2025 = "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf";
const FWC_FEEDING = "https://myfwc.com/conservation/you-conserve/wildlife/feeding/";
const SARASOTA_ADVISORY = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-advisory-sarasota-county-7-22-2026.pdf";
const CITRUS_ALERT = "https://www.floridahealth.gov/wp-content/uploads/2026/07/rabies-alert-citrus-county-7-23-2026.pdf";
const CITRUS_SHERIFF = "https://www.sheriffcitrus.org/programs___services/animal_control.php";
const DOH_CITRUS = "https://citrus.floridahealth.gov/";

export const pageExtras: Record<string, Extra> = {
  about: {
    seoDescription:
      "Pro Wildlife Removal handles bats, rats, raccoons, squirrels and other wildlife in homes across eight Central Florida counties. Call us: (727) 594-7705.",
    sections: [
      {
        _type: "proseSection",
        _key: "who",
        eyebrow: "Who we are",
        heading: "Wildlife removal for Central Florida homes",
        body: p(
          "Pro Wildlife Removal takes animals out of homes and businesses and closes the openings they used. The work covers [bats](/services/bat-removal/), [rats](/services/rat-removal/), [raccoons](/services/raccoon-removal/), [squirrels](/services/squirrel-removal/), snakes, opossums, armadillos, bees and dead animal removal.",
          "We serve eight counties: Pasco, Pinellas, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion. The [service area](/about-us/service-area/) page lists the towns, [how we work](/how-we-work/) walks through trapping, exclusion and clean-up, and the [blog](/blog/) answers common questions about Florida wildlife.",
        ),
      },
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Questions about Pro Wildlife Removal",
        items: [
          faq(
            "Which counties does Pro Wildlife Removal serve?",
            "Pasco, Pinellas, Hillsborough, Hernando, Citrus, Sumter, Polk and Marion. See the [service area](/about-us/service-area/) for towns in each county.",
          ),
          faq(
            "What animals do you remove?",
            "Bats, rats, raccoons, squirrels, snakes, opossums, armadillos and bees, plus dead animal removal and attic clean-up. Each one has its own page under [services](/services/).",
          ),
          faq(
            "How do I set up an inspection?",
            "Call (727) 594-7705 or send a message through the [contact page](/contact-us/). Same-day appointments are often available.",
          ),
        ],
      },
    ],
  },
  howWeWork: {
    seoDescription:
      "How Pro Wildlife Removal handles a job: inspection, trapping and removal, exclusion of entry points, and clean-up. Call (727) 594-7705 to talk it through.",
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Questions about how a job works",
        items: [
          faq(
            "What happens first?",
            "An inspection. The specialist works out which animals are causing the problem and plans the job around them. Call (727) 594-7705 or use the [contact page](/contact-us/) to book one.",
          ),
          faq(
            "How are the animals taken out?",
            `With traps set to hold the animal without hurting it, then removal from the property. Florida's trapping rules apply. Under FWC rule changes that take effect December 31, 2026, trappers need a no-cost permit with yearly registration and training, and nuisance animals must be relocated or humanely killed off site within 12 hours of the trap check ([FWC](${FWC_TRAP})). Bats are never trapped; see [bat removal](/services/bat-removal/).`,
          ),
          faq(
            "Why is exclusion part of every job?",
            "Taking one animal out doesn't help if the opening is still there for the next one. Closing the entry points is the step that keeps the house from being reused. Pages like [rats in the attic](/services/rats-in-attic/) and [squirrels in the attic](/services/squirrels-in-attic/) show where animals usually get in.",
          ),
          faq(
            "Can bats be removed at any time of year?",
            `No. FWC says exclusion is illegal during bat maternity season, April 16 to August 14, so bat work is planned for the rest of the year ([FWC](${FWC_BATS})).`,
          ),
          faq(
            "Do you clean up after the animals are gone?",
            `Yes: droppings, nesting and soiled insulation, with antimicrobial and ozone treatments where needed. The CDC warns against sweeping or vacuuming rodent droppings ([CDC](${CDC_CLEANUP})). See our guide to [cleaning up rat droppings](/blog/how-to-clean-up-rat-droppings-florida-attic/).`,
          ),
        ],
      },
    ],
    sources: [
      { title: "FWC: Trapping rules, trap types (rule changes effective December 31, 2026: no-cost permit with yearly registration and training; nuisance animals relocated or humanely killed off site within 12 hours of the trap check)", url: FWC_TRAP },
      { title: "FWC: Bats in buildings (exclusion illegal during maternity season, April 16 to August 14)", url: FWC_BATS },
      { title: "CDC: How to clean up after rodents (do not sweep or vacuum droppings)", url: CDC_CLEANUP },
    ],
  },
  contact: {
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Before you call",
        items: [
          faq(
            "How soon can someone come out?",
            "Same-day appointments are often available across our [service area](/about-us/service-area/). Pro Wildlife Removal takes calls 24 hours a day at (727) 594-7705.",
          ),
          faq(
            "What should I tell you when I call?",
            "What you've heard or seen, where in the house, and when it's loudest. Noises at dusk point to different animals than scratching in the morning; our guide to [what animal is in your attic](/blog/what-animal-is-in-my-attic/) explains why, and the [blog](/blog/) covers other common signs.",
          ),
          faq(
            "Do you handle stray dogs and cats?",
            "No. Strays, pet bites and pet welfare go to your county's animal services. We handle wildlife: see [our services](/services/).",
          ),
          faq(
            "Can I send a message instead of calling?",
            "Yes. Use the form on this page and include your town and what you've noticed. For how a visit goes, see [how we work](/how-we-work/).",
          ),
        ],
      },
    ],
  },
};

export const locationExtras: Record<string, Extra> = {
  "about-us/service-area/wildlife-removal-pine-ridge-fl": {
    seoDescription:
      "Wildlife removal in Pine Ridge, FL: raccoons, rats, bats and squirrels, plus Citrus County animal control and its latest rabies alert. Call (727) 594-7705.",
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Pine Ridge wildlife questions",
        items: [
          faq(
            "Will Citrus County animal control remove a raccoon from my house?",
            `No. The Citrus County Sheriff's Office says its Animal Control handles domestic animals and livestock, and it refers nuisance wildlife to a trapper ([Citrus County Sheriff](${CITRUS_SHERIFF})). See [raccoon removal](/services/raccoon-removal/).`,
          ),
          faq(
            "Is rabies present in Citrus County?",
            `Yes. In July 2026, DOH-Citrus issued a rabies alert after a stray kitten captured near Floral City tested positive, and it warned that rabies is present in the wild animal population ([DOH-Citrus](${CITRUS_ALERT})).`,
          ),
          faq(
            "When can bats be excluded from a Pine Ridge home?",
            `Only from August 15 to April 15. FWC says bat exclusion is illegal during maternity season, April 16 to August 14 ([FWC](${FWC_BATS})). See [bat removal](/services/bat-removal/).`,
          ),
        ],
      },
    ],
    sources: [
      { title: "Citrus County Sheriff's Office: Animal Control (352-249-2790; domestic animals and livestock only; nuisance wildlife referred to a nuisance trapper)", url: CITRUS_SHERIFF },
      { title: "DOH-Citrus: Rabies alert, July 23, 2026 (unvaccinated stray kitten captured in the Floral City area, July 18, 2026; rabies present in the wild animal population)", url: CITRUS_ALERT },
      { title: "FWC: Bats in buildings (exclusion illegal during maternity season, April 16 to August 14)", url: FWC_BATS },
    ],
  },
  "about-us/service-area/wildlife-removal-in-lecanto-fl": {
    seoDescription:
      "Wildlife removal in Lecanto, FL: raccoons, rats, bats and squirrels, plus where to report bites and Florida's raccoon feeding rule. Call (727) 594-7705.",
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Lecanto wildlife questions",
        items: [
          faq(
            "Where do I report an animal bite in Lecanto?",
            `To the Florida Department of Health in Citrus County at 352-527-0068 ([DOH-Citrus](${DOH_CITRUS})). Get medical care first if the skin is broken.`,
          ),
          faq(
            "How many rabid animals has Citrus County recorded?",
            `Few in the state tables: one bat in 2024 and one cat in 2025 ([2024](${DOH_2024}), [2025](${DOH_2025})). Tests usually follow a possible exposure, so the tables don't count every case.`,
          ),
          faq(
            "Is it legal to leave food out for raccoons in Florida?",
            `No. FWC rule 68A-4.001 prohibits placing food in a way that attracts raccoons, along with bears, coyotes and foxes ([FWC](${FWC_FEEDING})). See [raccoons in the attic](/services/raccoons-in-attic/).`,
          ),
        ],
      },
    ],
    sources: [
      { title: "DOH-Citrus (352-527-0068 for reporting)", url: DOH_CITRUS },
      { title: "Florida DOH: Animal rabies by county and animal, 2024 (Citrus: 1 bat)", url: DOH_2024 },
      { title: "Florida DOH: Animal rabies by county and animal, 2025 (Citrus: 1 cat)", url: DOH_2025 },
      { title: "FWC: Feeding wildlife (68A-4.001 prohibits placing food in a manner that attracts black bears, coyotes, foxes and raccoons)", url: FWC_FEEDING },
    ],
  },
  "about-us/service-area/wildlife-removal-orlando-fl": {
    seoDescription:
      "Wildlife removal in Orlando, FL: raccoons, rats, bats and squirrels, plus Orange County rabies figures and Florida's bat season rules. Call (727) 594-7705.",
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Orlando wildlife questions",
        items: [
          faq(
            "Has rabies been found in Orange County?",
            `Yes. Florida DOH's tables list 4 rabid bats and 3 rabid raccoons in Orange County in 2024, and 8 bats and 2 raccoons in 2025 ([2024](${DOH_2024}), [2025](${DOH_2025})).`,
          ),
          faq(
            "When can bats be removed from an Orlando building?",
            `From August 15 to April 15. FWC makes exclusion illegal during bat maternity season, April 16 to August 14 ([FWC](${FWC_BATS})).`,
          ),
          faq(
            "What should I do if a bat or raccoon bites someone?",
            `Florida DOH says to scrub the wound with soap and running water for five to ten minutes, see a health care provider, and call the county health department or animal control ([Florida DOH](${DOH_RABIES})). Our guide on [whether bats carry rabies](/blog/do-bats-carry-rabies-florida/) has more.`,
          ),
        ],
      },
    ],
    sources: [
      { title: "Florida DOH: Animal rabies by county and animal, 2024 (Orange: 4 bats, 3 raccoons in the table)", url: DOH_2024 },
      { title: "Florida DOH: Animal rabies by county and animal, 2025 (Orange: 8 bats, 2 raccoons in the table)", url: DOH_2025 },
      { title: "FWC: Bats in buildings (exclusion illegal during maternity season, April 16 to August 14)", url: FWC_BATS },
      { title: "Florida DOH: Rabies (scrub the wound with soap and running water for five to ten minutes; see a health care provider; call the county health department or animal control)", url: DOH_RABIES },
    ],
  },
  "about-us/service-area/wildlife-removal-sarasota-fl": {
    seoTitle: "Wildlife Removal in Sarasota, FL | Pro Wildlife Removal",
    seoDescription:
      "Wildlife removal in Sarasota, FL: raccoons, rats, bats and squirrels, plus the July 2026 rabies advisory and Florida's feeding rule. Call (727) 594-7705.",
    sections: [
      {
        _type: "faqSection",
        _key: "faq",
        eyebrow: "FAQ",
        heading: "Sarasota wildlife questions",
        items: [
          faq(
            "Has rabies turned up in Sarasota County lately?",
            `Yes. DOH-Sarasota issued a rabies advisory on July 22, 2026, after a raccoon killed in the county the day before tested positive ([DOH-Sarasota](${SARASOTA_ADVISORY})). The state's 2025 table also listed one rabid raccoon there ([DOH](${DOH_2025})).`,
          ),
          faq(
            "Can I feed the raccoons in my Sarasota yard?",
            `No. FWC rule 68A-4.001 bars placing food in a manner that attracts raccoons ([FWC](${FWC_FEEDING})). Fed raccoons lose their fear of people; see our guide to [what to do about raccoons](/blog/what-to-do-about-raccoons/).`,
          ),
          faq(
            "Should I touch a raccoon that looks sick or dead?",
            `No. DOH-Sarasota's July 2026 advisory tells people and pets to avoid physical contact with wild animals such as raccoons and bats ([DOH-Sarasota](${SARASOTA_ADVISORY})).`,
          ),
        ],
      },
    ],
    sources: [
      { title: "DOH-Sarasota: Rabies advisory, July 22, 2026 (rabid raccoon killed in Sarasota County on July 21, 2026; rabies may be present in the wild animal population)", url: SARASOTA_ADVISORY },
      { title: "Florida DOH: Animal rabies by county and animal, 2025 (Sarasota: 1 raccoon)", url: DOH_2025 },
      { title: "FWC: Feeding wildlife (68A-4.001 prohibits placing food in a manner that attracts black bears, coyotes, foxes and raccoons)", url: FWC_FEEDING },
    ],
  },
};

const add = (sections: Section[], extra: Section[]) => {
  const i = sections.findIndex((s) => s._type === "ctaSection");
  return i < 0 ? [...sections, ...extra] : [...sections.slice(0, i), ...extra, ...sections.slice(i)];
};

export function withPageExtras<T extends PageContent>(key: string, page: T): T {
  const x = pageExtras[key];
  if (!x) return page;
  return {
    ...page,
    sections: add(page.sections, x.sections),
    sources: [...(page.sources ?? []), ...(x.sources ?? [])],
    seo: x.seoDescription ? { ...page.seo, description: x.seoDescription } : page.seo,
  };
}

export function withLocationExtras(loc: Location): Location {
  const x = locationExtras[loc.path];
  if (!x) return loc;
  return {
    ...loc,
    sections: add(loc.sections, x.sections),
    sources: [...(loc.sources ?? []), ...(x.sources ?? [])],
    seo: { ...loc.seo, ...(x.seoTitle ? { title: x.seoTitle } : {}), ...(x.seoDescription ? { description: x.seoDescription } : {}) },
  };
}
