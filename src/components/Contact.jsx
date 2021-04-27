import React, { useState } from "react";
import Icon from "./Icon";

const [formState, setFormState] = useState =({ 
  name: "", 
  email: "", 
  message: "" 
});

const handleChange = e => setFormState({ [e.target.name]: e.target.value });


const handleSubmit = e => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...formState,
    }),
  })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => console.error(error))

  e.preventDefault()
}

const Contact = () => (
  <section>
    <span id="contact" className="section-link" />
    <div className="contact-header">
      <h2>Contact Pixel Ranch for a Consultation</h2>
    </div>

    <div className="contact-form-col">
      <form
        action="/"
        id="form-contact"
        name="form-pixelranch-contact"
        method="POST"
        data-netlify="true"
        netlify
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
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="org">
            Your Organization
            <input
              id="organization"
              name="organization"
              placeholder="Your Organization"
              type="text"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>I am interested in these services:</legend>
          <ul className="checkbox">
            <li>
              <input
                type="checkbox"
                id="service_web_dev"
                name="service_web_dev"
                value="Web Application Development"
                onChange={handleChange}
              />
              <label htmlFor="service_web_dev">Web Application Development</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_web3"
                name="service_web3"                
                value="Web3 Development"
                onChange={handleChange}
              />
              <label htmlFor="service_web3">Web3 Development</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_troubleshooting"
                name="service_troubleshooting"                
                value="Troubleshooting"
                onChange={handleChange}
              />
              <label htmlFor="service_troubleshooting">Troubleshooting</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="service_other"
                name="service_other"                
                value="Other Services"
                onChange={handleChange}
              />
              <label htmlFor="service_other">
                Other
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
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <button
          name="form-contact-submit"
          type="submit"
          id="form-contact-submit">
            <Icon icon="envelope" collection="far" className="icon-contact" />{" "}
            Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
