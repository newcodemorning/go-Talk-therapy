import React from 'react'
import Nav from '../Nav'
import ServicesHero from './ServicesHero'
import Footer from '../Footer'
import AboutSection from './AboutSection'
import Reviews from '../Home/Reviews'
import ContactSection from './ContactSection'
import img1 from '../../assets/portrait-psychologist-talking-with-patient-private-family-therapy-session 1 (1).png';

const Service5 = () => {
    return (
        <>
            <Nav />
            <ServicesHero />
            <div className="counselling-container">
                <section className="section">
                    <h2 className="section-title">
                    Therapy for Children and young people
                    </h2>
                    <p className="section-text">
                    Go Talk Therapy understands how difficult the pandemic has been for children. We work with children of all ages with a range of common issues; Stress, anger, friendships, social anxiety, low self-esteem, bereavement and loss, identify, bod image, bullying. If you are a school that would like a quote for counselling support, get in touch
                    </p>
                    <div className="image-container">
                        <img src={img1} alt="" className="section-image" />
                    </div>
                </section>
            </div>
            <AboutSection />
            <Reviews />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Service5