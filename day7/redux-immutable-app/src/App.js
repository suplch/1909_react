import React from 'react';
// 导入 路由相关组件
import {BrowserRouter, HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import {StoreTest} from './views/StoreTest';
import {Login} from './views/Login';
import {Home} from './views/Home';
import { Products } from './views/Products';
import { ProductDetail } from './views/ProductDetail'
import { About} from './views/About'

import { MyRoute } from './components/MyRoute'

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter> {/* 以Hash 锚点 的方式 实现路由跳转 */}
                {/* Link 组件用来表示一个 连接地址  */}
                <Link to={'/home'}>首页</Link>
                <Link to={'/storetest'}>状态管理测试</Link>&nbsp;
                <Link to={'/login'}>去登录</Link>&nbsp;
                <Link to={'/about'}>关于</Link>&nbsp;
                <Link to={'/myabout'}>我的关于</Link>&nbsp;
                {/* Switch 组件用来 选择一个 Route 路由 */}
                <Switch>
                    {/* 重定向组件 当用户访问 / 根目录的时候 自动跳转 到 /home */}
                    <Redirect from={'/'} to={'/home'} exact />
                    {/* 当用户 访问 /home 的时候渲染 Home 组件 */}
                    <Route path={'/home'} exact component={Home} />
                    <Route path={'/storetest'} exact component={StoreTest} />
                    <Route path={'/login'} exact component={Login} />
                    <Route path={'/products'} exact component={Products} />
                    {/* 定义 路由 携带 id 参数 */}
                    <Route path={'/product_detail/:id'} exact component={ProductDetail} />
                    <Route path={'/about'} component={About} />
                </Switch>

            </HashRouter>

        );
    }
}


export default App;
