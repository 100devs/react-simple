// allows you to use components to render UI and reusability. 
import React, { Component } from 'react';
// renders styling.
import './App.css';
// allows you to use the header component
import Header from './Header';
// allows you to use the section main component
import SectionMain from './SectionMain';
// allows you to use the aside component
import Aside from './Aside';
// allows you to use the footer component.
import Footer from './Footer';

// class instead of functions. This will render information for APP. 
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        {/* renders sectionmain component  */}
        <SectionMain></SectionMain> 
        {/* renders aside component */}
        <Aside></Aside>
        {/* renders footer component */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
