import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowMap from "./components/ShowMap";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </NavText>
            </NavItem>
            <NavItem>
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <a
                  href="https://en.wikipedia.org/wiki/Stolperstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  What are Stolpersteine?
                </a>
              </NavText>
            </NavItem>
            <NavItem>
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Translating Stolpersteine
                </a>
              </NavText>
            </NavItem>
            <NavItem>
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  About this page
                </a>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <ShowMap />
        <Footer />
      </div>
    );
  }
}

export default App;
