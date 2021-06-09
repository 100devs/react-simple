// import react for this project
import React, { Component } from 'react';
// import Aside styling file from src
import './Aside.css';

// create class-based component for the aside section
class Aside extends Component {
  // render method
  render() {
    //    return rendered HTML of the aside section
    return (
      //   aside has class name so we can apply CSS styling to it, camelCase indicates JSX
        <aside className="Aside">
        </aside>

    );
  }
}

// export Aside component so it can be imported to App (parent component)
export default Aside;
