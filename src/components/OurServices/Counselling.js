import React from "react";
import img1 from "../../assets/portrait-psychologist(2).png";
import ServiceDetailLayout from "./ServiceDetailLayout";

const Counselling = () => {
  return (
    <ServiceDetailLayout
      eyebrow="Our Services"
      title="Counselling &amp; Psychotherapy"
      introText="We understand that life can be challenging at times, and everyone faces their own unique set of struggles and difficulties. Whether you are experiencing anxiety, depression, or any other emotional challenges, seeking support from a trained professional can be immensely beneficial."
      heroImage={img1}
    />
  );
};

export default Counselling;
