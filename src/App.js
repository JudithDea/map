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
  state = {
    steine: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      "http://overpass-api.de/api/interpreter?data=[out:json]%2F*%0AThis%20has%20been%20generated%20by%20the%20overpass-turbo%20wizard.%0AThe%20original%20search%20was%3A%0A%E2%80%9C%22memorial%3Atype%22%3Dstolperstein%20and%20type%3Anode%20in%20%22Bonn%22%20%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F%20fetch%20area%20%E2%80%9CBonn%E2%80%9D%20to%20search%20in%0Aarea%283600062508%29-%3E.searchArea%3B%0A%2F%2F%20gather%20results%0A%28%0A%20%20%2F%2F%20query%20part%20for%3A%20%E2%80%9C%22memorial%3Atype%22%3Dstolperstein%E2%80%9D%0A%20%20node%5B%22memorial%3Atype%22%3D%22stolperstein%22%5D%28area.searchArea%29%3B%0A%29%3B%0A%2F%2F%20print%20results%0Aout%20body%3B%0A%3E%3B%0Aout%20skel%20qt%3B"
    )
      .then(res => res.json())
      .then(steine => {
        this.setState({ steine: steine.elements });
      })
      .catch(err => console.log("There was a problem loading data", err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SideNav onSelect={selected => {}}>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
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
          </SideNav.Nav>
        </SideNav>
        <ShowMap steine={this.state.steine} />
        <Footer />
      </div>
    );
  }
}

export default App;
