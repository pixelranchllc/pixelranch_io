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
        Our staff has development experience dating back to 1996 and has served clients ranging 
        from startups to big tech.
      </p>

      <h3>Technologies </h3>
      <ul className="feature-list">
        <li>Vanilla JavaScript (OOP and Functional)</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Gatsby</li>
        <li>GraphQL</li>
        <li>Shopify Plus</li>
        <li>CSS-in-JS</li>
      </ul>

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
