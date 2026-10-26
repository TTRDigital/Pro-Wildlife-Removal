"use client";

import { useEffect, useRef } from "react";

/** A thin bar along the top of the screen that fills as the reader moves through the article. */
export function ReadProgress({ target }: { target: string }) {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = document.getElementById(target);
    const b = bar.current;
    if (!el || !b) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const done = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      b.style.transform = `scaleX(${done})`;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);
  return (
    <div
      ref={bar}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blue via-blue-light to-cta"
    />
  );
}
