import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Nav from "../Nav";
import Footer from "../Footer";
import AboutSection from "./AboutSection";
import Reviews from "../Home/Reviews";
import ContactSection from "./ContactSection";
import "../../styles/ServiceDetail.css";

const ServiceDetailLayout = ({
  eyebrow = "Our Services",
  title,
  introText,
  heroImage,
  children,
}) => {
  return (
    <div className="service-detail-wrapper">
      <Nav />

      <main className="service-detail-container">
        {/* Orientation / Back Link */}
        <nav className="service-breadcrumb" aria-label="Breadcrumb navigation">
          <Link to="/services" className="breadcrumb-link">
            <FiArrowLeft aria-hidden="true" />
            <span>Back to All Services</span>
          </Link>
        </nav>

        {/* Hero Header Card */}
        <header className="service-header-card">
          {eyebrow && <span className="service-eyebrow">{eyebrow}</span>}
          <h1 className="service-title">{title}</h1>
          {introText && <p className="service-intro-text">{introText}</p>}

          {heroImage && (
            <div className="service-hero-image-wrapper">
              <img
                src={heroImage}
                alt={title}
                className="service-hero-image"
              />
            </div>
          )}
        </header>

        {/* Page Main Content Sections */}
        {children}

        {/* Closing CTA Banner */}
        <section className="service-cta-banner" aria-label="Contact Go Talk Therapy">
          <div className="cta-banner-text">
            <h3 className="cta-banner-title">
              Need Support or Have Questions?
            </h3>
            <p className="cta-banner-sub">
              Contact Rachel Glasspool to discuss your mental health needs and available therapy options.
            </p>
          </div>
          <Link to="/contact" className="service-cta-btn">
            <span>Contact Us</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </main>

      <AboutSection />
      <Reviews />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServiceDetailLayout;
