import { useGLTF } from "@react-three/drei";

interface props {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const LucidCube: React.FC<props> = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF("/lucidcube.glb");

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <group position={[0, -0.008, -0.015]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.White}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hollow.geometry}
        material={materials.SoftWhite}
        position={[-0.25, -0.258, -0.265]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.75}
      />
    </group>
  );
};

useGLTF.preload("/lucidcube.glb");

export default LucidCube;
