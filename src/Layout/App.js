import React, { Component } from 'react';
/*Layout elements*/
import Nav from './MainNav';
import Header from './HeaderContent';
import HomePage from './HomePage';
import Footer from './Footer';
/*Components elements*/

/*Style*/
class App extends Component {
  state = {
    loaded: false,
    refList: {
      refA: React.createRef(),
      refB: React.createRef(),
      refC: React.createRef()
    }
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
        <Nav refList={this.state.refList} click={this.handleScrollTo} />
        <main>
          <HomePage refList={this.state.refList} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
