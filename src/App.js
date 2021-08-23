import React from 'react';
import logo from './logo.svg';
import './App.scss';

import styled from 'styled-components';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/home-page/home-page.component.jsx';
import AboutPage from './pages/about-page/about-page.component.jsx';
import ContactsPage from './pages/contacts-page/contacts-page.component.jsx';
import TestimonialsPage from './pages/testimonials-page/testimonials-page.component.jsx';
import HobbiesPage from './pages/hobbies-page/hobbies-page.component.jsx';


function App() {
  return (
    <div>
        
        <Navbar/>
        
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route exact={true} path='/about' component={AboutPage} />
            <Route exact={true} path='/contacts' component={ContactsPage} />
            <Route exact={true} path='/testimonials' component={TestimonialsPage} />
            <Route exact={true} path='/hobbies' component={HobbiesPage} />
          </Switch>

    </div>
  );
}

export default App;
