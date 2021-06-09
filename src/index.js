// file used to render app component
// import react so we can use methods in this file
import React from 'react'; 
// import react-dom, another package we installed, the virtual DOM, important so we can refresh individual elements
import ReactDOM from 'react-dom';
// import index.css from src file
import './index.css';
// import App.js from src file
import App from './App';
// import registerServiceWorker from src file, created during the "npx react-create-app _______" process
// for functionality during loss of connectivity
import registerServiceWorker from './registerServiceWorker';

// virtual DOM renders the App component into root (a div in public/index.html)
ReactDOM.render(<App />, document.getElementById('root'));
// calls registerServiceWorker function
registerServiceWorker();
