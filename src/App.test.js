
//import react & reactDOM npms into this file
import React from 'react';
import ReactDOM from 'react-dom';

//import app js file into this one 
import App from './App';

//looks like this is jasmine testing framework to make sure that everything works I guess 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
