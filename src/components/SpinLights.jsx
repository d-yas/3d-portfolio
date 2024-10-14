import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere, Stars } from "@react-three/drei";

const SpinLights = (props) => {
  const position = [0.1, 0.98, -0.4];
  const radius = -1.1;
  const speed = 1;
  return (
    <group {...props}>
      <Electron
        position={position}
        speed={0.56 * speed}
        radius={radius}
        rotation={[0, Math.PI / 2, 0]}
        angle={Math.PI} // 180-degree angle
      />
      <Electron
        position={position}
        speed={0.44 * speed}
        radius={radius}
        rotation={[0, Math.PI / 2, 0]}
        angle={Math.PI / 4} // 45-degree angle
      />
      <Electron
        position={position}
        speed={0.32 * speed}
        radius={radius}
        rotation={[0, Math.PI / 2, 0]}
        angle={-Math.PI / 4} // -45-degree angle
      />
      {/* Fast Group */}
      <Electron
        position={position}
        speed={0.96 * speed}
        radius={radius }
        rotation={[0, Math.PI / 2, 0]}
        angle={Math.PI} // 180-degree angle
      />
      <Electron
        position={position}
        speed={0.84 * speed}
        radius={radius}
        rotation={[0, Math.PI / 2, 0]}
        angle={Math.PI / 4} // 45-degree angle
      />
      <Electron
        position={position}
        speed={0.72 * speed}
        radius={radius}
        rotation={[0, Math.PI / 2, 0]}
        angle={-Math.PI / 4} // -45-degree angle
      />
    </group>
  );
};

export default SpinLights;

function Electron({ radius = 1, speed = 3, angle = 0, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;

   
    const x = Math.sin(t) * radius;
    const y = Math.cos(t) * radius * Math.sin(angle);
    const z = Math.cos(t) * radius * Math.cos(angle);

    ref.current.position.set(x, y, z);
  });

  return (
    <group {...props}>
      <Trail
        width={0.2}
        length={8}
        color={new THREE.Color(1, 1, 1)}
        attenuation={(t) => t * t}
        decay={1}
     
      >

        <mesh ref={ref}>
          <sphereGeometry args={[0.008]} />
          <meshBasicMaterial
            color={new THREE.Color(1, 1, 1)}
            toneMapped={false}
            opacity={0.3}
            transparent={true}
          />
        </mesh>
      </Trail>
    </group>
  );
}
