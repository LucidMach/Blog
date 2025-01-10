import { Center, Text3D } from "@react-three/drei";
import { useRef } from "react";
import heartBeating from "../hooks/heartBeating";

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
  const titleRef = useRef();
  const subtitleRef = useRef();
  heartBeating(titleRef);
  heartBeating(subtitleRef);

  return (
    <group castShadow rotation={rotation} position={position} scale={scale}>
      <Center ref={titleRef} position={[0, -Math.PI / 3, 1.5]}>
        <Text3D castShadow font={"/fonts/Vampiro One Regular.json"}>
          {title}
          <meshStandardMaterial color={color} />
        </Text3D>
      </Center>
      <Center ref={subtitleRef} position={[0, -Math.PI / 1.75, 1.75]}>
        <Text3D
          castShadow
          scale={0.25}
          letterSpacing={0.75}
          font={"/fonts/Comfortaa Regular.json"}
        >
          {subtitle}
          <meshMatcapMaterial color={color} />
        </Text3D>
      </Center>
      <Center position={[0, -3, 2]}>
        <Text3D scale={0.15} font={"/fonts/Comfortaa Regular.json"}>
          click anywhere to go to {link}
          <meshMatcapMaterial color="#fc8181" />
        </Text3D>
      </Center>
    </group>
  );
};

export default Lucid3DText;
