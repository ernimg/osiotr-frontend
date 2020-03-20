import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Catalog from '../Pages/Catalog';

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
