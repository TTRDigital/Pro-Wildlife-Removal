export function Stars({ rating = 5, className = "" }: { rating?: number; className?: string }) {
  const n = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div role="img" aria-label={`Rated ${n} out of 5 stars`} className={`text-[1.25rem] leading-none tracking-[2px] text-star ${className}`}>
      {"★".repeat(n)}
      <span className="text-line">{"★".repeat(5 - n)}</span>
    </div>
  );
}
