import React from 'react';
import {connect} from "../store";

class Cart extends React.Component {

    decItemCount(item) {
        if (item.count > 1) {
            item.count--;
        }
    }

    render() {
        const {Shop} = this.props.counterState;
        return (
            <div style={{border: 'solid 5px green'}}>
                购物车
                <ul>
                    {
                        Shop.cart.items.map((item) => {
                            return(
                                <li key={item.id}>
                                    {item.name}, 价格: {item.price},
                                    数量
                                    <button onClick={() => {this.decItemCount(item)}}>-</button>
                                    {item.count}
                                    <button onClick={() => {item.count++}}>+</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(Cart);
