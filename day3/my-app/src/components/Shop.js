import React from 'react';

import { ProductList } from './ProductList';
import { Cart } from './Cart';

export class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: '111', name: '鼠标', price: 100},
                {id: '222', name: '键盘', price: 200},
            ],
            cart: { items: [] }
        }
    }
    addToCart(product) {
        let exist = false;
        const items = this.state.cart.items.map((item) => {
            if (item.id === product.id) {
                exist = true;
                return {...item, count: item.count + 1};
            } else {
                return item;
            }
        });
        if (!exist) {
            items.push({ ...product, count: 1 });
        }
        this.setState({ cart: {items} } )
    }
    addCartItemCount(pid, n) {
        const items = this.state.cart.items.map((item) => {
            if (item.id === pid) {
                return {...item, count: item.count + n}
            } else {
                return item;
            }
        });
        this.setState({ cart: {items} } )
    }
    render() {
        const {products, cart} = this.state;
        return (
            <div style={ {border: 'solid 5px red', margin: '5px'} }>
                商店
                <ProductList products={products}
                             onAddToCart={ (event) => { this.addToCart(event.data.product) } } />
                <Cart cart={cart}
                      onAddCount={(event)=>{ this.addCartItemCount(event.data.pid, event.data.n) } } />
            </div>
        );
    }
}
