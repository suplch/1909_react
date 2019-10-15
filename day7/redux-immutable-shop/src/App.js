import React from 'react';
// 导入 路由相关组件
import {BrowserRouter, HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import ProductList from './views/ProductList';
import Cart from './views/Cart';
import {Home} from './views/Home';

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter> {/* 以Hash 锚点 的方式 实现路由跳转 */}
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/products'} exact component={ProductList} />
                    <Route path={'/cart'}  exact component={Cart} />
                </Switch>
            </HashRouter>

        );
    }
}


export default App;
