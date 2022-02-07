import React from 'react';
import './dashboard-page.styles.scss';

import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";

import Builder from '../../components/builder/builder.component.jsx';


function DashboardPage({authed}) {

    const history = useHistory();

    if (authed)
        return (
            <div>
                <Builder/>
            </div>
        )
    return (
      <Redirect to={'/login'}/>

    )


}


export default DashboardPage;