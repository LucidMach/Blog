import { useGLTF } from "@react-three/drei";

interface props {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const LucidCube: React.FC<props> = ({ color, position, rotation, scale }) => {
  const { nodes, materials } = useGLTF("/lucidcube.glb");

  return (
    <group
      castShadow
      receiveShadow
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <group
        castShadow
        receiveShadow
        position={[0, -0.008, -0.015]}
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
