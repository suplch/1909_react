import React, {Component} from 'react';
import {connect} from "react-redux";

class Cart extends Component {

    render() {
        const {items, changeCount} = this.props;
        let total = 0;
        const lis = items.map((item) => {
            total += item.get('price') * item.get('count')

            let decButton = <button disabled={item.get('count') <= 1} onClick={() => {changeCount(item.get('id'), -1)}}>-</button>

            return (
                <li key={item.get('id')}>
                    {item.get('name')},
                    价格: {item.get('price')},
                    {decButton}
                    数量: {item.get('count')}
                    <button onClick={() => {changeCount(item.get('id'), 1)}}>+</button>
                </li>
            )
        });
        return (
            <div style={{border: 'solid 5px green'}}>
                购物车
                <ul>
                    {lis}
                </ul>
                合计: {total}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.getIn(['cart', 'items'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCount(pid, n) {
            dispatch({
                type: 'CHANGE_CART_COUNT',
                payload: {
                    pid, n
                }
            })
        }
    }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps);

const WrapperCart = wrapper(Cart);

export default WrapperCart;
