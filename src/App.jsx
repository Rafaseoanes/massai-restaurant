import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Igfeed from "./Components/Igfeed";



const App = () => {
  return (

<div className="overflow-hidden ">
    <div className="bg-header-background bg-cover bg-no-repeat  w-screen h-screen flex  justify-center pt-8" >
      <Header />
    </div>
      <About />
      <Igfeed />
      <Footer />
</div>
    
  );
};

export default App;
