import React, { Component } from 'react';
import './Header.css';

// class constructor. allows us to pass in props to use JSX.
class Header extends Component {
  render() {
    const style = {
      // you can adjust the width when its pass in the app object.
      width: this.props.width,
      // adjust background when its pass in the app object.
      backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
