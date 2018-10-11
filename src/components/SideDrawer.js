import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";
import "./SideDrawer.css";

class SideDrawer extends Component {
  state = {
    query: "",
    filteredSteine: []
  };

  updateQuery = query => {
    this.setState({ query });
  };

  render() {
    let showingSteine;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      showingSteine = this.props.steine.filter(
        stein =>
          match.test(stein.tags.name) || match.test(stein.tags["addr:street"])
      );
    } else {
      showingSteine = this.props.steine;
    }

    return (
      <nav className="side-drawer fixed-left">
        <ul className="list-group pt-3 pl-2 pb-3">
          <li
            className="item"
            onClick={this.props.aboutModalClickHandler}
            style={{ cursor: "pointer" }}
          >
            About this page
          </li>
          <li
            className="item"
            onClick={this.props.translationModalClickHandler}
            style={{ cursor: "pointer" }}
          >
            Translation Help
          </li>
          <li className="item">
            <a
              href="https://en.wikipedia.org/wiki/Stolperstein"
              target="_blank"
              rel="noopener noreferrer"
              alt="External link to Wikipedia entry"
            >
              About Stolpersteine <i className="fas fa-external-link-alt" />
            </a>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search Name/Street"
              className="rounded"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </li>
        </ul>
        <ul className="locations list-group m-1">
          {showingSteine.map(stein => {
            return (
              <li
                key={stein.id}
                className="list-group-item"
                onClick={() => this.props.currentMarkerClickHandler(stein.id)}
                style={{ cursor: "pointer" }}
              >
                {stein.tags.name}
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
