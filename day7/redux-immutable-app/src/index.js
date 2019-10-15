// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './store/';
// import App from './App';
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

import {Map, List} from 'immutable';

// 将 jsValue 普通对象 转换 为 完整的 immutable 对象
function from_js(jsValue) {
    if (jsValue instanceof Array) { // 如果 jsValue 是一个数组, 按照数组进行循环处理
        let list = []; // 创建一个空数组
        // 遍历数组
        for (let item of jsValue) {
            // 将 jsValue数组元素 进行 递归处理
            list.push(from_js(item))
        }
        return List(list); // 包装list
    } else if (jsValue instanceof Object) {// 如果 jsValue 是一个对象, 按照对象进行遍历访问
        let map = {};
        for (let p in jsValue) {
            if (jsValue.hasOwnProperty(p)) {
                // 将 jsValue对象属性值 进行 递归处理
                map[p] = from_js(jsValue[p])
            }
        }
        return Map(map); // 包装 map
    } else {
        return jsValue;  // 如果 jsValue 是普通值就直接返回
    }
}


// let oldObj = Map({
//     name: 'zhang',
//     age: 18,
//     address: Map({
//         city: '深圳',
//         region: '西部硅谷'
//     }),
//     hobbies: List(['java', 'node', 'css'])
// });
//
// console.log(oldObj);
//
// let address = oldObj.get('address');
//
// address = address.set('city', '北京');
//
// console.log(address);
//
// oldObj = oldObj.set('address', address)
//
// console.log(oldObj.toJS());
//
// oldObj.update('hobbies', function (hobbies) {
//     return hobbies.push('html')
// });
// console.log(oldObj.toJS());

const oldObj = from_js({
    name: 'zhang',
    age: 18,
    address: {
        city: '深圳',
        region: '西部硅谷'
    },
    hobbies: ['java', 'js', 'css']
});



console.log(oldObj);

console.log(oldObj.get('name'));
// immutable 对象修改方法调用后返回 变化后的新对象, 原来的对象数据保持不变
let newObj = oldObj.set('name', '李');

// 老数据 oldObj 为发生变化 name 仍然为 zhang
console.log(oldObj.get('name'));
// 新数据 newObj 包含的最新的变化 name 为 李
console.log(newObj.get('name'));
// 通过 getIn 方法 访问 深层次的数据
console.log(oldObj.getIn(['address', 'city']));
// 通过 setIn 方法修改 深层次的 数据, 然后 返回最新的对象
newObj = newObj.setIn(['address', 'city'], '北京');

console.log(oldObj.getIn(['address', 'city']));
console.log(newObj.getIn(['address', 'city']));

console.log(newObj.get('name'));

console.log(newObj.get('hobbies').toJS());
// 数组 用 数字索引访问
console.log(newObj.getIn(['hobbies', 0]));
newObj = newObj.setIn(['hobbies', 0], 'JAVA')
console.log(newObj.getIn(['hobbies', 0]));

// 修改 hobbies 属性, 增加 一个 NodeJs
newObj = newObj.update('hobbies', (hobbies) => hobbies.push('NodeJs'));

// 此时 newObj 包含的最新 的 hobbies 数组
console.log(newObj.get('hobbies').toJS())
