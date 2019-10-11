import React from 'react';
import { connect } from 'react-redux';
class Counter extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div style={{border:'solid 5px blue'}}>
                计数器
                <button onClick={() => {this.props.dec()}}>-</button>
                { this.props.count }
                <button onClick={() => {this.props.inc()}}>+</button>
            </div>
        )
    }
}
// 映射 state 到组件的props
function mapStateToProps (state) {
    return {
        count: state.count
    }
}

// 映射 dispatch 到 组件 props
function mapDispatchToProps (dispatch) {
    return {
        inc: () => {
            dispatch({type: 'INCREMENT', payLoad: 10});
        },
        dec: () => {
            dispatch({type: 'DECREMENT', payLoad: 10});
        }
    }
}
//   高阶函数包装组件, 导出被包装的组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
