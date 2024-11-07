import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WebInfo } from "../components/info";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

function Contact() {
  return (
    <div className="main">
      <Header />
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

      <section className="contact">
        <div className="contact-heading">
          <h3>Send Me an Email</h3>
        </div>
        <div className="contact-sub-heading">
          <h3>I'm very responsive to messages</h3>
        </div>
        <form
          style={{ paddingBottom: "50px" }}
          action="#"
          method="post"
          className="contact-form"
        >
          <div
            style={{ display: "flex", alignItems: "center", width: "44%" }}
            className="name-input"
          >
            <input
              style={{
                marginRight: "10px",
                width: "100%",
                height: "100%",
                padding: "10px 7px",
              }}
              className="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              style={{
                marginRight: "10px",
                width: "100%",
                height: "100%",
                padding: "10px 7px",
              }}
              className="lname"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            style={{ width: "44%", padding: "10px 7px" }}
            className="subject"
            type="text"
            placeholder="Subject"
          />
          <textarea
            name="lol"
            id="message"
            cols="30"
            placeholder="Message"
            rows="10"
          ></textarea>
          <button className="sent">Send Message</button>
        </form>
      </section>

      <div className="blank"></div>
      <Footer />
    </div>
  );
}

export default Contact;
