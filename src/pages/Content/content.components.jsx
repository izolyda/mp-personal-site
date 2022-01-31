import React from 'react';
import './content.styles.scss';

import {connect} from 'react-redux';
import Navbar from "../../components/navbar/navbar.component";
import {Route, Switch} from "react-router-dom";
import HomePage from "../home-page/home-page.component";
import AboutPage from "../about-page/about-page.component";
import ContactsPage from "../contacts-page/contacts-page.component";
import ImgeneratorPage from "../imgenerator-page/imgenerator-page.component";
import SocialPage from "../social-page/social-page.component";


const Content = ({theme}) => (
    <div className={`${theme ? "theme-lite" : "theme-dark"}`}>
        <Navbar/>

        <Switch>
            <Route exact={true} path='/' component={HomePage}/>
            <Route exact={true} path='/about' component={AboutPage}/>
            <Route exact={true} path='/contacts' component={ContactsPage}/>
            <Route exact={true} path='/imgenerator' component={ImgeneratorPage}/>
            <Route exact={true} path='/social' component={SocialPage}/>
        </Switch>

    </div>

);


const mapStateToProps = state => ({
    theme: state.theme.lite,
});

export default connect(mapStateToProps)(Content);