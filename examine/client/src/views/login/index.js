import React, {Component} from 'react';
import { Button } from 'antd';

import Login from './Login';
import Register from './Register';

export default class IndexLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: 'login'
        }
    }

    switch() {
        this.setState({
            show: this.state.show === 'login' ? 'register' : 'login'
        });
    }

    render() {
        let comp;
        if (this.state.show === 'login') {
            comp = <Login {...this.props}/>
        } else if (this.state.show === 'register') {
            comp = <Register {...this.props} />
        }

        return (
            <div>
                {comp}
                <Button onClick={() => {this.switch()}} type="link">
                    { this.state.show === 'login' ? '去注册': '登录' }
                </Button>
            </div>
        )
    }
}


