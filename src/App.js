//import the react npm that was installed
import React, { Component } from 'react';
//import the app css styling into this js file
import './App.css';
//import the header information
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
