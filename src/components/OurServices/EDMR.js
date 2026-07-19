import React from 'react'
import img1 from '../../assets/image (4).png'
import { Link } from 'react-router-dom'

const EDMR = () => {
    return (
        <div className="counselling-container">
            <section className="section">
                <h2 className="section-title">
                Eye Movement Desensitisation and Reprocessing (EDMR)
                </h2>
                <p className="section-text">
                EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a therapy used to help people recover from distressing events and the problems they have caused, like flashbacks, upsetting thoughts or images, depression or anxiety.
                </p>
                <div className="image-container">
                    <img src={img1} alt="Counselling Session" className="section-image" />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">EMDR , How We Can Help ?</h2>
                <p className="section-subtitle"><strong>Discover how EMDR therapy can help reprocess traumatic memories, reduce their emotional intensity, and support healing.</strong></p>
                <div className="content-wrapper">
                    <iframe
                        className="video-frame"
                        width="400"
                        height="225"
                        src="https://www.youtube.com/embed/hKrfH43srg8"
                        title="EMDR Therapy Explanation"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="text-content">
                        <p className="section-text">
                            EMDR aims to help the brain “unstick” and reprocess the memory properly so that it is no longer so intense. It also helps to desensitise the person to the emotional impact of the memory, so that they can think about the event without experiencing such strong feelings.
                        </p>
                        <p className="section-subtitle"><strong>EMDR is suitable for adults, young people and children.</strong></p>
                        <Link to="/contact" className="contact-btn" >Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EDMR