import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">

      <div className="contact-box">

        <h1>Contact Us</h1>
        <p className="contact-sub">
          We'd love to hear from you. Reach out for reservations,
          feedback, or inquiries.
        </p>

        <div className="contact-info">

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 79811 77389</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>sindhusrestaurant@gmail.com</p>
          </div>

        </div>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="4"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
  );
}

export default ContactUs;