import React, { Component } from 'react';
import About from './ContentHomePage/About/About';
import Galery from './ContentHomePage/Galery';
import Contact from './ContentHomePage/Contact/Contact';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refList: props.refList,
    };
  }
  render() {
    return (
      <>
        {<About />}
        {<Galery />}
        {<Contact />}
      </>
    );
  }
}

export default HomePage;
