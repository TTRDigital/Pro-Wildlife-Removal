"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The steps list. On phones it is a swipe row that shows one step card at a time, with numbered
 * buttons above it that light up for the step in view and jump to a step when tapped; it moves
 * on by itself every few seconds while on screen, until the visitor swipes or taps. On desktop
 * the same list is a plain grid (the buttons are hidden). Still for people who ask for less motion.
 */
export function StepRail({ labels, className = "", children }: { labels: string[]; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const [at, setAt] = useState(0);
  const touched = useRef(false);

  const go = (i: number) => {
    const ol = ref.current;
    const li = ol?.children[i] as HTMLElement | undefined;
    if (ol && li) ol.scrollTo({ left: li.offsetLeft - ol.offsetLeft - (ol.clientWidth - li.offsetWidth) / 2, behavior: "smooth" });
  };

  useEffect(() => {
    const ol = ref.current;
    if (!ol) return;
    const onScroll = () => {
      const first = ol.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.offsetWidth + parseFloat(getComputedStyle(ol).columnGap || "0");
      setAt(Math.max(0, Math.min(labels.length - 1, Math.round(ol.scrollLeft / step))));
    };
    const stop = () => (touched.current = true);
    ol.addEventListener("scroll", onScroll, { passive: true });
    ol.addEventListener("pointerdown", stop);
    ol.addEventListener("touchstart", stop, { passive: true });

    // Autoplay on phones only, while the list is on screen.
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phone = window.matchMedia("(max-width: 1023px)");
    let seen = false;
    const io = new IntersectionObserver(([e]) => (seen = e.isIntersecting), { threshold: 0.6 });
    io.observe(ol);
    const timer = still
      ? undefined
      : window.setInterval(() => {
          if (!seen || touched.current || !phone.matches) return;
          const first = ol.children[0] as HTMLElement | undefined;
          if (!first) return;
          const step = first.offsetWidth + parseFloat(getComputedStyle(ol).columnGap || "0");
          const now = Math.round(ol.scrollLeft / step);
          const next = now >= labels.length - 1 ? 0 : now + 1;
          const li = ol.children[next] as HTMLElement;
          ol.scrollTo({ left: li.offsetLeft - ol.offsetLeft - (ol.clientWidth - li.offsetWidth) / 2, behavior: "smooth" });
        }, 6000);
    return () => {
      ol.removeEventListener("scroll", onScroll);
      ol.removeEventListener("pointerdown", stop);
      ol.removeEventListener("touchstart", stop);
      io.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, [labels.length]);

  return (
    <>
      <div className="mb-5 flex items-center justify-center gap-1.5 lg:hidden">
        {labels.map((l, i) => (
          <button
            key={l}
            type="button"
            onClick={() => {
              touched.current = true;
              go(i);
            }}
            aria-label={`Step ${i + 1}: ${l}`}
            aria-current={i === at ? "step" : undefined}
            className="group flex h-11 min-w-11 items-center justify-center"
          >
            <span className={`flex h-9 items-center justify-center rounded-full font-display text-sm font-extrabold transition-all duration-300 ${i === at ? "w-14 bg-cta text-white shadow-[0_8px_18px_-8px_rgb(180_90_0/0.9)]" : i < at ? "w-9 bg-navy text-white" : "w-9 bg-white text-navy ring-1 ring-line"}`}>{i + 1}</span>
          </button>
        ))}
      </div>
      <ol ref={ref} className={className}>
        {children}
      </ol>
      <p aria-hidden="true" className="mt-3 text-center font-display text-sm font-semibold text-meta lg:hidden">
        {at < labels.length - 1 ? "Swipe for the next step →" : "← Swipe back"}
      </p>
    </>
  );
}
