import RagingSea from "./RagingSea";
import Mac from "./Mac";
import { useFrame, useThree } from "@react-three/fiber";
import Header from "./Header";
import { Float, Sparkles, CameraControls, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Island from "./Island";
import { useEffect, useRef, useState } from "react";
import SpinLights from "./SpinLights";

const Scene = () => {
  const cameraControlsRef = useRef();
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [smoothTime, setSmoothTime] = useState(0.6);
  const { camera } = useThree();

  const updateSmoothTime = () => {
    setTimeout(() => {
      setSmoothTime(0.1); // Set smoothTime to 0.5 after 2 seconds
    }, 2400); // 2000 milliseconds = 2 seconds
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const cameraPosition = [0.78, 1.14, 1.67];
      const targetPosition = [0, 0.67, 0];

      cameraControlsRef.current?.setLookAt(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
        targetPosition[0],
        targetPosition[1],
        targetPosition[2],
        true
      );
      updateSmoothTime();
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const disableCameraControls = () => {
    setTimeout(() => {
      setControlsEnabled(!controlsEnabled);
    }, 400);
  };

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        maxDistance={2.6}
        truckSpeed={0.1}
        smoothTime={smoothTime}
        dollyToCursor
        enabled={controlsEnabled}
        maxPolarAngle={Math.PI / 2.3}
      />
      <Perf position="bottom-left" />

      <ambientLight intensity={7.5} />

      <Island scale={0.23} position={[0.34, -2.1, 0.5]} />
      <Mac
        cameraControlsRef={cameraControlsRef}
        disableCameraControls={disableCameraControls}
      />

      <Float>
        <RagingSea />
      </Float>

      <Sparkles
        count={600}
        position={[0, 1, 1]}
        scale={4}
        size={0.5}
        speed={0.09}
      />
    </>
  );
};

export default Scene;
