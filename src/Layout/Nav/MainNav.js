import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Nav/Css/mainNav.css';
export var refA = React.createRef();
export var refB = React.createRef();
export var refC = React.createRef();

const Nav = props => {
  const listLinks = [
    {
      id: 1,
      name: <i className='fa fa-home' aria-hidden='true'></i>,
      path: '/',
      exact: true
    },
    {
      id: 2,
      name: 'O nas',
      ref: refA,
      path: '/'
    },
    {
      id: 3,
      name: 'Galeria zdjęć',
      ref: refB,
      path: '/'
    },
    {
      id: 4,
      name: 'Katalog',
      path: '/katalog'
    },
    {
      id: 5,
      name: 'Kontakt',
      ref: refC,
      path: '/'
    },
    {
      id: 6,
      name: <i className='fa fa-shopping-basket' aria-hidden='true'></i>,
      path: `/koszyk`
    }
  ];
  debugger;
  const links = listLinks.map(link => (
    <>
      {link.ref ? (
        <li
          className='main-nav__item'
          onClick={() => {
            props.click(link.ref);
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
            exact={link.exact ? link.exact : false}
          >
            {link.name}
          </NavLink>
        </li>
      )}
    </>
  ));
  return (
    <Router>
      <nav className='main-nav'>
        <ul className='main-nav__list'>{links}</ul>
      </nav>
    </Router>
  );
};
export default Nav;
