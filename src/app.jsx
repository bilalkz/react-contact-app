import React, { Component } from "react";
import Contacts from "./Components/Contacts/contacts";
import Header from "./Components/layout/header.js";
import Provider from "./Context.js";
import AddContacts from "./Components/Contacts/AddContacts";
import EditContact from "./Components/Contacts/EditContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/test/Test";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContacts} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
