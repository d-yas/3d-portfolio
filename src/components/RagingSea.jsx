import { shaderMaterial } from '@react-three/drei'
import {useRef} from 'react'

const RagingSea = () => {
  return (
    <mesh>
        <planeGeometry/>
        <primitive object={shaderMaterial} attach="material" ref={materialRef}/>
        
    </mesh>
  )
}

import Hero from "./components/Hero";
export default RagingSea