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
  const [isIOS, setIsIOS] = useState(false);

  // Check if the device is running iOS
  useEffect(() => {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsIOS(true);
    }
  }, []);

  // Set the position based on whether the device is iOS or not
  const htmlPosition = useMemo(() => (isIOS ? [0.05, 1.25, 0.08] : [0.16, 1.25, 0.08]), [isIOS]);

  return (
    <Html
      transform
      distanceFactor={0.82}
      position={htmlPosition}
    >
      <div className="w-[44rem] h-[102rem] border-none rounded-2xl">
        <img
          src="./bg-grad.jpeg"
          alt="Desktop"
          className="w-full h-[94%] fixed pointer-events-none rounded-[5rem]"
        />
        <div className="flex flex-col items-center absolute inset-0 text-7xl">
          <HeaderPhone />
          <AppsPhone onAppClick={setSelectedApp} selectedApp={selectedApp} />
          {selectedApp === "profile" && <ProfilePhone />}
          {selectedApp === "web" && <DataPhone />}
          {selectedApp === "data" && <WebPhone />}
          <FooterPhone />
        </div>
      </div>
    </Html>
  );
};

export default IntroPhone;
