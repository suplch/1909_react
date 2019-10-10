import React from 'react';

import LifeCycle from './components/LifeCycle'


class LifeApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,

            time: new Date().toLocaleString()
        }
    }

    toggle() {

        this.setState({
            show: !this.state.show
        })
    }
    changeTime() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }
    render() {
        let cycle;
        if (this.state.show) { // 当 show 为 true的时候 显示 LifeCycle 组件
            cycle = <LifeCycle time={this.state.time} />
        }
        return (
            <div style={{border: 'solid green 5px', padding: '10px'}}>
                生命周期 <button onClick={ () => {this.changeTime() }}> 改变时间 </button>
                <button onClick={ () => { this.toggle() } }>切换</button>
                {cycle}
            </div>
        );
    }
}

export default LifeApp;
