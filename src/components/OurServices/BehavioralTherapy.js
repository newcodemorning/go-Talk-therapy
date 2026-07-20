import React from "react";
import img1 from "../../assets/woman-with-hands-together-talking-with-counselor 1.png";
import img2 from "../../assets/Deconstructed-pana 1.svg";
import img3 from "../../assets/serv1.png";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import ServiceDetailLayout from "./ServiceDetailLayout";

const BehavioralTherapy = () => {
  const howWeWorkList = [
    "Journaling",
    "Challenging beliefs",
    "Mindfulness",
    "Relaxation",
  ];

  const conditionsList = [
    "Depression",
    "Anxiety",
    "Mood disorders",
    "Post-traumatic stress disorder (PTSD)",
    "Obsessive-compulsive disorder (OCD)",
    "Chronic fatigue syndrome (CFS)",
    "Phobias",
    "Anger management issues",
    "Sleep disorders",
  ];

  return (
    <ServiceDetailLayout
      eyebrow="Our Services"
      title="Counselling &amp; Psychotherapy"
      introText="We understand that life can be challenging at times, and everyone faces their own unique set of struggles and difficulties. Whether you are experiencing anxiety, depression, or any other emotional challenges, seeking support from a trained professional can be immensely beneficial."
      heroImage={img1}
    >
      {/* How We Work Section */}
      <section className="service-section-block">
        <h2 className="service-section-title">How we work</h2>
        <div className="service-grid-two-col">
          <div className="service-grid-content">
            <p className="service-section-body">
              Cognitive behavioral therapy provides a structured approach which keeps you focused on the goals of each session. This ensures the time spent in therapy is productive.
            </p>
            <p className="service-section-body">
              The person in therapy benefits from a collaborative relationship. They can reveal personal issues without fear of judgment.
            </p>
            <p className="service-section-body">
              You may be given tools to help you to evaluate your emotional patterns, common techniques are:
            </p>
            <ul className="service-bullet-list">
              {howWeWorkList.map((item, idx) => (
                <li key={idx} className="service-bullet-item">
                  <FiCheckCircle className="bullet-icon" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-grid-image-wrapper">
            <img src={img2} alt="How We Work" className="service-grid-image" />
          </div>
        </div>
      </section>

      {/* CBT Section */}
      <section className="service-section-block">
        <h2 className="service-section-title">Cognitive Behavioural Therapy (CBT)</h2>
        <p className="service-section-body">
          is a versatile and evidence-based psychological approach that helps individuals address negative thought patterns, emotional challenges, and behavioral habits. It is widely recognized for its effectiveness in managing a variety of mental health conditions and improving overall well-being. Below are some of the key conditions that CBT can effectively address:
        </p>
        <div className="service-grid-two-col" style={{ marginTop: "20px" }}>
          <div className="service-grid-image-wrapper">
            <img src={img3} alt="down-img" className="service-grid-image" />
          </div>
          <div className="service-grid-content">
            <ul className="service-bullet-list" style={{ gridTemplateColumns: "1fr" }}>
              {conditionsList.map((condition, idx) => (
                <li key={idx} className="service-bullet-item">
                  <FiCheckCircle className="bullet-icon" aria-hidden="true" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "16px" }}>
              <Link to="/contact" className="service-cta-btn" style={{ display: "inline-flex" }}>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default BehavioralTherapy;
