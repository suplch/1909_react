import React from 'react';

class Cart extends React.Component {
    addCount(pid, n) {
        this.props.onAddCount({ data: {pid, n} }); //调用父组件传递的onAddCount 回调函数
    }
    render() {
        const {cart} = this.props;
        const lis = cart.items.map((item) => {
            return (
                <li key={item.id}>
                    {item.name}, 价格: {item.price},
                    数量:
                    <button onClick={ () => { this.addCount(item.id, -1) } }>-</button>
                    {item.count}
                    <button onClick={ () => { this.addCount(item.id, 1) } }>+</button>
                </li>
            );
        });
        return (
            <div style={ {border: 'solid 5px blue', margin: '5px'} }>
                购物车:
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}

export { Cart };
