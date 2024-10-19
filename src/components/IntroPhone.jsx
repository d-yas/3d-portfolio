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
      {/* <div className="w-[44rem] h-[102rem] border-none rounded-2xl">
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
      </div> */}
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
