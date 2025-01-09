import { Text3D } from "@react-three/drei";

interface props {
  color: string;
  title: string;
  subtitle: string;
  link: string;
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number;
}

const Lucid3DText: React.FC<props> = ({
  color,
  title,
  subtitle,
  link,
  rotation,
  position,
  scale,
}) => {
  return (
    <group castShadow rotation={rotation} position={position} scale={scale}>
      <Text3D
        castShadow
        position={[-title.length / 2.5, -Math.PI / 3, 1.5]}
        font={"/fonts/Vampiro One Regular.json"}
      >
        {title}
        <meshStandardMaterial color={color} />
        {/* <meshMatcapMaterial color={color} /> */}
      </Text3D>
      <Text3D
        castShadow
        scale={0.25}
        letterSpacing={0.75}
        position={[-title.length / 2.5, -Math.PI / 2, 1.5]}
        font={"/fonts/Comfortaa Regular.json"}
      >
        {subtitle}
        {/* <meshStandardMaterial color={color} /> */}
        <meshMatcapMaterial color={color} />
      </Text3D>
      <Text3D
        scale={0.2}
        position={[-link.length / 2.25, -3, 2]}
        font={"/fonts/Comfortaa Regular.json"}
      >
        click anywhere to go to {link}
        <meshToonMaterial color="#fc7272" />
      </Text3D>
    </group>
  );
};

export default Lucid3DText;
