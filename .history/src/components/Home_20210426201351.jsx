import React from "react";
import Icon from "./Icon";

const Home = () => (
  <section>
    <span id="home" className="section-link" />
    <div>
      <h2 className="tagline">
        Web Application Development
      </h2>
      <p>
        Pixel Ranch builds web applications that deliver an extraordinary user experience. 
      </p>

      <ul className="feature-list">
        <li>Concise and readable</li>
        <li>Honors your individual skills and experience</li>
        <li>Highlights your achievements and contributions</li>
        <li>Presents value to prospective employers</li>
        <li>Properly formatted for humans and machines</li>
        <li>Applicant Tracking Software (ATS) compliant</li>
        <li>
          Professionally edited for proper spelling, grammar, and punctuation
        </li>
      </ul>

      <p>
        Our staff has development experience dating back to 1996 and has served
        clients rangings from big tech to small business.
      </p>

      <p>
        Your resume will have 20 seconds to make an impression on a hiring
        manager.
        <br />
        Make the best impression with A Proper Resume!
        <br />
        <a href="#contact" id="home-contact">
          <Icon icon="envelope" className="icon-link" />
          Contact Pixel Ranch for a Consultation
        </a>
      </p>
    </div>
  </section>
);

export default Home;
