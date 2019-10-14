import React from 'react';
import {HashRouter, Link, Switch, Route} from 'react-router-dom';
import {Address} from "./Address";

export class About extends React.Component{
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        const { match } = this.props;
        return (
            <div style={{border: 'solid 5px red'}}>
                关于 本网站是一个购物电商网站
                <Link to={ match.path + '/address'}>联系地址</Link>
                {}
                <Route path={ match.path  + '/address'} exact component={Address} />
            </div>
        )
    }
}
