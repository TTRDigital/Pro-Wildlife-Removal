import Image from "next/image";
import type { Img } from "@/lib/types";

/**
 * next/image wrapper for local and Sanity photos. Fills its (positioned) parent unless fill is off.
 * `priority` marks the page's LCP photo (the hero). Next 16 deprecates the old `priority` prop; its
 * docs advise loading it eagerly at high fetch priority instead of a preload, so it isn't queued
 * behind the fonts.
 */
export function Photo({
  image,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  priority = false,
  fill = true,
}: {
  image: Img;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  const load = priority ? ({ loading: "eager", fetchPriority: "high" } as const) : {};
  if (fill || !image.width || !image.height) {
    // Tall photos (mostly people) keep their top in a wide frame, so heads are never cut off.
    const tall = image.width && image.height && image.height > image.width * 1.05;
    return <Image src={image.src} alt={image.alt} fill sizes={sizes} className={`object-cover ${tall ? "object-[50%_12%]" : ""} ${className}`} {...load} quality={75} />;
  }
  return <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} className={className} {...load} quality={75} />;
}
