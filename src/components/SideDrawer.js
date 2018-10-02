import React, { Component } from "react";
import "./SideDrawer.css";

class SideDrawer extends Component {
  render() {
    return (
      <nav className="side-drawer">
        <ul className="list-group pt-3 pl-2 pb-3">
          <li>About this page</li>
          <li>
            About Stolpersteine <i className="fas fa-external-link-alt" />
          </li>
          <li>Translation Help</li>
          <li>
            <input type="text" placeholder="Search name/street" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
