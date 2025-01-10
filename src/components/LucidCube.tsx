import { useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import heartBeating from "../hooks/heartBeating";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import { useFrame } from "@react-three/fiber";

interface props {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const LucidCube: React.FC<props> = ({ color, position, rotation, scale }) => {
  const { nodes, materials } = useGLTF("/lucidcube.glb");
  const [active, setActive] = useAtom(activeAtom);
  const [rotate, setRotate] = useState<boolean>(false);
  const [countFrames, setCountFrames] = useState(0);

  const cube = useRef<THREE.Mesh>();
  heartBeating(cube);

  useEffect(() => {
    setRotate(true);
    setCountFrames(0);
  }, [active]);

  useFrame(() => {
    if (cube.current) {
      // rotate the cube by PI / 20 for 20 frames [1 full rotation]
      if (rotate) {
        setCountFrames((count) => countFrames + 1);
        cube.current.rotation.x -= Math.PI / 20;
        if (countFrames === 39) {
          setRotate(false);
        }
      }
    }
  });

  return (
    <group
      ref={cube}
      castShadow
      receiveShadow
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <group
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry}>
          <meshMatcapMaterial color={"#1a1a1a"} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry}>
          <meshMatcapMaterial color={color} />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        position={[-0.25, -0.258, -0.265]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.75}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshMatcapMaterial color={color} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/lucidcube.glb");

export default LucidCube;
