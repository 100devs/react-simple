import React, { Component } from 'react'; //import react and the Component object to use with out class based component
import './Header.css'; //header css stylesheet

class Header extends Component { //defining the header class
  render() { //render method
    const style = { //defining the styles using a custom object
      width: this.props.width, // we can use this because it's a class - passing in width and backColor via props
      backgroundColor: this.props.backColor
    }
    return ( //returning the element header
        <header style={style} className="Header-main"> {/* header with inline styles and classname Header-main - style is passed in as obj */}
        </header>
    );
  }
}

export default Header; //export Header component


//document.querySelector("header").style.backgroundColor = "red"
