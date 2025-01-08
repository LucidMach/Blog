import { useState } from "react";
import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Rig from "./Rig";
import Lucid3DText from "./Lucid3DText";
import LucidCube from "../components/LucidCube";

const colors = [
  "#f1f1f1",
  "#fc7272",
  "#FACC14",
  "#60a5fa",
  "#818cf8",
  "#34d399",
];

const bgColors = [
  "#1a1a1a",
  "#fc7272",
  "#FACC14",
  "#60a5fa",
  "#818cf8",
  "#34d399",
];

const R3F = () => {
  const [color, setColor] = useState<number>(0);

  return (
    <>
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
          // setColor((color) => (color < colors.length - 1 ? color + 1 : 0))
          (window.location.href = "/blog")
        }
      >
        <color attach="background" args={[bgColors[color]]} />
        <directionalLight
          color={colors[color]}
          position={[0, 0, 5]}
          intensity={5}
        />
        <LucidCube
          color={colors[color]}
          position={[0, 1, -1]}
          rotation={[Math.PI / 6, -Math.PI / 4, 0]}
          scale={1.5}
        />
        <Lucid3DText
          title="LucidMach"
          subtitle="dream it... build it!"
          link="/blog"
          color={colors[color]}
        />
        <Rig />
      </Canvas>
    </>
  );
};

export default R3F;
