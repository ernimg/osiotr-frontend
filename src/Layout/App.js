import React, { Component } from 'react';
import Nav from '../Components/Navigation/MainNav';
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
      <div>
        <header className='header'>
          <img src='' alt='logo' />
          <h1 className='header__slogan'>Osiotr Slogan</h1>
        </header>
        <Nav refList={this.state.refList} click={this.handleScrollTo} />
        <main>
          <section ref={this.state.refList.refA}>
            <h2>O nas</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>

          <section ref={this.state.refList.refB}>
            <h2>Galeria zdjęć</h2>
          </section>
          <section ref={this.state.refList.refC}>
            <h2>Kontakt</h2>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
