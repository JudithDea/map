import React, { Component } from "react";
import "./SideDrawer.css";

class SideDrawer extends Component {
  render() {
    return (
      <nav className="side-drawer fixed-left">
        <ul className="list-group pt-3 pl-2 pb-3">
          <li>About this page</li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Stolperstein"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Stolpersteine <i className="fas fa-external-link-alt" />
            </a>
          </li>
          <li>Translation Help</li>
          <li>
            <input
              type="text"
              placeholder="Search Name/Street"
              className="rounded"
            />
          </li>
        </ul>
        <ul className="locations list-group m-1">
          {this.props.steine.map(stein => {
            return (
              <li key={stein.id} className="list-group-item">
                <span className="font-weight-bold">{stein.tags.name}</span>{" "}
                <br />
                {stein.tags["addr:street"]} {stein.tags["addr:housenumber"]}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
