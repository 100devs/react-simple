import React from 'react'; //import react
import ReactDOM from 'react-dom'; //importReactDOM
import './index.css'; //import css
import App from './App'; //import App
import registerServiceWorker from './registerServiceWorker'; //import registerServiceWorker for measuring performance


ReactDOM.render(<App />, document.getElementById('root')); //render App component in DOM where div with 'root' class
registerServiceWorker(); //invoke performance measure
