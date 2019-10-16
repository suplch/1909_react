import React from 'react';

import {connect} from '../store'
import Shop from "../store/shop";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.pnameRef = React.createRef(); //
        this.priceRef = React.createRef(); //
    }

    addProduct() {
        let name = this.pnameRef.current.value;
        let price = this.priceRef.current.value;

        const {Shop} = this.props.counterState;
        Shop.addProduct(name, price);
        this.pnameRef.current.value = '';
        this.priceRef.current.value = '';
    }

    render() {
        const {Shop} = this.props.counterState;
        return (
            <div style={{border: 'solid 5px red'}}>
                产品列表
                <ul>
                    {
                        Shop.products.map((product) => {
                            return (
                                <li key={product.id}>
                                    {product.name}, 价格: {product.price}
                                    <button onClick={() => { Shop.addProductToCart(product) }}>添加购物车</button>
                                </li>
                            )
                        })
                    }
                </ul>
                产品名称: <input ref={this.pnameRef} /><br/>
                单价: <input ref={this.priceRef} /><br/>
                <button onClick={ () => { this.addProduct() } }>添加</button>
            </div>
        );
    }
}


export default connect(ProductList);
