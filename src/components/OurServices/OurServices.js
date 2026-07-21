import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import ServicesHero from './ServicesHero'
// import HowWork from './HowWork'
import AboutSection from './AboutSection'
import Reviews from '../Home/Reviews'
import ContactSection from './ContactSection'
import ServicesCards from './ServicesCards'

const OurServices = () => {
  return (
    <div>
      <Nav />
      <main id="main-content" tabIndex="-1">
        <ServicesHero />
        {/* <HowWork /> */}
        <ServicesCards />
        <AboutSection />
        <Reviews />
        <ContactSection />
      </main>
      <Footer />
    </div>

  )
}

export default OurServices