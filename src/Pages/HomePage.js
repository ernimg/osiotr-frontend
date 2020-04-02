import React, { Component } from 'react';
import About from '../Layout/ContentMainSection/About';
import Galery from '../Layout/ContentMainSection/Galery';
import Contact from '../Layout/ContentMainSection/Contact';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refList: props.refList
    };
  }
  render() {
    return (
      <div>
        {<About />}
        {<Galery />}
        {<Contact />}
      </div>
    );
  }
}

export default HomePage;
