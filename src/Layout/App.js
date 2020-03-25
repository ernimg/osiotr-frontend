import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
/*Layout elements*/
import Nav from './Nav/Nav';
import Header from './HeaderContent';
import SwitchPage from './Router';
import Footer from './Footer';
/*Nav Ref*/
export var homeRef = React.createRef();
export var aboutRef = React.createRef();
export var galeryRef = React.createRef();
export var contactRef = React.createRef();

class App extends Component {
  state = {};

  handleScrollTo = elRef => {
    setTimeout(() => {
      const el = elRef.current ? elRef.current : elRef;
      console.log(el);

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
          <Nav click={this.handleScrollTo} />
          <header className='header' ref={homeRef}>
            {<Header />}
          </header>
          <main>{<SwitchPage />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
