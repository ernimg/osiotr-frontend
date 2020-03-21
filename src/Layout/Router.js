import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Catalog from '../Pages/Catalog';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} pattern='/' />
      <Route exact path='/catalog' component={Catalog} />
    </Switch>
  );
};

export default Router;
