import React from 'react';
import logo from '../Assets/images/logo_male.png';
const HeaderContent = () => {
  return (
    <div className='header__items'>
      <img className='header__logo' src={logo} alt='logo' />
      <h1 className='header__title'>Osiotr Slogan</h1>
      <p className='header__description'>lorem... lorem... </p>
    </div>
  );
};

export default HeaderContent;
