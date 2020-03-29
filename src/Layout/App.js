import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
/*Layout elements*/
import Nav from './Nav/MainNav';
import Header from './HeaderContent';
import SwitchPage from './Router';
import Footer from './Footer';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Nav />
          <header className='header'>{<Header />}</header>
          <main>{<SwitchPage />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
