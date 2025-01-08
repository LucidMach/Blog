import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.1);
    camera.lookAt(0, 0, 0);
  });
}
