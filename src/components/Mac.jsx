import {
  Html,
  ContactShadows,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { a, useSpring } from "@react-spring/three"; // Importing animated components from react-spring


import Intro from './Intro';

const Mac = ({ onClick, cameraControlsRef,disableCameraControls }) => {
    const computer = useGLTF(
        "https://threejs-journey.com/resources/models/macbook_model.gltf"
    );

    const [clicked, setClicked] = useState(false);
    const [showIntro, setShowIntro] = useState(false); // State for Intro visibility


    // Define the animation state using useSpring from react-spring
    const { scale, position, rotation } = useSpring({
        scale: clicked ? 0.165 : 0.025,
        position: clicked ? [0.737, 0.8, 1.43] : [0, 0.642, -0.28],
        rotation: clicked ? [0, 0.45, 0] : [0.04, 0, 0.05],
        config: { mass: 1, tension: 30, friction: 11 },
    });

    const handleClick = () => {
        setClicked(!clicked);
        setShowIntro(!showIntro); // Toggle Intro visibility
        disableCameraControls();
        if (onClick) onClick();

        const cameraPosition = [0.78, 1.14, 1.67];
        const targetPosition = [0, 0.67, 0];

        cameraControlsRef.current?.setLookAt(
            cameraPosition[0], cameraPosition[1], cameraPosition[2],
            targetPosition[0], targetPosition[1], targetPosition[2],
            true 
        );
    };



    return (
        <>
            <Environment preset="city" />
            
            <a.primitive
                object={computer.scene}
                scale={scale}
                position={position}
                rotation={rotation}
                onClick={handleClick}
                
            >
                <Html
                    transform
                    distanceFactor={0.82}
                    position={[0, 1.48, -1.4]}
                    rotation-x={-0.256}
                >
                    <div className="w-[1488px] h-[1000px] border-none rounded-2xl ">
                        {showIntro && <Intro />} 
                    </div>
                </Html>
            </a.primitive>

            <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        </>
    );
};

export default Mac;
