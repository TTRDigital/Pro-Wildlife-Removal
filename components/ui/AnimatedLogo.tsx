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
/*
 * The three bats, removed from logo-live.png (logo.png with the shield blue filled in behind
 * the two small ones) and redrawn as vector bats whose wings beat up and down from the
 * shoulder. Each bat is drawn in a 100x40 box (body at x 50) and placed where the logo had it.
 * The chimney top is at x 324-366, y 0.
 */
const BASE = "/images/brand/logo.png";
const BAT_INK = "#1f2023";
const BATS = [
  { at: "translate(371 4) rotate(-8 50 20) scale(0.92)", fly: "logo-bat-fly", flap: "0.36s", delay: "0s" },
  { at: "translate(64 128) scale(0.62)", fly: "logo-bat-fly-2", flap: "0.3s", delay: "-0.12s" },
  { at: "translate(59 163) scale(0.54)", fly: "logo-bat-fly-3", flap: "0.27s", delay: "-0.05s" },
];
const WING_R = "M53 16 C62 6 78 2 98 6 C92 10 90 15 91 21 C86 17 81 18 78 24 C74 19 68 20 65 26 C62 21 57 21 53 24 Z";
const WING_L = "M47 16 C38 6 22 2 2 6 C8 10 10 15 9 21 C14 17 19 18 22 24 C26 19 32 20 35 26 C38 21 43 21 47 24 Z";

/** One bat: body, head and ears, and two wings that flap from the shoulders. */
function Bat({ at, flap, delay }: { at: string; flap: string; delay: string }) {
  const beat = { animationDuration: flap, animationDelay: delay };
  return (
    <g transform={at} fill={BAT_INK}>
      <path className="bat-wing-l" d={WING_L} style={beat} />
      <path className="bat-wing-r" d={WING_R} style={beat} />
      <ellipse cx={50} cy={21} rx={4.5} ry={8} />
      <circle cx={50} cy={12.5} r={4} />
      <path d="M46.5 10.5 L45.5 4 L49 9 Z M53.5 10.5 L54.5 4 L51 9 Z" />
    </g>
  );
}
const SMOKE = [0, 1, 2, 3];
const FUR = "#938d8d";
const DARK = "#2c2b29";

/**
 * The logo, alive: the raccoon blinks now and then (grey lids drop over the eyes and lift)
 * and its eyes glance around (the sparkles move inside the pupils). Hovering or tapping the
 * logo makes it blink at once. The bats beat their wings and flit about, and smoke puffs out of the
 * chimney. Drawn over the real logo, so the artwork itself is untouched.
 * Still for people who ask for less motion.
 */
export function AnimatedLogo({ logo, className = "", sizes, priority = false }: { logo: Img; className?: string; sizes: string; priority?: boolean }) {
  const w = logo.width ?? 480;
  const h = logo.height ?? 442;
  // The default logo swaps in its bat-less copy and draws the bat on top; a different logo from the CMS shows as is.
  const own = logo.src === BASE;
  return (
    <span className={`logo-live relative inline-block ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <Image src={own ? "/images/brand/logo-live.png" : logo.src} alt={logo.alt || "Pro Wildlife Removal logo"} width={w} height={h} sizes={sizes} priority={priority} className="h-full w-full" />
      <svg aria-hidden="true" viewBox={`0 0 ${w} ${h}`} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          {EYES.map((e, i) => (
            <clipPath key={i} id={`pw-eye-${i}`}>
              <circle cx={e.cx} cy={248} r={47} />
            </clipPath>
          ))}
        </defs>
        {own ? (
          <>
            {/* smoke: soft puffs that rise from the chimney, grow and drift off with the wind, one after another */}
            {SMOKE.map((i) => (
              <circle key={i} className="logo-smoke" cx={345} cy={4} r={15} fill="#8e9aa7" style={{ animationDelay: `${i * 0.9}s` }} />
            ))}
            {/* the bats: each drifts in its own loop and beats its wings */}
            {BATS.map((b) => (
              <g key={b.fly} className={b.fly}>
                <Bat at={b.at} flap={b.flap} delay={b.delay} />
              </g>
            ))}
          </>
        ) : null}
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
