import { Phone } from "lucide-react";
import { chatWidgetId } from "@/lib/chat";

/** Sticky orange "Call" bar on phones, as on the live bat-removal page. Leaves room for the chat bubble when the chat is on. */
export function MobileCallBar({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return (
    <>
      <div aria-hidden="true" className="h-14 md:hidden" />
      <div className={`fixed inset-x-0 bottom-0 z-40 bg-call md:hidden ${chatWidgetId ? "pr-[72px]" : ""}`}>
        <a href={phoneHref} data-track="click_to_call" className="flex min-h-14 items-center justify-center gap-2 font-display text-base font-semibold text-white">
          <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          Call {phone}
        </a>
      </div>
    </>
  );
}
