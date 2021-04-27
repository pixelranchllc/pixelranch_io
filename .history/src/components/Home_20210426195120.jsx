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
        A Proper Resume develops compelling resumes and CVs for career
        professionals in the technology, healthcare, and management fields. A
        Proper Resume creates resumes to accurately describe your valuable
        experience and achievements in a concise readable format targeting your
        ideal next career chapter.
      </p>

      <p>A proper resume is:</p>

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
        Our staff has professional resume writing experience dating back to 1995
        and has engaged the hiring process as a hiring manager, interviewer, and
        developer of applicant tracking software.
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
