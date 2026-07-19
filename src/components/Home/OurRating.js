import React, { useEffect, useState } from "react";
import "../../styles/OurRating.css";
import CountUp from "react-countup";

const OurRating = () => {
  const cards = [
    {
      id: 1,
      num: 20,
      title: "Verified Therapists",
      description: "Certified experts across diverse mental health specializations.",
      suffix: "+", 
    },
    {
      id: 2,
      num: 5000,
      title: "Happy Clients",
      description: "Empowering lives through transformative therapy sessions.",
      suffix: "+",
    },
    {
      id: 3,
      num: 99.7,
      title: "Positive Feedback",
      description: "Clients trust us for our dedication and care.",
      suffix: "%",
    },
  ];

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRestart((prev) => !prev);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="custom-section">
      <h2 className="section-title">Our Rating</h2>
      <p className="section-sentence">
      Trust-Inspiring Figures: <br />
        GoTalkTherapy's Success Stories Transforming Thousands of Lives
      </p>

      <div className="cards-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <span className="card-num">
              <CountUp
                key={restart ? `${card.id}-restart` : `${card.id}`}
                start={0} 
                end={card.num} 
                duration={3} 
                suffix={card.suffix} 
                decimals={card.num % 1 !== 0 ? 1 : 0} 
              />
            </span>
            <span className="card-title">{card.title}</span>
            <span className="card-description">{card.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurRating;
