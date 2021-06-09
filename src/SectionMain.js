// import react for this project
import React, { Component } from 'react';
// import SectionMain styling file from src
import './SectionMain.css';

// create class-based component for main section
class SectionMain extends Component {
  // render method
  render() {
    //    return rendered HTML of the main section
    return (
      //   section has class name so we can apply CSS styling to it, camelCase indicates JSX
        <section className="SectionMain">
        </section>

    );
  }
}

// export SectionMain so it can be imported to App (parent component)
export default SectionMain;
