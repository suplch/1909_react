import React, {Component} from 'react';
import {Button, Form, Icon, Input} from "antd";
import axios from "axios";
import {connect} from "react-redux";

class Register extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        const {form, register, history} = this.props;
        form.validateFields((err, values) => {
            if (!err) {

                if (values.password !== values['confirm-password']) {
                    alert('密码不一致');
                    return;
                }

                register(values).then((ret) => {
                    if (ret) {
                        alert(ret.msg)
                    }
                });
            } else {
                console.log(err)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {
                            getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}]
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
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('confirm-password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="确认密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>
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
        register(user) {
            return dispatch((dispatch, getState) => {

                return axios.post('/user/register', {
                    username: user.username,
                    password: user.password
                }).then((result) => {
                    dispatch({
                        type: 'REGISTER',
                        payload: result.data
                    });
                    return {
                        ok: result.data.status === 10000,
                        msg: result.data.msg
                    }
                    //return result.data;
                }).catch(console.error)
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({name: 'normal_login'})(Register))
