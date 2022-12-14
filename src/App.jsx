import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Igfeed from "./Components/Igfeed";
import Coctels from "./Components/Coctels";



const App = () => {
  return (

<div className="overflow-hidden font-customTitles">
    <div className="bg-header-background bg-cover bg-no-repeat  w-screen h-screen flex  justify-center pt-8" >
      <Header />
    </div>
      <About />
      <Coctels />
      <Igfeed />
      <Footer />
</div>
    
  );
};

export default App;
