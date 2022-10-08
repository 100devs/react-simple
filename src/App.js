//import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import React, { Component } from 'react';
//importing the stylesheet we will be using to style the main application
import './App.css';
//import the header file which contain the code for creating that component
import Header from './Header';
//import the sectionMain file which contain the code for creating that component
import SectionMain from './SectionMain';
//import the aside file which contain the code for creating that component
import Aside from './Aside';
//import the footer file which contain the code for creating that component
import Footer from './Footer';

//uses the Component object as a base to create an app class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
class App extends Component {
  //it will examine props, and useState to create and display (render) the provided code
  render() {
    //return the code that defines the App component for render to interpret and process which will be the main page of our application
    return (
      <div className="App"> {/* create/insert an opening div with a class of app */}
        <Header backColor="green" width="50%"></Header>{/* create/insert a header component and pass it the color green as backColor and 50% as width through the props objects */}
        <SectionMain></SectionMain> {/* create/insert a sectionMain component */}
        <Aside></Aside> {/* create/insert an aside component */}
        <Footer></Footer> {/* create/insert a footer component */}
      </div> //create/insert a closing div tag
    );
  }
}

//export this component as the default component of this file, no need to destructure when you want to use this component
export default App;