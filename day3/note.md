
### 安装React 脚手架工具
- npm install create-react-app -g
- npx create-react-app my-app
- cd my-app
- npm run start

### 高阶组件(HOC)构建应用
- 高阶组件, 利用js高阶函数对现有组件进行增强扩展

### 生命周期
- 生命周期各个阶段
    + 初始化阶段
        - constructor
        - getDerivedStateFromProps(nextProps, prevState): nextState
        - render
        - componentDidMount
    + 运行中阶段
        - static getDerivedStateFromProps(nextProps, prevState): nextState
        - shouldComponentUpdate(nextProps, nextState): boolean
        - render
        - getSnapshotBeforeUpdate(prevProps, prevState): snapValue
        - componentDidUpdate(prevProps, prevState, snapshot)
    + 销毁阶段
        - componentWillUnmount


### Redux 状态管理
- https://www.redux.org.cn

- 实现全局状态管理
- 方便大型项目组件共享数据
- Action, Reducer, Store
```ecmascript 6
(state, action) => { return newState }
```

```ecmascript 6
const { createStore } = require('redux');

function counter(state = 0, action) {
    switch( action.type ) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({ type: 'INCREMENT'});

```
