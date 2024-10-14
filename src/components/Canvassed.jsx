import { Canvas, useFrame, useThree } from "@react-three/fiber";

import Section from "./Utils/Section";
import Scene from "./Scene";

const Canvassed = () => {
  return (
    <Section three>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [-0.58, 3.14, -2.42],
        }}
      >
        <color attach="background" args={["#000000"]} />
        <Scene />
        
      </Canvas>
    </Section>
  );
};

export default Canvassed;
