import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary py-0">
      <button
        className="bg-secondary border-0"
        onClick={props.hamburgerClickHandler}
        style={{ cursor: "pointer" }}
      >
        <i className="fas fa-bars fa-2x text-light" />
      </button>
      <div />
      <div className="container">
        <a href="/" className="navbar-brand py-2">
          <h1 className="here-lived">Here lived...</h1>
          <p className="mb-0">"Stolpersteine" in Bonn, Germany</p>
        </a>
      </div>
    </nav>
  );
};

export default Header;
