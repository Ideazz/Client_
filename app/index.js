/**
 * Application entry point
 */

// Load application styles
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// import store from './store/index';
// import App from './components/App/index.js';
import App from './components/App/index';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
