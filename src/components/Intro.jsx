import { useState, useEffect } from "react";
import Folder from "./Folder";
import Footer from "./Footer";
import Files from "./Files";
import Navbar from "./Navbar";
import { Html } from "@react-three/drei";

const Intro = ({ className = "" }) => {
  const [activeComponent, setActiveComponent] = useState("Profile");
  const [isFolderVisible, setIsFolderVisible] = useState(false); // Set to false by default

  // Create the audio object
  
  const handleMouseClick = () => {
    const clickSound = new Audio("./click.mp3");
    clickSound.volume = 0.1;
    clickSound.play();
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseClick);
    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);

  return (
    <Html
      transform
      distanceFactor={0.83}
      position={[0.004, 1.48, -1.4]}
      rotation-x={-0.256}
    >
      <div className="w-[1488px] h-[1000px] border-none rounded-2xl ">
        <section className={`w-full h-screen top-0 left-0 ${className}`}>
          <img
            src="./bg-grad.jpeg"
            alt="Desktop"
            className="w-full h-screen fixed pointer-events-none"
          />
          <Navbar />

          <div className="absolute w-full h-screen flex flex-col justify-between">
            <Files
              setActiveComponent={setActiveComponent}
              setIsFolderVisible={setIsFolderVisible}
            />

            <Folder
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
              isFolderVisible={isFolderVisible}
              setIsFolderVisible={setIsFolderVisible}
            />

            <Footer />
          </div>
        </section>
      </div>
    </Html>
  );
};

export default Intro;
