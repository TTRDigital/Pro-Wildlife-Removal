import type { Location, Post, Service, SiteSettings, Testimonial } from "@/lib/types";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { images } from "@/lib/data/images";
import { real } from "@/lib/placeholders";

const DAYS: Record<string, string[]> = {
  "monday – friday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "monday - friday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  saturday: ["Saturday"],
  sunday: ["Sunday"],
};

function to24h(t: string) {
  const m = t.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3].toUpperCase() === "PM") h += 12;
  return `${String(h).padStart(2, "0")}:${m[2] ?? "00"}`;
}

/** PestControl (a LocalBusiness) for the whole site. */
/** Counties are administrative areas, cities are cities, and regions like "Central Florida" are plain places. */
const areaType = (l: Location) => (l.kind === "county" ? "AdministrativeArea" : l.kind === "region" ? "Place" : "City");

export function businessSchema(s: SiteSettings, testimonials: Testimonial[] = [], locations: Location[] = []) {
  const hours = s.hours
    .map((h) => {
      const days = DAYS[h.label.toLowerCase()];
      const [open, close] = h.value.split(/\s*[–-]\s*/).map(to24h);
      return days && open && close ? { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: open, closes: close } : null;
    })
    .filter(Boolean);
  const license = real(s.license);
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": `${siteUrl}/#business`,
    name: s.name,
    url: `${siteUrl}/`,
    telephone: s.phone,
    email: s.email,
    logo: absoluteUrl(images.logo.src),
    image: absoluteUrl(images.prowildlifeRemovalAgentHoldingAnIguanaa.src),
    priceRange: "$$",
    address: { "@type": "PostalAddress", streetAddress: s.address.street, addressLocality: s.address.city, addressRegion: s.address.region, postalCode: s.address.postalCode, addressCountry: "US" },
    openingHoursSpecification: hours,
    areaServed: locations.filter((l) => l.kind !== "rat").map((l) => ({ "@type": areaType(l), name: `${l.name}, FL` })),
    sameAs: s.social.map((x) => x.href),
    ...(license ? { hasCredential: license } : {}),
    ...(s.googleRating && s.reviewCount ? { aggregateRating: { "@type": "AggregateRating", ratingValue: s.googleRating, reviewCount: s.reviewCount, bestRating: "5" } } : {}),
    review: testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
    })),
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
