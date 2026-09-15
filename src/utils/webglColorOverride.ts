// Per-color corrections for the WebGL (toon-lit) elements, kept separate
// from the shared `colors` palette the 2D UI renders flat/unlit. Most
// colors just pass through; specific hexes can get a color swap and/or an
// emissive glow for a stronger, more electric look than reflected light
// alone gives under the toon light rig.
interface WebglColorTreatment {
  color: string;
  emissive: string;
  emissiveIntensity: number;
}

const overrides: Record<string, Partial<WebglColorTreatment>> = {};

// emissive/emissiveIntensity always resolve to a concrete value (never
// undefined) so switching colors always explicitly resets the glow —
// an undefined prop is a no-op to R3F, not a reset, which left the glow
// stuck on cyan even after the color moved on.
export const getWebglColorTreatment = (hex: string): WebglColorTreatment => ({
  color: hex,
  emissive: "#000000",
  emissiveIntensity: 1,
  ...overrides[hex],
});
