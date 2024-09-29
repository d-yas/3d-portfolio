import React, { useRef } from "react"; // Ensure React is imported
import RagingSea from "./RagingSea";
import Hero from "./Hero";
import { Canvas } from "@react-three/fiber";
import { Stars, Html, Center } from "@react-three/drei";
import * as THREE from "three";

const Three = () => {
  // Create refs for helpers
  const axesHelperRef = useRef();
  const gridHelperRef = useRef();

  // Create axes helper
  const axesHelper = new THREE.AxesHelper(5); // Length of axes
  const gridHelper = new THREE.GridHelper(10, 10); // Size of grid and divisions

  return (
    <div className="fixed w-full h-screen">
      <Canvas
        camera={{
          fov: 30,
          near: 0.1,
          far: 200,
          position: [-1.4, 3, 0],
        }}
      >
        <color attach="background" args={["#000000"]} />
        {/* Add helpers to the scene */}
        {/* <primitive object={axesHelper} ref={axesHelperRef} />
        <primitive object={gridHelper} ref={gridHelperRef} /> */}

        <Html position={[0, 0.3, -0.1]}>
          <Hero />
        </Html>
        <Stars
          radius={0}
          depth={50}
          count={5000}
          factor={2}
          saturation={0.2}
          fade={true}
        />
        <Center>
          <RagingSea />
        </Center>
      </Canvas>
    </div>
  );
};

export default Three;
