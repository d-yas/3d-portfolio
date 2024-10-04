import { Center, Float, Html, Sparkles, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Section from "./Utils/Section";
import Intro from "./Intro";

export default function Id() {
  return (
    <Section three className={`border border-n-1`}>
      <Canvas>
        <Html position={[-3.1,1,2]}>
          <Intro />
        </Html>
        <mesh position={[2,0,2]}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </Section>
  );
}
