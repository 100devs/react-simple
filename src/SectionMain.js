import React, { Component } from 'react'; //import the react library to use in this file and pull out the Component object so we can use it directly (this helps make the code read cleaner)
import './SectionMain.css'; //importing the stylesheet we will be using to style this component

class SectionMain extends Component { //uses the Component object as a base to create a SectionMain class, this will allow us access to props, plus permit inherentance of defined functions and other functionality
  render() { //it will examine props, and useState to create and display (render) the provided code
    return ( //return the code that defines the SectionMain component so the render function can interpret and process the need elements, props, state, etc
        <section className="SectionMain"> {/*create/insert a section element with a class of SectionMain */}
        </section>

    );
  }
}

export default SectionMain; //export this component as the default component of this file, no need to destructure when you want to use this component
