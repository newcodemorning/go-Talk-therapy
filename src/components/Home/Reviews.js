import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserCircle } from "react-icons/fa";

import "../../styles/Reviews.css";

const testimonials = [
  {
    id: 1,
    title: "Rachel has been an amazing",
    message:
      "Support through a very difficult time of my life. I always look forward to my sessions with her, particularly how she understands the situation I am in and is able to give useful advice."
  },
  {
    id: 2,
    title: "Rachel is kind, compassionate and brilliant.",
    message:
      " She's helped me feel safe to open up and has made me feel heard. I've been to many therapists with little success or progress. So Rachel definitely stands out. She can really help, even with those with deep traumas we dont like to talk about. I would highly recommend her to my friends and family"
  },
  {
    id: 3,
    title: "Rachel is absolutely amazing.",
    message:
      "She listens to what you're telling her. She asks the important questions and offers practical solutions to help you be your best self. I couldn't recommend her more"
  },
  {
    id: 4,
    title: "I have had a few sessions with Rachel ",
    message:
      "She is very helpful and warm. I look forward to the sessions and find she is very good at encouraging my self motivation and Family issues."
  },
  {
    id: 5,
    title: "Great therapy so far regarding anxiety",
    message:
      ",lots of improvements have been made. Highly Recommend Rachel. Very easy to talk to and good advice."
  },
  {
    id: 6,
    title: "Really lovely, easy to talk to.",
    message:
      "Validates my feelings about things and helps with strategies not just to cope but to move forward too."
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const avatarsToShow = 5;
  const halfAvatars = Math.floor(avatarsToShow / 2);

  const getVisibleIndices = () => {
    let start = activeIndex - halfAvatars;
    let end = activeIndex + halfAvatars;

    if (start < 0) {
      start = 0;
      end = avatarsToShow - 1;
    } else if (end >= testimonials.length) {
      end = testimonials.length - 1;
      start = end - (avatarsToShow - 1);
    }

    return { start, end };
  };

  const { start, end } = getVisibleIndices();
  const visibleTestimonials = testimonials.slice(start, end + 1);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-carousel">
      <FaQuoteLeft className="ornament one" aria-hidden="true" />
      <FaQuoteRight className="ornament three" aria-hidden="true" />
      <FaStar className="ornament two" aria-hidden="true" />
      <FaQuoteLeft className="ornament four" aria-hidden="true" />

      <h2>Here is what our Clients are saying About us</h2>
      <div className="testimonial-card-wrapper">
        <div className="testimonial-card">
          <div className="arrow left-arrow" onClick={handlePrev}>
            &#8249;
          </div>
          <div className="testimonial-content">
            <FaQuoteLeft className="quote-icon" aria-hidden="true" />
            <h3>{testimonials[activeIndex].title}</h3>
            <p>{testimonials[activeIndex].message}</p>
          </div>
          <div className="arrow right-arrow" onClick={handleNext}>
            &#8250;
          </div>
        </div>
        <div className="testimonial-card-arrow"></div>
      </div>

      <FaStar className="ornament four-bottom" aria-hidden="true" />
      <FaQuoteRight className="ornament five" aria-hidden="true" />

      <div className="profile">
        <div className="avatars">
          {visibleTestimonials.map((testimonial, index) => {
            const globalIndex = start + index;
            return (
              <FaUserCircle
                key={testimonial.id}
                aria-label={`Review ${globalIndex + 1}`}
                className={`avatar ${globalIndex === activeIndex ? "active-avatar" : ""}`}
                onClick={() => handleSelect(globalIndex)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
