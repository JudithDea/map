import React from "react";

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary py-0">
      <div className="container">
        <a href="/" className="navbar-brand py-2">
          <h1>Neighborhood Map</h1>
          <p>"Stolpersteine" in Bonn, Germany</p>
        </a>
        {/* <ul className="navbar-nav mr-2">
          <li className="nav-item">
            <a
              href="https://en.wikipedia.org/wiki/Stolperstein"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              What are Stolpersteine?
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Translation cheat sheet
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About this page
            </a>
          </li>
        </ul> */}
      </div>
      {/* <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form> */}
    </nav>
  );
};

export default Header;
