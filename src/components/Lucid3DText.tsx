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
  const [titleX, setTitleX] = useState(0);
  const [subtitleX, setSubtitleX] = useState(0);
  const [ctaX, setCtaX] = useState(0);

  // const [title, setTitle] = useState(sections[active].title);
  // const [subtitle, setSubtitle] = useState(sections[active].subtitle);
  // const [cta, setCta] = useState(sections[active].cta);

  useEffect(() => {
    if (active === 0) {
      setTitleX(0);
      setSubtitleX(0);
      setCtaX(0);
    } else if (active === 1) {
      setTitleX(0.25);
      setSubtitleX(-0.5);
      setCtaX(-0.25);
    } else if (active === 2) {
      setTitleX(1);
      setSubtitleX(0.5);
      setCtaX(-0.35);
    } else if (active === 3) {
      setTitleX(1);
      setSubtitleX(-1);
      setCtaX(-0.5);
    } else if (active === 4) {
    }
  }, [active]);

  const titleRef = useRef();
  const subtitleRef = useRef();
  heartBeating(titleRef);
  heartBeating(subtitleRef);

  return (
    <group castShadow rotation={rotation} position={position} scale={scale}>
      <Center ref={titleRef} position={[titleX, -Math.PI / 3, 1.5]}>
        <Text3D castShadow font={"/fonts/Vampiro One Regular.json"}>
          {sections[active].title}
          <meshStandardMaterial color={color} />
        </Text3D>
      </Center>
      <Center ref={subtitleRef} position={[subtitleX, -Math.PI / 1.75, 1.75]}>
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
      <Center position={[ctaX, -3, 2]}>
        <Text3D scale={0.15} font={"/fonts/Comfortaa Regular.json"}>
          {sections[active].cta}
          <meshMatcapMaterial color="#fc8181" />
        </Text3D>
      </Center>
    </group>
  );
};

export default Lucid3DText;
