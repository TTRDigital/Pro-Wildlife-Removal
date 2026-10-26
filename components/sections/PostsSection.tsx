import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/data/images";
import type { Post, PostsSection as Posts } from "@/lib/types";
import { Photo } from "@/components/ui/Photo";
import { formatDate } from "@/lib/text";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="card group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
      data-reveal
      style={{ ["--i" as string]: index % 3 }}
    >
      {post.image ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-tint">
          <Photo image={post.image} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.07]" />
        </div>
      ) : (
        // No real photo yet (the client only allows real job photos): a plain branded header keeps the grid even.
        <div aria-hidden="true" className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-3">
          <span className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue/20 blur-2xl" />
          <Image src={images.logo.src} alt="" width={images.logo.width ?? 480} height={images.logo.height ?? 442} sizes="96px" className="h-20 w-auto opacity-90 transition-transform duration-500 group-hover:scale-110" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {post.date ? <p className="eyebrow mb-2">{formatDate(post.date)}</p> : null}
        <h3 className="font-display text-h3 font-semibold text-navy">{post.title}</h3>
        {post.excerpt ? <p className="mt-2 line-clamp-3 text-[0.975rem] leading-relaxed">{post.excerpt}</p> : null}
        <span className="mt-auto pt-4 font-display text-[0.95rem] font-semibold text-blue-deep">Read more</span>
      </div>
    </Link>
  );
}

export function PostsSection({ section: s, posts }: { section: Posts; posts: Post[] }) {
  const word = s.match?.trim().toLowerCase();
  const matching = word ? posts.filter((p) => `${p.title} ${p.slug}`.toLowerCase().includes(word)) : [];
  const list = (matching.length ? matching : posts).slice(0, s.limit ?? 3);
  if (!list.length) return null;
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} highlight={s.highlight} intro={s.intro} />
      <div className="swipe">
        {list.map((p, i) => (
          <PostCard key={p.slug} post={p} index={i} />
        ))}
      </div>
      <CtaRow ctas={s.ctas?.length ? s.ctas : [{ label: "Read the blog", href: "/blog/", style: "outline" }]} />
    </SectionShell>
  );
}
