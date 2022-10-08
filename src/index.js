//import the react library in order to use its functionality inside this file
import React from 'react';
//import the react-dom package in order to use its functionality inside this file
import ReactDOM from 'react-dom';
//importing the stylesheet we will be using to style this component
import './index.css';
//import the app file which contain the code for creating that component
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//use the reat-dom packages render object to create/compile the app file and insert it in the dom, inside of the element with the id of root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();