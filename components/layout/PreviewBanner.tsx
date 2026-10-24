/** Shown only in draft preview (opened from a TTR OS preview link): says the page shows unpublished drafts, with a way out. */
export function PreviewBanner() {
  return (
    <div role="status" className="fixed inset-x-0 bottom-0 z-[100] flex items-center justify-center gap-3 bg-navy px-4 py-2 text-sm text-white">
      <span>Preview: this page shows unpublished drafts.</span>
      <form method="POST" action="/api/preview/exit/">
        <button type="submit" className="min-h-[32px] rounded border border-white/60 px-3 font-semibold hover:bg-white/10">
          Exit preview
        </button>
      </form>
    </div>
  );
}
