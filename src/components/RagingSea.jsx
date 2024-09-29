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

    uBigWavesElevation: 0.1,
    uBigWavesFrequency: new THREE.Vector2(4, 1.5),
    uBigWavesSpeed: 0.55,

    uSmallWavesElevation: 0.1,
    uSmallWavesFrequency: 3,
    uSmallWavesSpeed: 0.2,
    uSmallIterations: 4,

    uSurfaceColor: new THREE.Color(0.192, 0.18, 0.698), // For #312EB2
    uDepthColor: new THREE.Color(0, 0, 0), // For #9A2626

    uColorOffset: 0.95,
    uColorMultiplier: 1,
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
      
        <mesh position={[0, -0., 0]} rotation-x={-Math.PI * 0.5} scale={1}>
          <planeGeometry args={[2, 2, 512, 512]} />
          <waterMaterial ref={waterMaterial} />
        </mesh>
      <OrbitControls  makeDefault/>
    </>
  );
}
/* Orbit kontroller sınırlanacak canvas bölümlenmesi bakılack */