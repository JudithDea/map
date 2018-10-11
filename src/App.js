import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowMap from "./components/ShowMap";
import SideDrawer from "./components/SideDrawer";
import About from "./components/About";
import Translation from "./components/Translation";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    sideDrawerOpen: true,
    steine: [],
    activeStein: [],
    aboutOpen: false,
    translationOpen: false
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

  hamburgerClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  currentMarkerClickHandler = id => {
    console.log(`Selected stein id: ${id}`);
    this.setState({
      activeStein: id
    });
  };

  aboutModalClickHandler = () => {
    this.setState(prevState => {
      return { aboutOpen: !prevState.aboutOpen };
    });
  };

  translationModalClickHandler = () => {
    this.setState(prevState => {
      return { translationOpen: !prevState.translationOpen };
    });
  };

  render() {
    let sideDrawer;
    if (this.state.sideDrawerOpen) {
      sideDrawer = (
        <SideDrawer
          steine={this.state.steine}
          currentMarkerClickHandler={this.currentMarkerClickHandler}
          aboutModalClickHandler={this.aboutModalClickHandler}
          translationModalClickHandler={this.translationModalClickHandler}
        />
      );
    }

    let aboutOpen;
    if (this.state.aboutOpen) {
      aboutOpen = (
        <About aboutModalClickHandler={this.aboutModalClickHandler} />
      );
    }

    let translationOpen;
    if (this.state.translationOpen) {
      aboutOpen = (
        <Translation
          translationModalClickHandler={this.translationModalClickHandler}
        />
      );
    }

    return (
      <div style={{ height: "100%" }}>
        <Header hamburgerClickHandler={this.hamburgerClickHandler} />
        {sideDrawer}
        <ShowMap
          steine={this.state.steine}
          activeStein={this.state.activeStein}
        />
        {aboutOpen}
        {translationOpen}
        <Footer />
      </div>
    );
  }
}

export default App;
