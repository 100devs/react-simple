import React from 'react';  //import react
import ReactDOM from 'react-dom'; //import ReactDOM
import './index.css'; //import index css styles
import App from './App'; //import App component
import registerServiceWorker from './registerServiceWorker'; //for measuring performance


ReactDOM.render(<App />, document.getElementById('root')); //render our App component which will be put intop the element of the DOM which has the id of "root"
registerServiceWorker(); //evil bob
