import React, { Component } from 'react';
import './Aside.css';


//class based Component for Aside - holds all of our Aside's components
class Aside extends Component {
  render() {
    return (
        <aside className="Aside">
        </aside>

    );
    // tells what to return when you plug Aside into App.js
  }
}

export default Aside;
// allow access of Aside outside this file