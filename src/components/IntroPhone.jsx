import { Html } from "@react-three/drei";
import React, { useState, useEffect } from "react";

const IntroPhone = () => {
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    // Check if the user agent matches an iPhone
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPhone/i.test(userAgent)) {
      setIsIPhone(true);
    }
  }, []);

  return (
    <Html
      transform
      distanceFactor={isIPhone ? 1.34 : 1.27} 
      
      position={isIPhone ? [-0.68, 2.96, 0.08] : [-0.57, 2.94, 0.08]} 
      pointerEvents="auto"
      
    >
      <iframe
        src="https://d-yas.github.io/Portfolio/"
        width="465px"
        height="1010px"
        className={`rounded-[3rem] absolute pointer-events-auto h-[63.2rem] z-[9494]`} /* Absolute kilit oldu */
        
      />
    </Html>
  );
};

export default IntroPhone;
