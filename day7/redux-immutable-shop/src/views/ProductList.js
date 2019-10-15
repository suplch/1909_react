import React, {Component} from 'react';
import { connect } from 'react-redux';

import {BrowserRouter, HashRouter, Switch, Route, Link, Redirect} from 'react-router-dom';


class ProductList extends Component {

    render() {

        const { products, addToCart } = this.props;

        console.log(products);

        const lis  = products.map((product) => {
            return (
                <li key={product.get('id')}>
                    {product.get('name')}, 价格: {product.get('price')}
                    <button onClick={ () => { addToCart(product) } }>添加购物车</button>
                </li>
            )
        });

        return (
            <div style={{border: 'solid 5px red'}}>
                产品列表
                <ul>
                    {lis}
                </ul>

                <Link to={'/cart'}>查看购物车</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

        products: state.get('products')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart(product) {
            console.log(product);
            dispatch({
                type: 'ADD_PRODUCT_CART',
                payload: {
                    product
                }
            });
        }
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps);

const WrapperProductList = wrapper(ProductList);

export default WrapperProductList;
