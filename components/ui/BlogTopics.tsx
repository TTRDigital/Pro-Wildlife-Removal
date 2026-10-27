"use client";

import { useState, type ReactNode } from "react";

/**
 * Topic buttons above the blog list: picking one shows only that animal's posts (the list is
 * all in the page; the rest are hidden with CSS, see .blog-list[data-topic]). "All" shows every post.
 */
export function BlogTopics({
  topics,
  children,
}: {
  topics: { key: string; label: string; count: number }[];
  children: ReactNode;
}) {
  const [on, setOn] = useState("all");
  const all = topics.reduce((n, t) => n + t.count, 0);
  return (
    <>
      <div
        role="group"
        aria-label="Filter posts by animal"
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 md:mb-10"
      >
        {[{ key: "all", label: "All", count: all }, ...topics].map((t) => (
          <button
            key={t.key}
            type="button"
            aria-pressed={on === t.key}
            onClick={() => setOn(t.key)}
            className={`inline-flex min-h-11 flex-none items-center gap-2 rounded-full border px-4 font-display text-[0.9375rem] font-bold transition-colors ${on === t.key ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-blue/40 hover:bg-tint"}`}
          >
            {t.label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${on === t.key ? "bg-white/15" : "bg-tint text-blue-deep"}`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>
      <div className="blog-list" data-topic={on}>
        {children}
      </div>
    </>
  );
}
