import { useMemo, useRef, useState } from "react";
import { Instances, Instance, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const randomSpawn = (no: number) => {
  const poolOfCubesArgs = [];

  for (let i = 0; i < no; i++) {
    const isLeft = i < no / 2;
    const x = isLeft ? Math.random() * 5 - 10 : Math.random() * 5 + 5;
    const y = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;

    const xdeg = Math.random() * 2 * Math.PI;
    const ydeg = Math.random() * 2 * Math.PI;
    const zdeg = Math.random() * 2 * Math.PI;

    const scale = Math.random() * 0.2 + 0.1; // Ensure scale is positive

    poolOfCubesArgs.push({
      position: { x, y, z },
      rotation: { x: xdeg, y: ydeg, z: zdeg },
      scale,
      moveX: Math.random() * 0.01 - 0.005,
      moveY: Math.random() * 0.01 - 0.005,
      moveZ: Math.random() * 0.01 - 0.005,
    });
  }

  return poolOfCubesArgs;
};

const MNETCubeInstance = ({ args }: { args: any }) => {
  const ref = useRef<any>();
  const [hover, setHover] = useState(false);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.003;
      ref.current.position.x += args.moveX;
      ref.current.position.y += args.moveY;
      ref.current.position.z += args.moveZ;
    }
  });

  return (
    <Instance
      ref={ref}
      position={[args.position.x, args.position.y, args.position.z]}
      rotation={[args.rotation.x, args.rotation.y, args.rotation.z]}
      scale={hover ? args.scale * 1.5 : args.scale}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerLeave={() => setHover(false)}
    />
  );
};

const SeaOfMNET: React.FC<Props> = ({ position, rotation, scale }) => {
  const cubesArgs = useMemo(() => randomSpawn(100), []);
  const { nodes } = useGLTF("/mnetcube.glb");

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Instances
        geometry={(nodes.Mnet_Cube as any).geometry}
        castShadow
        receiveShadow
      >
        <meshMatcapMaterial color="white" />
        {cubesArgs.map((args, index) => (
          <MNETCubeInstance key={index} args={args} />
        ))}
      </Instances>
    </group>
  );
};

useGLTF.preload("/mnetcube.glb");

export default SeaOfMNET;
