import React from 'react';
import logo from './logo.svg';
import './App.scss';

import styled from 'styled-components';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/home/homepage.component.jsx';


function App() {
  return (
    <div>
        <Navbar/>
        
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
          </Switch>

    </div>
  );
}

export default App;
