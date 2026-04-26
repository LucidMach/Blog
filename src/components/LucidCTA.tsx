import { Html } from "@react-three/drei";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import colorIndexAtom from "../atoms/colorIndex";
import colors from "../content/colors";
import sections from "../content/sections";
import useMobile from "../hooks/useMobile";

const LucidCTA = () => {
  const [active] = useAtom(activeAtom);
  const [colorIndex] = useAtom(colorIndexAtom);
  const { isMobile } = useMobile();

  return (
    <Html
      position={[0, isMobile ? -2 : -2.5, 1.8]}
      center
    >
      <div 
        style={{ transform: isMobile ? "scale(0.7)" : "scale(0.9)" }}
        className="flex flex-row items-center gap-4 whitespace-nowrap pointer-events-auto"
      >
        {active === 0 ? (
          <div className="flex gap-4 bg-transparent">
            <a
              href="/projects"
              style={{
                borderColor: colors[colorIndex],
                color: colors[colorIndex],
                background: "rgba(255, 255, 255, 0)",
                backdropFilter: "blur(8px)",
                borderWidth: "1.5px",
              }}
              className="px-6 py-1.5 rounded-full text-lg font-bold tracking-wider hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg border-solid"
            >
              projects
            </a>
            <a
              href="/blog"
              style={{
                backgroundColor: colors[colorIndex],
                boxShadow: `0 0 20px ${colors[colorIndex]}55`,
              }}
              className="px-6 py-1.5 text-black rounded-full text-lg font-bold tracking-wider hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
            >
              blog
            </a>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-3 group bg-transparent">
            <p className="text-xl text-white font-medium opacity-60 italic tracking-widest lowercase">
              {active === 3 ? "check me out" : "check out the"}
            </p>
            <a
              href={`/${sections[active].name}`}
              style={{
                backgroundColor: colors[colorIndex],
                boxShadow: `0 0 25px ${colors[colorIndex]}77`,
              }}
              className="px-8 py-2 text-black rounded-full text-xl font-extrabold tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
            >
              /{sections[active].name}
            </a>
          </div>
        )}
      </div>
    </Html>
  );
};

export default LucidCTA;
