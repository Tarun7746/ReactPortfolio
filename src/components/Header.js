import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <nav className="custom-navbar">
          <div className="container">
            <Link to="/" className="logo">
              Tarun
            </Link>
            <ul className="nav">
              <li className="item">
                <Link to="#home" className="link">
                  Home
                </Link>
              </li>
              <li className="item">
                <Link to="#about" className="link">
                  About
                </Link>
              </li>
              {/* Add more menu items here */}
            </ul>
            <a className="hamburger hamburger--elastic">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </a>
          </div>
        </nav>
      </div>
      {/*page header */}
      <header class="header">
        <div class="overlay"></div>
        <div class="header-content container">
          <h1 class="header-title">
            <span class="up">HI!</span>
            <span class="down">I am Tarun</span>
          </h1>
          <p class="header-subtitle">FRONTEND WEB DESIGNER</p>

          <button class="btn btn-primary">Visit My Works</button>
        </div>
      </header>
    </>
  );
};

export default Header;
