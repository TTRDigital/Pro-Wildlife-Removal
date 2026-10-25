import type { ReactNode } from "react";
import { getLocations, getServices, getSiteSettings, getTestimonials } from "@/lib/content";
import { businessSchema } from "@/lib/schema";
import { revealScript } from "@/lib/reveal-script";
import type { Location, Service } from "@/lib/types";
import { images } from "@/lib/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Analytics } from "@/components/layout/Analytics";
import { ReviewBar } from "@/components/layout/ReviewBar";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { isPreview } from "@/lib/sanity/fetch";
import { HydrationSignal } from "@/components/layout/HydrationSignal";

/** One menu for desktop and phones: About (about, how we work, blog), Service Area (counties, then cities), Services (removal pages). */
function buildNav(services: Service[], locations: Location[]): NavItem[] {
  // "attic" is the group of the "[animal] in the attic" pages (Cole's content branch adds it to ServiceGroup).
  const attic = services.filter((s) => (s.group as string) === "attic");
  return [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about-us/",
      children: [
        { label: "About Us", href: "/about-us/" },
        { label: "How We Work", href: "/how-we-work/" },
        { label: "Blog", href: "/blog/" },
      ],
    },
    {
      label: "Service Area",
      href: "/about-us/service-area/",
      children: [
        ...locations.filter((l) => l.kind === "county" || l.kind === "region").map((l) => ({ label: l.name, href: `/${l.path}/`, group: "Counties" })),
        ...locations
          .filter((l) => l.kind === "city")
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((l) => ({ label: l.name, href: `/${l.path}/`, group: "Cities" })),
        { label: "All service areas", href: "/about-us/service-area/" },
      ],
    },
    {
      label: "Services",
      href: "/services/",
      // With attic pages, two groups (like Counties / Cities): one page per animal, then the "in the attic" pages.
      children: [
        ...services.filter((s) => s.group === "removal").map((s) => ({ label: s.title, href: `/services/${s.slug}/`, group: attic.length ? "Wildlife removal" : undefined })),
        ...attic.map((s) => ({ label: s.title, href: `/services/${s.slug}/`, group: "In the attic" })),
        { label: "All services", href: "/services/" },
      ],
    },
    { label: "Contact Us", href: "/contact-us/" },
  ];
}

/** Header, footer and site-wide behaviors. Used by the site layout and the 404 page. */
export async function SiteShell({ children }: { children: ReactNode }) {
  const [settings, services, testimonials, locations] = await Promise.all([getSiteSettings(), getServices(), getTestimonials(), getLocations()]);
  const preview = await isPreview();
  return (
    <>
      <JsonLd data={businessSchema(settings, testimonials, locations)} />
      <a href="#main" className="sr-only z-[100] bg-old-navy px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Header nav={buildNav(services, locations)} phone={settings.phone} phoneHref={settings.phoneHref} logo={settings.logo ?? images.logo} social={settings.social} countyLines={settings.countyLines} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer settings={settings} services={services} />
      {/* The call bar on phones, on every page (the client takes requests by phone only). */}
      <MobileCallBar phone={settings.phone} phoneHref={settings.phoneHref} />
      <BackToTop />
      <ChatWidget />
      <HydrationSignal />
      <Analytics preview={preview} />
      {preview ? <PreviewBanner /> : null}
      <ReviewBar />
      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </>
  );
}
