import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../List/index';
import Form from '../Form/index';
import Test from '../Test/index';
import Error404 from '../Error404/index';
import Home from '../Home/index';
import LoginOne from '../Login_One/index';
import LoginTwo from '../Login_Two/index';
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
      <Route path="/*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
