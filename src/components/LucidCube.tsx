import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import heartBeating from "../hooks/heartBeating";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import { useFrame } from "@react-three/fiber";
import dirAtom from "../atoms/dir";
import rotatingAtom from "../atoms/rotating";
import sections from "../content/sections";

interface props {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const LucidCube: React.FC<props> = ({ color, position, rotation, scale }) => {
  const { nodes } = useGLTF("/lucidcube.glb");
  const [active] = useAtom(activeAtom);
  const [rotating, setRotating] = useAtom(rotatingAtom);
  const [dir] = useAtom(dirAtom);
  const [countFrames, setCountFrames] = useState(0);

  const cube = useRef<any>(null);
  heartBeating(cube);

  useEffect(() => {
    if (active !== undefined) {
      setRotating(true);
      setCountFrames(0);
    }
  }, [active, setRotating]);

  useFrame(() => {
    if (cube.current && rotating) {
      setCountFrames((prev) => {
        const next = prev + 1;
        
        if (dir === "up") cube.current.rotation.x -= Math.PI / 20;
        if (dir === "down") cube.current.rotation.x += Math.PI / 20;
        if (dir === "right") cube.current.rotation.y += Math.PI / 20;
        if (dir === "left") cube.current.rotation.y -= Math.PI / 20;

        if (next >= 40) {
          setRotating(false);
          return 0;
        }
        return next;
      });
    }
  });

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
      rotation={rotation}
      scale={scale}
    >
      <group
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh castShadow receiveShadow geometry={(nodes.Cube_1 as any).geometry}>
          <meshMatcapMaterial color={"#1a1a1a"} />
        </mesh>
        <mesh castShadow receiveShadow geometry={(nodes.Cube_2 as any).geometry}>
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
