import React from "react";
import Icon from "./Icon";

const Tech = () => (
  <section>
    <span id="tech" className="section-link" />
    <div>
      <h2 className="tagline">
        Web Application Development
      </h2>

      <p>
        Pixel Ranch builds web applications that deliver an extraordinary user experience. 
        We have over 20 years of development experience and has served clients ranging 
        from startups to big tech.
      </p>

      <p>
        <a href="#contact" id="home-contact">
          <Icon icon="envelope" className="icon-link" />
          Contact Pixel Ranch for a Consultation
        </a>
      </p>
    </div>
  </section>
);

export default Tech;
