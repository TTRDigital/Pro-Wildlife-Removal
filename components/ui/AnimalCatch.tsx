"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ANIMALS } from "./animalArt";

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
 * about first, then drop into the loop. Once each time the page is opened. It never blocks taps, is
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
    // Plays once each time an animal's page is opened (Kia: it should be there whenever you look).
    let done = false;
    let busy = false;

    const play = async () => {
      busy = true;
      done = true;
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
