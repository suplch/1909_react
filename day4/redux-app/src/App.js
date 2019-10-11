import React from 'react';

import Counter from './components/Counter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{border: 'solid 5px red'}}>
                全局状态管理
                <Counter/>
                <ProductList/>
                <Cart/>
            </div>
        );
    }
}
export default App;
