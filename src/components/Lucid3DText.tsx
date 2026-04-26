import { Center, Text3D } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import heartBeating from "../hooks/heartBeating";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import sections from "../content/sections";

import colorIndexAtom from "../atoms/colorIndex";
import colors from "../content/colors";

interface props {
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: number;
  isMobile?: boolean;
}

const Lucid3DText: React.FC<props> = ({ rotation, position, scale, isMobile }) => {
  const [colorIndex] = useAtom(colorIndexAtom);
  const [active] = useAtom(activeAtom);
  const [titleX, setTitleX] = useState(0);
  const [subtitleX, setSubtitleX] = useState(0);

  // const [title, setTitle] = useState(sections[active].title);
  // const [subtitle, setSubtitle] = useState(sections[active].subtitle);
  // const [cta, setCta] = useState(sections[active].cta);

  useEffect(() => {
    if (active === 0) {
      setTitleX(0);
      setSubtitleX(0);
    } else if (active === 1) {
      setTitleX(0.15);
      setSubtitleX(-0.75);
    } else if (active === 2) {
      setTitleX(1);
      setSubtitleX(0);
    } else if (active === 3) {
      setTitleX(0.3);
      setSubtitleX(0.4);
    }
  }, [active]);

  const titleRef = useRef<any>(null);
  const subtitleRef = useRef<any>(null);
  heartBeating(titleRef);
  heartBeating(subtitleRef);

  return (
    <group castShadow rotation={rotation} position={position} scale={scale}>
      <Center ref={titleRef} position={[titleX, -Math.PI / 3, 1.5]}>
        <Text3D castShadow font={"/fonts/Vampiro One Regular.json"}>
          {sections[active].title}
          <meshStandardMaterial color={colors[colorIndex]} />
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
          <meshMatcapMaterial color={colors[colorIndex]} />
        </Text3D>
      </Center>
    </group>
  );
};

export default Lucid3DText;
