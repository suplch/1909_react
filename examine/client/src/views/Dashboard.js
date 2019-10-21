import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import GoodsSearch from '../components/GoodsSearch';
import {GoodsPublish} from '../components/GoodsPublish';


import Cookie from 'js-cookie';

export class Dashboard extends Component {
    state = {
        collapsed: false,
        menus: [
            {id: 'sjgl', label: '数据概览'},
            {
                id: 'spgl',
                label: '商品管理',
                menus: [
                    {id: 'spcx', label: '商品查询', comp: GoodsSearch},
                    {id: 'fbsp', label: '发布商品', comp: GoodsPublish},
                ]
            },
            {id: 'ddgl', label: '订单管理'},
            {id: 'team', label: 'Team'},
            {id: 'file', label: 'File'},
        ],
        selectedMenuItem: undefined
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!Cookie.get('token')) {
            const {history} = this.props;
            history.replace('/login');
        }
    }

    componentWillUnmount() {

    }

    selectItem(menuItem) {
        this.setState({
            selectedMenuItem: menuItem
        })
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {

        let comp;

        const {selectedMenuItem} = this.state;

        if (selectedMenuItem) {
            const Comp = selectedMenuItem.comp;
            comp = <Comp />;
        }


        const menulist = this.state.menus.map((menuItem) => {

                var menu_item;
                if (menuItem.menus) {
                    menu_item = (
                        <SubMenu
                            key={menuItem.id}

                            title={<span>
                              <Icon type="user" />
                              <span>{menuItem.label}</span>
                            </span>}>

                            {
                                menuItem.menus.map((subItem) => {
                                    return (
                                        <Menu.Item key={subItem.id} onClick={() => {this.selectItem(subItem)}}>

                                            <span>{subItem.label}</span>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    )
                } else {
                    menu_item = (
                        <Menu.Item key={menuItem.id} onClick={() => {this.selectItem(menuItem)}}>
                            <span>{menuItem.label}</span>
                        </Menu.Item>
                    )
                }

                return menu_item;
        });

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" >
                        Logo
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {menulist}
                    </Menu>
                </Sider>




                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            工作区  {this.state.selectedMenuItem && this.state.selectedMenuItem.label}
                            {comp}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
