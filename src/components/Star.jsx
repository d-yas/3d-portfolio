import {Stars, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import Section from './Utils/Section'



const Star = () => {
  return (
    <Section stars>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, -2, 6],
        }}
      >
        
        
      </Canvas>
    </Section>
  )
}

export default Star