import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const Router = props => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={HomePage} />
    </BrowserRouter>
  );
};

export default Router;
