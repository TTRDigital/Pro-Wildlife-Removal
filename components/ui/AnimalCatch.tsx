"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/*
 * The tech is drawn in a 200x170 box, holding a catch pole: the hands are at (78, 96) and the
 * pole's loop is centred at (178, 152), down by the ground in front of the tech.
 */
const HANDS = { x: 78, y: 96 };
const LOOP = { x: 178, y: 152 };
const LIFT = -28; // degrees the pole swings up once the animal is in the loop

/** The loop's centre after the pole turns by `deg` around the hands. */
function loopAt(deg: number) {
  const r = (deg * Math.PI) / 180;
  const dx = LOOP.x - HANDS.x,
    dy = LOOP.y - HANDS.y;
  return {
    x: HANDS.x + dx * Math.cos(r) - dy * Math.sin(r),
    y: HANDS.y + dx * Math.sin(r) + dy * Math.cos(r),
  };
}

const INK = "#1f2023";
const FOOT = "#3d3936";

/** Running feet in two alternating pairs (scurry), under a body of the given colour. */
const feet = (xs: [number, number, number, number], y: number, fill = FOOT) => (
  <>
    <g className="mouse-feet">
      <ellipse cx={xs[0]} cy={y} rx={3.4} ry={1.9} fill={fill} />
      <ellipse cx={xs[2]} cy={y} rx={3.4} ry={1.9} fill={fill} />
    </g>
    <g className="mouse-feet-2">
      <ellipse cx={xs[1]} cy={y} rx={3.4} ry={1.9} fill={fill} />
      <ellipse cx={xs[3]} cy={y} rx={3.4} ry={1.9} fill={fill} />
    </g>
  </>
);

const WING_R =
  "M53 16 C62 6 78 2 98 6 C92 10 90 15 91 21 C86 17 81 18 78 24 C74 19 68 20 65 26 C62 21 57 21 53 24 Z";
const WING_L =
  "M47 16 C38 6 22 2 2 6 C8 10 10 15 9 21 C14 17 19 18 22 24 C26 19 32 20 35 26 C38 21 43 21 47 24 Z";

type Animal = {
  viewBox: string;
  width: string;
  fly?: boolean;
  duration: number;
  art: ReactNode;
};

