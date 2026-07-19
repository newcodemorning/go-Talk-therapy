import React from 'react'
import '../../styles/ContactSection.css'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <div className="contact-us-container">
    <p>
      Go Talk Therapy strives to provide the best therapeutic  <br />
      service to all
      individuals who use our service
    </p>
    <Link to="/contact" className="contact-us-btn">
      Contact Us <span className="arrow-icon">↗</span>
    </Link>
  </div>
  )
}

export default ContactSection