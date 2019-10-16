import React from 'react';
import {connect} from "../store";
class Counter extends React.Component {
    render() {
        const {counterState} = this.props;
        return (
            <div style={{border: 'solid 5px blue'}}>
                姓名: {this.props.name}, 年龄: {this.props.age}
                mobx
                计数器: {counterState.Counter.count}
                <button onClick={() => {counterState.Counter.inc()}}>增加</button>
                <button onClick={() => {counterState.Counter.autoInc()}}>自动增加</button>
                <button onClick={() => {counterState.Counter.stop()}}>停止</button>
            </div>
        );
    }
}

export default connect(Counter);
