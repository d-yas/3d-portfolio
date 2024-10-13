import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

import Intro from './Intro';

const Mac = () => {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  return (
    <>
      <Environment preset="city" />

      <primitive
        object={computer.scene}
        scale={0.025}
        position={[0,0.642,-0.3]}
        rotation={[0.04, 0, 0.05]}
      >
        <Html
          transform
          distanceFactor={0.82} /* Küçültür */
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}
          
        >
            <div className="w-[1488px] h-[1000px] border-none rounded-2xl ">
                <Intro className={`hidden`} />
            </div>
          
        </Html>
      </primitive>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Mac;