/* Each animal faces left (it runs right to left), drawn in the same flat style as the logo's bats. */
const ANIMALS: Record<string, Animal> = {
  rat: {
    viewBox: "0 0 60 34",
    width: "w-14 sm:w-[72px]",
    duration: 1500,
    art: (
      <>
        <path
          d="M44 22 Q56 24 58 14"
          fill="none"
          stroke="#b9a7a3"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        {feet([18, 24, 36, 42], 30, "#d9a3a0")}
        <ellipse cx={30} cy={20} rx={16} ry={10} fill="#8e8783" />
        <ellipse cx={14} cy={18} rx={9} ry={7.5} fill="#9b9490" />
        <circle cx={16} cy={9} r={5.5} fill="#9b9490" />
        <circle cx={16} cy={9} r={3.2} fill="#e3b0ad" />
        <circle cx={9} cy={16} r={1.5} fill={INK} />
        <circle cx={9.5} cy={15.5} r={0.5} fill="#fff" />
        <circle cx={5.4} cy={19.5} r={1.6} fill="#d98c88" />
      </>
    ),
  },
  raccoon: {
    viewBox: "0 0 76 42",
    width: "w-[76px] sm:w-[100px]",
    duration: 1600,
    art: (
      <>
        <path
          d="M54 22 Q70 18 74 6"
          fill="none"
          stroke="#8a8580"
          strokeWidth={8}
          strokeLinecap="round"
        />
        <path
          d="M60 19 l4 -4 M66 15 l4 -3 M71 10 l3 -3"
          stroke="#2f2c2a"
          strokeWidth={4}
          strokeLinecap="round"
        />
        {feet([24, 30, 46, 52], 38)}
        <ellipse cx={40} cy={26} rx={20} ry={12} fill="#8a8580" />
        <circle cx={18} cy={21} r={11} fill="#a19c97" />
        <path d="M12 12 L13 3 L19 10 Z M21 11 L25 3 L27 12 Z" fill="#8a8580" />
        <path d="M7 20 Q13 15 24 19 Q20 25 13 23 Q9 24 7 20 Z" fill="#2f2c2a" />
        <circle cx={12} cy={20} r={1.7} fill="#fff" />
        <circle cx={19} cy={20} r={1.7} fill="#fff" />
        <path
          d="M8 25 Q5 27 3 26"
          stroke="#e8e5e2"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <circle cx={2.5} cy={26} r={1.8} fill={INK} />
      </>
    ),
  },
  squirrel: {
    viewBox: "0 0 64 46",
    width: "w-16 sm:w-[84px]",
    duration: 1300,
    art: (
      <>
        <path
          d="M38 34 C54 34 64 22 58 8 C54 0 44 4 48 12 C52 20 46 26 40 28 Z"
          fill="#9c7b5f"
        />
        <path
          d="M50 10 C54 14 54 22 48 27"
          fill="none"
          stroke="#b9987a"
          strokeWidth={2}
        />
        {feet([18, 23, 32, 37], 42, "#5e4a3a")}
        <ellipse cx={28} cy={32} rx={13} ry={9} fill="#8f8a85" />
        <circle cx={14} cy={26} r={8} fill="#9d9893" />
        <path d="M12 19 L13 12 L17 18 Z" fill="#8f8a85" />
        <circle cx={10} cy={25} r={1.5} fill={INK} />
        <circle cx={10.4} cy={24.5} r={0.5} fill="#fff" />
        <circle cx={6.5} cy={28} r={1.3} fill="#5e4a3a" />
        <ellipse cx={22} cy={36} rx={5} ry={3} fill="#e9e3dc" />
      </>
    ),
  },
  opossum: {
    viewBox: "0 0 82 40",
    width: "w-[80px] sm:w-[104px]",
    duration: 1700,
    art: (
      <>
        <path
          d="M58 26 Q72 30 80 20"
          fill="none"
          stroke="#e6b3ae"
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        {feet([26, 32, 48, 54], 36)}
        <ellipse cx={42} cy={24} rx={20} ry={11} fill="#c9c4bd" />
        <ellipse cx={42} cy={18} rx={18} ry={6} fill="#b1aba3" />
        <path d="M26 16 Q16 14 6 22 Q14 27 26 28 Z" fill="#f2efea" />
        <circle cx={22} cy={13} r={4.5} fill="#2f2c2a" />
        <circle cx={14} cy={19} r={1.4} fill={INK} />
        <circle cx={5} cy={22} r={2} fill="#e6a39e" />
      </>
    ),
  },
  armadillo: {
    viewBox: "0 0 70 36",
    width: "w-[72px] sm:w-[92px]",
    duration: 1600,
    art: (
      <>
        <path
          d="M54 26 Q64 28 69 32"
          fill="none"
          stroke="#9d8b78"
          strokeWidth={4}
          strokeLinecap="round"
        />
        {feet([24, 30, 44, 50], 33, "#7d6c5c")}
        <path d="M18 27 Q20 8 38 7 Q56 8 58 27 Z" fill="#b19d87" />
        <path
          d="M30 8 Q29 18 30 27 M36 7 Q36 18 36 27 M42 7 Q43 18 42 27 M48 9 Q50 18 48 27"
          stroke="#8a7864"
          strokeWidth={1.4}
          fill="none"
        />
        <path d="M20 22 Q12 18 4 25 Q12 29 21 27 Z" fill="#c1ae98" />
        <path d="M15 19 L14 12 L18 18 Z" fill="#a8947f" />
        <circle cx={11} cy={22} r={1.2} fill={INK} />
      </>
    ),
  },
  snake: {
    viewBox: "0 0 96 24",
    width: "w-[96px] sm:w-[124px]",
    duration: 2000,
    art: (
      <g className="snake-wave">
        <path
          d="M12 13 C22 3 30 3 38 12 C46 21 54 21 62 12 C70 3 78 3 86 12 L93 14"
          fill="none"
          stroke="#5c6b2e"
          strokeWidth={6}
          strokeLinecap="round"
        />
        <path
          d="M12 13 C22 3 30 3 38 12 C46 21 54 21 62 12 C70 3 78 3 86 12"
          fill="none"
          stroke="#8a9a4a"
          strokeWidth={2}
          strokeDasharray="3 5"
          strokeLinecap="round"
        />
        <ellipse cx={8} cy={13} rx={7} ry={4.6} fill="#5c6b2e" />
        <circle cx={6} cy={11.5} r={1.1} fill={INK} />
        <path
          d="M1 13 L-4 12 M1 13 L-4 15"
          stroke="#c0392b"
          strokeWidth={0.9}
        />
      </g>
    ),
  },
  bat: {
    viewBox: "0 0 100 40",
    width: "w-[70px] sm:w-[84px]",
    fly: true,
    duration: 1900,
    art: (
      <g fill={INK}>
        <path
          className="bat-wing-l"
          d={WING_L}
          style={{ animationDuration: "0.2s" }}
        />
        <path
          className="bat-wing-r"
          d={WING_R}
          style={{ animationDuration: "0.2s" }}
        />
        <ellipse cx={50} cy={21} rx={4.5} ry={8} />
        <circle cx={50} cy={12.5} r={4} />
        <path d="M46.5 10.5 L45.5 4 L49 9 Z M53.5 10.5 L54.5 4 L51 9 Z" />
        <circle cx={48.4} cy={12} r={0.9} fill="#fff" />
        <circle cx={51.6} cy={12} r={0.9} fill="#fff" />
      </g>
    ),
  },
  bee: {
    viewBox: "0 0 60 40",
    width: "w-14 sm:w-[68px]",
    fly: true,
    duration: 1900,
    art: (
      <>
        {[
          [14, 14],
          [34, 8],
          [40, 28],
        ].map(([x, y], i) => (
          <g
            key={i}
            className="bee-buzz"
            style={{ animationDelay: `${i * -0.07}s` }}
          >
            <ellipse
              cx={x + 2}
              cy={y - 5}
              rx={4}
              ry={3}
              fill="#dfeff8"
              opacity={0.85}
            />
            <ellipse
              cx={x + 6}
              cy={y - 4}
              rx={3.4}
              ry={2.6}
              fill="#dfeff8"
              opacity={0.85}
            />
            <ellipse cx={x + 4} cy={y} rx={7} ry={4.6} fill="#f5b81c" />
            <path
              d={`M${x + 2} ${y - 4.2} v8.4 M${x + 6} ${y - 4.4} v8.8`}
              stroke={INK}
              strokeWidth={1.8}
            />
            <circle cx={x - 2} cy={y} r={3.2} fill={INK} />
          </g>
        ))}
      </>
    ),
  },
};

