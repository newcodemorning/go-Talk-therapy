import React from 'react'
import Img1 from '../../assets/about1.png'
import Img2 from '../../assets/about2.png'
import Img3 from '../../assets/about3.png'
import Img4 from '../../assets/about4.png'
import ImgLogo from '../../assets/Group (13).png'
import '../../styles/FindOutMore.css'
import { Link } from 'react-router-dom'

const FindOutMore = () => {
    return (
        <div className="shop_container">
            <div className="shop_cont">
                <div className="text-section" >
                    <img src={ImgLogo} alt="logo" className='about-logo' />
                    <p className="about__text">
                        ABOUT US
                    </p>
                    <p className="text-buyer">We All Beam spreads happiness to everyone's world</p>
                    <p className="text-shops">
                        We All Beam spreads happiness to everyone's world.We All Beam encourages all users to learn about their mental health to shine and grow as individuals creating self-awareness, building resilience helping everyone to be mentally well.            </p>

                    <div className="cta">
                        <Link to="/services" className="cta-button1">
                        Our Services
                        </Link>
                    </div>
                </div>
                <div className="grid-gallery">
                    <div className="grid-item">
                        <img src={Img1} alt=""  />
                    </div>
                    <div className="grid-item">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="grid-item">
                        <img src={Img3} alt="" />
                    </div>
                    <div className="grid-item">
                        <img src={Img4} alt="" />
                    </div>
                </div>
            </div>
        </div>)
}

export default FindOutMore