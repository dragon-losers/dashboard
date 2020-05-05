import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard.jsx";
import HackerNews from "../containers/HackerNews"
import Reddit from "../containers/Reddit.jsx"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Dragon-Losers Forever!!
        <Dashboard />
      </div>
    );
  }
}

export default App;
