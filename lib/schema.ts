import type { Location, Post, Service, ServicePlace, SiteSettings } from "@/lib/types";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { images } from "@/lib/data/images";
import { real } from "@/lib/placeholders";

/** Counties are administrative areas, cities are cities, and regions like "Central Florida" are plain places. */
const areaType = (l: Location) => (l.kind === "county" ? "AdministrativeArea" : l.kind === "region" ? "Place" : "City");

/**
 * schema.org type for the business. Never PestControl: Pro Wildlife is never called pest control (Kia, Oct 26).
 * LocalBusiness rather than HomeAndConstructionBusiness, which is for builders and trades (TTR-2516).
 */
const BUSINESS_TYPE = "LocalBusiness";

/** Any PestControl type in CMS-written JSON-LD becomes LocalBusiness too, so the rule holds whatever is stored. */
function noPestControl(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(noPestControl);
  if (v && typeof v === "object") {
    const swap = (t: unknown) => (t === "PestControl" ? BUSINESS_TYPE : t);
    return Object.fromEntries(
      Object.entries(v).map(([k, x]) => {
        if (k !== "@type") return [k, noPestControl(x)];
        return [k, Array.isArray(x) ? [...new Set(x.map(swap))] : swap(x)];
      }),
    );
  }
  return v;
}

/** schema.org types that are reviews or ratings: Review, CriticReview, Rating, AggregateRating and the like. */
const REVIEW_TYPE = /(Review|Rating)$/;
/** Properties that carry reviews or ratings on any type. */
const REVIEW_KEYS = new Set(["review", "reviews", "aggregateRating", "reviewRating", "contentRating"]);
const isReviewNode = (v: unknown) => {
  const t = v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>)["@type"] : undefined;
  return (Array.isArray(t) ? t : [t]).some((x) => typeof x === "string" && REVIEW_TYPE.test(x));
};

/**
 * No Review, Rating or AggregateRating in structured data on any client site (Kia; TTR-2510). The site's own
 * testimonials still show on the page, they are just never marked up. Applied to every JSON-LD block the site
 * prints (components/ui/JsonLd.tsx), so it holds for the CMS-written schema too, whatever is stored there.
 */
export function noReviews(v: unknown): unknown {
  if (Array.isArray(v)) return v.filter((x) => !isReviewNode(x)).map(noReviews);
  if (v && typeof v === "object") {
    return Object.fromEntries(
      Object.entries(v)
        .filter(([k, x]) => !REVIEW_KEYS.has(k) && !isReviewNode(x))
        .map(([k, x]) => [k, noReviews(x)]),
    );
  }
  return v;
}

/** What every JSON-LD block goes through before it is printed: no reviews or ratings, never PestControl. */
export function cleanSchema<T extends Record<string, unknown> | Record<string, unknown>[]>(data: T): T {
  const v = Array.isArray(data) ? data.filter((x) => !isReviewNode(x)) : data;
  return noPestControl(noReviews(v)) as T;
}

/** The business itself, on every page. No rating and no reviews (TTR-2510). */
export function businessSchema(s: SiteSettings, locations: Location[] = []) {
  const license = real(s.license);
  return {
    "@context": "https://schema.org",
    "@type": BUSINESS_TYPE,
    "@id": `${siteUrl}/#business`,
    name: s.name,
    url: `${siteUrl}/`,
    telephone: s.phone,
    email: s.email,
    logo: absoluteUrl(images.logo.src),
    image: absoluteUrl(images.prowildlifeRemovalAgentHoldingAnIguanaa.src),
    priceRange: "$$",
    // Available 24 hours, every day (Kia confirmed, Oct 26, 2026). Structured data only: the site shows no hours label.
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
    // The confirmed counties only, by name (Ben, Oct 26, 2026): no vague region, and cities sit inside their county.
    // Fixed in settings (Ben, Oct 26, 2026): a county stays here even while its page is held back.
    areaServed: (s.serviceCounties ?? locations.filter((l) => l.kind === "county").map((l) => l.name.replace(/ County$/, ""))).map((c) => ({ "@type": "AdministrativeArea", name: `${c} County, FL` })),
    sameAs: s.social.map((x) => x.href),
    ...(license ? { hasCredential: license } : {}),
  };
}

export function serviceSchema(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "State", name: "Florida" },
  };
}

export function locationSchema(location: Location, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location.hero.heading,
    serviceType: "Wildlife removal",
    description: location.seo.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": areaType(location), name: `${location.name}, FL` },
  };
}

/** One animal in one place: the Service, served in that city or county. */
export function servicePlaceSchema(page: ServicePlace, service: Service, path: string) {
  const area =
    page.placeKind === "county"
      ? { "@type": "AdministrativeArea", name: `${page.placeName}, FL` }
      : { "@type": "City", name: `${page.placeName}, FL`, ...(page.county ? { containedInPlace: { "@type": "AdministrativeArea", name: `${page.county} County, FL` } } : {}) };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.hero.heading,
    serviceType: service.title,
    description: page.seo.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: area,
  };
}

export function articleSchema(post: Post, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.description || post.excerpt,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    ...(post.date ? { datePublished: post.date } : {}),
    ...(post.modified ? { dateModified: post.modified } : {}),
    ...(post.image ? { image: absoluteUrl(post.image.src) } : {}),
    author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: "Pro Wildlife Removal" },
    publisher: { "@id": `${siteUrl}/#business` },
  };
}

/** WebPage with its sections as parts (name + #anchor), so each section of a page is indexed on its own. */
export function webPageSchema(path: string, name: string, description: string | undefined, sections: { name: string; id: string }[]) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Pro Wildlife Removal" },
    about: { "@id": `${siteUrl}/#business` },
    inLanguage: "en-US",
    ...(sections.length ? { hasPart: sections.map((s) => ({ "@type": "WebPageElement", name: s.name, url: `${url}#${s.id}` })) } : {}),
  };
}

/**
 * The page's own JSON-LD from the CMS (seo.schema, a JSON text), or null when it is empty or not valid:
 * the generated schema stays in that case. Accepts one object or a list of objects that each have an @type.
 */
export function customSchema(seo: { schema?: string } | undefined): Record<string, unknown> | Record<string, unknown>[] | null {
  const text = seo?.schema?.trim();
  if (!text) return null;
  try {
    const v: unknown = JSON.parse(text);
    const ok = (x: unknown): x is Record<string, unknown> => !!x && typeof x === "object" && !Array.isArray(x) && "@type" in x;
    if (Array.isArray(v)) return v.length && v.every(ok) ? (noPestControl(v) as Record<string, unknown>[]) : null;
    return ok(v) ? (noPestControl(v) as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
