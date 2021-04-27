import React from "react";
import Icon from "./Icon";

const Contact = () => (
  <section>
    <span id="contact" className="section-link" />
    <div className="contact-header">
      <h2>Contact Pixel Ranch for a Consultation</h2>
    </div>

    <div className="contact-form-col">
      <form
        id="form-contact"
        name="form-contact"
        method="POST"
        data-netlify="true"
      >
        <fieldset>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              type="text"
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="org">
            Your Organization
            <input
              id="organization"
              name="email"
              placeholder="Your E-mail"
              type="email"
              required
            />
          </label>
        </fieldset>        

        <fieldset>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              name="email"
              placeholder="Your E-mail"
              type="email"
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="phone">
            Phone
            <input
              id="phone"
              name="phone"
              placeholder="Your Phone Number (optional)"
              type="tel"
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>I am interested in these services:</legend>
          <ul className="checkbox">
            <li>
              <input
                type="checkbox"
                id="service_resume"
                value="Resume Development Service"
              />
              <label htmlFor="service_resume">Resume Development Service</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_linkedin"
                value="LinkedIn Profile Setup"
              />
              <label htmlFor="service_linkedin">LinkedIn Profile Setup</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_angellist"
                value="Angel List Setup"
              />
              <label htmlFor="service_angellist">Angel List Setup</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_orientation"
                value="Digital Job Search Orientation"
              />
              <label htmlFor="service_orientation">
                Digital Job Search Orientation
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_full_digital"
                value="Full Service Digital Orientation and Setup"
              />
              <label htmlFor="service_full_digital">
                Full Service Digital Orientation and Setup
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <label htmlFor="message">
            Comments - Please include the best days and times to schedule a 30
            minute voice call.
            <textarea
              cols="22"
              id="message"
              name="message"
              placeholder="Type your comments here..."
              required
              rows="5"
              wrap="virtual"
            />
          </label>
        </fieldset>

        <button
          name="form-contact-submit"
          type="submit"
          id="form-contact-submit"
        >
          <Icon icon="envelope" collection="far" className="icon-contact" />{" "}
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
