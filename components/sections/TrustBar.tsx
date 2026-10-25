import type { TrustBarSection } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

/** Four short trust points under the hero: icon tile and label, a 2x2 grid of small cards on phones, one row on desktop. */
export function TrustBar({ section }: { section: TrustBarSection }) {
  return (
    <div className="border-b border-line bg-white py-6 md:py-8">
      <ul className="wrap grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {section.items.map((it, i) => (
          <li
            key={it.label}
            data-reveal
            style={{ ["--i" as string]: i }}
            className="flex min-w-0 items-center gap-3 rounded-2xl border border-line bg-tint-2 p-3 md:border-0 md:bg-transparent md:p-0"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy text-blue-light md:h-12 md:w-12">
              <Icon name={it.icon} className="h-[22px] w-[22px]" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[0.8125rem] leading-snug font-bold text-navy md:text-[0.9375rem]">{it.label}</span>
              {it.text ? <span className="mt-0.5 hidden text-sm leading-snug text-meta md:block">{it.text}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
