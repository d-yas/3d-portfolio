import Header from "./components/Header";
import Hero from "./components/Hero";
import RagingSea from "./components/RagingSea";
import { Canvas } from '@react-three/fiber'



/* import Id from "./components/Id";
import Swiss from "./components/Swiss";
import Laptop from "./components/Laptop";
import Projects from "./components/Projects";
import Footer from "./components/Footer"; */

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Canvas className="fixed top-0 left-0 w-full h-full bg-w"
          camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 4, - 2, 6 ]
          } }
      >
          <RagingSea />
      </Canvas>
        
      </div>
    </>
  );
};

export default App;
