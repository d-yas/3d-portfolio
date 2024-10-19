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
      distanceFactor={1.28}
      position={isIPhone ? [-0.6, 1.34, 0.08] : [0.165, 1.34, 0.08]}
    >
      <iframe
        src="https://3d-portfolio-mobile.vercel.app/"
        width="465px"
        height="1010px"
        className="rounded-[4rem]"
      />
    </Html>
  );
};

export default IntroPhone;
