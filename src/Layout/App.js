import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
/*Layout elements*/
import Nav from './Nav/MainNav';
import Header from './HeaderContent';
import SwitchPage from './Router';
import Footer from './Footer';
/*Components elements*/

export var aboutRef = React.createRef();
export var galeryRef = React.createRef();
export var contactRef = React.createRef();

class App extends Component {
  state = {};

  handleScrollTo = elRef => {
    const el = elRef.current ? elRef.current : elRef;
    console.log(el);
    setTimeout(() => {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 500);
  };

  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <header className='header'>{<Header />}</header>
          <Nav click={this.handleScrollTo} />
          <main>{<SwitchPage />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
