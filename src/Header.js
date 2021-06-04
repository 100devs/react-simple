//  import react and component for use in this file
import React, { Component } from 'react';
// import Header.css file
import './Header.css';

// establish class-based component for Header element
class Header extends Component {
//   render style variable and return header with styling
  render() {
    const style = {
//  grab styling from App.js (defined in return)
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

// export Header component
export default Header;


//document.querySelector("header").style.backgroundColor = "red"
