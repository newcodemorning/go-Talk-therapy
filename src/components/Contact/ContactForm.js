import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../../styles/ContactForm.css';

import phoneIcon from '../../assets/bxs_phone-call.png';
import mailIcon from '../../assets/ic_sharp-email.png';
import img from '../../assets/Rachelcontact.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleClose = () => setIsSubmitted(false);

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className='contact_title'>
          <h2>Contact Information</h2>
          <p>Say something to start a live chat!</p>
        </div>

        <div className='more_info'>
          <img src={img} alt="Rachel" />
          <div className='info'>
            <img src={phoneIcon} alt='phone' />
            <span>
              +44 7936037939
            </span>
          </div>
          <div className='info'>
            <img src={mailIcon} alt='mail' />
            <span>
              rachel@weallbeam.co.uk
            </span>

          </div>

        </div>

        <div className='social_media_icons'>
          <Link to="https://www.facebook.com/WeAllBeam" target="_blank">
            <FaFacebookF />

          </Link>
          <Link to="https://www.linkedin.com/company/we-all-beam/?originalSubdomain=uk" target="_blank">
            <FaLinkedinIn />
          </Link>
          <Link to="https://www.instagram.com/weallbeam_21/?hl=en" target="_blank">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className='form-row'>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>

        <div className='subject_radio'>
          <span >Select Subject?</span>
          <div className='radio_container'>
            <div>
              <input type='radio' name="subject" value={formData.subject} />
              <label htmlFor="subject">General Inquiry</label>
            </div>

            <div>
              <input type='radio' name="subject" value={formData.subject} />
              <label htmlFor="subject">General Inquiry</label>
            </div>

            <div>
              <input type='radio' name="subject" value={formData.subject} />
              <label htmlFor="subject">General Inquiry</label>
            </div>

            <div>
              <input type='radio' name="subject" value={formData.subject} />
              <label htmlFor="subject">General Inquiry</label>
            </div>
          </div>

        </div>

        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div class="button-container">
          <button type="submit">Send Message</button>
        </div>

      </form>

      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <h3 className='popup-title'>Thank you!</h3>
            <p className='popup-message'>Your message has been sent successfully.</p>
            <button onClick={handleClose} className='popup-close-btn'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
