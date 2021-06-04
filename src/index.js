//imports the react module
import React from "react";
//imports the react-dom module
import ReactDOM from "react-dom";
//imports the style sheet
import "./index.css";
//imports the app setup from the app file
import App from "./App";
//imports the registerServiceWorker function from the file
import registerServiceWorker from "./registerServiceWorker";

//reactDom is called to render what is passed in to the DOM, in this case we are rendering the app component inside fo the element with the id of root
ReactDOM.render(<App />, document.getElementById("root"));
//starts the registerServiceWorker function
registerServiceWorker();
