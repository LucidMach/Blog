import { useAtom } from "jotai";
import heartBeatAtom from "../atoms/heartBeat";

const heartBeatScale = () => {
  const [scaleFactor] = useAtom(heartBeatAtom);

  return scaleFactor;
};

export default heartBeatScale;
