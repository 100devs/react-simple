import React, { Component } from 'react'; //import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import './Footer.css'; //importing the stylesheet we will be using to style this component

class Footer extends Component { //uses the Component object as a base to create a footer class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
  render() { //it will examine props, and useState to create and display (render) the provided code
    return ( //return the code that defines the Footer component so the render function can interpret and process the need elements, props, state, etc
        <footer className="Footer"> {/*create/insert a footer element with a class of Footer */}
        </footer>

    );
  }
}

export default Footer; //export this component as the default component of this file, no need to destructure when you want to use this component
