//imports react and the component module
import React, { Component } from "react";
//imports the style sheet
import "./SectionMain.css";

//uses classed based structure to set up the SectionMain component
class SectionMain extends Component {
  //render is called to return the views when the component is used
  render() {
    //returns what is passed in as JSX that renders out to html
    return (
      //sets up a section element with the classname SectionMain
      <section className="SectionMain"></section>
    );
  }
}

//exports the SectionMain component
export default SectionMain;
