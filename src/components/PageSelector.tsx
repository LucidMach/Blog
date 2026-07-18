import { useAtom } from "jotai";
import colorIndexAtom from "../atoms/colorIndex";
import useMobile from "../hooks/useMobile";
import colors from "../content/colors";

const PageSelector = () => {
  const [colorIndex] = useAtom(colorIndexAtom);
  const { isMobile } = useMobile();

  return (
    <div
      className="fixed left-0 w-full bg-transparent flex justify-center z-50 pointer-events-none"
      style={{ bottom: isMobile ? "25%" : "176px" }}
    >
      <div className="flex pointer-events-auto">
        <a
          href="/projects"
          style={{
            borderColor: colors[colorIndex],
            color: colors[colorIndex],
          }}
          className="px-6 py-1 border rounded-full mr-2 hover:opacity-70 transition-opacity"
        >
          projects
        </a>
        <a
          href="/blog"
          style={{ backgroundColor: colors[colorIndex] }}
          className="px-6 py-1 text-black rounded-full hover:opacity-70 transition-opacity"
        >
          blog
        </a>
      </div>
    </div>
  );
};

export default PageSelector;
