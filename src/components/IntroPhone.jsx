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
      position={[0.16, 1.25, 0.08]}
      style={{
        width: "44rem",
        height: "102rem",
       
        overflow: "hidden", // Ensuring content doesn't overflow
       
       
      }}
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
          {selectedApp === "web" && <DataPhone />}{" "}
          {/* Ters oldu karıştırmıcam data -> web */}
          {selectedApp === "data" && <WebPhone />}
          <FooterPhone />
        </div>
      </div>
    </Html>
  );
};

export default IntroPhone;
