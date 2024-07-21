import Contact from "./compoents/Contact";
import Home from "./compoents/Home";
import Navbar from "./compoents/Navbar";
import About from "./compoents/About";
import Education from "./compoents/Education";
import Skills from "./compoents/Skills";
import Projects from "./compoents/Projects";
//import React, { Component } from "react";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Contact />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
