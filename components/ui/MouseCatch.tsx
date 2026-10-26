"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/*
 * The tech is drawn in a 200x170 box, holding a catch pole: the hands are at (78, 96) and the
 * pole's loop is centred at (178, 152), down by the ground in front of the tech.
 */
const HANDS = { x: 78, y: 96 };
const LOOP = { x: 178, y: 152 };
const LIFT = -28; // degrees the pole swings up once the mouse is in the loop

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

/**
 * A little scene on the inner pages (the home page has the bat): once the visitor scrolls down,
 * a mouse scurries fast from the right edge to the left along the bottom of the screen, a tech
 * pops up in the corner with a catch pole, drops the loop over it and lifts it away, then ducks
 * back down. Once per visit. It never blocks taps, is hidden from screen readers, and does not
 * run for people who ask for less motion.
 */
export function MouseCatch() {
  const path = usePathname();
  const tech = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const pole = useRef<SVGGElement>(null);
  const mouse = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      path === "/" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const KEY = "pw-mouse-caught";
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
        m = mouse.current;
      if (!t || !s || !p || !m) return;
      const W = window.innerWidth;
      const box = s.getBoundingClientRect();
      const k = box.width / 200;
      const half = m.offsetWidth / 2;
      const at = (deg: number) => {
        const l = loopAt(deg);
        return {
          x: box.left + l.x * k - half,
          y: box.top + l.y * k - m.offsetHeight * 0.62,
        };
      };
      const ground = at(0);
      const lifted = at(LIFT);
      const drop = box.height + 40;

      // the tech pops up, pole raised, while the mouse dashes in from the right
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
      await m.animate(
        [
          { transform: `translate(${W + 40}px, ${ground.y}px)` },
          {
            transform: `translate(${W * 0.62}px, ${ground.y - 6}px)`,
            offset: 0.35,
          },
          { transform: `translate(${W * 0.4}px, ${ground.y}px)`, offset: 0.62 },
          {
            transform: `translate(${ground.x + 40}px, ${ground.y - 4}px)`,
            offset: 0.88,
          },
          { transform: `translate(${ground.x}px, ${ground.y}px)` },
        ],
        {
          duration: 1500,
          easing: "cubic-bezier(.3,.1,.6,1)",
          fill: "forwards",
        },
      ).finished;
      // snag: the loop drops over the mouse
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
      await m.animate(
        [
          { transform: `translate(${ground.x}px, ${ground.y}px)` },
          { transform: `translate(${lifted.x}px, ${lifted.y}px)` },
        ],
        up,
      ).finished;
      await m.animate(
        [
          { transform: `translate(${lifted.x}px, ${lifted.y}px) rotate(0deg)` },
          {
            transform: `translate(${lifted.x}px, ${lifted.y}px) rotate(-14deg)`,
          },
          {
            transform: `translate(${lifted.x}px, ${lifted.y}px) rotate(14deg)`,
          },
          { transform: `translate(${lifted.x}px, ${lifted.y}px) rotate(0deg)` },
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
        [
          { transform: `translate(${lifted.x}px, ${lifted.y}px)` },
          { transform: `translate(${lifted.x}px, ${lifted.y + drop}px)` },
        ],
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
  }, [path]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden ${show ? "" : "hidden"}`}
    >
      {/* the mouse, running left: body, head, ears, tail, scurrying feet */}
      <div
        ref={mouse}
        className="mouse-run absolute top-0 left-0 w-14 sm:w-[72px]"
      >
        <svg viewBox="0 0 60 34" className="block w-full overflow-visible">
          <path
            d="M44 22 Q56 24 58 14"
            fill="none"
            stroke="#b9a7a3"
            strokeWidth={2.2}
            strokeLinecap="round"
          />
          <g className="mouse-feet">
            <ellipse cx={18} cy={30} rx={3.2} ry={1.8} fill="#d9a3a0" />
            <ellipse cx={36} cy={30} rx={3.2} ry={1.8} fill="#d9a3a0" />
          </g>
          <g className="mouse-feet-2">
            <ellipse cx={24} cy={30} rx={3.2} ry={1.8} fill="#d9a3a0" />
            <ellipse cx={42} cy={30} rx={3.2} ry={1.8} fill="#d9a3a0" />
          </g>
          <ellipse cx={30} cy={20} rx={16} ry={10} fill="#8e8783" />
          <ellipse cx={14} cy={18} rx={9} ry={7.5} fill="#9b9490" />
          <circle cx={16} cy={9} r={5.5} fill="#9b9490" />
          <circle cx={16} cy={9} r={3.2} fill="#e3b0ad" />
          <circle cx={9} cy={16} r={1.5} fill="#1f2023" />
          <circle cx={9.5} cy={15.5} r={0.5} fill="#fff" />
          <circle cx={5.4} cy={19.5} r={1.6} fill="#d98c88" />
          <path
            d="M6 19 L-1 17 M6 20 L-1 21"
            stroke="#5c5552"
            strokeWidth={0.6}
          />
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
                strokeWidth={2.2}
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
