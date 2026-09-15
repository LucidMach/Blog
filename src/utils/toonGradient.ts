import { DataTexture, NearestFilter, RGBAFormat } from "three";

// Hard 2-step gradient for meshToonMaterial: lit faces sample the white
// step (white × color = color, unchanged), shadow faces sample pure black,
// instead of the soft, hue-tinted falloff three.js uses with no gradientMap.
let gradientMap: DataTexture | null = null;

export const getToonGradientMap = (): DataTexture => {
  if (!gradientMap) {
    const data = new Uint8Array([
      0, 0, 0, 255,
      255, 255, 255, 255,
    ]);
    gradientMap = new DataTexture(data, 2, 1, RGBAFormat);
    gradientMap.magFilter = NearestFilter;
    gradientMap.minFilter = NearestFilter;
    gradientMap.generateMipmaps = false;
    gradientMap.needsUpdate = true;
  }
  return gradientMap;
};
