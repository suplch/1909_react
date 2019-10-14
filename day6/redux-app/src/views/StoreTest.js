import React, {Component} from 'react';
import Counter from '../components/Counter';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

export class StoreTest extends Component {

    render() {
        return (
            <div style={{border: 'solid 5px red'}}>
                全局状态管理
                <Counter/>
                <ProductList/>
                <Cart/>
            </div>
        )
    }
}
