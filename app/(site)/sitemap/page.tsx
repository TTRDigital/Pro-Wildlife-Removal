import type { Metadata } from "next";
import Link from "next/link";
import { getLocations, getPage, getPosts, getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { groupLabels } from "@/components/sections/ServicesSection";

const PATH = "/sitemap/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("sitemap")).seo, PATH);
}

function Group({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (!links.length) return null;
  return (
    <div className="mb-6 break-inside-avoid rounded-[20px] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="mb-2 font-display text-h3 font-bold text-navy">{title}</h2>
      <ul className="grid">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="flex min-h-11 items-center border-b border-line-2 font-display text-[0.9375rem] font-medium text-body last:border-b-0 hover:text-blue-deep">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** HTML sitemap in the site's design: tint header, then every page and post in rounded cards, built from the content so it never goes stale. */
export default async function SitemapPage() {
  const [page, services, locations, posts] = await Promise.all([getPage("sitemap"), getServices(), getLocations(), getPosts()]);
  const pages = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "How We Work", href: "/how-we-work/" },
    { label: "Services", href: "/services/" },
    { label: "Service Area", href: "/service-areas/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ];
  return (
    <>
      <JsonLd data={webPageSchema(PATH, page.seo.title, page.seo.description, [])} />
      <section className="relative overflow-hidden bg-tint">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
        <div className="wrap relative pt-7 pb-12 md:pt-10 min-[900px]:pt-14 min-[900px]:pb-16">
          <Breadcrumbs items={[{ label: "Sitemap", href: PATH }]} />
          <h1 className="text-h1 font-extrabold tracking-[-0.03em]">{page.hero.heading}</h1>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap md:columns-2 md:gap-6 lg:columns-3">
          <Group title="Pages" links={pages} />
          {(["removal", "attic", "control", "tampa"] as const).map((g) => (
            <Group key={g} title={groupLabels[g]} links={services.filter((s) => s.group === g).map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))} />
          ))}
          <Group title="Service areas" links={locations.map((l) => ({ label: l.hero.heading, href: `/${l.path}/` }))} />
          <Group title="Blog posts" links={posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` }))} />
        </div>
      </section>
    </>
  );
}
