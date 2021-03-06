import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../List';
import Form from '../Form';
import Test from '../Test';
import Error404 from '../Error404';
import Home from '../Home';
import LoginOne from '../Login_One';
import LoginTwo from '../Login_Two';
import Ideas from '../Ideas';
import Profile from '../Profile';
import '../../../assets/styles/components/App.scss';

const Main = () => (
  <main className="main">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={List} />
      <Route path="/form" component={Form} />
      <Route path="/test" component={Test} />
      <Route path="/login_one" component={LoginOne} />
      <Route path="/login_two" component={LoginTwo} />
      <Route path="/ideas" component={Ideas} />
      <Route path="/profile" component={Profile} />
      <Route path="/*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
