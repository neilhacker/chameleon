import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';


ReactDOM.render(
  <Router>
    <Route path="/" exact component={App}/>
  </Router>,
 
  document.getElementById('root')
);

serviceWorker.unregister();
