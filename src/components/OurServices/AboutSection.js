import React from "react";
import "../../styles/AboutSection.css"; 
import img3 from '../../assets/Frame 1707478305.png'
import img4 from '../../assets/Frame 1707478305 (1).png'

const AboutSection = () => {
    return (
        <div className="about-us-container">
            {/* How We Deliver Therapy Section */}
            <section className="therapy-section">
                <h2>How we deliver therapy</h2>
                <div className="therapy-options">
                    <div className="therapy-card">
                        <div className="therapy-icon">
                            <img src={img3} alt=""/>
                        </div>
                        <div>
                        <h3>Online therapy virtually</h3>
                        <p>
                            If you'd like online therapy virtually, we can arrange this for
                            you.
                        </p>
                        </div>
                        
                    </div>
                    <div className="therapy-card">
                        <div className="therapy-icon">
                            <img src={img4}  alt=""/>
                        </div>
                        <div>
                        <h3>Therapy by telephone</h3>
                        <p>
                            If you'd like to be supported by telephone, we can arrange this
                            for you.
                        </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
