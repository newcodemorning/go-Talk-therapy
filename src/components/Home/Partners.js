
import React from 'react';
import '../../styles/Partners.css';

import Marquee from "react-fast-marquee";

import partner1 from "../../assets/council-300x150.png";
import partner2 from "../../assets/Screenshot-2024-07-09-at-11.38.42 (1).png";
import partner3 from "../../assets/beamish-1-1 (1).png";
import partner4 from "../../assets/Streetwise_Logo_V3-White-copy-300x61.png";
import partner5 from "../../assets/Chi_3_logo-main-300x147.png";
import partner6 from "../../assets/s1.png";
import partner7 from "../../assets/s3.png";
import { Link } from 'react-router-dom';

const Partners = () => {
  const partners = [
    { image: partner1, link: 'https://www.peltonps.org.uk/' },
    { image: partner2, link: 'https://www.tullochwealthmanagement.co.uk/' },
    { image: partner3, link: 'https://www.beamishps.org.uk/' },
    { image: partner4, link: 'https://www.chieducation.co.uk/' },
    { image: partner5, link: 'https://www.chieducation.co.uk/' },
    { image: partner6, link: 'https://www.reigategrammar.org/' },
    { image: partner7, link: 'https://www.gemseducation.com/' },
  ];

  return (
    <div className="slider-container">
      <div>
        <Marquee>
          {partners.map((partner, index) => (
            <div key={index} className='image_wrapper'>
              <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                <img src={partner.image} alt=''/>
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;