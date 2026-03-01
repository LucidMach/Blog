import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";

import Rig from "./Rig";
import Lucid3DText from "./Lucid3DText";
import LucidCube from "../components/LucidCube";
import SeaOfMNET from "./SeaOfMNET";
import { useDrag } from "@use-gesture/react";
import activeAtom from "../atoms/active";
import dirAtom from "../atoms/dir";
import rotatingAtom from "../atoms/rotating";

import bgColors from "../content/bgColors";
import colors from "../content/colors";
import colorIndexAtom from "../atoms/colorIndex";

const R3F = () => {
  const [colorIndex, setColorIndex] = useAtom(colorIndexAtom);
  const [w, setW] = useState<number>(0);
  const [h, setH] = useState<number>(0);
  const [, setActive] = useAtom(activeAtom);
  const [rotating] = useAtom(rotatingAtom);
  const [, setDir] = useAtom(dirAtom);

  useEffect(() => {
    setW(window.innerWidth);
    setH(window.innerHeight);

    window.addEventListener("resize", () => {
      setW(window.innerWidth);
      setH(window.innerHeight);
    });

    const interval = setInterval(() => {
      setColorIndex((prev) => (prev < colors.length - 1 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, [setColorIndex]);

  const bind = useDrag(({ movement: [xD], cancel, active: dragging }) => {
    if (rotating) return;

    if (dragging && Math.abs(xD) > 50) {
      const newDir = xD > 0 ? "right" : "left";
      setDir(newDir);
      if (newDir === "left") setActive((prev) => (prev < 3 ? prev + 1 : 0));
      if (newDir === "right") setActive((prev) => (prev > 0 ? prev - 1 : 3));
      cancel();
    }
  });

  return (
    <div {...bind()} style={{ touchAction: "none" }}>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: h,
          width: w,
        }}
        camera={{ position: [0, 0, 7.5] }}
      >
        <color attach="background" args={[bgColors[0]]} />
        <directionalLight
          color={colors[colorIndex]}
          position={[0, 0, 5]}
          intensity={5}
        />
        <LucidCube
          position={[0, 0, -1]}
          rotation={[Math.PI / 6, -Math.PI / 4, 0]}
          scale={1}
        />
        <SeaOfMNET
          position={[0, 0, 0]}
          rotation={[0, 0, w > h ? 0 : Math.PI / 2]}
          scale={w > h ? 1 : 0.75}
        />
        <Lucid3DText
          position={[0, w > h ? 0 : -0.5, 0]}
          scale={w > h ? 1 : 0.5}
          isMobile={w <= h}
        />
        <Rig />
      </Canvas>
    </div>
  );
};

export default R3F;
