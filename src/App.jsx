import Header from "./components/Header";
import Hero from "./components/Hero";
import Star from './components/Star'
import Id from './components/Id'

import Canvassed from "./components/Canvassed";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] bg-black">
        <Header />
        <Canvassed/>
        <Id/>
        
      </div>
    </>
  );
};

export default App;
