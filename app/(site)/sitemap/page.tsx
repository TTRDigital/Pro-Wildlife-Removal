import type { Metadata } from "next";
import Link from "next/link";
import { getLocations, getPage, getPosts, getServices, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { heroCtas } from "@/components/sections/PageView";
import { groupLabels } from "@/components/sections/ServicesSection";

const PATH = "/sitemap/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("sitemap")).seo, PATH);
}

function Group({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="card p-7">
      <h2 className="mb-4 flex items-center gap-2.5 font-display text-lg font-semibold text-navy before:h-[18px] before:w-1 before:rounded-sm before:bg-blue before:content-['']">{title}</h2>
      <ul className="grid gap-1.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-body hover:text-blue-deep hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** HTML sitemap: every page and post, built from the content so it never goes stale. */
export default async function SitemapPage() {
  const [page, settings, services, locations, posts] = await Promise.all([getPage("sitemap"), getSiteSettings(), getServices(), getLocations(), getPosts()]);
  const pages = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "How We Work", href: "/how-we-work/" },
    { label: "Services", href: "/services/" },
    { label: "Service Area", href: "/about-us/service-area/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ];
  return (
    <>
      <PageHero hero={page.hero} crumbs={[{ label: "Sitemap", href: PATH }]} ctas={heroCtas(page.hero, settings)} />
      <section className="section bg-white">
        <div className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Group title="Pages" links={pages} />
          {(["removal", "control", "tampa"] as const).map((g) => (
            <Group key={g} title={groupLabels[g]} links={services.filter((s) => s.group === g).map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))} />
          ))}
          <Group title="Service areas" links={locations.map((l) => ({ label: l.hero.heading, href: `/${l.path}/` }))} />
          <Group title="Blog posts" links={posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` }))} />
        </div>
      </section>
    </>
  );
}
