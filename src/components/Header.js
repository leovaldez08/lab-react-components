import React from "react";

function Header() {
  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt=""
        ></img>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          <button>Contact</button>
        </a>
      </header>
    </div>
  );
}

export default Header;
