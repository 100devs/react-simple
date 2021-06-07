import React, { Component } from 'react'; // import react and component object
import './App.css'; //for css style
import Header from './Header'; // import Header component
import SectionMain from './SectionMain'; // import SectionMain component
import Aside from './Aside'; // import Aside component
import Footer from './Footer'; // import Footer component

class App extends Component { // create App from Component

  render() { //invoke render method
    return (
      <div className="App"> //giving div a className of App. camelcase tells use this is JSX
        <Header backColor="green" width="50%"></Header> 
        // ^ Header with properties
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App; // export App
