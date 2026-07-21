import React from "react";
import img1 from "../../assets/portrait-psychologist-talking-with-patient-private-family-therapy-session 1 (1).png";
import ServiceDetailLayout from "./ServiceDetailLayout";

const Service5 = () => {
  return (
    <ServiceDetailLayout
      eyebrow="Our Services"
      title="Therapy for Children and young people"
      introText="Go Talk Therapy understands how difficult the pandemic has been for children. We work with children of all ages with a range of common issues; Stress, anger, friendships, social anxiety, low self-esteem, bereavement and loss, identify, bod image, bullying. If you are a school that would like a quote for counselling support, get in touch"
      heroImage={img1}
    />
  );
};

export default Service5;