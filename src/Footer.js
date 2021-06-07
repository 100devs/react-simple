// import react for this project
import React, { Component } from 'react';
// import Footer styling file from src
import './Footer.css';

// create class-based component
class Footer extends Component {
  // render method
  render() {
    //    return rendered HTML of the footer
    return (
//   footer has class name so we can apply CSS styling to it, camelCase indicates JSX
        <footer className="Footer">
        </footer>

    );
  }
}

// export Footer so it can be imported to App (parent component)
export default Footer;
