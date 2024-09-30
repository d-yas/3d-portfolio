import Header from "./components/Header";
import Hero from "./components/Hero";
import Star from './components/Star'

import Canvassed from "./components/Canvassed";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-black">
        <Header />
        <Hero />
        <Star />
        <Canvassed/>
      </div>
    </>
  );
};

export default App;
