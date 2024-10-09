import RagingSea from "./RagingSea";
import { Canvas } from "@react-three/fiber";
import Section from "./Utils/Section";
import {
  Center,
  Float,
  Html,
  Sparkles,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Island from "./Island";

const Canvassed = () => {
  return (
    <Section three className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [-2.6, 1.2, 1],
        }}
      >
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <Float>
          <Island scale={0.23} position={[0.34, -2.1, 0.5]} />
          <ambientLight />
        </Float>
        <Center>
          <Html zIndexRange={[2, 0]} position={[0, 1, -0.1]}>
            {/* <Hero /> */}
          </Html>
          <Float>
            <RagingSea />
          </Float>
        </Center>

        <Sparkles count={300} scale={3} size={1} speed={0.01} />
      </Canvas>
    </Section>
  );
};

export default Canvassed;
