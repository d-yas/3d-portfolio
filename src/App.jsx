import Header from "./components/Header";
import Hero from "./components/Hero";
import Three from "./components/Three";
import RagingSea from "./components/RagingSea";
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'




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
  
        <Three />
        
        
      </div>
    </>
  );
};

export default App;
