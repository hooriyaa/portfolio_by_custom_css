"use client";
import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="section mb-10">
      <section className="relative">
        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="container"
        >
          <div className="map-container">
            <iframe
              className="map-iframe"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7367.904312537491!2d68.3657568895067!3d25.40488017051715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70db4fff1b5d%3A0xa2537a4a0cc35b09!2sHeerabad%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1720962898844!5m2!1sen!2s"
            />
            <div className="info-box md:mt-80 mr-7 mt-32">
              <div className="info-column">
                <h2 className="info-title">ADDRESS:</h2>
                <p className="info-text">Heerabad, hyderabad, sindh.</p>
              </div>
              <div className="info-column ">
                <h2 className="info-title">EMAIL:</h2>
                <a className="email-link">guujarmahnoor0312@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="form-container">
            <h2 className="form-title">Contact</h2>
            <p className="form-subtitle">fell free to contact</p>
            <form action="https://formspree.io/f/xdknoaab" method="POST">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  required
                />
              </div>
              <button className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
