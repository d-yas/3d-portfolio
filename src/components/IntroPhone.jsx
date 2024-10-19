import { Html } from "@react-three/drei";
import ProfilePhone from "./ProfilePhone";
import WebPhone from "./WebPhone";
import DataPhone from "./DataPhone";
import FooterPhone from "./FooterPhone";
import HeaderPhone from "./HeaderPhone";
import AppsPhone from "./AppsPhone";
import React, { useState, useEffect, useMemo } from "react";

const IntroPhone = () => {
  const [selectedApp, setSelectedApp] = useState(null);
 

  return (
    <Html
      transform
      distanceFactor={1.28}
      position={[0.165,1.34,0.08]}
    >
 
      <iframe
    src="https://3d-portfolio-mobile.vercel.app/"
    width="465px"
    height="1010px"
    className={`rounded-[4rem]`}
  />
    </Html>
  );
};

export default IntroPhone;
