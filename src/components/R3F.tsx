import { Canvas } from "@react-three/fiber";
import LucidCube from "../components/LucidCube";

const R3F = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <LucidCube />
    </Canvas>
  );
};

export default R3F;
