"use client";

import { useEffect, useRef, useState } from "react";
import { Square, Volume2 } from "lucide-react";

/**
 * "Hear it": plays a short real recording of the animal, only when tapped (the file loads on the first tap, never
 * before), and turns into a stop control while it plays (Ben's rules). Never autoplays.
 */
export function SoundButton({ src, label }: { src: string; label: string }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => () => audio.current?.pause(), []);

  const toggle = () => {
    if (!audio.current) {
      audio.current = new Audio(src);
      audio.current.addEventListener("ended", () => setPlaying(false));
    }
    const a = audio.current;
    if (playing) {
      a.pause();
      a.currentTime = 0;
      setPlaying(false);
    } else {
      a.currentTime = 0;
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? `Stop: ${label}` : label}
      aria-pressed={playing}
      className="mt-4 inline-flex min-h-11 w-fit self-start items-center gap-2 rounded-full border border-blue/30 bg-white px-4 font-display text-[0.9375rem] font-semibold text-blue-deep transition-colors hover:border-blue hover:bg-tint"
    >
      {playing ? <Square className="h-4 w-4 fill-current" aria-hidden="true" /> : <Volume2 className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />}
      {playing ? "Stop" : "Hear it"}
    </button>
  );
}
