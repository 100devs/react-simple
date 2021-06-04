import React, { Component } from "react";
// Imports the component class from React
import "./Header.css";
// This line imports the styling from the Header.css file into our Header component

class Header extends Component {
  render() {
    //This function renders the style for the header, declaring the style variable, getting the attributes as props from the imported /Header.css
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
    };
    return (
      // Here it returns, and renders our styled Header component
      <header style={style} className="Header-main"></header>
    );
  }
}

export default Header;
// The Header component is exported  and made available.

//document.querySelector("header").style.backgroundColor = "red"
