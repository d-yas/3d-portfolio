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

    uBigWavesElevation: 0.2,
    uBigWavesFrequency: new THREE.Vector2(4, 1.5),
    uBigWavesSpeed: 0.75,

    uSmallWavesElevation: 0.15,
    uSmallWavesFrequency: 3,
    uSmallWavesSpeed: 0.2,
    uSmallIterations: 4,

    uSurfaceColor: new THREE.Color(0.098, 0.4, 0.565), // For #186691
    uDepthColor: new THREE.Color(0.608, 0.847, 1.0), // For #9bd8ff    

    uColorOffset: 0.11,
    uColorMultiplier: 8,
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
        polar={[-0.1, 0.25]} /* limit the vertical rotations */
        azimuth={[0, 0]} /* limit the vertical rotations */
        /* limit the horizontal rotations */
        config={{
          mass: 2,
          tension: 400,
        }} /* Çevirince laptop biraz sallanır. Fizik ekler */
        snap={{ mass: 4, tension: 400 }} /* Bırakınca geri dönmesini sağlar. */
      >
        <mesh rotation-x={-Math.PI * 0.5} scale={2}>
          <planeGeometry args={[2, 2, 1024, 1024]} />
          <waterMaterial ref={waterMaterial} />
        </mesh>
      </PresentationControls>
    </>
  );
}
