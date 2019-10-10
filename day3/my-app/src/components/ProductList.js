import React from 'react';

export class ProductList extends React.Component {

    addToCart(product) {
        this.props.onAddToCart({ // 调用父组件传递 的 onAddToCart 回调函数
            data: { product }
        })
    }

    render() {
        const {products} = this.props;
        const lis = products.map((product) => {
            return (
                <li key={product.id}>
                    {product.name}
                    <button onClick={ () => { this.addToCart(product) } }>
                        添加购物车
                    </button>
                </li>
            );
        });
        return (
            <div style={ {border: 'solid 5px green', margin: '5px'} }>
                产品列表:
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}
