import React from "react";
import "../../styles/CardLayout.css";

import img1 from "../../assets/serv1.png";
import img2 from "../../assets/image (4).png";
import img3 from "../../assets/serv3.png";
import img4 from "../../assets/serv4.png";
import img5 from "../../assets/serv5.png";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ServicesCards = () => {
  const cardData = [
    {
      id: "cbt",
      title: "Cognitive Behavioural Therapy (CBT)",
      description:
        "Helps people problem-solve effectively while revealing the connection between beliefs, thoughts, feelings, and positive behavioral change.",
      image: img1,
      link: "/behavioral-therapy",
      ctaText: "Explore CBT Therapy",
    },
    {
      id: "emdr",
      title: "Eye Movement Desensitisation And Reprocessing (EMDR)",
      description:
        "An evidence-based therapy specifically designed to help individuals process and recover from distressing events and deep trauma.",
      image: img2,
      link: "/eye-movement-desensitization",
      ctaText: "Learn About EMDR",
    },
    {
      id: "workplace",
      title: "In the Workplace",
      description:
        "Fosters physical and mental well-being in professional environments with tailored consultation, work-life balance strategies, and team support.",
      image: img3,
      link: "/workplace",
      ctaText: "View Workplace Services",
    },
    {
      id: "counselling",
      title: "Counselling & Psychotherapy",
      description:
        "Provides a compassionate, safe space to navigate life's struggles, personal challenges, and emotional difficulties with expert guidance.",
      image: img4,
      link: "/counselling-psychotherapy",
      ctaText: "Explore Counselling",
    },
    {
      id: "youth",
      title: "Therapy for Children & Young People",
      description:
        "Specialized therapeutic support tailored for children and teenagers to develop resilience, manage anxiety, and foster healthy emotional growth.",
      image: img5,
      link: "/therapy-for-children-and-young-people",
      ctaText: "Discover Youth Therapy",
    },
  ];

  return (
    <div className="card-layout">
      {cardData.map((card) => (
        <Link
          to={card.link}
          key={card.id}
          className="service-card"
          aria-label={`${card.title} - ${card.ctaText}`}
        >
          <div className="service-card-image-wrapper">
            <img
              src={card.image}
              alt={card.title}
              className="service-card-img"
              loading="lazy"
            />
          </div>
          <div className="service-card-content">
            <div>
              <h3 className="service-card-title">{card.title}</h3>
              <p className="service-card-description">{card.description}</p>
            </div>
            <div className="service-card-cta">
              <span>{card.ctaText}</span>
              <FiArrowRight className="cta-icon" aria-hidden="true" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesCards;
