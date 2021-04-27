import React, { Component, Fragment } from "react";
import Icon from "./Icon";
import isMSIE from "../assets/lib/detect-old-ie.js";
import SmoothScroll from "../../node_modules/smooth-scroll/dist/smooth-scroll.min";

class NavMenu extends Component {
  componentDidMount() {
    if (!isMSIE()) {
      // eslint-disable-next-line no-unused-vars
      const scroll = new SmoothScroll('a[href*="#"]', {
        easing: "easeInOutQuint",
        offset: 0
      });
    }

    const navButton = document.querySelector("button[aria-expanded]");
    const navMenu = document.querySelector(".nav-menu");

    function toggleNav() {
      const expanded =
        navButton.getAttribute("aria-expanded") === "true" || false;
      navButton.setAttribute("aria-expanded", !expanded);
    }

    navButton.addEventListener("click", toggleNav);
    navMenu.addEventListener("click", toggleNav);
  }

  render() {
    return (
      <Fragment>
        <button
          type="button"
          aria-expanded="false"
          aria-controls="nav-menu-list"
          className="nav-menu-button"
        >
          MENU &nbsp;
          <Icon icon="bars" className="nav-icon nav-open" />
          <Icon icon="times" className="nav-icon nav-close" />
        </button>

        <nav className="nav-menu">
          <ol id="nav-menu-list">
            <li>
              <a data-scroll className="nav-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a data-scroll className="nav-item" href="#services">
                Services
              </a>
            </li>
            <li>
              <a data-scroll className="nav-item" href="#tech">
                Tech
              </a>
            </li>
            <li>
              <a data-scroll className="nav-item" href="#contact">
                Contact
              </a>
            </li>
          </ol>
        </nav>
      </Fragment>
    );
  }
}

export default NavMenu;
