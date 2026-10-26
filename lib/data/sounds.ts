/* Short real recordings for the sign cards that describe a sound (Kia), keyed by the card's title. Each plays only on tap
 * (SoundButton), PD, CC0 or CC BY only (Ben; credited on /credits/ and in public/sounds/CREDITS.md). No bat button: their
 * calls are ultrasonic. The rat card waits for the client's own recording from a job. */
export const signSounds: Partial<Record<string, { src: string; label: string }>> = {
  "Humming in a wall": { src: "/sounds/bee.mp3", label: "Hear bees humming (5 seconds)" },
  "Heavy thumping overhead": { src: "/sounds/raccoon.mp3", label: "Hear a raccoon kit calling (5 seconds)" },
  "Noise in the morning and afternoon": { src: "/sounds/squirrel.mp3", label: "Hear a squirrel chattering (4 seconds)" },
};
