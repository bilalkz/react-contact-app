import React, { Component } from "react";
import { Consumer } from "../Context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    const { showContactInfo } = this.state;
    this.setState({ showContactInfo: !showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    // this.props.deleteClickHandler();
    dispatch({ type: "DELETE_CONTACT", payload: id });
    console.log("clicked");
  };

  render() {
    const { id, name, email, contact } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  className="fa fa-sort-down ml-2"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fa fa-window-close"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{contact}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   deleteClickHandler: PropTypes.func.isRequired
// };

export default Contact;
