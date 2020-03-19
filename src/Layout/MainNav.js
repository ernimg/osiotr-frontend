import React from 'react';

const Nav = props => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li
          className='main-nav__item'
          onClick={() => {
            props.click(props.refList.refA);
          }}
        >
          O nas
        </li>
        <li
          className='main-nav__item'
          onClick={() => {
            props.click(props.refList.refB);
          }}
        >
          Galeria zdjęć
        </li>
        <li
          className='main-nav__item'
          onClick={() => {
            props.click(props.refList.refC);
          }}
        >
          Kontakt
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
