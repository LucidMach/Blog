import { Center, Text3D } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import heartBeating from "../hooks/heartBeating";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import sections from "../content/sections";

interface props {
  color: string;
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number;
}

const Lucid3DText: React.FC<props> = ({ color, rotation, position, scale }) => {
  const [active, setActive] = useAtom(activeAtom);

  // const [title, setTitle] = useState(sections[active].title);
  // const [subtitle, setSubtitle] = useState(sections[active].subtitle);
  // const [cta, setCta] = useState(sections[active].cta);

  // useEffect(() => {
  //   setTitle(sections[active].title);
  //   setSubtitle(sections[active].subtitle);
  //   setCta(sections[active].cta);
  // }, [active]);

  const titleRef = useRef();
  const subtitleRef = useRef();
  heartBeating(titleRef);
  heartBeating(subtitleRef);

  return (
    <group castShadow rotation={rotation} position={position} scale={scale}>
      <Center ref={titleRef} position={[0, -Math.PI / 3, 1.5]}>
        <Text3D castShadow font={"/fonts/Vampiro One Regular.json"}>
          {sections[active].title}
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
          {sections[active].subtitle}
          <meshMatcapMaterial color={color} />
        </Text3D>
      </Center>
      <Center position={[0, -3, 2]}>
        <Text3D scale={0.15} font={"/fonts/Comfortaa Regular.json"}>
          {sections[active].cta}
          <meshMatcapMaterial color="#fc8181" />
        </Text3D>
      </Center>
    </group>
  );
};

export default Lucid3DText;
