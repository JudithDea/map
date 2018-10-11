import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="page-footer fixed-bottom font-small bg-secondary py-2 text-light"
    >
      <p className="footer-component footer-copyright text-center m-0">
        © 2018 -- Judith Dea -- Map and Stolperstein data from{" "}
        <a
          href="www.openstreetmap.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.openstreetmap.org
        </a>
        . Thank you!
      </p>
    </footer>
  );
};

export default Footer;
