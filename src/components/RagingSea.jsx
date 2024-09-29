import { OrbitControls, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three';
import waterVertex from '../shaders/water/vertex.glsl';
import waterFragment from '../shaders/water/fragment.glsl';
import { useRef } from 'react';
import { useFrame,extend } from '@react-three/fiber';

const WaterMaterial = shaderMaterial(
    {
        uTime: 0,
        
        uBigWavesElevation: 0.2,
        uBigWavesFrequency: new THREE.Vector2(4, 1.5) ,
        uBigWavesSpeed: 0.75,

        uSmallWavesElevation: 0.15,
        uSmallWavesFrequency: 3,
        uSmallWavesSpeed: 0.2,
        uSmallIterations: 4,

        uDepthColor: { value: new THREE.Color("#3A8EBA") },
        uSurfaceColor: { value: new THREE.Color("#3A8EBA") },
        uColorOffset: 0.925,
        uColorMultiplier: 1
    },
    waterVertex,
    waterFragment
)
extend({WaterMaterial})

export default function RagingSea()
{
    const waterMaterial = useRef()
    useFrame((state,delta) => {     
        waterMaterial.current.uTime += delta
    })
    return <>
        
        <OrbitControls makeDefault />
        <ambientLight intensity={ 1.5 } />  
        <mesh rotation-x={ - Math.PI * 0.5 }scale={1.5} >
            <planeGeometry args={[2, 2, 128, 128]} /> 
            <waterMaterial ref={waterMaterial} />
        </mesh>

    </>
}