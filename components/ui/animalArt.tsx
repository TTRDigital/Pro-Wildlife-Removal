import type { ReactNode } from "react";

/*
 * The animals, drawn flat in the logo's style, each facing left (they run right to left):
 * used by the catch scene (AnimalCatch) and the moving animal tiles (TileLife). The running
 * feet, beating wings and buzz are CSS animations (globals.css), off under reduced motion.
 */
const INK = "#1f2023";
const FOOT = "#3d3936";

/** Running feet in two alternating pairs (scurry), under a body of the given colour. */
const feet = (xs: [number, number, number, number], y: number, fill = FOOT) => (
  <>
    <g className="mouse-feet">
      <ellipse cx={xs[0]} cy={y} rx={3.4} ry={1.9} fill={fill} />
      <ellipse cx={xs[2]} cy={y} rx={3.4} ry={1.9} fill={fill} />
    </g>
    <g className="mouse-feet-2">
      <ellipse cx={xs[1]} cy={y} rx={3.4} ry={1.9} fill={fill} />
      <ellipse cx={xs[3]} cy={y} rx={3.4} ry={1.9} fill={fill} />
    </g>
  </>
);

const WING_R =
  "M53 16 C62 6 78 2 98 6 C92 10 90 15 91 21 C86 17 81 18 78 24 C74 19 68 20 65 26 C62 21 57 21 53 24 Z";
const WING_L =
  "M47 16 C38 6 22 2 2 6 C8 10 10 15 9 21 C14 17 19 18 22 24 C26 19 32 20 35 26 C38 21 43 21 47 24 Z";

export type Animal = {
  viewBox: string;
  width: string;
  fly?: boolean;
  duration: number;
  art: ReactNode;
};

