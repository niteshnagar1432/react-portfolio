import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/Nitesh nagar-logos_white.png";
function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <img className="logo" src={Logo} alt="Nitesh Nagar Logo" />
      {/* Hamburger icon */}
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      {/* Menu */}
      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="#">Log-in</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
