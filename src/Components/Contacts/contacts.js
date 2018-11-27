import React, { Component } from "react";
import Contact from "./contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  // deleteContact = id => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   this.setState({ contacts: newContacts });
  // };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
