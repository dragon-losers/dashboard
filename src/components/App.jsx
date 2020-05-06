import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard.jsx";
import Github from "../containers/Github.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Dragon-Losers Forever!!
        <Dashboard />
        <Github />
      </div>
    );
  }
}

export default App;
