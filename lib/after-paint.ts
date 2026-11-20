/**
 * Runs `fn` just after the next frame is painted, when layout is already up to date, so reading
 * scroll position or sizes there costs nothing (no forced reflow during hydration, TTR-2516).
 * Returns a cancel function for effect cleanups.
 */
export function afterPaint(fn: () => void): () => void {
  let timer = 0;
  const raf = requestAnimationFrame(() => {
    timer = window.setTimeout(fn, 0);
  });
  return () => {
    cancelAnimationFrame(raf);
    window.clearTimeout(timer);
  };
}
