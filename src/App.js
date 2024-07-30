import "./App.css";
import "bulma/css/bulma.min.css";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="top" className="hero is-fullheight">
        {" "}
        {/* Top of the page */}
        {/* Content for Home */}
      </section>
      <section id="projects" className="section">
        {" "}
        {/* Projects section */}
        {/* Content for Projects */}
      </section>
      <section id="resume" className="section">
        {" "}
        {/* Resume section */}
        {/* Content for Resume */}
      </section>
    </div>
  );
}

export default App;
