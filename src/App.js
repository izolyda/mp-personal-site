import React from 'react';
import logo from './logo.svg';
import './App.scss';

import styled from 'styled-components';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/home-page/home-page.component.jsx';
import AboutPage from './pages/about-page/about-page.component.jsx';
import ContactsPage from './pages/contacts-page/contacts-page.component.jsx';
import ImgeneratorPage from './pages/imgenerator-page/imgenerator-page.component.jsx';
import SocialPage from './pages/social-page/social-page.component.jsx';
import {store} from "./redux/store";

import Content from './pages/Content/content.components';

function App() {
    return (
        <div>

            <Content />

        </div>
    );
}


export default App;
