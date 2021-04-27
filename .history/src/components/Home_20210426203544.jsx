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
        <li>Rapid prototyping and iteration</li>
        <li>Implementing pixel-perfect responsive front-ends from Sketch, Photoshop, or Figma</li>
        <li>Web3 and Blockchain development</li>
        <li>eCommerce features</li>
        <li>Architecture and initial technology decisions for greenfield applications</li>
        <li>REST and GraphQL endpoint development</li>
        <li>Migrating legacy applications to newer technologies and architectures</li>
        <li>Engaging marketing and design teams to integrate analog campaigns into digital presence</li>
        <li>Component design systems</li>
        <li>Accessibility evaluation and implementation</li>
        <li>Troubleshooting difficult challenges</li>
      </ul>

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
