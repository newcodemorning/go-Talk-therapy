import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/Nav.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome, FaInfoCircle, FaHandHoldingHeart, FaCommentAlt, FaEnvelope } from "react-icons/fa";

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
        <Link to="/">
          <img src={logo} alt="logo" className="n-logo" />
        </Link>

        {/* Navigation Links */}
        <div className={`n-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-icon" onClick={toggleMenu} aria-label="Close menu">&times;</button>

          <Link
            to="/"
            className={location.pathname === "/" && !location.hash ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <FaHome className="nav-icon" />
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <FaInfoCircle className="nav-icon" />
            <span>About Us</span>
          </Link>

          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <FaHandHoldingHeart className="nav-icon" />
            <span>Our Services</span>
          </Link>

          <Link
            to="/#testimonials"
            className={location.pathname === "/" && location.hash === "#testimonials" ? "active" : ""}
            onClick={() => {
              setMenuOpen(false);
              if (location.pathname === "/") {
                const el = document.getElementById("testimonials");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <FaCommentAlt className="nav-icon" />
            <span>Testimonials</span>
          </Link>

          <Link
            to="/contact"
            className={`mobile-only-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <FaEnvelope className="nav-icon" />
            <span>Contact</span>
          </Link>
        </div>

        <NavLink to="/contact" className={location.pathname === "/contact" ? "n-btn-active" : "n-btn"}>Contact Me</NavLink>

        {/* Burger Icon */}
        <div className="burger-icon" onClick={toggleMenu} aria-label="Open navigation menu">
          <RxHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
