import { Phone } from "lucide-react";
import { chatWidgetId } from "@/lib/chat";

/** Call bar fixed to the bottom on phones, on every page: "Free Inspection, Call Now" beside a big orange call button (as on the client-approved landing pages). Leaves room for the chat bubble when the chat is on. */
export function MobileCallBar({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return (
    <>
      <div aria-hidden="true" className="h-[76px] md:hidden" />
      <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/90 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-12px_rgb(14_42_71/0.25)] backdrop-blur-md md:hidden ${chatWidgetId ? "pr-[76px]" : ""}`}>
        <a href={phoneHref} data-track="click_to_call" className="flex items-center gap-3 active:scale-[0.99]">
          <span className="min-w-0 flex-none pl-1 leading-tight">
            <span className="block font-display text-[0.6875rem] font-bold tracking-[0.5px] text-blue-deep uppercase">Free Inspection</span>
            <span className="block font-display text-[1.0625rem] font-extrabold text-navy">Call Now</span>
          </span>
          <span className="call-pulse flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-xl bg-cta px-3 font-display text-[1.0625rem] font-bold whitespace-nowrap text-white">
            <Phone className="h-5 w-5 flex-none" strokeWidth={2.25} aria-hidden="true" />
            {phone}
          </span>
        </a>
      </div>
    </>
  );
}
