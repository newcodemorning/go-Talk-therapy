import React from 'react'
import Nav from '../Nav'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div>
        <Nav />
        <main id="main-content" tabIndex="-1">
          <ContactHero />
          <ContactForm />
        </main>
        <Footer />
    </div>
  )
}

export default Contact