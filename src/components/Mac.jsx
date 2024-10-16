import {
  ContactShadows,
  Environment,
  useGLTF,
  Text,
  Text3D,
  Outlines,
  Html
} from "@react-three/drei";
import { useRef, useState } from "react";
import { a, useSpring } from "@react-spring/three"; // Importing animated components from react-spring

import Intro from "./Intro";
import { useFrame } from "@react-three/fiber";

const Mac = ({ onClick, cameraControlsRef, disableCameraControls }) => {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  const isMobile = () => window.innerWidth < 768;
  const [clicked, setClicked] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const textRef = useRef();

  /* Animation */
  const { scale, position, rotation } = useSpring({
    scale: clicked ? 0.165 : 0.025,
    position: clicked ? [0.737, 0.8, 1.43] : [0, 0.642, -0.28],
    rotation: clicked ? [0, 0.45, 0] : [0.04, 0, 0.05],
    config: { mass: 1, tension: 30, friction: 11 },
  });

  const handleClick = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      
      
      setIsVisible(!isVisible);
    } else {
      setIsVisible(!isVisible);
      setShowIntro(!showIntro);
      setClicked(!clicked);
      disableCameraControls();

      if (onClick) onClick();

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
    }
  };

  useFrame((state, dt) => {
    if (textRef.current) {
      textRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 2) * 0.0001;
    }
  });

  return (
    <>
      <Environment
        /* files={"./5.jpg"}
        background */
        preset="city"
      />
      <mesh
        position={[0.01, 0.68, -0.3]}
        scale={0.22}
        onClick={handleClick}
        visible={false}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      {!isMobile() && <Text3D
        position={[-0.07, 0.73, -0.28]}
        rotation={[0, 0.3, 0]}
        font={"./code-font.json"}
        size={0.62}
        scale={0.022}
        letterSpacing={0.01}
        lineHeight={0.18}
        height={0.2}
        ref={textRef}
        onClick={handleClick}
        visible={isVisible}
      >
        
         {` CLICK\n\n\n\n\n\n   |\n\n   |\n   v`} 

        <meshBasicMaterial />
        <Outlines thickness={2} color="black" />
      </Text3D>}

      <a.primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={rotation}
        onClick={handleClick}
      >
        {isMobile() && (
          <Text
            position={[0.6, 3.5, -1.8]}
            scale={0.9}
            fontSize={0.45}
            maxWidth={6}
            outlineBlur={0.6}
          >
            For the laptop content, please try from a Desktop.
          </Text>
        )}
        {showIntro && <Intro />}
        
      </a.primitive>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Mac;
