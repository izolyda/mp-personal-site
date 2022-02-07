import React from 'react';
import './content.styles.scss';

import {auth} from "../../firebase";

import {connect} from 'react-redux';
import Navbar from "../../components/navbar/navbar.component";
import {Route, Switch} from "react-router-dom";
import HomePage from "../home-page/home-page.component";
import ArticlesPage from "../articles-page/articles-page.component";
import ContactsPage from "../contacts-page/contacts-page.component";
import ImgeneratorPage from "../imgenerator-page/imgenerator-page.component";
import SocialPage from "../social-page/social-page.component";
import LoginPage from '../login-page/login-page.component.jsx';
import DashboardPage from '../dashboard/dashboard-page.component.jsx';
import LogoutComponent from '../../components/logout/logout.component.jsx';
import RegisterPage from "../register-page/register-page.component";
import ResetAccessPage from "../reset-access-page/reset-access-page.component";
import {useAuthState} from "react-firebase-hooks/auth";


function Content({theme}) {

    const [user] = useAuthState(auth);
    return (
        <div className={`${theme ? "theme-lite" : "theme-dark"}`}>
            <Navbar/>

            <Switch>
                <Route exact={true} path='/' component={HomePage}/>
                <Route exact={true} path='/articles' component={ArticlesPage}/>
                <Route exact={true} path='/contacts' component={ContactsPage}/>
                <Route exact={true} path='/imgenerator' component={ImgeneratorPage}/>
                <Route exact={true} path='/social' component={SocialPage}/>
                <Route exact={true} path='/login' component={LoginPage}/>
                <Route exact={true} path='/logout' component={LogoutComponent}/>
                <Route exact={true} path='/dashboard' render={(props) => (
                    <DashboardPage {...props} authed={(user)}/>
                )}/>
                <Route exact={true} path='/register' component={RegisterPage}/>
                <Route exact={true} path='/reset' component={ResetAccessPage}/>
            </Switch>

        </div>
    );

}


const mapStateToProps = state => ({
    theme: state.theme.lite,
});

export default connect(mapStateToProps)(Content);