import "./App.css";
import React, { Component } from "react";
import Portfolio from "./components/Portfolio/Portfolio";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Portfolio />
      </div>
    );
  }
}

export default App;
