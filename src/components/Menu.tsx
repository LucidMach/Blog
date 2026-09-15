import { useEffect, useRef, useState } from "react";
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

const IDLE_THRESHOLD_MS = 6000;
const IDLE_WIGGLE_INTERVAL_MS = 4000;
const ACTIVITY_EVENTS = ["mousemove", "touchstart", "wheel", "keydown", "pointerdown"] as const;

const Menu: React.FC<Props> = ({ currentActive, currentColorIndex, singleClickMode }) => {
  const [active, setActive] = useAtom(activeAtom);
  const [, setDir] = useAtom(dirAtom);
  const [colorIndex, setColorIndex] = useAtom(colorIndexAtom);
  const [wiggleKey, setWiggleKey] = useState(0);

  useEffect(() => {
    if (currentActive !== undefined) setActive(currentActive);
    if (currentColorIndex !== undefined) setColorIndex(currentColorIndex);
  }, [currentActive, currentColorIndex, setActive, setColorIndex]);

  // Nudge the sticker with a wiggle once the visitor has gone quiet for a
  // while, repeating every few seconds until they interact again.
  useEffect(() => {
    if (singleClickMode) return;

    let idleTimer: NodeJS.Timeout;
    let wiggleInterval: NodeJS.Timeout;

    const stopWiggling = () => {
      if (wiggleInterval) clearInterval(wiggleInterval);
    };

    const startWiggling = () => {
      stopWiggling();
      setWiggleKey((k) => k + 1);
      wiggleInterval = setInterval(() => setWiggleKey((k) => k + 1), IDLE_WIGGLE_INTERVAL_MS);
    };

    const resetIdleTimer = () => {
      stopWiggling();
      clearTimeout(idleTimer);
      idleTimer = setTimeout(startWiggling, IDLE_THRESHOLD_MS);
    };

    resetIdleTimer();
    ACTIVITY_EVENTS.forEach((event) =>
      window.addEventListener(event, resetIdleTimer, { passive: true }),
    );

    return () => {
      clearTimeout(idleTimer);
      stopWiggling();
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, resetIdleTimer));
    };
  }, [singleClickMode]);

  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-transparent z-20 pointer-events-auto">
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
          {!singleClickMode && (
            <div key={wiggleKey} className="relative self-stretch idle-wiggle">
              {/* Pushpin, matching the project-card sticker convention */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black shadow-inner z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              </div>
              <p
                role="status"
                aria-live="polite"
                className="font-virgil text-base leading-snug text-center w-full py-2.5 px-4 rounded-sm shadow-md border-2 border-black/80 text-[#1a1a1a]"
                style={{ backgroundColor: colors[colorIndex] }}
              >
                {sections[active].cta}
              </p>
            </div>
          )}
      </div>
    </>
  );
};

export default Menu;
