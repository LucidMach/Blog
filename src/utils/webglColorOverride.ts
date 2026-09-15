// The toon light rig (ambient + directional) pushes lit colors brighter —
// most noticeable on already-light hues like the palette's yellow, which
// washes out toward pale/white in WebGL compared to the flat CSS hex.
// This feeds materials a corrected input color for specific hexes so the
// *lit* result reads closer to the true CSS color, without touching the
// shared `colors` palette the 2D UI renders directly.
const overrides: Record<string, string> = {};

export const getWebglColor = (hex: string): string => overrides[hex] ?? hex;
