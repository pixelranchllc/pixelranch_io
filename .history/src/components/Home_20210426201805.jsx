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

      <h3>Expertise</h3>
      <p>Accessibility</p>

      <h3>Technologies</h3>
      <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Redux</li>
      <li>Node.js</li>
      <li>jQuery</li>
      <li>LoDash</li>
      <li>Shopify Plus</li>
      <li>GraphQL</li>
      <li>CSS-in-JS</li>
      </ul>


      <h4>
        Our staff has development experience dating back to 1996 and has served
        clients ranging in size from big tech to small business.
      </h4>

      <p>
        <a href="#contact" id="home-contact">
          <Icon icon="envelope" className="icon-link" />
          Contact Pixel Ranch for a Consultation
        </a>
      </p>
    </div>
  </section>
);

export default Home;
