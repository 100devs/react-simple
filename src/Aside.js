import React, { Component } from "react";
// We are importing the aside .css file to be used here
import "./Aside.css";
/// uses class based structure to get the Aside component going.
class Aside extends Component {
  /* The component renders the aside component with the Aside class created in the Aside.css */
  render() {
    return <aside className="Aside"></aside>;
  }
}

export default Aside;

/// this exports the Aside component to be used with another file.
