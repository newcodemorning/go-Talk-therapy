import React from "react";
import "../../styles/AboutHero.css";
import user1 from "../../assets/2.png";
import user2 from "../../assets/M (1).png";
import user3 from "../../assets/pablo-page-not-found 3.png";
import user4 from "../../assets/F.png";
import profileImage from "../../assets/Rachel2.png";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function AboutHero() {
  return (
    <div className="about-hero-container">
      <div className="about-content">
        <div className="about-header-section">
          <h1>
            Hello <br />I am Rachel Glasspool{" "}
          </h1>
          <span className="highlight">
            Psychotherapist and Founder Go Talk Therapy & <br />
            WeAllBeam
          </span>
          <p>
            I have a professional career of more than 30 coaching, developing
            and managing people in private and charitable sectors, maintaining
            and sharing best practice within various industries, with a flexible
            and adaptable approach. I have worked alongside middle and senior
            management driving their vision forward to achieve results.
            <br />
            <br />
            My focus is to help people of all ages to learn and grow, sharing my
            vast experience and knowledge both therapeutically and strategically
            to encourage individuals to have good mental health
            <br />
            <br />I believe that good mental health is crucial for all of us, to
            manage our day-to-day activities and life experiences. Implementing
            methods in the workplace to enableemployees to have a good
            work-life-balance is important to me.
          </p>
          <div className="contact-button">
            <NavLink to="/contact" className="primary-button" as="button">
              Contact Us
              <FiArrowUpRight />
            </NavLink>
          </div>
        </div>

        <div
          className="about-profile-section"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* Background Shape */}
          <div className="background-shape orange"></div>

          <div className="hero-card top-right-about">
            <div className="about-avatar-group">
              <img src={user1} alt="User 1" className="avatar" />

              <img src={user2} alt="User 2" className="avatar" />

              <img src={user3} alt="User 3" className="avatar" />

              <img src={user4} alt="User 3" className="avatar" />

              <span className="more-avatars">+50</span>
            </div>
            <span>Trusted by Thousands</span>
          </div>

          <div className="hero-card about-bottom">
            <div className="about-stats-card">
              <div className="stat-block">
                <span className="stat-number">2000+ Hours</span>
                <span className="stat-description">
                  Counselling sessions a year
                </span>
              </div>
              <div className="divider" />
              <div className="stat-block">
                <span className="stat-number">30+ Years</span>
                <span className="stat-description">Professional Career</span>
              </div>
            </div>
          </div>

          <img src={profileImage} alt="Therapist" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
