import type { Metadata } from "next";
import { getPage, getPosts, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { heroCtas } from "@/components/sections/PageView";
import { PostCard } from "@/components/sections/PostsSection";
import { Sections } from "@/components/sections/Sections";

const PATH = "/blog/";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPage("blog")).seo, PATH);
}

export default async function BlogIndex() {
  const [page, settings, posts] = await Promise.all([getPage("blog"), getSiteSettings(), getPosts()]);
  return (
    <>
      <PageHero hero={page.hero} crumbs={[{ label: "Blog", href: PATH }]} ctas={heroCtas(page.hero, settings)} />
      <section className="section bg-white">
        <div className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </section>
      <Sections sections={page.sections} reviews={false} />
    </>
  );
}
