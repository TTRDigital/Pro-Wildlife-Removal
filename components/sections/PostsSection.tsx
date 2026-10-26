import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { postTopic, topicImage } from "@/lib/topics";
import { animalVideos } from "@/lib/data/videos";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { images } from "@/lib/data/images";
import type { Post, PostsSection as Posts } from "@/lib/types";
import { Photo } from "@/components/ui/Photo";
import { formatDate } from "@/lib/text";
import { CtaRow, SectionHeader, SectionShell } from "./SectionShell";

/**
 * A post as a photo card. A post without its own photo shows its animal's real photo (see
 * lib/topics), or a navy logo tile when it is about no one animal. The topic shows as a small tag
 * on the photo, which slowly looks around; posts about an animal we have real footage of play
 * that clip while in view. `featured` is the wide first card on the blog page: photo beside the text.
 */
export function PostCard({
  post,
  index = 0,
  featured = false,
}: {
  post: Post;
  index?: number;
  featured?: boolean;
}) {
  const topic = postTopic(post);
  const img = post.image ?? topicImage(post);
  // A post about an animal we have real footage of plays it over the photo while in view. The
  // raccoon clip was filmed in a zoo, so it stays off posts about trapping and the rules, where it
  // could read as one of the company's jobs (Ben, Oct 26).
  const zooClip =
    topic?.key === "raccoon" &&
    /trap|rule|law|legal|fwc/i.test(`${post.title} ${post.slug}`);
  const video = topic && !zooClip ? animalVideos[topic.key] : undefined;
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className={`card group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${featured ? "md:grid md:grid-cols-[3fr_2fr]" : ""}`}
      data-reveal
      style={{ ["--i" as string]: index % 3 }}
    >
      {img ? (
        <div
          className={`photo-look relative overflow-hidden bg-tint ${featured ? "aspect-[16/9] md:aspect-auto md:min-h-[320px]" : "aspect-[16/9]"}`}
        >
          <Photo
            image={img}
            sizes={
              featured
                ? "(min-width: 768px) 60vw, 100vw"
                : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            }
            className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
          />
          {video ? <LoopVideo src={video} /> : null}
          {topic ? (
            <span className="absolute top-3 left-3 rounded-full bg-navy/85 px-3 py-1 font-display text-xs font-bold tracking-[0.5px] text-white uppercase backdrop-blur-sm">
              {topic.label}
            </span>
          ) : null}
        </div>
      ) : (
        // About no one animal and no photo of its own: a plain branded header keeps the grid even.
        <div
          aria-hidden="true"
          className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-3 ${featured ? "aspect-[16/9] md:aspect-auto md:min-h-[320px]" : "aspect-[16/9]"}`}
        >
          <span className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue/20 blur-2xl" />
          <Image
            src={images.logo.src}
            alt={images.logo.alt}
            width={images.logo.width ?? 480}
            height={images.logo.height ?? 442}
            sizes="96px"
            className="h-20 w-auto opacity-90 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div
        className={`flex flex-1 flex-col p-6 ${featured ? "md:justify-center md:p-9" : ""}`}
      >
        {post.date ? (
          <p className="eyebrow mb-2">{formatDate(post.date)}</p>
        ) : null}
        <h3
          className={`font-display font-semibold text-navy ${featured ? "text-[clamp(1.375rem,1.1rem+1vw,1.875rem)] leading-tight font-extrabold" : "text-h3"}`}
        >
          {post.title}
        </h3>
        {post.excerpt ? (
          <p
            className={`mt-2 text-[0.975rem] leading-relaxed ${featured ? "line-clamp-4 md:text-[1.0625rem]" : "line-clamp-3"}`}
          >
            {post.excerpt}
          </p>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-[0.95rem] font-semibold text-blue-deep">
          Read more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

export function PostsSection({
  section: s,
  posts,
}: {
  section: Posts;
  posts: Post[];
}) {
  const word = s.match?.trim().toLowerCase();
  const matching = word
    ? posts.filter((p) => `${p.title} ${p.slug}`.toLowerCase().includes(word))
    : [];
  const list = (matching.length ? matching : posts).slice(0, s.limit ?? 3);
  if (!list.length) return null;
  return (
    <SectionShell tone={s.tone}>
      <SectionHeader
        eyebrow={s.eyebrow}
        heading={s.heading}
        highlight={s.highlight}
        intro={s.intro}
      />
      <div className="swipe">
        {list.map((p, i) => (
          <PostCard key={p.slug} post={p} index={i} />
        ))}
      </div>
      <CtaRow
        ctas={
          s.ctas?.length
            ? s.ctas
            : [{ label: "Read the blog", href: "/blog/", style: "outline" }]
        }
      />
    </SectionShell>
  );
}
