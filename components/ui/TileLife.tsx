import type { Img } from "@/lib/types";
import { Photo } from "./Photo";
import { ANIMALS } from "./animalArt";

/**
 * An animal tile without a clip of its own, made live (Kia): its next two photos take turns
 * over the first, and the drawn animal crosses the tile now and then (bats and bees fly over,
 * rats and armadillos run along the bottom). Decorative only, CSS transform and opacity, and
 * still for people who ask for less motion.
 */
export function TileLife({ animal, photos, sizes }: { animal: string; photos: Img[]; sizes: string }) {
  const art = ANIMALS[animal];
  return (
    <>
      {photos.slice(1, 3).map((p, i) => (
        <div key={p.src} aria-hidden="true" className="tile-fade absolute inset-0" style={{ animationDelay: `${(i + 1) * 4}s` }}>
          <Photo image={{ ...p, alt: "" }} sizes={sizes} />
        </div>
      ))}
      {art ? (
        <div aria-hidden="true" className={`tile-critter ${art.fly ? "tile-critter-fly" : "tile-critter-run mouse-run"}`}>
          <svg viewBox={art.viewBox} className="block w-full overflow-visible">
            {art.art}
          </svg>
        </div>
      ) : null}
    </>
  );
}
