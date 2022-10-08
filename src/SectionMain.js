//import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import React, { Component } from 'react';
//importing the stylesheet we will be using to style this component
import './SectionMain.css';

//uses the Component object as a base to create a SectionMain class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
class SectionMain extends Component {
  //it will examine props, and useState to create and display (render) the provided code
  render() {
    //return the code that defines the SectionMain component so the render function can interpret and process the need elements, props, state, etc
    return (
      //sets up a section element with the classname SectionMain
      <section className="SectionMain"></section> //create/insert a section element with a class of SectionMain
    );
  }
}

//export this component as the default component of this file, no need to destructure when you want to use this component
export default SectionMain;