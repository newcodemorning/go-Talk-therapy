import React from "react";
import img1 from "../../assets/image (4).png";
import { Link } from "react-router-dom";
import ServiceDetailLayout from "./ServiceDetailLayout";

const EDMR = () => {
  return (
    <ServiceDetailLayout
      eyebrow="Our Services"
      title="Eye Movement Desensitisation and Reprocessing (EDMR)"
      introText="EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a therapy used to help people recover from distressing events and the problems they have caused, like flashbacks, upsetting thoughts or images, depression or anxiety."
      heroImage={img1}
    >
      <section className="service-section-block">
        <h2 className="service-section-title">EMDR , How We Can Help ?</h2>
        <p className="service-section-subtitle">
          <strong>Discover how EMDR therapy can help reprocess traumatic memories, reduce their emotional intensity, and support healing.</strong>
        </p>

        <div className="service-grid-two-col" style={{ marginTop: "24px" }}>
          <div className="video-responsive-container">
            <iframe
              src="https://www.youtube.com/embed/hKrfH43srg8"
              title="EMDR Therapy Explanation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="service-grid-content">
            <p className="service-section-body">
              EMDR aims to help the brain “unstick” and reprocess the memory properly so that it is no longer so intense. It also helps to desensitise the person to the emotional impact of the memory, so that they can think about the event without experiencing such strong feelings.
            </p>
            <p className="service-section-subtitle" style={{ margin: 0 }}>
              <strong>EMDR is suitable for adults, young people and children.</strong>
            </p>
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

export default EDMR;