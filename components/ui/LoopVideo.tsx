"use client";

import { useEffect, useRef } from "react";

/**
 * A short silent clip that loops, for the animal tiles: it plays only while on screen,
 * shows its poster (the photo) until it can play, and stays on the poster for people who
 * ask for less motion or save data.
 */
export function LoopVideo({ src, poster, className = "" }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (still) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-hidden="true" className={`absolute inset-0 h-full w-full object-cover ${className}`} />;
}
