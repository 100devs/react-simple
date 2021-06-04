import React, { Component } from 'react'; //import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import './Aside.css'; //importing the stylesheet we will be using to style this component

class Aside extends Component { //uses the Component object as a base to create an aside class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
  render() { //it will examine props, and useState to create and display (render) the provided code
    return ( //return the code that defines the Aside component so the render function can interpret and process the need elements, props, state, etc
        <aside className="Aside"> {/*create/insert an aside element with a class of Aside */}
        </aside>

    );
  }
}

export default Aside; //export this component as the default component of this file, no need to destructure when you want to use this component
