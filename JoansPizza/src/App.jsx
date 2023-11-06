import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import React from "react";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <About />
    </div>
  );
};

export default App;
