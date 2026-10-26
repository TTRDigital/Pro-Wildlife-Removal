import Image from "next/image";
import type { Img } from "@/lib/types";

/**
 * The logo, alive: the badge tilts gently left and right with pauses, as if the raccoon is
 * looking around (logo-face in globals.css). The whole image moves, so the artwork never
 * splits. Still for people who ask for less motion.
 */
export function AnimatedLogo({ logo, className = "", sizes, priority = false }: { logo: Img; className?: string; sizes: string; priority?: boolean }) {
  return (
    <Image
      src={logo.src}
      alt={logo.alt || "Pro Wildlife Removal logo"}
      width={logo.width ?? 480}
      height={logo.height ?? 442}
      sizes={sizes}
      priority={priority}
      className={`logo-face w-auto ${className}`}
    />
  );
}
