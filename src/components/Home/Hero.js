import React from "react";
import { NavLink } from "react-router-dom";
import profileImage from '../../assets/Rachel.png'
import user from "../../assets/M.png"
import user1 from "../../assets/2.png"
import user2 from "../../assets/M (1).png"
import user3 from "../../assets/pablo-page-not-found 3.png"
import user4 from "../../assets/F.png"
import "../../styles/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero_content">

        <div className="header-section"
        // data-aos="fade-right"
        //   data-aos-offset="300"
        //   data-aos-easing="ease-in-sine"
        >
          <h1>
            Change your mind<br />
            Change your life
          </h1>
          <p>
            Discover a personalised approach to mental health care designed to help you thrive, one session at a time.
          </p>
          <div className="buttons">

            <NavLink to="/contact" className="primary__button">
              Start Your Journey Today
            </NavLink>
            <NavLink to="/services" className="secondary__button">
              Explore Our Services
            </NavLink>
          </div>
        </div>

        <div className="profile-section">
          <div className="background-shape orange"></div>

          <img src={profileImage} alt="Rachel Profile" className="profile-image" />

          <div className="cards">
            {/* Floating Cards */}
            <div className="hero-card top-left">
              <div className="card-profile">
                <img
                  src={user}
                  alt="Client Review"
                  className="small-profile"
                />
              </div>
              <div className="float-card-content">
                <span className="float-card-review">My therapy sessions have truly transformed my life!</span>
              </div>
            </div>

            <div className="hero-card top-right">
              <span className="card2-title">20+ Expert Therapists</span>
              <span className="card2-description">Specialized in various mental health fields</span>
            </div>

            <div className="hero-card bottom">
              <div className="avatar-group">
                <img
                  src={user1}
                  alt="user1"
                  className="avatar"
                />
                <img
                  src={user2}
                  alt="user2"
                  className="avatar"
                />
                <img
                  src={user3}
                  alt="user3"
                  className="avatar"
                />
                <img
                  src={user4}
                  alt="user4"
                  className="avatar"
                />
                <span className="more-avatars">+50</span>
              </div>
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
