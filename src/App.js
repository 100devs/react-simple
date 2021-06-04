import React, { Component } from 'react';  //import react and react Component (for the class component)
import './App.css';  //styling
import Header from './Header'; //importing the Header component
import SectionMain from './SectionMain'; //SectionMain component
import Aside from './Aside'; //Aside component
import Footer from './Footer'; //Footer component

class App extends Component {  //create the App component

  render() { //invoke render method
    return ( //return the div containing our components
      <div className="App"> {/* JSX so camelCase - give the div element class of App */}
        <Header backColor="green" width="50%"></Header> {/* header component with backColor and width props */}
        <SectionMain></SectionMain> {/* section main component */}
        <Aside></Aside> {/* Aside component */}
        <Footer></Footer> {/* Footer component */}
      </div>
    );
  }
}

export default App; //export App component
