import Header from "./components/Header";
import Hero from "./components/Hero";
import RagingSea from "./components/RagingSea";


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
        <RagingSea />
      </div>
    </>
  );
};

export default App;
