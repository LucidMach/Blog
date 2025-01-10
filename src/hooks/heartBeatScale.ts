import { useEffect, useState } from "react";

const heartBeatScale = () => {
  const [scaleFactor, setScaleFactor] = useState<number>(1);

  // to make the cube beat at my avg heart rate [while walking] acc my apple watch se 2 - 73bpm
  useEffect(() => {
    const interval = setInterval(() => {
      setScaleFactor((prevScale) => (prevScale === 1 ? 1.1 : 1));
    }, 820);

    return () => clearInterval(interval);
  }, []);

  return scaleFactor;
};

export default heartBeatScale;
