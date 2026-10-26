import { Phone } from "lucide-react";
import { chatWidgetId } from "@/lib/chat";

/** Call bar fixed to the bottom on phones, on every page: one big orange call button with an "open now" dot. Leaves room for the chat bubble when the chat is on. */
/** local: a page's own line (a county page), drawn over the site-wide bar with no second spacer. */
export function MobileCallBar({ phone, phoneHref, local = false }: { phone: string; phoneHref: string; local?: boolean }) {
  return (
    <>
      {local ? null : <div aria-hidden="true" className="h-[76px] md:hidden" />}
      <div className={`fixed inset-x-0 bottom-0 ${local ? "z-[41]" : "z-40"} border-t border-navy/10 bg-white/90 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-12px_rgb(14_42_71/0.25)] backdrop-blur-md md:hidden ${chatWidgetId ? "pr-[76px]" : ""}`}>
        <a
          href={phoneHref}
          data-track="click_to_call"
          className="call-pulse flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-xl bg-cta px-4 font-display text-[1.0625rem] font-bold text-white active:scale-[0.98]"
        >
          <Phone className="h-5 w-5 flex-none" strokeWidth={2.25} aria-hidden="true" />
          Call {phone}
          <span className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-black/20 px-2 py-0.5 text-xs font-semibold">
            <span className="live-dot !h-2 !w-2" aria-hidden="true" />
            24/7
          </span>
        </a>
      </div>
    </>
  );
}
