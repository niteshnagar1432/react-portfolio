import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { WebInfo } from "../components/info";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Education from "../components/Education";

function About() {
  return (
    <div className="main">
      <Header />
      <section id="about-me-l">
        <div className="topic-h">
          <h1>About Me</h1>
        </div>
        <div className="sub-h">
          <h3>
            I am {WebInfo.author} And <span className="web">Web Developer</span>
          </h3>
          <p
            style={{ maxWidth: "50vw", textAlign: "justify" }}
            className="pera"
          >
            {WebInfo.bio}
          </p>
        </div>
        <div className="sub-box">
          <div className="sub-box-1">
            <h3>
              Birthday: <span className="input">&nbsp;{WebInfo.dob}</span>
            </h3>
            <div className="view">.</div>
            <h3>
              Website: <span className="input">&nbsp;{WebInfo.domain}</span>
            </h3>
            <div className="view">.</div>
            <h3>
              Degree: <span className="input">&nbsp;B.Tech (CSE)</span>
            </h3>
            <div className="view">.</div>
            <h3>
              City: <span className="input">&nbsp;Bhopal (M.P.)</span>
            </h3>
          </div>
          <div className="sub-box-2">
            <h3>
              Age: <span className="input">&nbsp;{WebInfo.age} Years</span>
            </h3>
            <div className="view">.</div>
            <h3>
              Email: <span className="input">&nbsp;{WebInfo.email}</span>
            </h3>
            <div className="view">.</div>
            <h3>
              Phone: <span className="input">&nbsp;{WebInfo.phone}</span>
            </h3>
            <div className="view">.</div>
            <h3>
              Freelance: <span className="input">&nbsp;Available</span>
            </h3>
          </div>
        </div>
      </section>
      <div className="blank"></div>
      <Education />
      {/* <section className="sucess-status">
        <div className="education">
          <h1>Education</h1>
          <div className="main-box">
            <div className="sub-box-1">
              <div className="dot1"></div>
              <div className="dot1-line"></div>
              <div className="dot2"></div>
            </div>
            <div className="sub-box-2">
              <div className="date">
                <h3>06/2020 - 06/2024</h3>
              </div>
              <div className="ex-heading">
                <h3>B.Tech in Computer Science</h3>
              </div>
              <div className="ex-detail">
                <p>
                  Pursuing a Bachelor of Technology in Computer Science with a
                  focus on software development and algorithms. Gained a strong
                  understanding of programming languages, data structures, and
                  computational theory. Worked on multiple projects involving
                  web and mobile application development, building a solid
                  foundation in both frontend and backend technologies.
                </p>
                <p>
                  During this time, I also gained practical knowledge through
                  internships, where I developed full-stack applications and
                  worked in collaborative environments. This program has
                  sharpened my problem-solving skills and prepared me for a
                  career in technology.
                </p>
              </div>
            </div>
          </div>
          <div className="main-box m">
            <div className="sub-box-1">
              <div className="dot1-line"></div>
              <div className="dot2"></div>
            </div>
            <div className="sub-box-2">
              <div className="date">
                <h3>11-April-2022</h3>
              </div>
              <div className="ex-heading">
                <h3>Masters in Computer Science</h3>
              </div>
              <div className="ex-detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus fuga vero assumenda officia temporibus facere
                  repellendus rem maxime error! Minima. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quia eligendi, commodi quod
                  tenetur illum ipsam? Quae natus aperiam commodi cupiditate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expiriance">
          <h1>Experience</h1>
          <div className="main-box">
            <div className="sub-box-1">
              <div className="dot1"></div>
              <div className="dot1-line"></div>
              <div className="dot2"></div>
            </div>
            <div className="sub-box-2">
              <div className="date">
                <h3>11-April-2022</h3>
              </div>
              <div className="ex-heading">
                <h3>Masters in Computer Science</h3>
              </div>
              <div className="ex-detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus fuga vero assumenda officia temporibus facere
                  repellendus rem maxime error! Minima. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quia eligendi, commodi quod
                  tenetur illum ipsam? Quae natus aperiam commodi cupiditate.
                </p>
              </div>
            </div>
          </div>
          <div className="main-box m">
            <div className="sub-box-1">
              <div className="dot1-line"></div>
              <div className="dot2"></div>
            </div>
            <div className="sub-box-2">
              <div className="date">
                <h3>{WebInfo.dob}</h3>
              </div>
              <div className="ex-heading">
                <h3>Masters in Computer Science</h3>
              </div>
              <div className="ex-detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus fuga vero assumenda officia temporibus facere
                  repellendus rem maxime error! Minima. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quia eligendi, commodi quod
                  tenetur illum ipsam? Quae natus aperiam commodi cupiditate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="blank"></div>
      <section className="have-a-question">
        <div className="top-heading">
          <h1>Have You Any Question ?</h1>
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

export default About;
