import React from "react";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";
import colorIndexAtom from "../atoms/colorIndex";
import colors from "../content/colors";
import sections from "../content/sections";

const ScrollIndicator: React.FC = () => {
  const [active, setActive] = useAtom(activeAtom);
  const [colorIndex] = useAtom(colorIndexAtom);

  const currentColor = colors[colorIndex] || "#f1f1f1";

  return (
    <div className="rounded-full fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {sections.map((section, idx) => {
        const isActive = active === idx;
        return (
          <button
            key={section.name}
            onClick={() => setActive(idx)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            aria-label={`Scroll to ${section.name}`}
          >
            {/* Tooltip on hover */}
            <span
              className="absolute right-8 px-2 py-1 text-xs font-comfortaa rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
              style={{
                backgroundColor: currentColor,
                color: "#1a1a1a",
              }}
            >
              {section.name}
            </span>

            {/* Indicator Dot/Bar */}
            <div
              className={`rounded-full transition-all duration-300 ${isActive ? "h-8 w-2.5" : "h-2.5 w-2.5 opacity-50 group-hover:opacity-80"
                }`}
              style={{
                backgroundColor: isActive ? currentColor : "#a1a1a1",
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
