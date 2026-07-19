import React, { useState } from "react";
import "../../styles/CommonQuestions.css";
import { Link } from "react-router-dom";

const CommonQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqItems = [
    { 
      question: "What types of therapy do you offer?", 
      answer: <>
        We offer a range of therapy services including Counselling & Psychotherapy, Cognitive Behavioral Therapy (CBT), Eye Movement Desensitisation and Reprocessing (EMDR), Workplace-focused Therapy, and specialised support for Children and Young People.
        <br />
        <Link to="/services" target="_blank" rel="noopener noreferrer" 
        style={{ 
          color: "#fff", 
          textDecoration: "underline",
          fontWeight: "bold",
          cursor: "pointer"}}
          >Learn more about our services here.
          </Link>
      </> 
    },
    { 
      question: "How are therapy session's conducted in person or online?", 
      answer: `All therapy sessions are conducted virtually through online video meetings or via telephone, ensuring flexibility, convenience, and privacy from wherever you are.` 
    },
    { 
      question: "Can I book sessions online?", 
      answer: <>
        Yes, you can easily book a session online through our convenient calendar booking system. Alternatively, feel free to contact us directly—we’re here to help.
        <br />
        <Link to="/contact" target="_blank" rel="noopener noreferrer"  style={{ 
            color: "#fff", 
            textDecoration: "underline",
            fontWeight: "bold",
            cursor: "pointer"}}>Contact us directly.</Link>
      </> 
    },
    { 
      question: "Is therapy confidential?", 
      answer: `Yes, therapy is fully confidential. All information shared during your sessions is kept strictly private and will never be disclosed to anyone without your consent.` 
    },
  ];

  return (
    <div className="faq-section">
      <h3 className="more-info">more info</h3>      
      <h3 className="faq-header">Common questions</h3>
      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              <div className="faq-question-text">{item.question}</div>
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {typeof item.answer === 'string' ? item.answer : item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;