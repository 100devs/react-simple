import React, { Component } from 'react'; //import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import './Header.css'; //importing the stylesheet we will be using to style this component

class Header extends Component { //uses the Component object as a base to create a header class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
  render() { //it will examine props, and useState to create and display (render) the provided code
    const style = { //define a constant object for storing styling variables
      width: this.props.width, //this key values pair defines a key of width and sets it to the width inside the props object passed to the component
      backgroundColor: this.props.backColor //this key values pair defines a key of backColer and sets it to the backColor inside the props object passed to the component
    }
    return ( //return the code that defines the Header component so the render function can interpret and process the need elements, props, state, etc
        <header style={style} className="Header-main"> {/*create/insert a footer element with a class of Header-main and inserts in the style attribute the style values stored in the style object */}
        </header> 

    );
  }
}

export default Header; //export this component as the default component of this file, no need to destructure when you want to use this component


//document.querySelector("header").style.backgroundColor = "red"
