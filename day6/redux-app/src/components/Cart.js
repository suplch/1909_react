import React from 'react';
import { connect } from 'react-redux';
class Cart extends React.Component {
    render() {
        console.log(this.props);
        let total = 0;
        const lis = this.props.items.map((item) => {
            total += item.price * item.count;
            return (
                <li key={item.id}>
                    {item.name}, 价格: {item.price},
                    数量
                    <button onClick={ () => { this.props.addCountOfItem(-1, item.id) } }>-</button>
                    {item.count}
                    <button onClick={ () => {this.props.addCountOfItem(1, item.id) } }>+</button>
                </li>
            )
        });
        return (
            <div style={{border:'solid 5px orange'}}>
                购物车 <button onClick={() => {this.props.clearCart()}}>清空</button>
                <ul>
                    {lis}
                </ul>
                合计: {total}
            </div>
        )
    }
}
// 映射 state 到组件的props
function mapStateToProps (state) {
    return {
        items: state.cart.items
    }
}
// 映射 dispatch 到 组件 props
function mapDispatchToProps (dispatch) {
    return {
        addCountOfItem(n, id) { // 修改购物车 商品数量
            dispatch({type: 'ADD_COUNT_ITEM', num: n, id: id})
        },
        clearCart() { // 清空购物车
            dispatch({type: 'CLEAR_CART'})
        }
    }
}
//   高阶函数包装组件, 导出被包装的组件
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
