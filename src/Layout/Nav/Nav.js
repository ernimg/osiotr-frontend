import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { homeRef, aboutRef, galeryRef, contactRef } from '../App';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Nav/Css/mainNav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleClick: props.click,
      listLinks: [
        {
          id: 1,
          name: 'Osiotr.com',
          path: '/',
          ref: homeRef,
          exact: true,
          icon: (
            <i
              className='main-nav__link-icon fa fa-home'
              aria-hidden='true'
            ></i>
          )
        },
        {
          id: 2,
          name: 'O nas',
          ref: aboutRef,
          path: '/',
          icon: (
            <i
              className='main-nav__link-icon fa fa-users'
              aria-hidden='true'
            ></i>
          )
        },
        {
          id: 3,
          name: 'Galeria zdjęć',
          ref: galeryRef,
          path: '/',
          icon: (
            <i
              className='main-nav__link-icon fa fa-picture-o'
              aria-hidden='true'
            ></i>
          )
        },
        {
          id: 4,
          name: 'Kontakt',
          ref: contactRef,
          path: '/',
          exact: true,
          icon: (
            <i
              className='main-nav__link-icon fa fa-comments-o'
              aria-hidden='true'
            ></i>
          )
        },
        {
          id: 5,
          name: 'Katalog',
          path: '/Catalog',
          icon: (
            <i
              className='main-nav__link-icon fa fa-folder-open-o'
              aria-hidden='true'
            ></i>
          )
        },

        {
          id: 6,
          name: 'Zamówienie',
          path: `/ShopBag`,
          icon: (
            <i
              className='main-nav__link-icon fa fa-shopping-cart'
              aria-hidden='true'
            ></i>
          )
        }
      ],
      burgerActive: false
    };
  }

  handlerBurger = () => {
    this.setState({
      burgerActive: !this.state.burgerActive
    });
  };
  render() {
    const linksMainNav = this.state.listLinks.map((link, id) => (
      <li key={id} className='main-nav__item'>
        {link.ref ? (
          <NavLink
            onClick={() => {
              this.state.handleClick(link.ref);
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
        <div className='burger-nav'>
          <div className='burger-icon'>
            {!this.state.burgerActive ? (
              <span
                className='burger-icon__enable'
                onClick={this.handlerBurger}
              >
                <i className='fa fa-bars' aria-hidden='true'></i>
              </span>
            ) : (
              <span
                onClick={this.handlerBurger}
                className='burger-icon__disable'
              >
                <i className='fa fa-times' aria-hidden='true'></i>
              </span>
            )}
          </div>
          <ul className='burger-nav__list'></ul>
        </div>
        <nav
          className={
            this.state.burgerActive ? 'main-nav nav--burger' : 'main-nav'
          }
        >
          <ul className='main-nav__list'>{linksMainNav}</ul>
        </nav>
      </>
    );
  }
}

export default Nav;
