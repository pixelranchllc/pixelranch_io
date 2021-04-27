import React from 'react';

const Footer = () => (
  <div id="footer">
    <div className="empty-col" />
    <div className="footer-address">
      <address>
        <p></p>
      </address>
    </div>
    <div className="footer-copyright">
      <p>
        &copy; {new Date().getFullYear()}
        <br />
        Versatile Labs, LLC.
        <br />
        All Rights Reserved
      </p>
    </div>
    <div className="footer-social">
      <p></p>
    </div>
    <div className="empty-col" />
  </div>
);

export default Footer;
