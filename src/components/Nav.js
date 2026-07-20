import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/Nav.css";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome, FaInfoCircle, FaHandHoldingHeart, FaCommentAlt, FaEnvelope } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();

  const isHomeActive = location.pathname === "/" && !location.hash;
  const isAboutActive = location.pathname === "/about";
  const isServicesActive = [
    "/services",
    "/behavioral-therapy",
    "/eye-movement-desensitization",
    "/workplace",
    "/counselling-psychotherapy",
    "/therapy-for-children-and-young-people"
  ].includes(location.pathname);
  const isTestimonialsActive = location.pathname === "/" && location.hash === "#testimonials";
  const isContactActive = location.pathname === "/contact";

  return (
    <nav className="n-wrapper">
      <div className="n-container">
        {/* Logo */}
        <Link to="/" aria-label="Go Talk Therapy Home">
          <img src={logo} alt="logo" className="n-logo" />
        </Link>

        {/* Navigation Links */}
        <div className={`n-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-icon" onClick={toggleMenu} aria-label="Close menu">&times;</button>

          <Link
            to="/"
            className={isHomeActive ? "active" : ""}
            aria-current={isHomeActive ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <FaHome className="nav-icon" aria-hidden="true" />
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            className={isAboutActive ? "active" : ""}
            aria-current={isAboutActive ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <FaInfoCircle className="nav-icon" aria-hidden="true" />
            <span>About Us</span>
          </Link>

          <Link
            to="/services"
            className={isServicesActive ? "active" : ""}
            aria-current={isServicesActive ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <FaHandHoldingHeart className="nav-icon" aria-hidden="true" />
            <span>Our Services</span>
          </Link>

          <Link
            to="/#testimonials"
            className={isTestimonialsActive ? "active" : ""}
            aria-current={isTestimonialsActive ? "page" : undefined}
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
            <FaCommentAlt className="nav-icon" aria-hidden="true" />
            <span>Testimonials</span>
          </Link>

          <Link
            to="/contact"
            className={`mobile-only-link ${isContactActive ? "active" : ""}`}
            aria-current={isContactActive ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <FaEnvelope className="nav-icon" aria-hidden="true" />
            <span>Contact</span>
          </Link>
        </div>

        <Link
          to="/contact"
          className={isContactActive ? "n-btn-active" : "n-btn"}
          aria-current={isContactActive ? "page" : undefined}
        >
          Contact Me
        </Link>

        {/* Burger Icon */}
        <div className="burger-icon" onClick={toggleMenu} aria-label="Open navigation menu" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleMenu(); }}>
          <RxHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
