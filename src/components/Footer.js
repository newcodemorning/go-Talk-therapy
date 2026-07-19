import React from "react";
import '.././styles/Footer.css';
import logo from '.././assets/logo.svg';
import phoneIcon from '.././assets/line-md_phone-filled.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";



const Footer = () => {

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-row">
          <div className="footer-col logo-col">
            <Link to='/' >
              <img className="img-responsive" src={logo} alt="logo" />
            </Link>
            <div className="footer-phone">
              <img src={phoneIcon} alt="phone" width={"14px"} height={"14px"} />

              <span className="footer-txt">
                (+44) 079 360 37939
              </span>
            </div>


          </div>

          <div className="footer-col sub-col">
            <h4>Company Info</h4>
            <ul>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Teachers</Link></li>
              <li><Link to="/">Support</Link>
              </li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </div>


          <div className="footer-col sub-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="footer-col sub-col ">
            <div className="social-links">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
