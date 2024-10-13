import RagingSea from "./RagingSea";
import Mac from "./Mac";
import { useFrame, useThree } from "@react-three/fiber";

import {
  Center,
  Float,
  Html,
  Sparkles,
  OrbitControls,
  CameraControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Island from "./Island";
import * as THREE from "three";
import { useControls } from "leva"; // Import Leva
import { useEffect, useRef, useState } from "react";
import { easing } from "maath";


const Scene = () => {
    const cameraControlsRef = useRef()

    const { camera } = useThree()
    useEffect(() => {
        // Set a timeout to delay the camera adjustment
        const timer = setTimeout(() => {
          const cameraPosition = [0.78, 1.14, 1.67]; // Camera's position
          const targetPosition = [0, .67, 0]; // Target position to look at
          
          cameraControlsRef.current?.setLookAt(
            cameraPosition[0], cameraPosition[1], cameraPosition[2], // x, y, z of the camera position
            targetPosition[0], targetPosition[1], targetPosition[2], // x, y, z of the target position
            true, 
          );
        }, 10); 

        return () => clearTimeout(timer);
      }, []);
    

  return (
    <>
    <CameraControls ref={cameraControlsRef} truckSpeed={0.1} maxDistance={2.4} smoothTime={0.7} dollyToCursor enabled maxPolarAngle={Math.PI/2.3}/>
      <Perf position="top-left" />
      

      <ambientLight intensity={4} />
      

      <Island scale={0.23} position={[0.34, -2.1, 0.5]} />
      <Mac />


      <Float>
        <RagingSea />
      </Float>

      <Sparkles
        count={10}
        position={[0, 1, 0]}
        scale={3}
        size={1}
        speed={0.01}
      />
    </>
  );
};

export default Scene;
