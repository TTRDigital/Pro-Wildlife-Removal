import Image from "next/image";
import type { Img } from "@/lib/types";

/** next/image wrapper for local and Sanity photos. Fills its (positioned) parent unless fill is off. */
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
  if (fill || !image.width || !image.height) {
    // Tall photos (mostly people) keep their top in a wide frame, so heads are never cut off.
    const tall = image.width && image.height && image.height > image.width * 1.05;
    return <Image src={image.src} alt={image.alt} fill sizes={sizes} className={`object-cover ${tall ? "object-[50%_12%]" : ""} ${className}`} priority={priority} quality={75} />;
  }
  return <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} className={className} priority={priority} quality={75} />;
}
