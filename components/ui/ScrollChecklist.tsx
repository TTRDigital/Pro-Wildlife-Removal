"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A check list that ticks itself off as the reader scrolls: a line down the left fills blue,
 * and as each row reaches the middle of the screen its check draws in and the row lifts into
 * a white card with a blue edge. Rows already passed stay ticked. Without JavaScript, or for
 * people who ask for less motion, every row shows ticked.
 */
export function ScrollChecklist({ items }: { items: string[] }) {
  const list = useRef<HTMLUListElement>(null);
  const [on, setOn] = useState(-1); // index of the last ticked row; -1 before any
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ul = list.current;
    if (!ul) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rows = [...ul.children] as HTMLElement[];
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.62;
      let last = -1;
      rows.forEach((r, i) => {
        if (r.getBoundingClientRect().top + 14 < line) last = i;
      });
      setOn(last);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    // Ticking is on from here; before this every row shows ticked (server HTML, no JS).
    requestAnimationFrame(() => {
      setReady(true);
      update();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const done = (i: number) => !ready || i <= on;
  const fill = !ready
    ? 1
    : items.length > 1
      ? Math.max(0, on) / (items.length - 1)
      : on >= 0
        ? 1
        : 0;

  return (
    <div className="relative mt-7">
      {/* the progress line behind the checks */}
      <span
        aria-hidden="true"
        className="absolute top-5 bottom-5 left-[21px] w-[3px] overflow-hidden rounded-full bg-navy/10"
      >
        <span
          className="block h-full w-full origin-top bg-gradient-to-b from-blue to-blue-deep transition-transform duration-500 ease-out"
          style={{ transform: `scaleY(${fill})` }}
        />
      </span>
      <ul ref={list} className="relative grid gap-3">
        {items.map((c, i) => (
          <li
            key={c}
            className={`flex items-start gap-3.5 rounded-2xl border px-3 py-3 font-display text-[1.0625rem] leading-[1.6] transition-[background-color,border-color,box-shadow,transform,color] duration-500 ${done(i) ? "translate-x-1 border-blue/20 bg-white text-navy shadow-[0_14px_30px_-20px_rgb(14_42_71/0.45)]" : "border-transparent bg-transparent text-navy/55"}`}
          >
            <span
              className={`relative z-10 mt-0.5 flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border-2 transition-[background-color,border-color,transform] duration-300 ${done(i) ? "scale-110 border-blue bg-blue" : "scale-100 border-navy/20 bg-white"}`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: done(i) ? 0 : 1,
                    transition: "stroke-dashoffset 0.45s ease-out 0.12s",
                  }}
                />
              </svg>
            </span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
