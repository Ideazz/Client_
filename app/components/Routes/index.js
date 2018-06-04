import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../List/index';
import Form from '../Form/index';
import Test from '../Test/index';
import Error404 from '../Error404/index';
import Home from '../Home/index';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={List} />
      <Route path="/form" component={Form} />
      <Route path="/test" component={Test} />
      <Route path="/*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
