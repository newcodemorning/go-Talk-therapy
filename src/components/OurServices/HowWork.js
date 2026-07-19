import React from 'react'
import Img from '../../assets/who-we-help-03.png'

import '../../styles/HowWork.css'

const HowWork = () => {
  return (
    <div className="how_work_container">
    <div className="how_work_cont">
        <div className="text-section" >
            <h2 className="how_work_title">
            How we work
            </h2>
            <p className="how_work_description">
            Every individual will receive an easement to help us decide what support is best for you. One of our team will then contact you to arrange a start date for your therapy. Therapy can be delivered over the phone or remotely via Teams
            </p>           
        </div>
        <div className="image-section">
            <img src={Img} alt="" />
        </div>
    </div>
</div>  )
}

export default HowWork;