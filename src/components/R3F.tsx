import { Canvas, useFrame, useThree } from "@react-three/fiber";
import LucidCube from "../components/LucidCube";
import { Vector3 } from "three";
import { useState } from "react";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.1);
    camera.lookAt(0, 0, 0);
  });
}

const colors = [
  "#f1f1f1",
  "#fc7272",
  "#faaa00",
  "#60a5fa",
  "#818cf8",
  "#34d399",
];

const bgColors = [
  "#1a1a1a",
  "#fc7272",
  "#faaa00",
  "#60a5fa",
  "#818cf8",
  "#34d399",
];

const R3F = () => {
  const [color, setColor] = useState<number>(0);

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
      }}
      camera={{ position: [0, 0, 7.5] }}
      onClick={() =>
        setColor((color) => (color < colors.length - 1 ? color + 1 : 0))
      }
    >
      <color attach="background" args={[bgColors[color]]} />
      <directionalLight
        color={colors[color]}
        position={[0, 0, 5]}
        intensity={5}
      />
      <directionalLight
        position={[0, 0, -5]}
        rotation={[0, Math.PI, 0]}
        intensity={5}
      />
      <LucidCube
        position={[0, 1, 0]}
        rotation={[Math.PI / 6, -Math.PI / 4, 0]}
        scale={1.25}
      />
      <Rig />
    </Canvas>
  );
};

export default R3F;
