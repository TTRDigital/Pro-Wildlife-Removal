"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders its children once the box comes within `margin` of the screen, so below-the-fold
 * photos aren't fetched before the first paint (TTR-846). The parent keeps the box's size,
 * so nothing shifts. Without JavaScript (and for crawlers that don't run it) a <noscript>
 * copy shows the children as usual.
 */
export function NearView({ children, margin = "200px" }: { children: ReactNode; margin?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, margin]);

  if (near) return <>{children}</>;
  return (
    <span ref={ref} className="absolute inset-0">
      <noscript>{children}</noscript>
    </span>
  );
}
