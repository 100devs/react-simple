import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//renders the browser on this main file via react and gets the main root ID and also the registerServiceWorker runs as a function 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
