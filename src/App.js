// import react for this project
import React, { Component } from 'react';
// import app.css file from components folder on line 2
import './App.css';
// import Header file from components folder on line 2
import Header from './Header';
// import SectionMain file from components folder on line 2
import SectionMain from './SectionMain';
// import Aside file from components folder on line 2
import Aside from './Aside';
// import Footer file from components folder on line 2
import Footer from './Footer';

// create class-based component
class App extends Component {
// render method
  render() {
//    return rendered HTML of the individual sections
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
// export App so it can be accessed in index.js
export default App;
