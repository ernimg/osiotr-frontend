import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export var refA = React.createRef();
export var refB = React.createRef();
export var refC = React.createRef();

const Nav = props => {
  const listLinks = [
    { id: 1, name: 'home', path: '/', exact: true },
    {
      id: 2,
      name: 'O mas',
      ref: refA,
      scrolHandler: `${props.click}`
    },
    {
      id: 3,
      name: 'Galeria zdjęć',
      ref: refB,
      scrolHandler: `${props.click}`
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
      scrolHandler: `${props.click}`
    },
    { id: 6, name: 'koszyk', path: `/koszyk` }
  ];
  debugger;
  const links = listLinks.map(link => (
    <ul className='main-nav__list' key={link.id}>
      {link.path ? (
        <li className='main-nav__item'>
          <NavLink
            className='main-nav__route-link'
            to={link.path}
            exact={link.exact ? link.exact : false}
          >
            {link.name}
          </NavLink>
        </li>
      ) : (
        <li
          className='main-nav__item'
          onClick={() => {
            props.click(link.ref);
          }}
        >
          {link.name}
        </li>
      )}
    </ul>
  ));
  return (
    <Router>
      <nav className='main-nav'>{links}</nav>
    </Router>
  );
};
export default Nav;
