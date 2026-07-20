import React from 'react'

import '../../styles/ConsultationSession.css'

const ConsultationSession = () => {
  return (
        <div className="consultation-section" 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <h3>"Get Started with a Free Consultation Session"</h3>
        <p>
          Sign up today to explore how we can support your mental health journey
          with expert guidance and tailored solutions.
        </p>
        <div className="email-signup">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="send-button">Send</button>
        </div>
    </div>
  )
}

export default ConsultationSession
