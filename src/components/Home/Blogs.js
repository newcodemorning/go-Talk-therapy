import React, { useState } from "react";
import "../../styles/Blogs.css";

import img1 from "../../assets/unsplash__Zn_7FzoL1w.png";
import img2 from "../../assets/unsplash_6Xiy0TQkIew.png";
import img3 from "../../assets/unsplash_mod2s3-qFOc.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  const articles = [
    {
      id: 1,
      category: "Diet Tips",
      date: "28 April 2024",
      title: "Diet Tips for a Healthier Lifestyle",
      description:
        "Maintaining a healthy diet is crucial for overall well-being and can prevent numerous health issues.",
      image: img1,
    },
    {
      id: 2,
      category: "Health Tips",
      date: "21 April 2024",
      title: "The Importance of Regular Health Checkups",
      description:
        "Regular health screenings are essential for early detection and prevention of various health conditions.",
      image: img2,
    },
    {
      id: 3,
      category: "Health Tips",
      date: "14 April 2024",
      title: "Boosting Your Immune System Naturally",
      description:
        "A strong immune system is vital for fighting off infections and staying healthy.",
      image: img3,
    },
    {
      id: 4,
      category: "Health Tips",
      date: "21 April 2024",
      title: "The Importance of Regular Health Checkups",
      description:
        "Regular health screenings are essential for early detection and prevention of various health conditions.",
      image: img2,
    },
    {
      id: 5,
      category: "Diet Tips",
      date: "28 April 2024",
      title: "Diet Tips for a Healthier Lifestyle",
      description:
        "Maintaining a healthy diet is crucial for overall well-being and can prevent numerous health issues.",
      image: img1,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   if (currentSlide + 3 < articles.length) {
  //     setCurrentSlide((prev) => prev + 1);
  //   }
  // };

  // const prevSlide = () => {
  //   if (currentSlide > 0) {
  //     setCurrentSlide((prev) => prev - 1);
  //   }
  // };

  return (
    <div className="health-section">
      <div className="health-header">
        <h2>
          Expert <span className="highlight">Health</span> Advice and Updates
        </h2>
        <Link to="/blog" className="see-all">
          See All
        </Link>
      </div>
      <div className="health-slider">
        {articles.slice(currentSlide, currentSlide + 3).map((article) => (
          <div key={article.id} className="health-card">
            <img src={article.image} alt={article.title} />
            <div className="card-content">
              <p className="category">
                {article.category} <span>{article.date}</span>
              </p>
              <h3 className="truncate">{article.title}</h3>
              <p className="description">{article.description}</p>
              <a href="/" className="read-more">
                Read More 
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        {/* <button className="arrow blog-left-arrow" onClick={prevSlide}>
          &lt;
        </button> */}
        <div className="dots">
          {articles.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        {/* <button className="arrow blog-right-arrow" onClick={nextSlide}>
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default Blogs;
