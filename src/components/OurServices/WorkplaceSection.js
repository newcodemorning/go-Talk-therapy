import React from 'react'

import '../../styles/BehavioralTherapy.css'
import img1 from '../../assets/full-shot-people-learning-office 1 (1).png'
import img2 from '../../assets/Good team-pana 1.svg';
import img3 from '../../assets/trans-person-working-office-with-colleagues 1.png';

const WorkplaceSection = () => {
    return (
        <div className="counselling-container">
            <section className="section">
                <h2 className="section-title">
                    In the workplace
                </h2>
                <p className="section-text">
                    Go Talk Therapy focuses on your mental and physical health in the workplace. We will provide a free consultation to identify your business needs and opportunities. Reduced absence rates, increased productivity, work-life balance and reduced stress. Help youself to relax and unwind, to focus on issues you are facing providing you with solutions.
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
                            We understand that the last few years have been difficult and many people have had to adjust. For some of us we want someone to talk to.
                        </p>
                        <p>
                            Our team are available to help your employees, whether working from home or transitioning back to the office. We have someone available to help and support you every step of the way.
                        </p>
                        {/* <p>
                            You may be given tools to help you to evaluate your emotional patterns, common techniques are:
                        </p> */}
                        <ul>
                            <li>
                                Identify priorities and business needs and opportunities
                            </li>
                            <li>
                                Mental health campaigns, newsletters, counselling for staff & managers, training & development
                            </li>
                            <li>
                                Interviews with Managers
                            </li>
                            <li>
                                Consider staff survey
                            </li>
                            <li>
                                Activate your plan
                            </li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src={img2} alt="How We Work" />
                    </div>
                </div>
            </section>

            <section className="section3">
                <h2>
                    Partnering for Employee Wellbeing: Tailored Support for Your Team
                </h2>
                <p>
                    is a versatile and evidence-based psychological approach that helps individuals address negative thought patterns, emotional challenges, and behavioral habits. It is widely recognized for its effectiveness in managing a variety of mental health conditions and improving overall well-being. Below are some of the key conditions that CBT can effectively address:
                </p>
                <div className="down-section">
                    <img src={img3} alt="down-img" className="down-image" />
                    <div className="down2">
                        <p>
                            Go Talk Therapy will work alongside your HR team and managers to ensure the right support measures are in place. Provide your employees with emotional support and guidance when dealing with stressful situations and difficult conversations. Focus on supporting the emotional wellbeing of all staff.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WorkplaceSection
