
import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
