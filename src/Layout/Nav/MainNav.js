import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { aboutRef, galeryRef, contactRef } from '../App';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Nav/Css/mainNav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: props.click,
      listLinks: []
    };
  }

  componentDidMount() {
    const listLinks = [
      {
        id: 1,
        name: <i className='fa fa-home' aria-hidden='true'></i>,
        path: '/'
      },
      {
        id: 2,
        name: 'O nas',
        ref: aboutRef,
        path: '/'
      },
      {
        id: 3,
        name: 'Galeria zdjęć',
        ref: galeryRef,
        path: '/'
      },
      {
        id: 4,
        name: 'Kontakt',
        ref: contactRef,
        path: '/'
      },
      {
        id: 5,
        name: 'Katalog',
        path: '/Catalog'
      },

      {
        id: 6,
        name: <i className='fa fa-shopping-basket' aria-hidden='true'></i>,
        path: `/ShopBag`
      }
    ];
    this.setState({
      listLinks
    });
  }
  render() {
    const links = this.state.listLinks.map(link => (
      <>
        {link.ref ? (
          <li
            className='main-nav__item'
            onClick={() => {
              this.state.click(link.ref);
            }}
          >
            <NavLink
              className='main-nav__link'
              to={link.path}
              exact={link.exact ? link.exact : false}
            >
              {link.name}
            </NavLink>
          </li>
        ) : (
          <li className='main-nav__item'>
            <NavLink
              className='main-nav__link'
              to={link.path}
              exact={link.exact ? true : false}
            >
              {link.name}
            </NavLink>
          </li>
        )}
      </>
    ));
    return (
      <>
        <nav className='burger-nav'></nav>
        <nav className='main-nav'>
          <ul className='main-nav__list'>{links}</ul>
        </nav>
      </>
    );
  }
}
export default Nav;
