import React from "react";
import Icon from "./Icon";

const Home = () => (
  <section>
    <span id="home" className="section-link" />
    <div>
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