/* Each animal faces left (it runs right to left), drawn in the same flat style as the logo's bats. */
export const ANIMALS: Record<string, Animal> = {
  rat: {
    viewBox: "0 0 60 34",
    width: "w-14 sm:w-[72px]",
    duration: 1500,
    art: (
      <>
        <path
          d="M44 22 Q56 24 58 14"
          fill="none"
          stroke="#b9a7a3"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        {feet([18, 24, 36, 42], 30, "#d9a3a0")}
        <ellipse cx={30} cy={20} rx={16} ry={10} fill="#8e8783" />
        <ellipse cx={14} cy={18} rx={9} ry={7.5} fill="#9b9490" />
        <circle cx={16} cy={9} r={5.5} fill="#9b9490" />
        <circle cx={16} cy={9} r={3.2} fill="#e3b0ad" />
        <circle cx={9} cy={16} r={1.5} fill={INK} />
        <circle cx={9.5} cy={15.5} r={0.5} fill="#fff" />
        <circle cx={5.4} cy={19.5} r={1.6} fill="#d98c88" />
      </>
    ),
  },
  raccoon: {
    viewBox: "0 0 76 42",
    width: "w-[76px] sm:w-[100px]",
    duration: 1600,
    art: (
      <>
        <path
          d="M54 22 Q70 18 74 6"
          fill="none"
          stroke="#8a8580"
          strokeWidth={8}
          strokeLinecap="round"
        />
        <path
          d="M60 19 l4 -4 M66 15 l4 -3 M71 10 l3 -3"
          stroke="#2f2c2a"
          strokeWidth={4}
          strokeLinecap="round"
        />
        {feet([24, 30, 46, 52], 38)}
        <ellipse cx={40} cy={26} rx={20} ry={12} fill="#8a8580" />
        <circle cx={18} cy={21} r={11} fill="#a19c97" />
        <path d="M12 12 L13 3 L19 10 Z M21 11 L25 3 L27 12 Z" fill="#8a8580" />
        <path d="M7 20 Q13 15 24 19 Q20 25 13 23 Q9 24 7 20 Z" fill="#2f2c2a" />
        <circle cx={12} cy={20} r={1.7} fill="#fff" />
        <circle cx={19} cy={20} r={1.7} fill="#fff" />
        <path
          d="M8 25 Q5 27 3 26"
          stroke="#e8e5e2"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <circle cx={2.5} cy={26} r={1.8} fill={INK} />
      </>
    ),
  },
  squirrel: {
    viewBox: "0 0 64 46",
    width: "w-16 sm:w-[84px]",
    duration: 1300,
    art: (
      <>
        <path
          d="M38 34 C54 34 64 22 58 8 C54 0 44 4 48 12 C52 20 46 26 40 28 Z"
          fill="#9c7b5f"
        />
        <path
          d="M50 10 C54 14 54 22 48 27"
          fill="none"
          stroke="#b9987a"
          strokeWidth={2}
        />
        {feet([18, 23, 32, 37], 42, "#5e4a3a")}
        <ellipse cx={28} cy={32} rx={13} ry={9} fill="#8f8a85" />
        <circle cx={14} cy={26} r={8} fill="#9d9893" />
        <path d="M12 19 L13 12 L17 18 Z" fill="#8f8a85" />
        <circle cx={10} cy={25} r={1.5} fill={INK} />
        <circle cx={10.4} cy={24.5} r={0.5} fill="#fff" />
        <circle cx={6.5} cy={28} r={1.3} fill="#5e4a3a" />
        <ellipse cx={22} cy={36} rx={5} ry={3} fill="#e9e3dc" />
      </>
    ),
  },
  opossum: {
    viewBox: "0 0 82 40",
    width: "w-[80px] sm:w-[104px]",
    duration: 1700,
    art: (
      <>
        <path
          d="M58 26 Q72 30 80 20"
          fill="none"
          stroke="#e6b3ae"
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        {feet([26, 32, 48, 54], 36)}
        <ellipse cx={42} cy={24} rx={20} ry={11} fill="#c9c4bd" />
        <ellipse cx={42} cy={18} rx={18} ry={6} fill="#b1aba3" />
        <path d="M26 16 Q16 14 6 22 Q14 27 26 28 Z" fill="#f2efea" />
        <circle cx={22} cy={13} r={4.5} fill="#2f2c2a" />
        <circle cx={14} cy={19} r={1.4} fill={INK} />
        <circle cx={5} cy={22} r={2} fill="#e6a39e" />
      </>
    ),
  },
  armadillo: {
    viewBox: "0 0 70 36",
    width: "w-[72px] sm:w-[92px]",
    duration: 1600,
    art: (
      <>
        <path
          d="M54 26 Q64 28 69 32"
          fill="none"
          stroke="#9d8b78"
          strokeWidth={4}
          strokeLinecap="round"
        />
        {feet([24, 30, 44, 50], 33, "#7d6c5c")}
        <path d="M18 27 Q20 8 38 7 Q56 8 58 27 Z" fill="#b19d87" />
        <path
          d="M30 8 Q29 18 30 27 M36 7 Q36 18 36 27 M42 7 Q43 18 42 27 M48 9 Q50 18 48 27"
          stroke="#8a7864"
          strokeWidth={1.4}
          fill="none"
        />
        <path d="M20 22 Q12 18 4 25 Q12 29 21 27 Z" fill="#c1ae98" />
        <path d="M15 19 L14 12 L18 18 Z" fill="#a8947f" />
        <circle cx={11} cy={22} r={1.2} fill={INK} />
      </>
    ),
  },
  snake: {
    viewBox: "0 0 96 24",
    width: "w-[96px] sm:w-[124px]",
    duration: 2000,
    art: (
      <g className="snake-wave">
        <path
          d="M12 13 C22 3 30 3 38 12 C46 21 54 21 62 12 C70 3 78 3 86 12 L93 14"
          fill="none"
          stroke="#5c6b2e"
          strokeWidth={6}
          strokeLinecap="round"
        />
        <path
          d="M12 13 C22 3 30 3 38 12 C46 21 54 21 62 12 C70 3 78 3 86 12"
          fill="none"
          stroke="#8a9a4a"
          strokeWidth={2}
          strokeDasharray="3 5"
          strokeLinecap="round"
        />
        <ellipse cx={8} cy={13} rx={7} ry={4.6} fill="#5c6b2e" />
        <circle cx={6} cy={11.5} r={1.1} fill={INK} />
        <path
          d="M1 13 L-4 12 M1 13 L-4 15"
          stroke="#c0392b"
          strokeWidth={0.9}
        />
      </g>
    ),
  },
  bat: {
    viewBox: "0 0 100 40",
    width: "w-[70px] sm:w-[84px]",
    fly: true,
    duration: 1900,
    art: (
      <g fill={INK}>
        <path
          className="bat-wing-l"
          d={WING_L}
          style={{ animationDuration: "0.2s" }}
        />
        <path
          className="bat-wing-r"
          d={WING_R}
          style={{ animationDuration: "0.2s" }}
        />
        <ellipse cx={50} cy={21} rx={4.5} ry={8} />
        <circle cx={50} cy={12.5} r={4} />
        <path d="M46.5 10.5 L45.5 4 L49 9 Z M53.5 10.5 L54.5 4 L51 9 Z" />
        <circle cx={48.4} cy={12} r={0.9} fill="#fff" />
        <circle cx={51.6} cy={12} r={0.9} fill="#fff" />
      </g>
    ),
  },
  bee: {
    viewBox: "0 0 60 40",
    width: "w-14 sm:w-[68px]",
    fly: true,
    duration: 1900,
    art: (
      <>
        {[
          [14, 14],
          [34, 8],
          [40, 28],
        ].map(([x, y], i) => (
          <g
            key={i}
            className="bee-buzz"
            style={{ animationDelay: `${i * -0.07}s` }}
          >
            <ellipse
              cx={x + 2}
              cy={y - 5}
              rx={4}
              ry={3}
              fill="#dfeff8"
              opacity={0.85}
            />
            <ellipse
              cx={x + 6}
              cy={y - 4}
              rx={3.4}
              ry={2.6}
              fill="#dfeff8"
              opacity={0.85}
            />
            <ellipse cx={x + 4} cy={y} rx={7} ry={4.6} fill="#f5b81c" />
            <path
              d={`M${x + 2} ${y - 4.2} v8.4 M${x + 6} ${y - 4.4} v8.8`}
              stroke={INK}
              strokeWidth={1.8}
            />
            <circle cx={x - 2} cy={y} r={3.2} fill={INK} />
          </g>
        ))}
      </>
    ),
  },
};

