import { useEffect, useRef } from "react";
import heartBeating from "../hooks/heartBeating";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import { useFrame } from "@react-three/fiber";
import dirAtom from "../atoms/dir";
import rotatingAtom from "../atoms/rotating";
import sections from "../content/sections";
import colorIndexAtom from "../atoms/colorIndex";
import colors from "../content/colors";
import { useExtrudedGeometry } from "3dsvg";
import { DoubleSide } from "three";

interface props {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const svgString = `<svg width="308" height="350" viewBox="0 0 308 350" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M306.205 87.0588L153.53 0L0.233406 87.4131L63.0089 123.394L153.53 71.7879L242.301 122.396L306.205 87.0588ZM244.131 124.812L307.06 90.0142V262.639L156.206 348.659V276.871L244.131 226.745V124.812ZM153.206 278.212L153.206 350L0 262.639V90.7372L62.9283 126.806V226.745L153.206 278.212Z" fill="#F1F1F1"/>
</svg>`;

const LucidCube: React.FC<props> = ({ position, rotation, scale }) => {
  const [active] = useAtom(activeAtom);
  const [rotating, setRotating] = useAtom(rotatingAtom);
  const [dir] = useAtom(dirAtom);
  const countFrames = useRef(0);
  const [colorIndex] = useAtom(colorIndexAtom);

  const cube = useRef<any>(null);
  heartBeating(cube);

  // Parse and build the 3D geometry of the SVG.
  // depth: 1.8 for nice thickness, smoothness: 0.25 for clean curves/bevels.
  const { geometries, center, baseScale } = useExtrudedGeometry(svgString, 1.8, 0.25);

  useEffect(() => {
    if (active !== undefined) {
      setRotating(true);
      countFrames.current = 0;
    }
  }, [active, setRotating]);

  useFrame(() => {
    if (cube.current && rotating) {
      countFrames.current += 1;
        
      if (dir === "up") cube.current.rotation.x -= Math.PI / 20;
      if (dir === "down") cube.current.rotation.x += Math.PI / 20;
      if (dir === "right") cube.current.rotation.y += Math.PI / 20;
      if (dir === "left") cube.current.rotation.y -= Math.PI / 20;

      if (countFrames.current >= 40) {
        setRotating(false);
        countFrames.current = 0;
      }
    }
  });

  // Base scale centers the max-dimension of the SVG to exactly 4 units.
  // Scale up to 1.4 for high visibility and impact.
  const finalScale = baseScale * 0.7;

  return (
    <group
      ref={cube}
      onDoubleClick={() => {
        window.location.href = `/${
          sections[active].name === "home" ? "" : sections[active].name
        }`;
      }}
      castShadow
      receiveShadow
      position={position}
      // Start flat facing the camera [0, 0, 0] so the flat-extruded isometric SVG is fully readable.
      // The useFrame hook and mouse drag interactions will still rotate it dynamically!
      rotation={[0, 0, 0]}
      // Keep outer scale as prop scale, so the heartBeating hook can lerp it correctly
      scale={scale}
    >
      {/* Nested group applies the final 3D SVG base scale and Y-inversion, shielding it from heartBeating lerp */}
      <group
        scale={[finalScale, -finalScale, finalScale]}
      >
        {geometries && geometries.map((geometry, i) => (
          <mesh
            key={i}
            castShadow
            receiveShadow
            geometry={geometry}
            position={[-center.x, -center.y, -center.z]}
          >
            <meshStandardMaterial
              color={colors[colorIndex]}
              roughness={0.8}
              metalness={0.2}
              side={DoubleSide}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default LucidCube;
