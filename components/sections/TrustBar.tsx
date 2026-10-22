import type { TrustBarSection } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

/** Navy strip of four short trust points under the hero (pw-trust). */
export function TrustBar({ section }: { section: TrustBarSection }) {
  return (
    <div className="bg-navy py-10">
      <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-4 md:gap-6">
        {section.items.map((it) => (
          <li key={it.label} className="flex min-w-0 flex-col items-center gap-3 text-center">
            <span className="text-blue">
              <Icon name={it.icon} className="h-[26px] w-[26px]" />
            </span>
            <span className="font-display text-[0.8125rem] font-semibold uppercase leading-normal tracking-[1px] text-white">{it.label}</span>
            {it.text ? <span className="text-sm text-on-navy">{it.text}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
