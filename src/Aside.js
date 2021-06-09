//importing react npm and a component as well I think its in curly brackets because of a default state is required 
import React, { Component } from 'react';
//importing aside css styling into this file 
import './Aside.css';

//creating a class with the object inside which is rendering the aside page 
class Aside extends Component {
  render() {
    return (
        <aside className="Aside">
        </aside>

    );
  }
}

//exporting the aside file so that it can be used in other files if needed 
export default Aside;
