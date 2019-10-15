import { createStore, applyMiddleware  } from 'redux'
// 导入 thunk 模块进行异步处理
import thunk from 'redux-thunk';
import {fromJS, Map} from 'immutable';
import {
    combineReducers
} from 'redux-immutable';

import {productReducer} from './product/index';
import {cartReducer} from './cart/index'

// const appReducer = combineReducers({
//     products: productReducer,
//     cart: cartReducer
// });

const initState = fromJS({
    products: [
        {id: '111', name: '电脑', price: 10000},
        {id: '222', name: '鼠标', price: 99},
    ],

    cart: {
        items: [
            {id: '111', name: '电脑', price: 10000, count: 2},
        ]
    }
});


// function appReducer(state = initState, action) {
//     return Map({
//         products: productReducer(state.get('products'), action),
//         cart: cartReducer(state.get('cart'), action)
//     })
// }

const appReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});

const store = createStore(appReducer, applyMiddleware(thunk));
export { store }
