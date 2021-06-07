import React, { Component } from 'react'; // import react and component
import './Header.css'; //import styling

class Header extends Component { //create Header object from Component
  render() {
    const style = { //create style properties on Header class
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return ( //return Header with object style and className Header-main
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header; // export Header component


//document.querySelector("header").style.backgroundColor = "red"
