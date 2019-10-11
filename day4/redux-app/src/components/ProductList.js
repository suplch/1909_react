import React from 'react';
import { connect } from 'react-redux';

class ProductList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={{border: 'solid 5px green'}}>
                <ul>
                    {
                        this.props.products.map((product) => {
                            return (
                                <li key={product.id}>
                                    {product.name}, 价格: {product.price},
                                    <button onClick={ () => { this.props.addProductToCart(product) } }>添加购物</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={ () => { this.props.addProduct() } }>添加</button>
            </div>
        )
    }
}

// 映射 state 到组件的props
function mapStateToProps (state) {
    return {
        products: state.products
    }
}

// 映射 dispatch 到 组件 props
function mapDispatchToProps (dispatch) {
    return {
        addProduct: () => {
            dispatch({type: 'ADD_PRODUCT', productName: prompt('请输入产品名称')});
        },
        addProductToCart: (product) => {
            dispatch({type: 'ADD_PRODUCT_CART', product: product})
        }
    }
}
//   高阶函数包装组件, 导出被包装的组件
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
