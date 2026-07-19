import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/Nav.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();

  return (
    <nav className="n-wrapper">
      <div className="n-container">
        {/* Logo */}
        <img src={logo} alt="logo" className="n-logo" />

        {/* Navigation Links */}
        <div className={`n-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-icon" onClick={toggleMenu}>&times;</button>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Our Services
          </Link>
          {/* <Link to="/testimonials" className={location.pathname === "/testimonials" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link> */}
        </div>

        <NavLink to="/contact" className={location.pathname === "/contact" ? "n-btn-active" : "n-btn"}>Contact Me</NavLink>

        {/* Burger Icon */}
        <div className="burger-icon" onClick={toggleMenu}>
          <RxHamburgerMenu />


        </div>
      </div>
    </nav>
  );
};

export default Nav;
