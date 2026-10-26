import Image from "next/image";
import type { Img } from "@/lib/types";

/*
 * The raccoon's eyes in logo.png (480x442): each eye is a white ring around a black pupil,
 * inside a circle of radius ~47px around (174, 248) and (282, 248), with a white sparkle at
 * (177.5, 232.5) and (277.5, 232.5). The blue scarf and trees cover the eyes below y ~262.
 */
const EYES = [
  { cx: 174, sx: 177.5 },
  { cx: 282, sx: 277.5 },
];
const FUR = "#938d8d";
const DARK = "#2c2b29";

/**
 * The logo, alive: the raccoon blinks now and then (grey lids drop over the eyes and lift)
 * and its eyes glance around (the sparkles move inside the pupils). Hovering or tapping the
 * logo makes it blink at once. Drawn over the real logo, so the artwork itself is untouched.
 * Still for people who ask for less motion.
 */
export function AnimatedLogo({ logo, className = "", sizes, priority = false }: { logo: Img; className?: string; sizes: string; priority?: boolean }) {
  const w = logo.width ?? 480;
  const h = logo.height ?? 442;
  return (
    <span className={`logo-live relative inline-block ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <Image src={logo.src} alt={logo.alt || "Pro Wildlife Removal logo"} width={w} height={h} sizes={sizes} priority={priority} className="h-full w-full" />
      <svg aria-hidden="true" viewBox={`0 0 ${w} ${h}`} className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          {EYES.map((e, i) => (
            <clipPath key={i} id={`pw-eye-${i}`}>
              <circle cx={e.cx} cy={248} r={47} />
            </clipPath>
          ))}
        </defs>
        {EYES.map((e, i) => (
          <g key={i}>
            {/* glancing sparkle: cover the printed one with pupil black, draw a moving one */}
            <circle cx={e.sx} cy={232.5} r={10} fill={DARK} />
            <circle className="logo-glance" cx={e.sx} cy={232.5} r={9} fill="#e9e8e6" />
            {/* eyelid: fur grey with a lash line, dropping from the top of the eye to the scarf */}
            <g clipPath={`url(#pw-eye-${i})`}>
              <g className="logo-lid">
                <rect x={e.cx - 50} y={196} width={100} height={68} fill={FUR} />
                <path d={`M ${e.cx - 46} 259 Q ${e.cx} 271 ${e.cx + 46} 259`} fill="none" stroke={DARK} strokeWidth={5} strokeLinecap="round" />
              </g>
            </g>
          </g>
        ))}
      </svg>
    </span>
  );
}
