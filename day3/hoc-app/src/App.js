import React from 'react';
import { Welcome } from './components/Welcome';
import { GoodBye } from './components/GoodBye';

function create_welcome(name) {
  return function (props) {
    return (
        <div>
          <p>欢迎 {name} 来 {props.place} 视察工作</p>
        </div>
    );
  }
}

const Welcome_Telangpu = create_welcome('特朗普');
const Welcome_Pujing = create_welcome('普京');
const Welcome_Xizhuxi = create_welcome('习主席');

// 创建高阶组件, 将其他组件作为参数进行整合
function create(name, WelcomeComponent, GoodByeComponent) {
  return function (props) {
    return (
        <div style={ {border: 'solid 5px red'} }>
          <WelcomeComponent name={name} place={props.place}  />
          <hr/>
          <GoodByeComponent name={name}/>
        </div>
    );
  }
}
const Welcome_ZhanSan = create('张三', Welcome, GoodBye);
function App() {
  return (
    <div>
      高阶组件 练习
      <Welcome name={'特朗普'} place={'深圳'} />
      <hr/>
      <Welcome_Telangpu place={'深圳'}/>
      <Welcome_Pujing place={'千锋'}/>
      <Welcome_Xizhuxi place={'西部硅谷'}/>
      <hr/>
      <Welcome_ZhanSan place={'千锋'}/>
    </div>
  );
}

export default App;
