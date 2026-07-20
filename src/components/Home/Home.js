import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav'
import Hero from './Hero'
import Footer from '../Footer'
import Partners from './Partners'
import OurRating from './OurRating'
// import Blogs from './Blogs'
import Reviews from './Reviews'
import CommonQuestions from './CommonQuestions'
import ConsultationSession from './ConsultationSession'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#testimonials') {
      const el = document.getElementById('testimonials');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
        <Nav />
        <Hero />
        <Partners/>
        <OurRating />
        <Reviews />
        <CommonQuestions />
        <ConsultationSession/>
        <Footer />
    </div>
  )
}

export default Home