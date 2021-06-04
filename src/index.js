import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// tells the DOM what to render - App.js renders to the root div of index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
