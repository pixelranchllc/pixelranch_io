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


      <h3>Our expertise includes:</h3>

      <ul className="feature-list">
        <li>Developing robust large-scale UI applications</li>
        <li>Implementing pixel perfect responsive front-ends from complex Sketch, Photoshop, or Figma designs</li>
        <li>Rapid prototyping and iteration</li>
        <li>Troubleshooting difficult challenges</li>
        <li>Web3 Development</li>
        <li>Architecture and initial technology decisions for greenfield applications</li>
      </ul>

      <h3>Technologies </h3>
      <ul className="feature-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>jQuery</li>
        <li>LoDash</li>
        <li>GraphQL</li>
        <li>Shopify Plus</li>
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
