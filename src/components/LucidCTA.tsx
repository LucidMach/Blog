import { useAtom } from "jotai";
import colorIndexAtom from "../atoms/colorIndex";
import colors from "../content/colors";
import useMobile from "../hooks/useMobile";

const LucidCTA = () => {
  const [colorIndex] = useAtom(colorIndexAtom);
  const { isMobile } = useMobile();

  return (
    <div
      style={{ transform: isMobile ? "scale(0.8)" : "scale(1)" }}
      className="flex flex-row items-center gap-4 whitespace-nowrap pointer-events-auto bg-transparent"
    >
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
    </div>
  );
};

export default LucidCTA;
