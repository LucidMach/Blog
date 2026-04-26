import { useEffect } from "react";
import sections from "../content/sections";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import dirAtom from "../atoms/dir";
import colorIndexAtom from "../atoms/colorIndex";
import colors from "../content/colors";

interface Props {
  currentActive?: number;
  currentColorIndex?: number;
  singleClickMode?: boolean;
}

const Menu: React.FC<Props> = ({ currentActive, currentColorIndex, singleClickMode }) => {
  const [active, setActive] = useAtom(activeAtom);
  const [, setDir] = useAtom(dirAtom);
  const [colorIndex, setColorIndex] = useAtom(colorIndexAtom);

  useEffect(() => {
    if (currentActive !== undefined) setActive(currentActive);
    if (currentColorIndex !== undefined) setColorIndex(currentColorIndex);
  }, [currentActive, currentColorIndex, setActive, setColorIndex]);

  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-transparent z-20">
        <div
          style={{ backgroundColor: colors[colorIndex] }}
          className="text-[#1a1a1a] text-left rounded-full px-6 w-fit font-comfortaa"
        >
          {sections[active].name}
        </div>
        <div className="flex bg-transparent">
          {sections.map((section, index) => (
            <div
              key={section.name}
              className="flex items-center bg-transparent"
            >
              <div
                style={{
                  backgroundColor:
                    active === index ? colorIndex === 0? "#a1a1a1": "#f1f1f1" : colors[colorIndex],
                  color: active === index ? colors[colorIndex] : "#1a1a1a",
                }}
                className={`hover:bg-[#f1f1f1] hover:text-[#1a1a1a] p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer`}
                onClick={() => {
                  if (singleClickMode) {
                    window.location.href = section.name === "home" ? "/" : `/${section.name}`;
                  } else {
                    setActive((prev) => {
                      prev > index ? setDir("left") : setDir("right");
                      return index;
                    });
                  }
                }}
                onDoubleClick={() => {
                  if (!singleClickMode) {
                    window.location.href = section.name === "home" ? "/" : `/${section.name}`;
                  }
                }}
              >
                {section.icon}
              </div>
              {index < sections.length - 1 ? (
                <div
                  style={{ backgroundColor: colors[colorIndex] }}
                  className="w-16 h-2"
                ></div>
              ) : null}
            </div>
          ))}
        </div>
          <p
            className="font-comfortaa text-center transition-all duration-500 opacity-80 bg-transparent"
            style={{ color: colors[colorIndex] }}
          >
            {sections[active].cta}
          </p>
      </div>
    </>
  );
};

export default Menu;
