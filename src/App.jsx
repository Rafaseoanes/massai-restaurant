import React from "react";
import About from "./Components/About";
import Header from "./Components/Header";



const App = () => {
  return (

<div className="overflow-hidden">
    <div className="bg-header-background bg-cover bg-no-repeat  w-screen h-screen flex  justify-center items-center" >
      <Header />
    </div>
      <About />
</div>
    
  );
};

export default App;
