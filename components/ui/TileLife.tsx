import type { Img } from "@/lib/types";
import { Photo } from "./Photo";

/**
 * An animal tile without a clip of its own, made live with the client's real photos only (Kia:
 * no drawn animals over the photos): its next two photos take turns over the first, each moving
 * like a short camera shot. Decorative, CSS transform and opacity, still under reduced motion.
 */
export function TileLife({ photos, sizes }: { photos: Img[]; sizes: string }) {
  return (
    <>
      {photos.slice(1, 3).map((p, i) => (
        <div key={p.src} aria-hidden="true" className={`tile-fade post-shot post-shot-${(i + 1) % 4} absolute inset-0 overflow-hidden`} style={{ animationDelay: `${(i + 1) * 4}s` }}>
          <Photo image={{ ...p, alt: "" }} sizes={sizes} />
        </div>
      ))}
    </>
  );
}
