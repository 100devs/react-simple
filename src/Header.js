import React, { Component } from 'react';
import './Header.css';  // imports the CSS file for use within this file

// class-based component that controls how the Header behaves
class Header extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
      border: this.props.borderProp
      // App.js pulls props from here
    }
    return (
        <header style={style} className="Header-main">
        </header>
        // gives us what the Header component class will return
    );
  }
}

export default Header; // allow access of Header outside this file


//document.querySelector("header").style.backgroundColor = "red"
