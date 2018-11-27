import React from "react";

export default props => {
  return (
    <div>
      <h2>{props.match.params.id}</h2>
      <h1 className="display-4">About Contact manager</h1>
      <p className="lead">Simple app to manage contact list</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
