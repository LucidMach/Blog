import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import heartBeatScale from "./heartBeatScale";

function heartBeating(ref: any) {
  const heartScale = heartBeatScale();

  useFrame(() => {
    const vec = new THREE.Vector3();
    vec.set(heartScale, heartScale, heartScale);

    if (ref.current) {
      ref.current.scale.lerp(vec, 0.01);
    }
  });
}

export default heartBeating;
