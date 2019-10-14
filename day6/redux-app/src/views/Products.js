import React from 'react';
import {Link} from 'react-router-dom'

export class Products extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            products: [
                {id: '111', name: '电脑', price: 10000},
                {id: '222', name: '鼠标', price: 99},
                {id: '333', name: '键盘', price: 200},
            ]
        }
    }

    render() {
        return (
            <div>
                产品列表
                <ul>
                    {
                        this.state.products.map((product) => {
                            return (
                                <li key={product.id}>
                                    {product.name}, 价格: {product.price}
                                    {/* 携带 产品id 参数 */}
                                    <Link to={'/product_detail/' + product.id} >详情</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
