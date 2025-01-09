import { useMemo } from "react";
import { MNETCube } from "./MNETCube";

interface props {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const randomSpawn = (no: number) => {
  const poolOfCubesArgs = [];

  for (let i = 0; i < no / 2; i++) {
    // generate a random number between -10 and -5
    const x = Math.random() * 5 - 10;
    const y = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;

    // generate a random angle between 0 and 2*PI
    const xdeg = Math.random() * 2 * Math.PI;
    const ydeg = Math.random() * 2 * Math.PI;
    const zdeg = Math.random() * 2 * Math.PI;

    const scale = Math.random() * 0.2 - 0.2;

    poolOfCubesArgs.push({
      position: { x, y, z },
      rotation: { x: xdeg, y: ydeg, z: zdeg },
      scale,
    });
  }

  for (let i = 0; i < no / 2; i++) {
    // generate a random number between 5 and 10
    const x = Math.random() * 5 + 5;
    const y = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;

    // generate a random angle between 0 and 2*PI
    const xdeg = Math.random() * 2 * Math.PI;
    const ydeg = Math.random() * 2 * Math.PI;
    const zdeg = Math.random() * 2 * Math.PI;

    const scale = Math.random() * 0.2 - 0.2;

    poolOfCubesArgs.push({
      position: { x, y, z },
      rotation: { x: xdeg, y: ydeg, z: zdeg },
      scale,
    });
  }

  return poolOfCubesArgs;
};

const SeaOfMNET: React.FC<props> = ({ position, rotation, scale }) => {
  const cubesArgs = useMemo(() => randomSpawn(100), []);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {cubesArgs.map((cube, index) => (
        <MNETCube
          position={[cube.position.x, cube.position.y, cube.position.z]}
          rotation={[cube.rotation.x, cube.rotation.y, cube.rotation.z]}
          scale={cube.scale}
          key={index}
        />
      ))}
    </group>
  );
};

export default SeaOfMNET;
