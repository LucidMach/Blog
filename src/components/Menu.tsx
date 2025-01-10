import { useState } from "react";
import sections from "../content/sections";
import { useAtom } from "jotai";
import activeAtom from "../atoms/active";

const Menu: React.FC = () => {
  const [active, setActive] = useAtom(activeAtom);

  return (
    <>
      <div className="flex flex-col items-center gap-8 bg-transparent">
        <div className="bg-red-400 text-[#1a1a1a] text-left rounded-full px-6 w-fit font-comfortaa">
          {sections[active].name}
        </div>
        <div className="flex bg-transparent">
          {sections.map((section, index) => (
            <div
              key={section.name}
              className="flex items-center bg-transparent"
            >
              <div
                className={`${
                  active === index ? "bg-[#f1f1f1]" : "bg-red-400"
                } hover:bg-[#f1f1f1] p-2 rounded-full w-12 h-12 flex justify-center items-center`}
                onClick={() => setActive(index)}
              >
                {section.icon}
              </div>
              {index < sections.length - 1 ? (
                <div className="bg-red-400 w-16 h-2"></div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
