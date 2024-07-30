import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import "bulma/css/bulma.min.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          className="navbar-item has-text-primary"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          AD
        </Link>
        <a
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link
            className="navbar-item"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="navbar-item"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
