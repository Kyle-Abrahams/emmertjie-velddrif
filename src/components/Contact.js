import React from "react";
import location from "../images/Emmertjie_location.PNG";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="section-header">Contact Us</h2>

      <div className="contact-info">
        <h4 className="contact-text">Give us a call</h4>
        <p className="info">065 816 3669</p>
        <h4 className="contact-text">Email us</h4>
        <p className="info">dieemmertjievelddrif@gmail.com</p>
      </div>
      <div className="operating-info">
        <div className="operating-hours">
          <h4 className="contact-text">Operating hours</h4>
          <ul>
            <li className="operating-hours">
              Monday: <span className="hours">CLOSED</span>
            </li>
            <li className="operating-hours">
              Tuesday: <span className="hours">09:00 - 17:00</span>
            </li>
            <li className="operating-hours">
              Wednesday: <span className="hours">09:00 - 16:00</span>
            </li>
            <li className="operating-hours">
              Thursday: <span className="hours">09:00 - 16:00</span>
            </li>
            <li className="operating-hours">
              Friday: <span className="hours">09:00 - 16:00</span>
            </li>
            <li className="operating-hours">
              Saterday: <span className="hours">09:00 - 17:00</span>
            </li>
            <li className="operating-hours">
              Sunday: <span className="hours">CLOSED</span>
            </li>
          </ul>
        </div>
        <div className="location">
          <a href="https://www.google.com/maps/place/5+Voortrekker+Rd,+Laaiplek,+Velddrif,+7365/@-32.7715413,18.1543208,17z/data=!3m1!4b1!4m5!3m4!1s0x1c3367250a114bb9:0x3c406e8540123585!8m2!3d-32.7715413!4d18.1565095">
            <img src={location} alt="emmertjie location" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
