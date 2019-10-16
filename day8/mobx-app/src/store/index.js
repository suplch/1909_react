import React from 'react';
import {observable} from "mobx";
import { observer } from 'mobx-react';
import Shop from './shop';
import Counter from './counter';
// 合并业务模块
let counterState = observable({
    Shop,
    Counter,
});

/**
 * connect 用来包装一个组件, 给组件提供一个默认参数 counterState  表示全局状态 对象
 * 同时保留 用户传递的参数
 * 用法:
 *
 *
 *  class Loign expends React.Component {
 *      // ...
 *      render() {
 *          const { counterState, name, age } = this.props;
 *
 *          return (...)
 *      }
 *  }
 *
 *  const WraperLogin = connect(Loign)
 *
 *  ReactDOM.render(<WraperLogin name={'username'} age={18}/>, document.getElementById('root'));
 *
 * @param WrapperComponent
 * @returns {function(*): *}
 * @author 张三大神
 *
 */
export function connect(WrapperComponent) {
    return function (props) {
        let ObserverWrapperComponent = observer(WrapperComponent);
        return <ObserverWrapperComponent {...props} counterState={counterState} />
    }
}
