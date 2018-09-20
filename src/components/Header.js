import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h1>Neighborhood Map</h1>
        </a>
        <ul className="navbar-nav mr-2">
          <li className="nav-item">
            <a
              href="https://en.wikipedia.org/wiki/Stolperstein"
              target="_blank"
              className="nav-link"
            >
              Stolpersteine?
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
