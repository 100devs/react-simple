//import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import React, { Component } from 'react';
//importing the stylesheet we will be using to style this component
import './Header.css';

//uses the Component object as a base to create a header class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
class Header extends Component {
  //it will examine props, and useState to create and display (render) the provided code
  render() {
    //define a constant object for storing styling variables
    const style = {
      //this key values pair defines a key of width and sets it to the width inside the props object passed to the component
      width: this.props.width,
      //this key values pair defines a key of backColer and sets it to the backColor inside the props object passed to the component
      backgroundColor: this.props.backColor
    }
    //return the code that defines the Header component so the render function can interpret and process the need elements, props, state, etc
    return (
      // Here it returns, and renders our styled Header component
      <header style={style} className="Header-main"></header> //create/insert a footer element with a class of Header-main and inserts in the style attribute the style values stored in the style object
    );
  }
}

//export this component as the default component of this file, no need to destructure when you want to use this component
export default Header;

//document.querySelector("header").style.backgroundColor = "red"