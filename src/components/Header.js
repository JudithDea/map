import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header role="banner" tabIndex="0">
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary py-0">
        <button
          className="bg-secondary border-0"
          onClick={props.hamburgerClickHandler}
          style={{ cursor: "pointer" }}
          alt="toggle side drawer"
        >
          <i className="fas fa-bars fa-2x text-light" />
        </button>
        <div />
        <div className="w-100 text-center text-white">
          <h1 className="here-lived pt-4">Here lived ...</h1>
          <p className="subtitle pb-1">"Stolpersteine" in Bonn, Germany</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
