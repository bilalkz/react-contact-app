import React, { Component } from "react";
import Contact from "./Components/contact";
import Header from "./Components/header.js";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
