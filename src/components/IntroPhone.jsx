import { Html } from "@react-three/drei";
import ProfilePhone from "./ProfilePhone";
import WebPhone from "./WebPhone";
import DataPhone from "./DataPhone";
import FooterPhone from "./FooterPhone";
import HeaderPhone from "./HeaderPhone";
import AppsPhone from "./AppsPhone";
import React from "react";

const IntroPhone = () => {
  return (
    <div className="w-[44rem] h-[96rem] border-none rounded-2xl">
      <section className={`w-full h-screen top-0 left-0 `}>
        <img
          src="./bg-grad.jpeg"
          alt="Desktop"
          className="w-full h-[95%] fixed pointer-events-none rounded-b-[5rem]"
        />
        <div className="flex flex-col items-center  absolute inset-0 text-7xl">
          <HeaderPhone />
          <AppsPhone />
          {/* Main */}
          {/* <ProfilePhone />
          <DataPhone /> */}
          <WebPhone />
          <FooterPhone />
        </div>
      </section>
    </div>
  );
};

export default IntroPhone;
