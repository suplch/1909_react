import { createStore, combineReducers, applyMiddleware  } from 'redux'
// 导入 thunk 模块进行异步处理
import thunk from 'redux-thunk';
import {fromJS, Map} from 'immutable';

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

// 将不同业务模块的 reducer 组合为一个完整的 reducer
const appReducer = function (state = initState, action) {

    switch (action.type) {
        case 'ADD_PRODUCT_CART':
            return state.updateIn(['cart', 'items'], function (items) {
                const position = items.findIndex(function (item) {
                    return item.get('id')  === action.payload.product.get('id');
                });
                if (position === -1) {
                    return items.push(Map({...action.payload.product.toJS(), count: 1}))
                } else {
                    return items.updateIn([position, 'count'], function (count) {
                        return count + 1;
                    })
                    // return items.update(position, function (item) {
                    //     //return item.set('count', item.get('count') + 1);
                    //     return item.update('count', function (count) {
                    //         return count + 1
                    //     });
                    // })
                }
            });
        case 'CHANGE_CART_COUNT':
            const {pid, n} = action.payload;

            // 方法三
            return state.updateIn(['cart', 'items'], function (items) {
                const position = items.findIndex(function (item) {
                    return item.get('id') === pid
                });
                return items.updateIn([position, 'count'], function (count) {
                    return count + n
                })
            });


            // 方法二
            // const position = state.getIn(['cart', 'items']).findIndex(function (item) {
            //     return item.get('id') === pid
            // });
            //
            // return state.updateIn(['cart', 'items', position, 'count'], function (count) {
            //     return count + n
            // });

            // 方法 一
            // const items = state.getIn(['cart', 'items']);
            // const itemIndex = items.findIndex(function (item) {
            //     return item.get('id') === pid
            // });
            // let item = items.get(itemIndex);
            // let newItem = item.set('count', item.get('count') + n);
            // let newItems = items.set(itemIndex, newItem);
            // return state.setIn(['cart', 'items'], newItems);


        default:
            return state;
    }


};
// 创建 store 对象 用来存储 state 对象
// applyMiddleware(thunk) 应用 thunk异步处理 中间件
const store = createStore(appReducer, applyMiddleware(thunk));
export { store }