/** Which animal a page is about, from its address (service pages, their places and attic pages). */
function animalFor(path: string) {
  const m = path.match(
    /^\/services\/(rat|bat|raccoon|squirrel|opossum|snake|armadillo|bee)s?-(?:removal|in-attic)\b/,
  );
  return m ? m[1] : "rat";
}

/**
 * A little scene on the inner pages (the home page has the bat in its logo scene): once the
 * visitor scrolls down, the page's animal (the rat on most pages, the bat on bat pages, and so
 * on) dashes from the right edge to the left, a tech pops up in the corner with a catch pole,
 * drops the loop over it and lifts it away, then ducks back down. Flying ones (bats, bees) dart
 * about first, then drop into the loop. Once per visit for each animal. It never blocks taps, is
 * hidden from screen readers, and does not run for people who ask for less motion.
 */
export function AnimalCatch() {
  const path = usePathname() ?? "";
  const kind = animalFor(path);
  const animal = ANIMALS[kind];
  const tech = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const pole = useRef<SVGGElement>(null);
  const critter = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      path === "/" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const KEY = `pw-caught-${kind}`;
    let done = false;
    try {
      done = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (done) return;
    let busy = false;

    const play = async () => {
      busy = true;
      done = true;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      setShow(true);
      await new Promise((r) =>
        requestAnimationFrame(() => requestAnimationFrame(r)),
      );
      const t = tech.current,
        s = spot.current,
        p = pole.current,
        m = critter.current;
      if (!t || !s || !p || !m) return;
      const W = window.innerWidth,
        H = window.innerHeight;
      const box = s.getBoundingClientRect();
      const k = box.width / 200;
      const at = (deg: number) => {
        const l = loopAt(deg);
        return {
          x: box.left + l.x * k - m.offsetWidth * 0.3,
          y: box.top + l.y * k - m.offsetHeight * 0.62,
        };
      };
      const ground = at(0);
      const lifted = at(LIFT);
      const drop = box.height + 40;
      const pos = (x: number, y: number, extra = "") => ({
        transform: `translate(${x}px, ${y}px) ${extra}`,
      });

      // the tech pops up, pole raised, while the animal comes in from the right
      t.animate(
        [
          { transform: `translateY(${drop}px)` },
          { transform: "translateY(0)" },
        ],
        {
          duration: 550,
          easing: "cubic-bezier(.2,1.4,.4,1)",
          fill: "forwards",
        },
      );
      p.animate(
        [
          { transform: `rotate(${LIFT}deg)` },
          { transform: `rotate(${LIFT}deg)` },
        ],
        { duration: 10, fill: "forwards" },
      );
      const flight = animal.fly
        ? [
            pos(W + 40, H * 0.3, "rotate(-8deg)"),
            { ...pos(W * 0.68, H * 0.45, "rotate(6deg)"), offset: 0.3 },
            { ...pos(W * 0.45, H * 0.25, "rotate(-10deg)"), offset: 0.6 },
            {
              ...pos(ground.x + 50, ground.y - 70, "rotate(8deg)"),
              offset: 0.85,
            },
            pos(ground.x, ground.y, "rotate(0deg)"),
          ]
        : [
            pos(W + 40, ground.y),
            { ...pos(W * 0.62, ground.y - 6), offset: 0.35 },
            { ...pos(W * 0.4, ground.y), offset: 0.62 },
            { ...pos(ground.x + 40, ground.y - 4), offset: 0.88 },
            pos(ground.x, ground.y),
          ];
      await m.animate(flight, {
        duration: animal.duration,
        easing: "cubic-bezier(.3,.1,.6,1)",
        fill: "forwards",
      }).finished;
      // snag: the loop drops over it
      await p.animate(
        [{ transform: `rotate(${LIFT}deg)` }, { transform: "rotate(0deg)" }],
        { duration: 160, easing: "ease-in", fill: "forwards" },
      ).finished;
      m.classList.add("mouse-caught");
      await new Promise((r) => setTimeout(r, 180));
      // lift it up, wriggling
      const up = {
        duration: 450,
        easing: "ease-out",
        fill: "forwards" as const,
      };
      p.animate(
        [{ transform: "rotate(0deg)" }, { transform: `rotate(${LIFT}deg)` }],
        up,
      );
      await m.animate([pos(ground.x, ground.y), pos(lifted.x, lifted.y)], up)
        .finished;
      await m.animate(
        [
          pos(lifted.x, lifted.y, "rotate(0deg)"),
          pos(lifted.x, lifted.y, "rotate(-14deg)"),
          pos(lifted.x, lifted.y, "rotate(14deg)"),
          pos(lifted.x, lifted.y, "rotate(0deg)"),
        ],
        { duration: 700, fill: "forwards" },
      ).finished;
      await new Promise((r) => setTimeout(r, 250));
      // and away they go
      const down = {
        duration: 550,
        easing: "cubic-bezier(.5,0,.8,.4)",
        fill: "forwards" as const,
      };
      t.animate(
        [
          { transform: "translateY(0)" },
          { transform: `translateY(${drop}px)` },
        ],
        down,
      );
      await m.animate(
        [pos(lifted.x, lifted.y), pos(lifted.x, lifted.y + drop)],
        down,
      ).finished;
      setShow(false);
      busy = false;
    };

    const onScroll = () => {
      if (busy || done) return;
      if (window.scrollY > window.innerHeight * 0.6) play();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path, kind, animal]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden ${show ? "" : "hidden"}`}
    >
      <div
        ref={critter}
        className={`mouse-run absolute top-0 left-0 ${animal.width}`}
      >
        <svg viewBox={animal.viewBox} className="block w-full overflow-visible">
          {animal.art}
        </svg>
      </div>
      {/* the tech with a catch pole, bottom-left, above the phone call bar */}
      <div
        ref={spot}
        className="absolute bottom-[88px] left-2 w-[150px] sm:bottom-6 sm:left-8 sm:w-[190px] lg:w-[220px]"
      >
        <div ref={tech} style={{ transform: "translateY(120%)" }}>
          <svg
            viewBox="0 0 200 170"
            className="block w-full overflow-visible drop-shadow-[0_10px_18px_rgb(14_42_71/0.35)]"
          >
            {/* catch pole, swinging from the hands, with its cable loop at the end */}
            <g
              ref={pole}
              style={{
                transformOrigin: `${HANDS.x}px ${HANDS.y}px`,
                transformBox: "view-box",
              }}
            >
              <line
                x1={HANDS.x - 14}
                y1={HANDS.y - 9}
                x2={LOOP.x - 8}
                y2={LOOP.y - 8}
                stroke="#5c7086"
                strokeWidth={4.5}
                strokeLinecap="round"
              />
              <circle
                cx={LOOP.x}
                cy={LOOP.y}
                r={13}
                fill="none"
                stroke="#2c2b29"
                strokeWidth={2.4}
              />
            </g>
            {/* legs and boots */}
            <rect x={36} y={122} width={13} height={36} rx={4} fill="#0e2a47" />
            <rect x={53} y={122} width={13} height={36} rx={4} fill="#0e2a47" />
            <rect x={32} y={154} width={19} height={9} rx={4} fill="#2c2b29" />
            <rect x={51} y={154} width={19} height={9} rx={4} fill="#2c2b29" />
            {/* body: company-blue shirt */}
            <rect x={30} y={72} width={42} height={56} rx={14} fill="#1e9bf0" />
            <rect x={30} y={112} width={42} height={8} fill="#0a6fb8" />
            <circle cx={42} cy={88} r={4} fill="#fff" opacity={0.9} />
            {/* arms holding the pole */}
            <path
              d="M64 82 Q78 84 78 96"
              stroke="#1e9bf0"
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M36 84 Q44 92 64 88"
              stroke="#1e9bf0"
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
            />
            <circle cx={78} cy={96} r={5.5} fill="#e8b98f" />
            <circle cx={64} cy={88} r={5.5} fill="#e8b98f" />
            {/* head with a navy cap */}
            <circle cx={51} cy={52} r={17} fill="#e8b98f" />
            <path d="M33 50 Q34 30 52 30 Q69 30 70 48 Z" fill="#0e2a47" />
            <path d="M62 46 Q76 45 80 50 Q70 52 60 50 Z" fill="#0e2a47" />
            <circle cx={46} cy={55} r={2} fill="#2c2b29" />
            <circle cx={58} cy={55} r={2} fill="#2c2b29" />
            <path
              d="M47 62 Q52 67 58 62"
              stroke="#2c2b29"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
