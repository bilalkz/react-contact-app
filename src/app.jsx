import React, { Component } from "react";
import Contacts from "./Components/Contacts/contacts";
import Header from "./Components/layout/header.js";
import Provider from "./Context.js";
import AddContacts from "./Components/Contacts/AddContacts";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContacts />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
