import React from "react";
import img1 from "../../assets/full-shot-people-learning-office 1 (1).png";
import img2 from "../../assets/Good team-pana 1.svg";
import img3 from "../../assets/trans-person-working-office-with-colleagues 1.png";
import { FiCheckCircle } from "react-icons/fi";
import ServiceDetailLayout from "./ServiceDetailLayout";

const WorkplaceSection = () => {
  const workplacePoints = [
    "Identify priorities and business needs and opportunities",
    "Mental health campaigns, newsletters, counselling for staff & managers, training & development",
    "Interviews with Managers",
    "Consider staff survey",
    "Activate your plan",
  ];

  return (
    <ServiceDetailLayout
      eyebrow="Our Services"
      title="In the workplace"
      introText="Go Talk Therapy focuses on your mental and physical health in the workplace. We will provide a free consultation to identify your business needs and opportunities. Reduced absence rates, increased productivity, work-life balance and reduced stress. Help youself to relax and unwind, to focus on issues you are facing providing you with solutions."
      heroImage={img1}
    >
      {/* How We Work Section */}
      <section className="service-section-block">
        <h2 className="service-section-title">How we work</h2>
        <div className="service-grid-two-col">
          <div className="service-grid-content">
            <p className="service-section-body">
              We understand that the last few years have been difficult and many people have had to adjust. For some of us we want someone to talk to.
            </p>
            <p className="service-section-body">
              Our team are available to help your employees, whether working from home or transitioning back to the office. We have someone available to help and support you every step of the way.
            </p>
            <ul className="service-bullet-list" style={{ gridTemplateColumns: "1fr" }}>
              {workplacePoints.map((point, idx) => (
                <li key={idx} className="service-bullet-item">
                  <FiCheckCircle className="bullet-icon" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-grid-image-wrapper">
            <img src={img2} alt="How We Work" className="service-grid-image" />
          </div>
        </div>
      </section>

      {/* Partnering Section */}
      <section className="service-section-block">
        <h2 className="service-section-title">
          Partnering for Employee Wellbeing: Tailored Support for Your Team
        </h2>
        <p className="service-section-body">
          is a versatile and evidence-based psychological approach that helps individuals address negative thought patterns, emotional challenges, and behavioral habits. It is widely recognized for its effectiveness in managing a variety of mental health conditions and improving overall well-being. Below are some of the key conditions that CBT can effectively address:
        </p>
        <div className="service-grid-two-col" style={{ marginTop: "20px" }}>
          <div className="service-grid-image-wrapper">
            <img src={img3} alt="down-img" className="service-grid-image" />
          </div>
          <div className="service-grid-content">
            <p className="service-section-body">
              Go Talk Therapy will work alongside your HR team and managers to ensure the right support measures are in place. Provide your employees with emotional support and guidance when dealing with stressful situations and difficult conversations. Focus on supporting the emotional wellbeing of all staff.
            </p>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default WorkplaceSection;
