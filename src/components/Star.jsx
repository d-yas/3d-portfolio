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
        <Stars
        radius={1}  // Yıldızların yayılacağı kürenin yarıçapı
        depth={100}    // Yıldızların ne kadar uzağa yerleştirileceği
        count={5000}  // Toplam yıldız sayısı
        factor={2.5}    // Yıldızların yoğunluğu ve parlaklığı
        saturation={0} // Yıldızların rengindeki doygunluk
        fade={true}    // Uzak yıldızların soluklaşmasını sağlar
      />
        
      </Canvas>
    </Section>
  )
}

export default Star