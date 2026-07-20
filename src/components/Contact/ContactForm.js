import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../../styles/ContactForm.css';

import phoneIcon from '../../assets/bxs_phone-call.png';
import mailIcon from '../../assets/ic_sharp-email.png';
import rachelImg from '../../assets/Rachelcontact.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => setIsSubmitted(false);

  const subjectOptions = [
    { id: 'subj-general', label: 'General Inquiry', value: 'General Inquiry' },
    { id: 'subj-individual', label: 'Individual Therapy', value: 'Individual Therapy' },
    { id: 'subj-workplace', label: 'Workplace Support', value: 'Workplace Support' },
    { id: 'subj-youth', label: 'Youth Therapy', value: 'Youth Therapy' },
  ];

  return (
    <div className="contact-container">
      {/* Left Info Panel */}
      <div className="contact-info">
        <div>
          <div className="contact_title">
            <h2>Contact Information</h2>
            <p>Fill out the form or reach out directly to schedule your consultation.</p>
          </div>

          <div className="rachel-profile-header">
            <img src={rachelImg} alt="Rachel Glasspool" className="rachel-avatar" />
            <div className="rachel-meta">
              <span className="rachel-name">Rachel Glasspool</span>
              <span className="rachel-title">Psychotherapist &amp; Founder</span>
            </div>
          </div>

          <div className="more_info">
            <a href="tel:+447936037939" className="info-item">
              <img src={phoneIcon} alt="" className="info-icon" />
              <span>+44 7936037939</span>
            </a>
            <a href="mailto:rachel@weallbeam.co.uk" className="info-item">
              <img src={mailIcon} alt="" className="info-icon" />
              <span>rachel@weallbeam.co.uk</span>
            </a>
          </div>
        </div>

        <div className="social_media_icons" aria-label="Social media links">
          <a
            href="https://www.facebook.com/WeAllBeam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Go Talk Therapy on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/we-all-beam/?originalSubdomain=uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Go Talk Therapy on LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/weallbeam_21/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Go Talk Therapy on Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Form Panel */}
      <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="form-row">
          <div className="input-container">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="e.g. Sarah"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="e.g. Jenkins"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-container">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="sarah@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+44 7000 000000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="subject_radio">
          <span className="radio-group-title">Select Subject</span>
          <div className="radio_container" role="radiogroup" aria-label="Subject selection">
            {subjectOptions.map((opt) => (
              <div className="radio-option" key={opt.id}>
                <input
                  type="radio"
                  id={opt.id}
                  name="subject"
                  value={opt.value}
                  checked={formData.subject === opt.value}
                  onChange={handleChange}
                />
                <label htmlFor={opt.id}>{opt.label}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="input-container textarea-container">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>

        <div className="button-container">
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
          <div className="popup-content">
            <h3 id="popup-title" className="popup-title">Thank You!</h3>
            <p className="popup-message">Your message has been sent successfully. Rachel will get back to you shortly.</p>
            <button onClick={handleClose} className="popup-close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
