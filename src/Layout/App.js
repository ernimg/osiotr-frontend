import React, { Component } from 'react';
/*Layout elements*/
import Nav from './Nav/MainNav';
import Header from './HeaderContent';
import SwitchPage from './Router';
import Footer from './Footer';
/*Components elements*/

/*Style*/
class App extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }
  handleScrollTo = elRef => {
    const el = elRef.current ? elRef.current : elRef;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          <Header />
        </header>
        <Nav click={this.handleScrollTo} />
        <main>
          <SwitchPage />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
