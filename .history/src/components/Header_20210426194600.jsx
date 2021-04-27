import React from "react";
import NavMenu from "./NavMenu";

const Header = () => (
  <header className="top">
    <div className="logo">
      <a href="#home">
        <h1 className="businessName">Pixel Ranch</h1>
      </a>
    </div>
    <NavMenu />
  </header>
);

export default Header;
