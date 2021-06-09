//import the react npm that was installed
import React, { Component } from 'react';
//import the app css styling into this js file
import './App.css';
//import the header js information
import Header from './Header';
//import the section main js information 
import SectionMain from './SectionMain';
//import the aside js information
import Aside from './Aside';
//import the footer js information 
import Footer from './Footer';

//this creates a class which holds an object which ends up rendering information via react coding 
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

//you can export this whole thing to be used in other pages of js now 
export default App;
