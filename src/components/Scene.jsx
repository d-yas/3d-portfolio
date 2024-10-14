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
    const [controlsEnabled, setControlsEnabled] = useState(true);
    const [smoothTime, setSmoothTime] = useState(0.6);
    const { camera } = useThree()


    const updateSmoothTime = () => {
      setTimeout(() => {
        setSmoothTime(0.1); // Set smoothTime to 0.5 after 2 seconds
      }, 2100); // 2000 milliseconds = 2 seconds
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          const cameraPosition = [0.78, 1.14, 1.67]; 
          const targetPosition = [0, .67, 0]; 

         
          cameraControlsRef.current?.setLookAt(
            cameraPosition[0], cameraPosition[1], cameraPosition[2], 
            targetPosition[0], targetPosition[1], targetPosition[2], 
            true, 
          );
          updateSmoothTime();
        }, 10); 

        return () => clearTimeout(timer);
      }, []);
    
      
      const disableCameraControls = () => {
        setTimeout(() => {
            
          setControlsEnabled(!controlsEnabled);
        },400);
      };

  return (
    <>
    <CameraControls ref={cameraControlsRef} truckSpeed={0.1} smoothTime={smoothTime} dollyToCursor   enabled={controlsEnabled}  maxPolarAngle={Math.PI/2.3}/>
      <Perf position="bottom-left" />
      

      <ambientLight intensity={4} />
      

      <Island scale={0.23} position={[0.34, -2.1, 0.5]} />
      <Mac cameraControlsRef={cameraControlsRef} disableCameraControls={disableCameraControls} />


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
