import React, {Component} from 'react';
import {BrowserRouter, HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import IndexLogin from './views/login';
import {Dashboard} from "./views/Dashboard";

export class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect from={'/'} exact to={'/login'}/>
                    <Route path={'/login'} exact component={IndexLogin} />
                    <Route path={'/dashboard'} exact component={Dashboard} />
                </Switch>
            </HashRouter>
        )
    }
}
