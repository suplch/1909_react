import React from 'react';
import {connect} from "../store";
class Counter extends React.Component {
    render() {
        const {Counter} = this.props.counterState;
        return (
            <div style={{border: 'solid 5px blue'}}>
                姓名: {this.props.name}, 年龄: {this.props.age}
                mobx
                计数器: {Counter.count}
                <button onClick={()=>{Counter.inc()}}>
                    增加
                </button>
                <button onClick={()=>{Counter.autoInc()}}>
                    自动增加
                </button>
                <button onClick={()=>{Counter.stop()}}>
                    停止
                </button>
            </div>
        );
    }
}
export default connect(Counter);
