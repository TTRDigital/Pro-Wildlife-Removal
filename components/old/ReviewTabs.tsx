"use client";

import { useId, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * Google / Yelp / Facebook review tabs of the old site. Every panel is
 * rendered on the server (inactive ones are `hidden`), so all reviews are in
 * the HTML for search engines; the tabs just switch which one shows.
 */
export function ReviewTabs({ tabs }: { tabs: { label: string; panel: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const onKey = (e: KeyboardEvent) => {
    const n = tabs.length;
    const next = e.key === "ArrowRight" ? (active + 1) % n : e.key === "ArrowLeft" ? (active - 1 + n) % n : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };
  return (
    <div>
      <div role="tablist" aria-label="Reviews by site" className="flex flex-wrap" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.label}
            id={`${id}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="o-tab min-h-11 px-6 py-2.5 font-old text-lg font-semibold"
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.label} id={`${id}-panel-${i}`} role="tabpanel" aria-labelledby={`${id}-tab-${i}`} hidden={i !== active} className="bg-beige px-5 py-6 md:px-[55px] md:py-8">
          {t.panel}
        </div>
      ))}
    </div>
  );
}
