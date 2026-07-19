import React from 'react'
import Nav from '../Nav'
import ServicesHero from './ServicesHero'
import Footer from '../Footer'
import AboutSection from './AboutSection'
import Reviews from '../Home/Reviews'
import ContactSection from './ContactSection'
import BehavioralTherapy from './BehavioralTherapy'

const Service1 = () => {
    return (
        <>
            <Nav />
            <ServicesHero />
            <BehavioralTherapy />
            <AboutSection />
            <Reviews />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Service1