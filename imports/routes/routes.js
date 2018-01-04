import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, Link as ReactLink, Switch} from 'react-router-dom';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import history from '../history';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) =>{
    const pathName = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isAuthenticatedPage = authenticatedPages.includes(pathName);
  
    if (isUnauthenticatedPage && isAuthenticated) {
      history.replace('/dashboard');
    } else if (authenticatedPages && !isAuthenticated) {
      history.replace('/');
    }
}
export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);