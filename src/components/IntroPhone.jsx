import { Html } from '@react-three/drei'
import React from 'react'


const IntroPhone = () => {
  return (
    <Html
        transform
        distanceFactor={0.86}
        position={[0.165, 1.184,0 ]}
        
      >
        <div className="w-[44rem] h-[96rem] border-none rounded-2xl">
          <section className={`w-full h-screen top-0 left-0 `}>
            <img
              src="./bg-grad.jpeg"
              alt="Desktop"
              className="w-full h-[97%] fixed pointer-events-none rounded-3xl"
            />
            
          </section>
        </div>
      </Html>
  )
}

export default IntroPhone