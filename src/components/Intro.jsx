import { useState } from "react";
import Folder from "./Folder";
import Footer from "./Footer";
import Files from "./Files";
import Navbar from "./Navbar";

const Intro = ({className=''}) => {
  
  const [activeComponent, setActiveComponent] = useState("Profile");

 
  const [isFolderVisible, setIsFolderVisible] = useState(false); // Set to false by default

  return (
    <section className={`w-full h-screen top-0 left-0 ${className}`}>
      <img
        src="./bg-grad.jpeg"
        alt="Desktop"
        className="w-full h-screen fixed pointer-events-none"
      />
      <Navbar />

      <div className="absolute w-full h-screen flex flex-col justify-between">
      
        <Files setActiveComponent={setActiveComponent} setIsFolderVisible={setIsFolderVisible} />

        
        <Folder
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          isFolderVisible={isFolderVisible}
          setIsFolderVisible={setIsFolderVisible}
        />

        <Footer />
      </div>
    </section>
  );
};

export default Intro;
