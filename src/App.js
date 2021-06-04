import React, { Component } from "react";
// imports the react component from react method

import "./App.css";
// imports the App.css component from the app.css file

import Header from "./Header";
// imports the header component from the header file

import SectionMain from "./SectionMain";
// imports the SectionMain component from the sectionmain file

import Aside from "./Aside";
// imports the aside component from the aside file

import Footer from "./Footer";
// imports the footer component from the footer file

class App extends Component {
  // lines 22 & 23 will render/return the following:
  render() {
    return (
      <div className="App">
        // renders a parent div with the class of App (see App.css file)
        <Header backColor="green" width="50%"></Header>
        // renders child of header with background color of green and width of
        50%
        <SectionMain></SectionMain>
        // renders child of sectionMain (see sectionMain.js & sectionMain.css)
        <Aside></Aside>
        // renders child of aside (see aside.css & aside.js)
        <Footer></Footer>
        //renders child of footer (see footer.css & footer.js)
      </div>
      //ends parent div iwth class of App
    );
  }
}

export default App;
// makes the app exportable/importable and default refers to:
/*Default exports
Along with named exports, the system also lets a module have a default export. This is useful when you are working with a large library such as jQuery, Underscore, Backbone and others, and just want to import the entire library. A module can define its default export (it can only ever have one default export) like so:
(example):
export default function(x) {
  return x + x;
}
And that can be imported:

import double from 'mymodule';
double(2); // 4
*/
