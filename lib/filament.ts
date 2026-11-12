/**
 * The whole site is printed from one spool of rainbow filament: the hue
 * depends only on how far up the print (or down the page) you are.
 */
export const HUE_START = 195;
export const HUE_SPAN = 180;

/** Hue for a position between 0 (first layer) and 1 (last layer). */
export function filamentHue(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  return (HUE_START + clamped * HUE_SPAN) % 360;
}
