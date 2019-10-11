import { createStore, combineReducers } from 'redux'

import { counterReducer } from './counter/index';
import { productReducer } from './products/index';
import { cartReducer } from './cart/index';


const appReducer = combineReducers({
    count: counterReducer,
    products: productReducer,
    cart: cartReducer
});

// 创建 store 对象 用来存储 state 对象
const store = createStore(appReducer);

export { store }
