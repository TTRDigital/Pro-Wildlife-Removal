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
  return (
    <div className="break-inside-avoid pb-8">
      <h2 className="mb-3 font-sans text-xl font-bold text-[#333]">{title}</h2>
      <ul className="grid list-disc gap-1 pl-5 text-base">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-old-navy underline-offset-2 hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** HTML sitemap (white panel on navy, as on the live site): every page and post, built from the content so it never goes stale. */
export default async function SitemapPage() {
  const [page, services, locations, posts] = await Promise.all([getPage("sitemap"), getServices(), getLocations(), getPosts()]);
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
      <JsonLd data={webPageSchema(PATH, page.seo.title, page.seo.description, [])} />
      <Breadcrumbs items={[{ label: "Sitemap", href: PATH }]} visible={false} />
      <section className="bg-old-navy py-12 md:py-16">
        <div className="o-wrap">
          <div className="bg-white px-5 py-8 md:px-10">
            <h1 className="mb-8 font-sans text-[clamp(2rem,1.5rem+1.5vw,2.75rem)] font-bold text-[#333]">{page.hero.heading}</h1>
            <div className="md:columns-2 md:gap-12">
              <Group title="Pages" links={pages} />
              {(["removal", "control", "tampa"] as const).map((g) => (
                <Group key={g} title={groupLabels[g]} links={services.filter((s) => s.group === g).map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))} />
              ))}
              <Group title="Service areas" links={locations.map((l) => ({ label: l.hero.heading, href: `/${l.path}/` }))} />
              <Group title="Blog posts" links={posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` }))} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
