import "./Nav.css";
// import ardor from "..../ardor.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-sec-items ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <p className="nav-item">Work</p>
        </Link>

        <Link to="/about">
          <p className="nav-item">Experience</p>
        </Link>

        <Link to="/about">
          <p className="nav-item">Contact</p>
        </Link>
      </div>

      <div className="name">Taylor Williams</div>
    </nav>
  );
}

export default Nav;
