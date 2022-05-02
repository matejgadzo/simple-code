import React, { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <a href="index">Home</a>
            </li>
            <li className="nav-link">
              <a href="index">About</a>
            </li>
            <li className="nav-link">
              <a href="index">Contact</a>
            </li>
          </ul>
        </nav>
        <h1 className="nav-title">Landie</h1>
        <button className="buy-button">Buy Now</button>
      </div>
      <div className="mobile-menu">
        <nav className="navigation">
          <a href="/" className="brand-name">
            Landie
          </a>
          <div className={
              isMenuOpen ? "navigation-menu expanded" : "navigation-menu"
          }>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <button className="hamburger" onClick={() => {
              toggleMenuOpen(!isMenuOpen);
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
      </div>
    </div>
  );
}
