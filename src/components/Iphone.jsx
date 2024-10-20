import React, { useEffect, useRef, useState } from "react";
import { Html, Outlines, Text3D, useGLTF } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three"; // Import the animated and useSpring from react-spring
import IntroPhone from "./IntroPhone";
import { useFrame } from "@react-three/fiber";



const Iphone = ({ cameraControlsRef, disableCameraControls, ...props }) => {
  const { nodes, materials } = useGLTF("/phone.gltf");
  const [isClicked, setIsClicked] = useState(false); // State to track the click event
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const textRef = useRef();

  const springProps = useSpring({
    scale: isClicked ? [0.24, 0.24, 0.24] : [0.012, 0.012, 0.012],
    position: isClicked ? [0.327, 0.5, 0.8] : [0.14, 0.66, -0.3],
    rotation: isClicked
      ? [-0.28, 25 * (Math.PI / 180), 0.11]
      : [-Math.PI / 2, 0, -0.3],
    config: { tension: 300, friction: 40 },
  });
  
  const handleClick = () => {
    setActive(!active);
    setIsVisible(!isVisible);
    setIsClicked((prev) => !prev); // Toggle the clicked state
    disableCameraControls();
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
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true); 
    }, 3200);

  
    return () => clearTimeout(timer);
  }, []);
  
  useFrame((state, dt) => {
    if (textRef.current) {
      textRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 2) * 0.0001;
    }
  });

  const blackMaterial = materials["FrameGrey.001"].clone();
  blackMaterial.color.set(0x000000);

  return (
    <>
      <animated.group {...props} {...springProps} dispose={null} >
        <group position={[0, 1.563, 0]}>
          
          <mesh position={[0.1, 2.8, -3]} onClick={(event) => {
              event.stopPropagation(); 
              handleClick(); 
            }} visible={false}>
              <boxGeometry/>
              <meshBasicMaterial color={"orange"}/>
          </mesh>
          
          <Text3D
            position={[-0.29, 2.3, -2]}
            rotation={[0.3, 0, 0]}
            font={"./code-font.json"}
            size={0.25}
            scale={0.5}
            letterSpacing={0.01}
            lineHeight={0.18}
            height={0.2}
            onClick={(event) => {
              event.stopPropagation(); 
              handleClick(); 
            }}
            visible={isVisible}
          >
            {` EXIT`}

            <meshBasicMaterial color={"white"} />
            <Outlines thickness={3} color="purple" />
          </Text3D>
          <mesh
            geometry={nodes.Circle038.geometry}
            material={materials["FrameGrey.001"]}
          />
          <mesh
            geometry={nodes.Circle038_1.geometry}
            material={materials["Front.001"]}
          />
          <mesh
            geometry={nodes.Circle038_2.geometry}
            material={materials["Antennaline.001"]}
          />
          <mesh
            geometry={nodes.Circle038_3.geometry}
            material={materials["BackGrey.001"]}
          />
          <mesh
            geometry={nodes.Circle038_4.geometry}
            material={materials["Rubber.001"]}
          />
          <mesh
            geometry={nodes.AntennaLineBottom001.geometry}
            material={materials["Antennaline.001"]}
            position={[0, -2.676, 0]}
          />
          <mesh
            geometry={nodes.AntennaLineTop001.geometry}
            material={materials["Antennaline.001"]}
            position={[0, 0.018, 0]}
          />
          <mesh
            geometry={nodes.AppleLogo001.geometry}
            material={materials["AppleLogo.001"]}
            position={[0.171, 0.521, -0.079]}
          />
          <mesh
            geometry={nodes.BackCameraBottomGreyRing001.geometry}
            material={materials["BackCaneraGrayRIng.002"]}
            position={[0.702, 0.884, -0.094]}
          />
          <mesh
            geometry={nodes.BackCameraBottomLens001.geometry}
            material={materials["Lens.001"]}
            position={[0.702, 0.884, -0.083]}
          />
          <mesh
            geometry={nodes.BackCameraP1001.geometry}
            material={materials["Black.015"]}
            position={[0.705, 1.027, -0.095]}
          />
          <mesh
            geometry={nodes.BackCameraTopGreyRing001.geometry}
            material={materials["BackCaneraGrayRIng.002"]}
            position={[0.702, 1.178, -0.094]}
          />
          <mesh
            geometry={nodes.BackCameraTopLens001.geometry}
            material={materials["Lens.001"]}
            position={[0.702, 1.178, -0.083]}
          />
          <mesh
            geometry={nodes.CameraBump001.geometry}
            material={materials["Frame.001"]}
            position={[0.704, 1.036, -0.079]}
          />
          <mesh
            geometry={nodes.FlashBG001.geometry}
            material={materials["PinkFlash.002"]}
            position={[0.705, 1.027, -0.093]}
          />
          <mesh
            geometry={nodes.FrontCameraContainer001.geometry}
            material={materials["FrontCameraBlack.002"]}
            position={[0.335, 1.323, 0.08]}
          />
          <mesh
            geometry={nodes.FrontSpeakerBG001.geometry}
            material={materials["FrontSpeaker.001"]}
            position={[0.156, 1.321, 0.077]}
          />
          <mesh
            geometry={nodes.iPhoneLogo001.geometry}
            material={materials["iPhoneLogo.001"]}
            position={[0.2, -1.175, -0.079]}
          />
          <mesh
            geometry={nodes.MuteSwitch001.geometry}
            material={materials["FrameGrey.001"]}
            position={[-0.65, 0.92, 0.009]}
          />
          <group position={[0.97, 0.562, -0.004]}>
            <mesh
              geometry={nodes.Circle032.geometry}
              material={materials["FrameGrey.001"]}
            />
            <mesh
              geometry={nodes.Circle032_1.geometry}
              material={materials["Frame.001"]}
            />
          </group>
          <group position={[0.978, -0.043, 0]}>
            <mesh
              geometry={nodes.Circle031.geometry}
              material={materials["Black.014"]}
            />
            <mesh
              geometry={nodes.Circle031_1.geometry}
              material={materials["FrameGrey.001"]}
            />
          </group>
          <mesh geometry={nodes.SCREEN.geometry} material={blackMaterial} />
          <mesh
            geometry={nodes.VolumeButtons001.geometry}
            material={materials["FrameGrey.001"]}
            position={[-0.658, 0.208, -0.002]}
          />
        </group>
        
        {isVisible && <IntroPhone />}


      </animated.group>
      <animated.mesh
        position={[0.17, 0.7, -0.3]}
        scale={0.16}
        onClick={(event) => {
          event.stopPropagation(); 
          handleClick(); 
        }}
        visible={false}
      >
        <boxGeometry />
        <meshBasicMaterial />
      </animated.mesh>
      {textVisible && ( // Conditional rendering based on textVisible state
        <Text3D
          position={[0.06, 0.725, -0.34]}
          rotation={[0, 0.1, 0]}
          font={"./code-font.json"}
          size={0.06}
          scale={0.22}
          letterSpacing={0.01}
          lineHeight={0.18}
          height={0.03}
          ref={textRef}
        >
          {` CLICK\n\n\n\n\n\n   |\n\n   |\n   v`}
          <meshBasicMaterial />
          <Outlines thickness={2} color="black" />
        </Text3D>
      )}
    </>
  );
};

useGLTF.preload("./phone.gltf");

export default Iphone;
