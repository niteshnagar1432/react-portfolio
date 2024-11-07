import React from "react";
import { Link } from "react-router-dom";

import ProfilePic from "../images/[removal.ai]_tmp-635227546a6b1.png";
import Logo from "../images/logo/Nitesh nagar-logos_white.png";
import VideoHome from "../images/Ink - 67358 (1).mp4";
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WebInfo } from "../components/info";

function Home() {
  return (
    <div className="main">
      <Header />
      <div className="video-body">
        <video muted autoPlay loop src={VideoHome}></video>
        <div className="my-img">
          <h1>Welcome To my profile</h1>
          <p>
            I A'm MERN stack developer specializes in building full-stack web
            applications using MongoDB, Express, React, and Node.js.
          </p>
          <button>More About</button>
        </div>
      </div>

      <div className="blank"></div>
      <section className="about-section">
        <div className="title">
          <h1 className="title-h">About My Self</h1>
        </div>
        <div className="row">
          <div className="home-info">
            <h3 className="hello">
              Hello, my name is <span className="name">Nitesh Nagar</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">Web Developer</span>
            </h3>
            <p>
              I'm a web Designer with extensive experience for over 1 year. My
              expertise is to create website designs, graphic design, and
              more...
            </p>
            <Link href="#" className="btn about-me">
              More About Me.
            </Link>
          </div>
          <div className="home-img">
            <img src={ProfilePic} alt="Profile" />
          </div>
        </div>
      </section>

      <div className="blank"></div>
      <section id="about-me-l">
        <div className="topic-h">
          <h1>About Me</h1>
        </div>
        <div className="sub-h">
          <h3>
            I am Nitesh Nagar and <span className="web">Web Developer</span>
          </h3>
          <p className="pera">
            I am MERN stack developer specializes in building full-stack...
          </p>
        </div>
        <div className="sub-box">
          <div className="sub-box-1">
            <h3>
              Birthday: <span className="input"> {WebInfo.dob}</span>
            </h3>
            <h3>
              Website: <span className="input"> {WebInfo.domain}</span>
            </h3>
            <h3>
              Degree: <span className="input"> B.Tech (CSE) 2024</span>
            </h3>
            <h3>
              City: <span className="input"> Bhopal (M.P.)</span>
            </h3>
          </div>
          <div className="sub-box-2">
            <h3>
              Age: <span className="input"> {WebInfo.age} Years</span>
            </h3>
            <h3>
              Email: <span className="input"> {WebInfo.email}</span>
            </h3>
            <h3>
              Phone: <span className="input"> {WebInfo.phone}</span>
            </h3>
            <h3>
              Freelance: <span className="input"> Available</span>
            </h3>
          </div>
        </div>
      </section>

      <div className="blank"></div>
      <section className="have-a-question">
        <div className="top-heading">
          <h1>Have You Any Question?</h1>
          <h3>I'm At Your Service</h3>
        </div>
        <div className="full-details">
          <div className="mobile">
            <FaPhoneAlt color="white" size={24} />
            <h3>Call Us On</h3>
            <p>{WebInfo.phone}</p>
          </div>
          <div className="location">
            <FaLocationDot color="white" size={24} />
            <h3>Location</h3>
            <p>{WebInfo.address}</p>
          </div>
          <div className="email">
            <MdEmail color="white" size={24} />
            <h3>Email</h3>
            <p>{WebInfo.email}</p>
            <p>{WebInfo.email_1}</p>
          </div>
          <div className="web-p">
            <TbWorld color="white" size={24} />
            <h3>Website</h3>
            <p>{WebInfo.domain}</p>
          </div>
        </div>
      </section>

      <div className="blank"></div>
      <Footer />
    </div>
  );
}

export default Home;
