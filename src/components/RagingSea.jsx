import {
  OrbitControls,
  shaderMaterial,
  PresentationControls,
} from "@react-three/drei";
import * as THREE from "three";
import waterVertex from "../shaders/water/vertex.glsl";
import waterFragment from "../shaders/water/fragment.glsl";
import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,

    uBigWavesElevation: 0.17,
    uBigWavesFrequency: new THREE.Vector2(4, 1.5),
    uBigWavesSpeed: 0.75,

    uSmallWavesElevation: 0.03,
    uSmallWavesFrequency: 2,
    uSmallWavesSpeed: 0.2,
    uSmallIterations: 3,

    uSurfaceColor: new THREE.Color(0.507, 0.196, 0.902), // Surface color (#6832E6)
    uDepthColor: new THREE.Color(0.986, 0.114, 0.304), // Depth color (#E21D9A)

    uColorOffset: 0.1,
    uColorMultiplier: 4,
  },
  waterVertex,
  waterFragment
);
extend({ WaterMaterial });

export default function RagingSea() {
  const waterMaterial = useRef();
  useFrame((state, delta) => {
    waterMaterial.current.uTime += delta;
  });
  return (
    <>
      <PresentationControls
        global /* Sadece modele tıklayıp değil her yerden çevirebilmek için */
        polar={[-0.04, 0.07]} /* limit the vertical rotations */
        config={{
          mass: 1,
          tension: 400,
        }} /* Çevirince laptop biraz sallanır. Fizik ekler */
        snap={{ mass: 4, tension: 400 }} /* Bırakınca geri dönmesini sağlar. */
      >
        <mesh rotation-x={-Math.PI * 0.5} scale={2}>
          <planeGeometry args={[2, 2, 512, 512]} />
          <waterMaterial ref={waterMaterial} />
        </mesh>
      </PresentationControls>
    </>
  );
}
