import "./App.css";
import "bulma/css/bulma.min.css";
import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
function App() {
  return (
    <body id="page-container">
      <Navbar />
      <AboutMe />
      <Footer />
    </body>
  );
}

export default App;
