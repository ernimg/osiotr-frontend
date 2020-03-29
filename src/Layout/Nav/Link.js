import React from 'react';
export const listLinks = [
  {
    id: 1,
    name: 'Osiotr.com',
    path: '/',
    ref: '#ref0',
    exact: true,
    icon: <i className='burger__link-icon fa fa-home' aria-hidden='true'></i>
  },
  {
    id: 2,
    name: 'O nas',
    ref: '#ref1',
    path: '/',
    icon: <i className='burger__link-icon fa fa-users' aria-hidden='true'></i>
  },
  {
    id: 3,
    name: 'Galeria zdjęć',
    ref: '#ref2',
    path: '/',
    icon: (
      <i className='burger__link-icon fa fa-picture-o' aria-hidden='true'></i>
    )
  },
  {
    id: 4,
    name: 'Kontakt',
    ref: '#ref3',
    path: '/',
    exact: true,
    icon: (
      <i className='burger__link-icon fa fa-comments-o' aria-hidden='true'></i>
    )
  },
  {
    id: 5,
    name: 'Katalog',
    path: '/Catalog',
    icon: (
      <i
        className='burger__link-icon fa fa-folder-open-o'
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
        className='burger__link-icon fa fa-shopping-cart'
        aria-hidden='true'
      ></i>
    )
  }
];
