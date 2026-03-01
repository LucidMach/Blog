import { useEffect, useState } from "react";

const useMobile = () => {
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);

  useEffect(() => {
    setW(window.innerWidth);
    setH(window.innerHeight);

    const handleResize = () => {
      setW(window.innerWidth);
      setH(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = w <= h;

  return { isMobile, w, h };
};

export default useMobile;
