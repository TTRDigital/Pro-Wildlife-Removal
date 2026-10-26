import { images } from "../../images.ts";
import type { AreasSection, Card, Faq, Location, Source } from "../../../types";
import { p } from "../pt.ts";

/*
 * County page layout (blueprint: hero with the county line, short answer, towns,
 * common problems here, services, reviews, FAQ, call band). Only the layout is
 * shared: every county file writes its own words. The hero cta carries the
 * county's own number, which Jade's templates also use for the closing band and call bar.
 */

export type CountyInput = {
  path: string;
  /** "county" (default), or "city"/"rat" for the city pages that share this layout. */
  kind?: Location["kind"];
  /** Hero H1; defaults to "Wildlife Removal in [name], FL". */
  heading?: string;
  highlight?: string;
  eyebrow?: string;
  servicesHeading?: string;
  /** Shown above the reviews until real local reviews are matched in (a placeholder line, hidden on the live site). */
  reviewsIntro?: string;
  reviewsMatch?: string;
  name: string;
  county: string;
  order: number;
  phone: { label: string; href: string };
  summary: string;
  heroText: string;
  answerHeading: string;
  answer: string;
  points: string[];
  townsHeading: string;
  townsIntro: string;
  towns: AreasSection["groups"];
  townsNote?: string;
  localHeading: string;
  localIntro: string;
  local: Card[];
  /** "Who to call for what": county animal services, the county health department, FWC. Numbers from each agency's own page. */
  contacts?: Card[];
  contactsIntro?: string;
  servicesIntro: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  seo: { title: string; description: string };
  sources: Source[];
  clientQuestions: string[];
};

export function countyPage(c: CountyInput): Location {
  return {
    path: c.path,
    name: c.name,
    kind: c.kind ?? "county",
    county: c.county,
    order: c.order,
    summary: c.summary,
    design: "new",
    hero: {
      eyebrow: c.eyebrow ?? `WILDLIFE REMOVAL IN ${c.name.toUpperCase()}`,
      heading: c.heading ?? `Wildlife Removal in ${c.name}, FL`,
      highlight: c.highlight ?? c.name,
      text: p(c.heroText),
      image: images.certifiedWildlifeRemovalExpertsInTampaFl,
      ctas: [c.phone],
    },
    sections: [
      { _type: "answerSection", _key: "answer", heading: c.answerHeading, text: p(c.answer), points: c.points },
      { _type: "areasSection", _key: "towns", eyebrow: "Towns covered", heading: c.townsHeading, intro: p(c.townsIntro), groups: c.towns, ...(c.townsNote ? { note: c.townsNote } : {}) },
      { _type: "cardsSection", _key: "local", tone: "tint", eyebrow: "Common problems here", heading: c.localHeading, intro: p(c.localIntro), variant: "icon", columns: 3, cards: c.local },
      ...(c.contacts?.length
        ? [{ _type: "cardsSection" as const, _key: "contacts", eyebrow: "Who to call", heading: `Who to call for what in ${c.name}`, intro: p(c.contactsIntro ?? ""), variant: "plain" as const, columns: 3, cards: c.contacts }]
        : []),
      { _type: "servicesSection", _key: "services", eyebrow: "Services", heading: c.servicesHeading ?? `Animals we remove in ${c.name}`, intro: p(c.servicesIntro), group: "removal" },
      { _type: "reviewsSection", _key: "reviews", eyebrow: "Reviews", heading: "What customers say", ...(c.reviewsIntro ? { intro: p(c.reviewsIntro) } : {}), ...(c.reviewsMatch ? { match: c.reviewsMatch } : {}) },
      { _type: "faqSection", _key: "faq", tone: "tint", eyebrow: "FAQ", heading: `${c.name} wildlife questions`, items: c.faqs },
      { _type: "ctaSection", _key: "cta", heading: c.ctaHeading, text: p(c.ctaText), ctas: [c.phone] },
    ],
    seo: c.seo,
    sources: c.sources,
    clientQuestions: c.clientQuestions,
  };
}

/* Sources several county pages draw on. */
export const S = {
  doh2024: { title: "Florida DOH: Confirmed rabid animals by county and animal, 2024", url: "https://www.floridahealth.gov/wp-content/uploads/2025/07/rabies-cases-county-animal-2024.pdf" },
  doh2025: { title: "Florida DOH: Confirmed rabid animals by county and animal, 2025 (uploaded Sept 2025; may be partial-year)", url: "https://www.floridahealth.gov/wp-content/uploads/2025/09/rabies-cases-county-animal-2025.pdf" },
  dohList: { title: "Florida DOH: Rabies surveillance and alert list", url: "https://www.floridahealth.gov/diseases-and-conditions/rabies/rabies-surveillance.html" },
  censusPop: { title: "U.S. Census Bureau: Vintage 2025 county population estimates", url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv" },
  censusUR: { title: "U.S. Census Bureau: 2020 urban and rural by county", url: "https://www2.census.gov/geo/docs/reference/ua/2020_UA_COUNTY.xlsx" },
  edr: { title: "Florida Office of Economic and Demographic Research: April 1, 2025 population estimates by county and city", url: "https://edr.state.fl.us/Content/population-demographics/data/2025_Pop_Estimates.xlsx" },
  edrUninc: { title: "Florida EDR: share of county residents living outside city limits", url: "https://edr.state.fl.us/Content/population-demographics/data/FLcopops.xlsx" },
  seats: { title: "Florida Association of Counties: county seats", url: "https://www.fl-counties.com/about-floridas-counties/county-population-general-information/" },
  trapping: { title: "FWC: FAQs, nuisance wildlife (24-hour trap checks; release on same property or 40+ contiguous acres in same county with written permission)", url: "https://myfwc.com/conservation/you-conserve/wildlife/faqs-nuisance-wildlife/" },
  bats: { title: "FWC news release, April 6, 2026 (bat maternity season April 16 to Aug 14; exclusion Aug 15 to April 15)", url: "https://myfwc.com/news/all-news/bat-maternity-0426/" },
};
