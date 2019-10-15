import React, {Component} from 'react';
import {BrowserRouter, HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';


export class Home extends Component {

    render() {
        return (
            <div style={{border: 'solid 5px green'}}>
                京西商城
                <Link to={'/products'}>产品列表</Link>
            </div>
        )
    }
}
