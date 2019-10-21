import React, {Component} from 'react';
import axios from 'axios';

import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        const {form, login, history} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                login(values).then((r) => {
                    if (r) {
                        history.push('/dashboard');
                    }
                });
            } else {
                console.log(err)
            }
        });
    };

    render() {
        const {login_error} = this.props;
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Form onSubmit={this.handleSubmit} className={'login-form'}>
                    <Form.Item>

                        {
                            getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名!'}]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />,
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        {login_error}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login_error: state.getIn(['login', 'login_error']),
        login_ok: state.getIn(['login', 'login_ok'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login(user) {
            return dispatch((dispatch, getState) => {
                return axios.post('/user/login', user).then((result) => {
                    dispatch({
                        type: 'LOGIN',
                        payload: result.data
                    });
                    return (result.data.status === 10000);
                    //return result.data;
                }).catch(console.error)
            });
        }
    }
}
const WrapperLogin = Form.create({name: 'normal_login'})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(WrapperLogin);


