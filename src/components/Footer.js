import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/logo/Nitesh nagar-logos_white.png";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img className="f-logo" src={Logo} alt="Logo" />
        <h3 className="f-h3">Full Stack Developer</h3>
        <p>I am MERN stack developer specializes in building full-stack...</p>
        <ul className="socials">
          <li>
            <Link target="_parent" to="https://www.instagram.com/nite_shnagar">
              <FaInstagram size={22} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaWhatsapp size={22} />
            </Link>
          </li>
          <li>
            <Link target="_parent" to="https://www.linkedin.com/in/nitesh-nagar-76-h/">
              <FaLinkedin size={22} />
            </Link>
          </li>
          {/* <li>
              <Link href="#">
                <i className="fa fa-facebook"></i>
              </Link>
            </li> */}
        </ul>
        <div className="footer-bottom">
          <p>
            copyright &copy;2024 <Link href="#">nite_shnagar</Link>
          </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
