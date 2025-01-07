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

const colors = ["#f1f1f1", "#f87171"];

const R3F = () => {
  const [color, setColor] = useState<number>(0);

  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      camera={{ position: [0, 0, 7.5] }}
      onClick={() =>
        // setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        setColor(color === 0 ? 1 : 0)
      }
    >
      {/* <directionalLight position={[0, 0, 5]} intensity={5} /> */}
      <directionalLight
        color={colors[color]}
        position={[0, 0, 5]}
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
