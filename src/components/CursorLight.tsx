import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface Props {
  intensity: number;
}

// X is fixed off to the right, initial Y sits low — both scaled by the
// golden ratio off the same 5-unit reach the cursor sway uses. Only Y
// animates (toward the cursor/touch position), X and Z stay put.
const PHI = 1.618033988749895;
const REACH = 5;
const X_FIXED = REACH * PHI;
const Y_INITIAL = -REACH * PHI;
const Z = 2;
const Y_RANGE = REACH;

const CursorLight: React.FC<Props> = ({ intensity }) => {
  const lightRef = useRef<any>(null);

  useFrame((state) => {
    if (!lightRef.current) return;
    const targetY = state.pointer.y * Y_RANGE;
    lightRef.current.position.y += (targetY - lightRef.current.position.y) * 0.1;
  });

  return (
    <directionalLight
      ref={lightRef}
      position={[X_FIXED, Y_INITIAL, Z]}
      intensity={intensity}
    />
  );
};

export default CursorLight;
