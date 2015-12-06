import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import Routes from './config/Routes';
import ApplicationStore from './stores/ApplicationStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import '../app/assets/scss/style.scss';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import 'materialize-css';

let history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', (event) => {
  //let data = window.__appData;
  render(
    <Router history={history}>{Routes}</Router>,
    document.querySelector('#app')
  );
});
