import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
