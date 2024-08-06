import "./App.css";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Aos from "aos"; 
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ disable: "mobile", once: true });
  }, []);
  return (
    <body id="page-container">
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </body >
  );
}

export default App;
