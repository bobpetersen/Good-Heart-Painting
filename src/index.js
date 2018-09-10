import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './redux/reducers';
import app from './app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);