import { Html } from "@react-three/drei";
import ProfilePhone from "./ProfilePhone";
import WebPhone from "./WebPhone";
import DataPhone from "./DataPhone";
import FooterPhone from "./FooterPhone";
import HeaderPhone from "./HeaderPhone";
import AppsPhone from "./AppsPhone";
import React, { useState } from "react";

const IntroPhone = () => {
  const [selectedApp, setSelectedApp] = useState(null); 

  return (
    <Html
        transform
        distanceFactor={0.82}
        position={[0.151, 1.34,0.06 ]}
        
      >
    <div className="w-[44rem] h-[98rem] border-none rounded-2xl">
      <section className={`w-full h-screen top-0 left-0 `}>
        <img
          src="./bg-grad.jpeg"
          alt="Desktop"
          className="w-full h-[99.5%] fixed pointer-events-none rounded-[5rem]"
        />
        <div className="flex flex-col items-center absolute inset-0 text-7xl">
          <HeaderPhone />
          <AppsPhone onAppClick={setSelectedApp} selectedApp={selectedApp} /> 
          {selectedApp === "profile" && <ProfilePhone />}
          {selectedApp === "web" && <DataPhone />} {/* Ters oldu karıştırmıcam data -> web */}
          {selectedApp === "data" && <WebPhone />}
          <FooterPhone />
        </div>
      </section>
    </div>
    </Html>
  );
};

export default IntroPhone;
