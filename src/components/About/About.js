import React from 'react'
import Nav from '../Nav'
import AboutHero from './AboutHero'
import Footer from '../Footer'
import FindOutMore from './FindOutMore'

const About = () => {
  return (
    <div>
        <Nav />
        <main id="main-content" tabIndex="-1">
          <AboutHero />
          <FindOutMore />
        </main>
        <Footer />
    </div>
  )
}

export default About