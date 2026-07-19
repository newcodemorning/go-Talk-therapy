import React from 'react'
import '../../styles/BehavioralTherapy.css'
import img1 from '../../assets/woman-with-hands-together-talking-with-counselor 1.png'
import img2 from '../../assets/Deconstructed-pana 1.svg';
import img3 from '../../assets/serv1.png';
import { Link } from 'react-router-dom';
const BehavioralTherapy = () => {
  return (
    <div className="counselling-container">
      <section className="section">
        <h2 className="section-title">Counselling & Psychotherapy</h2>
        <p className="section-text">
          We understand that life can be challenging at times, and everyone faces their own unique set of struggles and difficulties. Whether you are experiencing anxiety, depression, or any other emotional challenges, seeking support from a trained professional can be immensely beneficial.
        </p>
        <div className="image-container">
          <img src={img1} alt="" className="section-image" />
        </div>
      </section>
      <section className="how-we-work">
        <div className="how-we-work-container">
          <div className="text-content">
            <h2>How we work</h2>
            <p>
              Cognitive behavioral therapy provides a structured approach which keeps you focused on the goals of each session. This ensures the time spent in therapy is productive.
            </p>
            <p>
              The person in therapy benefits from a collaborative relationship. They can reveal personal issues without fear of judgment.
            </p>
            <p>
              You may be given tools to help you to evaluate your emotional patterns, common techniques are:
            </p>
            <ul>
              <li>Journaling</li>
              <li>Challenging beliefs</li>
              <li>Mindfulness</li>
              <li>Relaxation</li>
            </ul>
          </div>
          <div className="image-content">
            <img src={img2} alt="How We Work" />
          </div>
        </div>
      </section>

      <section className="section3">
        <h2>Cognitive Behavioural Therapy (CBT)</h2>
        <p>
          is a versatile and evidence-based psychological approach that helps individuals address negative thought patterns, emotional challenges, and behavioral habits. It is widely recognized for its effectiveness in managing a variety of mental health conditions and improving overall well-being. Below are some of the key conditions that CBT can effectively address:
        </p>
        <div className="down-section">
          <img src={img3} alt="down-img" className="down-image" />
          <div className="down2">
            <ul>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Mood disorders</li>
              <li>Post-traumatic stress disorder (PTSD)</li>
              <li>Obsessive-compulsive disorder (OCD)</li>
              <li>Chronic fatigue syndrome (CFS)</li>
              <li>Phobias</li>
              <li>Anger management issues</li>
              <li>Sleep disorders</li>
            </ul>
            <Link to="/contact" className="contact-btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BehavioralTherapy



