import React from 'react'
import "../../styles/CardLayout.css";

import img1 from "../../assets/serv1.png"
import img2 from "../../assets/image (4).png"
import img3 from "../../assets/serv3.png"
import img4 from "../../assets/serv4.png"
import img5 from "../../assets/serv5.png"
import { Link } from 'react-router-dom';


const ServicesCards = () => {

    const cardData = [
        {
            title: "Cognitive Behavioural Therapy (CBT)",
            description:
                "Helps people problem-solve. CBT also reveals the relationship between beliefs, thoughts, and feelings, and the behaviors that follow.",
            image: img1,
            link: "/behavioral-therapy",
        },
        {
            title: "Eye Movement Desensitisation And Reprocessing (EMDR)",
            description:
                "EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a therapy used to help people recover from distressing events.",
            image: img2,
            link: "/eye-movement-desensitization",
        },
        {
            title: "In the workplace",
            description:
                "Go Talk Therapy focuses on your mental and physical health in the workplace. We will provide a free consultation to identify your business ......",
            image: img3,
            link: "/workplace",
        },
        {
            title: "Counselling & Psychotherapy",
            description:
                "We understand that life can be challenging at times, and everyone faces their own unique set of struggles and difficulties. Whether .....",
            image: img4,
            link: "/counselling-psychotherapy",
        },
        {
            title: "Therapy for Children and young people",
            description:
                "Go Talk Therapy understands how difficult the pandemic has been for children. We work with children of all ages with a range of common issues;......",
            image: img5,
            link: "/therapy-for-children-and-young-people",
        },
    ];

    return (
        <div className="card-layout">
            {cardData.map((card, index) => (
                <Link to={card.link} key={index}>
                <div className="blog__card" key={index}>
                    <img src={card.image} alt={card.title} />
                    <div className="card__content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <Link to={card.link}>Read More...</Link>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );

}

export default ServicesCards

