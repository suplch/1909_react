import React from 'react';
export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.dvRef = React.createRef();
        this.state = {
            count: 0,
            hobbies: ['玩游戏', '睡觉']
        };
        console.log('LifeCycle 组件构造被调用');
    }
    addHobby() {
        const hobbies = [...this.state.hobbies, window.prompt('你的爱好')]
        this.setState({
            hobbies:hobbies
        })
    }

    inc() {
        this.setState({
            count: this.state.count + 1
        })
    }

    // 当 props 和 state 发生变化的时候 调用, 返回值 作为最终的state合并到组件中.
    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('有最新的属性了');
    //
    //     return prevState;
    // }


    // 是否需要组件进行更新 如果返回 true 组件将 调用 render 方法镜像更新
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.time === nextProps.time) {
    //         return false
    //     }
    //     return true
    // }

    render() {
        console.log('LifeCycle 组件正在 render');
        return (
            <div ref={this.dvRef} style={{border: 'solid 5px red'}}>
                LifeCycle time: {this.props.time} ,
                <button onClick={ () => {this.inc()} }>{this.state.count}</button>
                <button onClick={ () => { this.addHobby() } }>添加</button>
                <ul>
                    {
                        this.state.hobbies.map((hobby) => {
                            return <li>{hobby}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
    // 更新组件前 给开发人员一个机会 去查看 当前组件 的 html
    getSnapshotBeforeUpdate(prevProps, prevState) {
        alert(this.dvRef.current.outerHTML);
        return this.dvRef.current.offsetHeight;
    }
    // 当组件被更新后调用
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycle 组件已经被更新 ' + snapshot);
    }
    // 当组件被挂载的时候调用
    componentDidMount() {
        console.log('LifeCycle 组件已经被挂载了')
    }
    // 当组件被销毁的时候调用
    componentWillUnmount() {
        console.log('LifeCycle 组件将要被销毁')
    }
}
