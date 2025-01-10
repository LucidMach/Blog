import { useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface props {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

export const MNETCube: React.FC<props> = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF("/mnetcube.glb");
  const [hover, setHover] = useState<boolean>(false);

  const cube = useRef<THREE.Mesh>();

  // random movement between -0.05 and 0.05
  const moveX = Math.random() * 0.1 - 0.05;
  const moveY = Math.random() * 0.1 - 0.05;
  const moveZ = Math.random() * 0.1 - 0.05;

  useFrame(() => {
    if (cube.current) {
      cube.current.rotation.x += 0.0075;

      cube.current.position.x += moveX;
      cube.current.position.y += moveY;
      cube.current.position.z += moveZ;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale} dispose={null}>
      <mesh
        onPointerEnter={(e) => setHover(true)}
        onPointerLeave={(e) => setHover(false)}
        ref={cube}
        castShadow
        receiveShadow
        geometry={nodes.Mnet_Cube.geometry}
        scale={hover ? 1.5 : 1}
      />
      <meshMatcapMaterial />
    </group>
  );
};

useGLTF.preload("/mnetcube.glb");
