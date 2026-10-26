"use client";

import { useEffect, useRef, useState } from "react";

const INK = "#1f2023";
const WING_R =
  "M53 16 C62 6 78 2 98 6 C92 10 90 15 91 21 C86 17 81 18 78 24 C74 19 68 20 65 26 C62 21 57 21 53 24 Z";
const WING_L =
  "M47 16 C38 6 22 2 2 6 C8 10 10 15 9 21 C14 17 19 18 22 24 C26 19 32 20 35 26 C38 21 43 21 47 24 Z";

/* The tech is drawn in a 120x170 box; the net's hoop is centred at (104, 22) and the hands at (78, 96). */
const HOOP = { x: 104, y: 22 };

/**
 * A little scene on the home page: once the visitor scrolls past the banner, a bat flaps in
 * from the right and zigzags across the screen, a wildlife tech pops up in the bottom-left
 * corner with a net, swings it and catches the bat, then ducks back down with it. Plays once
 * per visit. It never blocks taps (pointer-events: none), is hidden
 * from screen readers, and does not run for people who ask for less motion.
 */
export function BatCatch() {
  const tech = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const net = useRef<SVGGElement>(null);
  const bat = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Once per visit (Kia): not again further down, nor when coming back to the home page.
    const KEY = "pw-bat-caught";
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
        n = net.current,
        b = bat.current;
      if (!t || !s || !n || !b) return;
      const W = window.innerWidth,
        H = window.innerHeight;
      const box = s.getBoundingClientRect();
      const k = box.width / 120;
      const hx = box.left + HOOP.x * k - 22,
        hy = box.top + HOOP.y * k - 14;
      const drop = box.height + 40;

      const up = t.animate(
        [
          { transform: `translateY(${drop}px)` },
          { transform: "translateY(0)" },
        ],
        {
          duration: 650,
          easing: "cubic-bezier(.2,1.4,.4,1)",
          fill: "forwards",
        },
      );
      const fly = b.animate(
        [
          { transform: `translate(${W + 60}px, ${H * 0.22}px) rotate(-8deg)` },
          { transform: `translate(${W * 0.72}px, ${H * 0.4}px) rotate(6deg)` },
          {
            transform: `translate(${W * 0.55}px, ${H * 0.18}px) rotate(-10deg)`,
          },
          { transform: `translate(${W * 0.38}px, ${H * 0.42}px) rotate(8deg)` },
          { transform: `translate(${hx}px, ${hy}px) rotate(0deg)` },
        ],
        { duration: 2600, easing: "ease-in-out", fill: "forwards" },
      );
      await up.finished;
      // swing the net up to meet the bat
      n.animate(
        [
          { transform: "rotate(0deg)" },
          { transform: "rotate(-24deg)" },
          { transform: "rotate(-24deg)", offset: 0.7 },
          { transform: "rotate(6deg)" },
          { transform: "rotate(0deg)" },
        ],
        { duration: 1950, easing: "ease-in-out" },
      );
      await fly.finished;
      // caught: the bat wriggles in the net
      await b.animate(
        [
          { transform: `translate(${hx}px, ${hy}px) scale(0.85) rotate(0deg)` },
          {
            transform: `translate(${hx - 3}px, ${hy + 2}px) scale(0.85) rotate(-12deg)`,
          },
          {
            transform: `translate(${hx + 3}px, ${hy}px) scale(0.85) rotate(12deg)`,
          },
          {
            transform: `translate(${hx}px, ${hy + 2}px) scale(0.85) rotate(0deg)`,
          },
        ],
        { duration: 900, iterations: 1, fill: "forwards" },
      ).finished;
      await new Promise((r) => setTimeout(r, 350));
      // both duck back down
      const down = {
        duration: 600,
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
      await b.animate(
        [
          { transform: `translate(${hx}px, ${hy}px) scale(0.85)` },
          { transform: `translate(${hx}px, ${hy + drop}px) scale(0.85)` },
        ],
        down,
      ).finished;
      setShow(false);
      busy = false;
    };

    const onScroll = () => {
      if (busy || done) return;
      if (window.scrollY > window.innerHeight * 0.7) play();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden ${show ? "" : "hidden"}`}
    >
      {/* the bat */}
      <div ref={bat} className="absolute top-0 left-0 w-11 sm:w-14">
        <svg
          viewBox="0 0 100 40"
          className="block w-full overflow-visible"
          fill={INK}
        >
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
        </svg>
      </div>
      {/* the tech, bottom-left, above the phone call bar */}
      <div
        ref={spot}
        className="absolute bottom-[88px] left-3 w-[104px] sm:bottom-6 sm:left-8 sm:w-[150px] lg:w-[180px]"
      >
        <div ref={tech} style={{ transform: "translateY(120%)" }}>
          <svg
            viewBox="0 0 120 170"
            className="block w-full overflow-visible drop-shadow-[0_10px_18px_rgb(14_42_71/0.35)]"
          >
            {/* net on a pole, swinging from the hands */}
            <g
              ref={net}
              style={{ transformOrigin: "78px 96px", transformBox: "view-box" }}
            >
              <line
                x1={66}
                y1={122}
                x2={96}
                y2={34}
                stroke="#8a5a2b"
                strokeWidth={4}
                strokeLinecap="round"
              />
              <ellipse
                cx={HOOP.x}
                cy={HOOP.y}
                rx={17}
                ry={13}
                fill="rgb(255 255 255 / 0.35)"
                stroke="#5c7086"
                strokeWidth={3}
              />
              <path
                d={`M${HOOP.x - 14} ${HOOP.y - 4} L${HOOP.x + 14} ${HOOP.y - 4} M${HOOP.x - 16} ${HOOP.y + 3} L${HOOP.x + 16} ${HOOP.y + 3} M${HOOP.x - 8} ${HOOP.y - 11} L${HOOP.x - 8} ${HOOP.y + 11} M${HOOP.x} ${HOOP.y - 13} L${HOOP.x} ${HOOP.y + 13} M${HOOP.x + 8} ${HOOP.y - 11} L${HOOP.x + 8} ${HOOP.y + 11}`}
                stroke="#5c7086"
                strokeWidth={1.2}
                opacity={0.7}
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
            {/* arms reaching to the pole */}
            <path
              d="M64 82 Q80 86 80 98"
              stroke="#1e9bf0"
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M36 84 Q40 104 70 112"
              stroke="#1e9bf0"
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
            />
            <circle cx={80} cy={98} r={5.5} fill="#e8b98f" />
            <circle cx={70} cy={112} r={5.5} fill="#e8b98f" />
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
