import React, { Component } from "react";
import Contacts from "./Components/contacts";
import Header from "./Components/header.js";
import Provider from "./Context.js";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
