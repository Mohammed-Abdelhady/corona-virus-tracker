import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Confirmed from './Confirmed.jsx';
import Deaths from './Deaths.jsx';
import Recovered from './Recovered.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/deaths' exact component={Deaths} />
      <Route path='/confirmed' exact component={Confirmed} />
      <Route path='/recovered' exact component={Recovered} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
