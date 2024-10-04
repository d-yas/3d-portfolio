import RagingSea from "./RagingSea";
import { Canvas } from "@react-three/fiber";
import Section from "./Utils/Section";
import { Center, Float, Html, Sparkles, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Hero from "./Hero";
import Id from "./Id";

const Canvassed = () => {
  return (
    <Section three>
      <Canvas 
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-2.6, 0.8, 1],
        }}
      >
        <Perf position="top-left" />

        <Center>
          <Html zIndexRange={[2, 0]} position={[0, 1, -0.1]}>
            <Hero />
          </Html>
          <Float>
            <RagingSea />
          </Float>
        </Center>

        <Sparkles count={22} scale={3} size={1} speed={0.1} />
      </Canvas>
    </Section>
  );
};

export default Canvassed;
