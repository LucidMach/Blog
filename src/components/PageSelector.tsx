import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import colorIndexAtom from "../atoms/colorIndex";
import activeAtom from "../atoms/active";
import { P } from "../../dist/_astro/three.module.CbO7aUhW";
import useMobile from "../hooks/useMobile";
import colors from "../content/colors";
import sections from "../content/sections";

const PageSelector = () => {
  const [colorIndex] = useAtom(colorIndexAtom);
  const [active] = useAtom(activeAtom);
  const { isMobile } = useMobile();

  return (
    <div
      className="fixed left-0 w-full bg-transparent flex justify-center z-50 pointer-events-none"
      style={{ bottom: isMobile ? "25%" : "176px" }}
    >
      <div className="flex pointer-events-auto">
        {active === 0 ? (
          <>
            <a
              href="/projects"
              style={{ borderColor: colors[colorIndex], color: colors[colorIndex] }}
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
          </>
        ) : (
            <div className="flex items-center gap-2">

            <p className="text-lg">check out the</p>
          <a
            href={`/${sections[active].name}`}
            style={{ backgroundColor: colors[colorIndex] }}
            className="px-6 py-1 text-black rounded-full hover:opacity-70 transition-opacity"
          >
            /{sections[active].name}
          </a>
            </div>
        )}
      </div>
    </div>
  );
};

export default PageSelector;
