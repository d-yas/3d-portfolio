import { Html } from '@react-three/drei'
import React from 'react'

const Island = () => {
  return (
    <mesh>
        <boxGeometry />
        <meshBasicMaterial  color={"red"}/>
    </mesh>
  )
}

export default Island