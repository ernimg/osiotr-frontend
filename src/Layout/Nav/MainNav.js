import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { listLinks } from './Link';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Nav/Css/mainNav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLinks: listLinks,
      burgerActive: false
    };
  }
  handlerBurger = e => {
    e.preventDefault();
    this.setState({
      burgerActive: !this.state.burgerActive
    });
  };
  closeMenu = () => {
    this.setState({
      burgerActive: false
    });
  };
  handleScrollTo = elRef => {
    setTimeout(() => {
      var url = elRef.replace('#', '');
      var el = document.getElementById(url);
      console.log(el);
      const position =
        el.getBoundingClientRect().top + document.documentElement.scrollTop;
      this.closeMenu();
      window.scroll({
        top: position,
        behavior: 'smooth'
      });
    }, 500);
  };

  render() {
    const burgerNav = this.state.listLinks.map(bLink => (
      <li key={bLink.id} className='burger__item'>
        {bLink.ref ? (
          <NavLink
            className='burger__link'
            to={bLink.path}
            exact={bLink.exact ? true : false}
            onClick={() => {
              this.handleScrollTo(bLink.ref);
            }}
          >
            {this.state.burgerActive ? bLink.icon : false}
            {bLink.name}
          </NavLink>
        ) : (
          <NavLink
            className='burger__link'
            to={bLink.path}
            exact={bLink.exact ? true : false}
          >
            {this.state.burgerActive ? bLink.icon : false}
            {bLink.name}
          </NavLink>
        )}
      </li>
    ));
    const linksMainNav = this.state.listLinks.map((link, id) => (
      <li key={id} className='main-nav__item'>
        {link.ref ? (
          <NavLink
            onClick={() => {
              this.handleScrollTo(link.ref);
            }}
            className='main-nav__link'
            to={link.path}
            exact={link.exact ? link.exact : false}
          >
            {this.state.burgerActive ? link.icon : false}
            {link.name}
          </NavLink>
        ) : (
          <NavLink
            className='main-nav__link'
            to={link.path}
            exact={link.exact ? true : false}
          >
            {this.state.burgerActive ? link.icon : false}
            {link.name}
          </NavLink>
        )}
      </li>
    ));
    return (
      <>
        <div className='burger-bar'>
          <a className='burger-bar__item' onClick={this.handlerBurger} href='/'>
            {!this.state.burgerActive ? (
              <i className='fa fa-bars burger-bar__ico' aria-hidden='true'></i>
            ) : (
              <i
                className='fa fa-times burger-bar__ico '
                aria-hidden='true'
              ></i>
            )}
          </a>
        </div>
        <nav
          className={
            !this.state.burgerActive ? 'burger' : 'burger burger--active'
          }
        >
          <ul className='burger__list'>{burgerNav}</ul>
        </nav>
        <nav className='main-nav'>
          <ul className='main-nav__list'>{linksMainNav}</ul>
        </nav>
      </>
    );
  }
}

export default Nav;
