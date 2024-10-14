import React from 'react'

const Sun = () => {
  return (
    <mesh scale={0.1} position={[0.75,1.6,-0.72]}>
        <sphereGeometry />
        <meshBasicMaterial />
    </mesh>
  )
}

export default Sun