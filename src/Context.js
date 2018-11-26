import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: "1",
        name: "bilal khanzada",
        email: "bilalkz588@gmail.com",
        phone: "03102302876"
      },
      {
        id: "2",
        name: "junaid pervaiz",
        email: "junaid@gmail.com",
        phone: "03102332876"
      },
      {
        id: "3",
        name: "pasha jani",
        email: "pasha@gmail.com",
        phone: "33302302876"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
