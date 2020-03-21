import React, { Component } from 'react';
import About from '../Components/About';
import Galery from '../Components/Galery';
import Contact from '../Components/Contact  ';
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
