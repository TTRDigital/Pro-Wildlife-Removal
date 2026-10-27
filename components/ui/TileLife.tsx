import type { Img } from "@/lib/types";
import { Photo } from "./Photo";

/**
 * An animal tile without a clip of its own, made live with the client's real photos only (Kia:
 * no drawn animals over the photos): its next three photos take turns over the first, 3 seconds each, each moving
 * like a short camera shot. Each keeps its library caption as alt (they are real job photos, Ben),
 * while the wrapper stays aria-hidden so the tile link's name is still just the animal. CSS
 * transform and opacity only, still under reduced motion.
 */
export function TileLife({ photos, sizes }: { photos: Img[]; sizes: string }) {
  return (
    <>
      {photos.slice(1, 4).map((p, i) => (
        <div key={p.src} aria-hidden="true" className={`tile-fade tile-move post-shot post-shot-${(i + 1) % 4} absolute inset-0 overflow-hidden`} style={{ animationDelay: `${(i + 1) * 3}s` }}>
          <Photo image={p} sizes={sizes} />
        </div>
      ))}
    </>
  );
}
