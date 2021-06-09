//importing react npm and a component as well I think its in curly brackets because of a default state is required 
import React, { Component } from 'react';
//import the footer styling into this file
import './Footer.css';

//creating the class footer with the object and rendering the footer via react 
class Footer extends Component {
  render() {
    return (
        <footer className="Footer">
        </footer>

    );
  }
}

//exporting this file so that it can be used and imported in other files 
export default Footer;
