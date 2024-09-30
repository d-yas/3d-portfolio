import RagingSea from "./RagingSea";
import { Canvas } from "@react-three/fiber";
import Section from "./Utils/Section";
import { Center,Float } from "@react-three/drei";
import { Perf } from "r3f-perf";

const Canvassed = () => {
  return (
    <Section three>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-0.6, 0.2, 1],
        }}
      >
        <Perf position="top-left" />
        <Center>
          <Float>
            <RagingSea />
          </Float>
        </Center>
      </Canvas>
    </Section>
  );
};

export default Canvassed;
