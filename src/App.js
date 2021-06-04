import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';
//class based component for App - holds all of our app's components
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
      //class based component for App - holds all of our app's components
        <SectionMain></SectionMain>
      // plugs in SectionMain component
        <Aside></Aside>
       // plugs in the Aside component
        <Footer></Footer>
      // plugs in SectionMain component
      </div>
    );
  }
}

export default App;
// allows App class to be used outside of this file

