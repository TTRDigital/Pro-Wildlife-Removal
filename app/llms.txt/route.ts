import { getLocations, getPosts, getServices, getSiteSettings } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";
import type { Location } from "@/lib/types";

/*
 * /llms.txt (llmstxt.org): a plain summary of the business and its main pages for AI assistants and
 * answer engines. Built at build time from the same content as the pages, so it never drifts from the site.
 */

export const dynamic = "force-static";

const clean = (s: string) => s.replace(/\s*[–—]\s*/g, " to ").replace(/\s+/g, " ").trim();

export async function GET() {
  const [s, services, locations, posts] = await Promise.all([getSiteSettings(), getServices(), getLocations(), getPosts()]);
  const link = (title: string, path: string, note?: string) => `- [${clean(title)}](${absoluteUrl(path)})${note ? `: ${clean(note)}` : ""}`;
  const counties = locations.filter((l) => l.kind === "county" || l.kind === "region");
  const area = (l: Location) => link(l.kind === "rat" ? `Rat removal in ${l.name}` : l.name, `/${l.path}/`);
  /** First sentence of a service summary, as a short note. */
  const note = (t?: string) => t?.match(/^[^.!?]{20,200}[.!?]/)?.[0];
  const latest = [...posts].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")).slice(0, 15);

  const text = [
    `# ${s.name}`,
    "",
    // No street address (the client's wish) and no licence claim: described by its service area.
    `> Wildlife removal and remediation company ${clean(s.serviceAreaText).replace(/^Serving/, "serving")}`,
    "",
    `- Phone: ${s.phone}${s.tollFree ? ` (toll free ${s.tollFree})` : ""}`,
    `- Email: ${s.email}`,
    `- Hours: ${s.hours.map((h) => `${clean(h.label)} ${clean(h.value)}`).join("; ")}`,
    ...(s.googleRating && s.reviewCount ? [`- Google rating: ${s.googleRating} from ${s.reviewCount} reviews`] : []),
    `- Requests: by phone only, call ${s.phone} (${absoluteUrl("/contact-us/")})`,
    "",
    "## Services",
    "",
    link("All services", "/services/"),
    ...services.filter((x) => x.group === "removal").map((x) => link(x.title, `/services/${x.slug}/`, note(x.summary))),
    "",
    "## Prevention and control",
    "",
    ...services.filter((x) => x.group === "control").map((x) => link(x.title, `/services/${x.slug}/`)),
    "",
    "## Tampa",
    "",
    ...services.filter((x) => x.group === "tampa").map((x) => link(x.title, `/services/${x.slug}/`)),
    "",
    "## Service areas",
    "",
    link("All service areas", "/about-us/service-area/"),
    ...counties.map(area),
    "",
    "## Cities",
    "",
    ...locations.filter((l) => l.kind === "city").map(area),
    "",
    "## Rat removal by city",
    "",
    ...locations.filter((l) => l.kind === "rat").map(area),
    "",
    "## About",
    "",
    link("About us", "/about-us/"),
    link("How we work", "/how-we-work/"),
    link("Contact us", "/contact-us/"),
    "",
    "## Recent articles",
    "",
    link("Blog", "/blog/"),
    ...latest.map((p) => link(p.title, `/blog/${p.slug}/`)),
    "",
    "## Optional",
    "",
    link("Full list of pages", "/sitemap/"),
    `- [XML sitemap](${absoluteUrl("/sitemap.xml")})`,
    "",
  ].join("\n");

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
