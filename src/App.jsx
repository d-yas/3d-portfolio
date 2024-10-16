import React, { Suspense, useState, useEffect } from "react";
import Loading from "./components/Loading";
import Header from './components/Header';
import Canvassed from './components/Canvassed';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="bg-black">
      <Suspense fallback={<Loading />}>
        
        {isLoaded && <Header/>}
        <Canvassed />
      </Suspense>
    </div>
  );
};

export default App;
