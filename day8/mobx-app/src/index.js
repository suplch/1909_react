// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// 导入 mobx 库
/* 例1 对类进行监听
import { decorate, observable, computed, autorun } from 'mobx';

class Shop {
    constructor(productName, price, count) {
        this.productName = productName;
        this.price = price;
        this.count = count;

        // 注册一个 回调函数, 第一次会自定执行回调用来收集依赖的属性, 以后 当依赖的 数据发送变化后 会再次执行
        autorun(() => {

            console.log(`商品名称 ${this.productName}, 价格:${this.price}  数量: ${this.count}  合计: ${this.total}`)
        });
    }

    get total() {
        return this.price * this.count;
    }
}
// decorate 函数修饰 Shop 类
decorate(Shop, {
    productName: observable, // 声明 productName 是一个可观察属性
    price: observable, // 声明 price 是一个可观察属性
    count: observable, // 声明 count 是一个可观察属性
    total: computed  // 声明 total 是一个计算属性
});


let shop = new Shop('电脑', 10000, 10);

shop.price = 5000;   // 触发 autorun 的回调函数
shop.count = 5;       // 触发 autorun 的回调函数
shop.productName = '🚗';   // 触发 autorun 的回调函数
*/


// 例二
/*
import { observable, autorun } from 'mobx';
const state = observable.object({
    price: 5,
    amount: 10,

    get total() {
        return this.price * this.amount;
    },

    set total(total) {
        this.price = total / this.amount;
        //this.amount = total / this.price;

    }
});


autorun(() => {
    console.log(`价格: ${state.price}, 数量: ${state.amount}, 合计: ${state.total}`)
});


state.price = 20;
state.price = 30;

state.amount = 15;

state.total = 10000;
*/
// 例三
/*
import { observable, autorun } from 'mobx';

let numbers = observable([5, 7, 9]);

autorun(() => {
    let sum = 0
    for (let n of numbers) {
        sum += n;
    }

    console.log('hello 合计', sum)
});

numbers[1] = 6
numbers.push(50)
*/
// 例 四
/*
import { decorate, when, observable } from 'mobx';

class Cup {
    constructor() {
        this.temp = 90;
        when(
            () => {
                console.log('---温度 ' + this.temp);
                return this.temp === 100

            },
            () => { console.log(`水开了`) }
        );

        when(
            () => {
                console.log('---温度 ' + this.temp);
                return this.temp < 0;
            },
            () => {
                console.log('冻住了')
            }
        )
    }
}

decorate(Cup, {
    temp: observable
});

let cup = new Cup();


cup.temp = 99;
cup.temp = 100;

cup.temp = 1;
cup.temp = 0;
cup.temp = -1;
*/


import { decorate, when, observable, reaction } from 'mobx';

const todos = observable([
    {
        title: "Make coffee",
        done: true,
    },
    {
        title: "Find biscuit",
        done: false
    }
]);


reaction(
    () => {
        return todos.length;
    },
    (result, reaction) => {
        console.log(result);
        console.log(todos.map((todo) => {
            return todo.title
        }))

        if (result > 4) {
            reaction.dispose();
        }
    }
);

todos.push({
    title: "学习 JS",
    done: false,
});

todos.push({
    title: "学习 html",
    done: false,
});

todos.push({
    title: "学习 css",
    done: false,
});


todos.push({
    title: "找工作",
    done: false,
});
