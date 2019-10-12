import { createStore, combineReducers, applyMiddleware  } from 'redux'
// 导入 thunk 模块进行异步处理
import thunk from 'redux-thunk';
import { counterReducer } from './counter/index';
import { productReducer } from './products/index';
import { cartReducer } from './cart/index';
// 将不同业务模块的 reducer 组合为一个完整的 reducer
const appReducer = combineReducers({
    count: counterReducer,
    products: productReducer,
    cart: cartReducer
});
// 创建 store 对象 用来存储 state 对象
// applyMiddleware(thunk) 应用 thunk异步处理 中间件
const store = createStore(appReducer, applyMiddleware(thunk));
export { store }
