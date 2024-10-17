import { Canvas } from "@react-three/fiber";
import Section from "./Utils/Section";
import Scene from "./Scene";
import { CanvasWrapper } from "@isaac_ua/drei-html-fix";

const Canvassed = () => {
  return (
    <>
      <Section three>
        <CanvasWrapper>
          <Canvas
          dpr={[1,2]}
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
        </CanvasWrapper>
      </Section>
    </>
  );
};

export default Canvassed;
