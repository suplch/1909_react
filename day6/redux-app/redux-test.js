// 引入 redux 库
const redux = require('redux');
const { createStore } = redux;
// 定义一个 reducer 函数,
function counter(state = 0, action) {
    // 通过 不同的action 进行 业务处理, 返回 新的state
    switch( action.type ) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
// 创建 store 对象 用来存储 state 对象
const store = createStore(counter);
// 监听 store , 当 store 内部的 state 发生变化会调用 订阅函数
store.subscribe(() => {
    // 打印 最新的 store state 对象
    console.log(store.getState())
});

// 分发一个 dispatch 通知 store 进行 reucer 函数调用
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
