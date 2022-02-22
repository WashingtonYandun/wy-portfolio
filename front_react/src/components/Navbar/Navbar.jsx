import React from "react";
import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <span>WMYM</span>
      </div>
      <div className="app__navbar-links">
        {["home", "about", "skills", "works", "contact"].map((item) => {
          return (
            <a
              key={`link-${item}`}
              className="app__flex p-text"
              href={`#${item}`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
