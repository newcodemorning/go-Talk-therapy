import React from "react";
import "../../styles/CardLayout.css"; 

import img from "../../assets/image.png"
import img2 from "../../assets/image (1).png"

const CardLayout = () => {
  const cardData = [
    {
      title: "Cognitive Behavioural Therapy (CBT)",
      description:
        "Helps people problem-solve. CBT also reveals the relationship between beliefs, thoughts, and feelings, and the behaviors that follow.",
      image: img, 
      link: "#",
    },
    {
      title: "Eye Movement Desensitisation And Reprocessing (EMDR)",
      description:
        "EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a therapy used to help people recover from distressing events.",
        image: img2, 

        link: "#",
    },
    {
      title: "Cognitive Behavioural Therapy (CBT)",
      description:
        "Helps people problem-solve. CBT also reveals the relationship between beliefs, thoughts, and feelings, and the behaviors that follow.",
        image: img, 

        link: "#",
    },
    {
      title: "Eye Movement Desensitisation And Reprocessing (EMDR)",
      description:
        "EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a therapy used to help people recover from distressing events.",
        image: img2, 

        link: "#",
    },
    {
        title: "Cognitive Behavioural Therapy (CBT)",
        description:
          "Helps people problem-solve. CBT also reveals the relationship between beliefs, thoughts, and feelings, and the behaviors that follow.",
        image: img, 
        link: "#",
      },
      {
        title: "Eye Movement Desensitisation And Reprocessing (EMDR)",
        description:
          "EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a therapy used to help people recover from distressing events.",
          image: img2, 
  
          link: "#",
      },
  ];

  return (
    <div className="card-layout">
      {cardData.map((card, index) => (
        <div className="blog__card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="card__content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link}>Read More...</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
