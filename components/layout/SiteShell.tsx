import type { ReactNode } from "react";
import { getLocations, getServices, getSiteSettings, getTestimonials } from "@/lib/content";
import { businessSchema } from "@/lib/schema";
import { revealScript } from "@/lib/reveal-script";
import type { Location, Service } from "@/lib/types";
import { images } from "@/lib/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Analytics } from "@/components/layout/Analytics";
import { HydrationSignal } from "@/components/layout/HydrationSignal";
import { AttributionCapture } from "@/components/forms/AttributionCapture";

/** Same menu as the live site: About (about, how we work, blog), Service Area (counties), Services (removal pages). */
function buildNav(services: Service[], locations: Location[]): NavItem[] {
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
        ...locations.filter((l) => l.kind === "county" || l.kind === "region").map((l) => ({ label: l.name, href: `/${l.path}/` })),
        { label: "Tampa", href: "/about-us/service-area/tampa/wildlife-removal-service-in-tampa-fl/" },
        { label: "All service areas", href: "/about-us/service-area/" },
      ],
    },
    {
      label: "Services",
      href: "/services/",
      children: [...services.filter((s) => s.group === "removal").map((s) => ({ label: s.title, href: `/services/${s.slug}/` })), { label: "All services", href: "/services/" }],
    },
    { label: "Contact Us", href: "/contact-us/" },
  ];
}

/** Header, footer and site-wide behaviors. Used by the site layout and the 404 page. */
export async function SiteShell({ children }: { children: ReactNode }) {
  const [settings, services, testimonials, locations] = await Promise.all([getSiteSettings(), getServices(), getTestimonials(), getLocations()]);
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
      <BackToTop />
      <ChatWidget />
      <AttributionCapture />
      <HydrationSignal />
      <Analytics />
      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </>
  );
}
