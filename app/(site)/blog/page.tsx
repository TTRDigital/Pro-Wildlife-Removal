import type { Metadata } from "next";
import { getPage, getPosts, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PostCard } from "@/components/sections/PostsSection";
import { CtaSection } from "@/components/sections/CtaSection";

const PATH = "/blog/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("blog")).seo, PATH);
}

/** Blog index in the service-page family: tint header with the title and the call button, then every post as a photo card. */
export default async function BlogIndex() {
  const [page, posts, settings] = await Promise.all([getPage("blog"), getPosts(), getSiteSettings()]);
  return (
    <>
      <JsonLd data={webPageSchema(PATH, page.seo.title, page.seo.description, [])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/blog/${p.slug}/`), name: p.title })),
        }}
      />
      <section className="relative overflow-hidden bg-tint">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(30_155_240/0.18),transparent)]" />
        <div className="wrap relative pt-7 pb-12 md:pt-10 min-[900px]:pt-14 min-[900px]:pb-16">
          <Breadcrumbs items={[{ label: "Blog", href: PATH }]} />
          <h1 className="text-h1 font-extrabold tracking-[-0.03em]">{page.hero.heading}</h1>
          <div className="mt-7">
            <Button href={settings.phoneHref} className="w-full sm:w-auto">
              Call {settings.phone}
            </Button>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <ul className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <PostCard post={p} index={i} />
            </li>
          ))}
        </ul>
      </section>
      <CtaSection settings={settings} />
    </>
  );
}
